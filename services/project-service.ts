/** @format */

'use server';

import dbConnect from '@/db/dbConnect';
import { Project } from '@/db/models';
import { CreateProjectType, ProjectType } from '@/types';
import { revalidatePath } from 'next/cache';

import { redirect } from 'next/navigation';

export const fetchAllProjects = async (): Promise<Array<ProjectType>> => {
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
    const projects = await Project.find();
    return projects;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch projects!');
  }
};

export const fetchProjectById = async (id: string): Promise<ProjectType> => {
  try {
    await dbConnect();
    const project = await Project.findById(id);
    return project;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch project!');
  }
};

//@todo - check if exist before create
export const addProject = async (formData: FormData): Promise<void> => {
  const { title, startDate } = Object.fromEntries(formData);
  try {
    await dbConnect();
    await Project.create({ title, startDate });
    // JSON.parse(JSON.stringify(await Book.create({ name, price })));
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create project!');
  }

  revalidatePath('/private');
  //   redirect('/private');
};
