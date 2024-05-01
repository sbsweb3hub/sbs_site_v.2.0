/** @format */

'use server';

import dbConnect from '@/db/dbConnect';
import { IProjectModel, Project } from '@/db/models';
import { AuthRolesEnum, ProjectType } from '@/types';
import { revalidatePath, revalidateTag, unstable_cache } from 'next/cache';

import { redirect } from 'next/navigation';
import { changeRole, getSession } from './auth-service';
import { fromMongoModelToSchema } from '@/utils/fromMongoModelToSchema';
import { fromMongoToPlainObject } from '@/utils/fromMongoToPlainObject';

export const fetchAllProjects = async (): Promise<Array<ProjectType>> => {
  'use server';
  // q: string, page: number
  // const regex = new RegExp(q, 'i');

  // const ITEM_PER_PAGE = 2;

  try {
    await dbConnect();
    // const count = await Project.find({
    //   title: { $regex: regex },
    // }).count();
    // const projects = await Project.find({ title: { $regex: regex } })
    //   .limit(ITEM_PER_PAGE)
    //   .skip(ITEM_PER_PAGE * (page - 1));
    // return { count, projects };

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

//@todo - check if exist before create
export const addProject = async (formData: FormData): Promise<void> => {
  'use server';
  const session = await getSession();
  if (!session)
    throw new Error('You don`t have permission for add new Project');
  const { title, startDate } = Object.fromEntries(formData);
  try {
    await dbConnect();
    const project = await Project.create({
      title,
      startDate,
      founder: session.address,
    });
    if (project) await changeRole(session, AuthRolesEnum.FOUNDER);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create project!');
  }
  //@todo research about cache
  // revalidateTag('projects');
  //  revalidatePath('/app/private');
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
    // JSON.parse(JSON.stringify(await Book.create({ name, price })));
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create project!');
  }
  //@todo research about cache
  // revalidateTag('projects');
  //  revalidatePath('/app/private');
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
