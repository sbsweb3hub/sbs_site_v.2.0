/** @format */

'use server';
import mongoose from 'mongoose';
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
import { deleteImage, uploadImage } from './cloudinary-service';
import { extractDataForValidation } from '@/utils/validationUtils';
import { sendTgNotification } from './tg-service';
import { FilterQuery } from 'mongoose';

interface FetchProjectsOptions {
  pageNumber?: number;
  pageSize?: number;
  filter?: FilterQuery<IProjectModel>;
}

export const fetchAllProjects = async (
  options: FetchProjectsOptions = {}
): Promise<Array<ProjectType>> => {
  'use server';
  try {
    const {
      pageNumber = 1,
      pageSize = 12,
      filter = {} as FilterQuery<IProjectModel>,
    } = options;

    await dbConnect();

    const projects = await Project.find(filter)
      .lean<Array<IProjectModel>>()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

    const res = projects.map((item) => fromMongoModelToSchema(item));
    return res;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch projects!');
  }
};

export const findProjectById = async (
  id: string,
  virtual = false
): Promise<ProjectType> => {
  'use server';
  try {
    await dbConnect();

    let project;
    if (virtual) {
      project = await Project.findById(id).exec();
      if (!project) throw new Error('Project doesn`t exist');
      project = project.toObject({ virtuals: true });
    } else {
      project = await Project.findById(id).lean<IProjectModel>();
      if (!project) throw new Error('Project doesn`t exist');
    }

    return fromMongoModelToSchema(project);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch project!');
  }
};

// export const findProjectById = async (id: string): Promise<ProjectType> => {
//   'use server';
//   try {
//     await dbConnect();

//     const project = await Project.findById(id).lean<IProjectModel>();
//     if (!project) throw new Error('Project doesn`t exist');
//     return fromMongoModelToSchema(project);
//   } catch (err) {
//     console.log(err);
//     throw new Error('Failed to fetch project!');
//   }
// };

// export const findProjectByIdWithDates = async (id: string) => {
//   'use server';
//   try {
//     await dbConnect();
//     const project = await Project.findById(id).exec();
//     if (!project) throw new Error('Project doesn`t exist');

//     // Преобразование документа Mongoose в объект с включением виртуальных свойств
//     const projectWithVirtuals = project.toObject({ virtuals: true });

//     return fromMongoModelToSchema(projectWithVirtuals);
//   } catch (err) {
//     console.log(err);
//     throw new Error('Failed to fetch project!');
//   }
// };

// export const addProject = async (_prevState: unknown, formData: FormData) => {
//   'use server';
//   const session = await getSession();
//   if (!session)
//     throw new Error('You don`t have permission for add new Project');
//   const dataForValidation = extractDataForValidation(
//     CreateProjectSchema,
//     formData
//   );
//   const file = formData.get('image') as File;
//   if (file.size > 0) {
//     dataForValidation.image = file;
//   } else {
//     delete dataForValidation.image;
//   }

//   const validation = CreateProjectSchema.safeParse(dataForValidation);

//   if (validation.success) {
//     const input = Object.fromEntries(formData);
//     let imageUrl = '';
//     try {
//       await dbConnect();
//       if (file.size > 0) {
//         imageUrl = await uploadImage(file);
//       }
//       const project = await Project.create({
//         ...input,
//         founder: session.address,
//         imageUrl,
//       });
//       if (project) await changeRole(session, AuthRolesEnum.FOUNDER);
//     } catch (err) {
//       console.log(err);
//       throw new Error('Failed to create project!');
//     }
//   } else {
//     return {
//       errors: validation.error.issues,
//     };
//   }

//   //@todo research about cache
//   // revalidateTag('projects');
//   revalidatePath('/app/founder');
//   redirect('/app/founder');
// };

//@todo - refactor add and patch into one

export const addProject = async (_prevState: unknown, formData: FormData) => {
  'use server';
  const session = await getSession();
  if (!session)
    throw new Error('You don`t have permission for add new Project');

  const file = formData.get('image') as File;
  const backgroundFile = formData.get('backgroundImage') as File;
  const input = Object.fromEntries(formData);
  const steps: Array<Record<string, unknown>> = [];
  Object.keys(input).forEach((key) => {
    const match = key.match(/steps\[(\d+)\]\.(.+)/);
    if (match) {
      const index = parseInt(match[1], 10);
      const field = match[2];
      steps[index] = steps[index] || {};
      steps[index][field] = input[key];
    }
  });

  const formattedSteps = steps.map((step) => ({
    duration: Number(step.duration),
    desc: step.desc,
  }));

  const { startDate } = input;

  try {
    await dbConnect();

    const uploadFiles = [
      file && file.size > 0 ? uploadImage(file) : Promise.resolve(null),
      backgroundFile && backgroundFile.size > 0
        ? uploadImage(backgroundFile)
        : Promise.resolve(null),
    ];
    const [imageUrl, backgroundImageUrl] = await Promise.all(uploadFiles);

    const project = await Project.create({
      ...input,
      startDate: new Date((startDate as string).replace('[UTC]', '')),
      founder: session.address,
      imageUrl,
      backgroundImageUrl,
      steps: formattedSteps,
    });
    if (project) changeRole(session, AuthRolesEnum.FOUNDER);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create project!');
  }

  //@todo research about cache
  // revalidateTag('projects');
  revalidatePath('/app/founder');
  redirect('/app/founder');
};

export const patchProject = async (_prevState: unknown, formData: FormData) => {
  'use server';
  const session = await getSession();
  if (!session) throw new Error('You don`t have permission for patch Project');
  const currentProject = await findProjectByFounder(session.address);
  const input = Object.fromEntries(formData);
  const file = formData.get('image') as File;
  const backgroundFile = formData.get('backgroundImage') as File;
  const steps: Array<Record<string, unknown>> = [];
  Object.keys(input).forEach((key) => {
    const match = key.match(/steps\[(\d+)\]\.(.+)/);
    if (match) {
      const index = parseInt(match[1], 10);
      const field = match[2];
      steps[index] = steps[index] || {};
      steps[index][field] = input[key];
    }
  });

  const formattedSteps = steps.map((step) => ({
    duration: Number(step.duration),
    desc: step.desc,
  }));

  const { startDate } = input;

  try {
    await dbConnect();
    const uploadFiles = [
      file && file.size > 0 ? uploadImage(file) : Promise.resolve(null),
      backgroundFile && backgroundFile.size > 0
        ? uploadImage(backgroundFile)
        : Promise.resolve(null),
    ];

    const [imageUrl, backgroundImageUrl] = await Promise.all(uploadFiles);

    await Project.findOneAndUpdate(
      { founder: session.address },
      {
        ...input,
        startDate: new Date((startDate as string).replace('[UTC]', '')),
        imageUrl: imageUrl ?? currentProject.imageUrl,
        backgroundImageUrl:
          backgroundImageUrl ?? currentProject.backgroundImageUrl,
        steps: formattedSteps,
      }
    );
  } catch (err) {
    console.log(err);
    throw new Error('Failed to update project!');
  }

  redirect('/app/founder');
};

export const deleteProject = async (id: string) => {
  'use server';
  const session = await getSession();
  if (!session) throw new Error('You don`t have permission for delete Project');
  const sessionDb = await mongoose.startSession();
  sessionDb.startTransaction();
  try {
    const project = await findProjectById(id);
    const deleteOperations = [
      project.imageUrl ? deleteImage(project.imageUrl) : Promise.resolve(null),
      project.backgroundImageUrl
        ? deleteImage(project.backgroundImageUrl)
        : Promise.resolve(null),
      Project.findByIdAndDelete(id).session(sessionDb),
      changeRole(session, AuthRolesEnum.VISITOR, sessionDb),
    ];
    await Promise.all(deleteOperations);

    await sessionDb.commitTransaction();
  } catch (err) {
    await sessionDb.abortTransaction();
    console.log(err);
    throw new Error('Failed to delete project!');
  } finally {
    sessionDb.endSession();
  }
  redirect('/app');
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
    sendTgNotification(id, ProjectStatusEnum.REVIEWING);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to send project to review!');
  }
  //@todo  - try smth else
  revalidatePath('/app/founder');
};

export const reviewProject = async (id: string, status: ProjectStatusEnum) => {
  const session = await getSession();
  if (!session || session.role == !AuthRolesEnum.ADMIN)
    throw new Error('You arent Admin');

  try {
    await changeProjectStatus(id, status);
    await sendTgNotification(id, status);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to review project!');
  }
  //@todo  - try smth else
  revalidatePath('/app/admin');
};
