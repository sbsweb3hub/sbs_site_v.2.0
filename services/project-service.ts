/** @format */

'use server';

import dbConnect from '@/db/dbConnect';
import { IProjectModel, Project } from '@/db/models';
import { AuthRolesEnum, CreateProjectSchema, ProjectType } from '@/types';
import { revalidatePath, revalidateTag, unstable_cache } from 'next/cache';

import { redirect } from 'next/navigation';
import { changeRole, getSession } from './auth-service';
import { fromMongoModelToSchema } from '@/utils/fromMongoModelToSchema';
import { uploadImage } from './cloudinary-service';
import { extractDataForValidation } from '@/utils/validationUtils';

//@todo - make query builder & offset
export const fetchAllProjects = async (): Promise<Array<ProjectType>> => {
  'use server';

  try {
    await dbConnect();

    return (await Project.find().lean<Array<IProjectModel>>()).map((item) =>
      fromMongoModelToSchema(item)
    );
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch projects!');
  }
};

export const findProjectById = async (id: string): Promise<ProjectType> => {
  'use server';
  try {
    await dbConnect();
    const project = await Project.findById(id).lean<IProjectModel>();
    if (!project) throw new Error('Project doesn`t exist');
    return fromMongoModelToSchema(project);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch project!');
  }
};

export const addProject = async (_prevState: unknown, formData: FormData) => {
  'use server';
  const session = await getSession();
  if (!session)
    throw new Error('You don`t have permission for add new Project');

  const dataForValidation = extractDataForValidation(
    CreateProjectSchema,
    formData
  );
  const file = formData.get('image') as File;
  if (file.size > 0) {
    dataForValidation.image = file;
  } else {
    delete dataForValidation.image;
  }

  const validation = CreateProjectSchema.safeParse(dataForValidation);

  if (validation.success) {
    const input = Object.fromEntries(formData);
    let imageUrl = '';
    try {
      await dbConnect();
      if (file.size > 0) {
        imageUrl = await uploadImage(file);
      }
      const project = await Project.create({
        ...input,
        founder: session.address,
        imageUrl,
      });
      if (project) await changeRole(session, AuthRolesEnum.FOUNDER);
    } catch (err) {
      console.log(err);
      throw new Error('Failed to create project!');
    }
  } else {
    return {
      errors: validation.error.issues,
    };
  }

  //@todo research about cache
  // revalidateTag('projects');
  revalidatePath('/app/founder');
  redirect('/app/founder');
};

export const patchProject = async (formData: FormData): Promise<void> => {
  'use server';
  const { address: founder } = await getSession();
  if (!founder) throw new Error('You don`t have permission for patch Project');
  const { title, startDate } = Object.fromEntries(formData);
  try {
    await dbConnect();
    await Project.findOneAndUpdate({ founder }, { title, startDate });
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create project!');
  }
  redirect('/app/founder');
};

export const findProjectByFounder = async (
  founder: string
): Promise<ProjectType> => {
  'use server';
  try {
    await dbConnect();
    const project = await Project.findOne({ founder });
    return fromMongoModelToSchema(project);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to find project by founder!');
  }
};
