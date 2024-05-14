/** @format */

'use server';

import dbConnect from '@/db/dbConnect';
import { IProjectModel, Project } from '@/db/models';
import {
  AuthRolesEnum,
  CreateProjectSchema,
  ProjectStatusEnum,
  ProjectType,
} from '@/types';
import { revalidatePath, revalidateTag, unstable_cache } from 'next/cache';

import { redirect } from 'next/navigation';
import { changeRole, getSession } from './auth-service';
import { fromMongoModelToSchema } from '@/utils/fromMongoModelToSchema';
import { uploadImage } from './cloudinary-service';
import { extractDataForValidation } from '@/utils/validationUtils';
import { cache } from 'react';
import { sendTgNotification } from './tg-service';

//@todo - make query builder & offset

// export const fetchAllProjects = cache(async (): Promise<Array<ProjectType>> => {
//   'use server';

//   try {
//     await dbConnect();

//     return (await Project.find().lean<Array<IProjectModel>>()).map((item) =>
//       fromMongoModelToSchema(item)
//     );
//   } catch (err) {
//     console.log(err);
//     throw new Error('Failed to fetch projects!');
//   }
// });
export const fetchAllProjects = async (
  pageNumber = 1,
  pageSize = 12
): Promise<Array<ProjectType>> => {
  'use server';
  try {
    await dbConnect();

    return (
      await Project.find()
        .lean<Array<IProjectModel>>()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
    ).map((item) => fromMongoModelToSchema(item));
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

export const patchProject = async (_prevState: unknown, formData: FormData) => {
  'use server';
  const { address: founder } = await getSession();
  if (!founder) throw new Error('You don`t have permission for patch Project');
  const dataForValidation = extractDataForValidation(
    CreateProjectSchema,
    formData
  );
  const validation = CreateProjectSchema.safeParse(dataForValidation);
  if (validation.success) {
    const input = Object.fromEntries(formData);
    try {
      await dbConnect();
      await Project.findOneAndUpdate({ founder }, { ...input });
    } catch (err) {
      console.log(err);
      throw new Error('Failed to update project!');
    }
  } else {
    return {
      errors: validation.error.issues,
    };
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

export const deleteImageFromProject = async (
  id: string,
  imageUrl: string
): Promise<any> => {
  try {
    await dbConnect();
    const res = await Project.findByIdAndUpdate(id, { imageUrl });
    // return res;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete image!');
  }
  redirect('/app/founder');
};

export const changeProjectStatus = async (
  id: string,
  status: ProjectStatusEnum
) => {
  try {
    await dbConnect();
    const projectWithChangedStatus = await Project.findByIdAndUpdate(id, {
      status,
    });
    if (!projectWithChangedStatus) {
      throw new Error('Changing project status failed');
    }
  } catch (err) {
    console.log(err);
    throw new Error('Failed to change project status!');
  }
};

export const sendProjectToReview = async (id: string) => {
  const session = await getSession();
  if (!session)
    throw new Error('You don`t have permission for sending for review Project');

  try {
    await changeProjectStatus(id, ProjectStatusEnum.REVIEWING);
    await sendTgNotification(id);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to send project to review!');
  }
  //@todo  - try smth else
  revalidatePath('/app/founder');
};
