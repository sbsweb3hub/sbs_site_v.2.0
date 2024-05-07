/** @format */

import { z } from 'zod';

/** Projects types */

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const ProjectSchema = z.object({
  id: z.string(),
  founder: z.string(),
  title: z.string().min(1, 'Project name is required'),
  imageUrl: z.string().optional(),
  // fileSize: z.enum(['jpeg', 'png']).optional(),
  // contactName: z.string().min(1, 'Contact name is required'),
  // telegram: z.string().min(1, 'Telegram handle is required'),
  // email: z.string().email().min(1, 'Email is required'),
  // web: z.string().optional(),
  // twitter: z.string().optional(),
  // pitchdeck: z.string().optional(),
  // tokenomik: z.string().optional(),
  // links: z.string().optional(),
  startDate: z.string().min(1, 'Start date is required'),
  // description: z.string().min(1, 'Description is required'),
  // ecosystem: z.string().min(1, 'Ecosystem is required'),
  // team: z.string().min(1, 'Team information is required'),
  // members: z.string().min(1, 'Member details are required'),
  // community: z.string().min(1, 'Community details are required'),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});
export type ProjectType = z.infer<typeof ProjectSchema>;

export const CreateProjectSchema = ProjectSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  founder: true,
}).extend({
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
    .optional(),
});

export type CreateProjectType = z.infer<typeof CreateProjectSchema>;

/** Auth types */

export const AuthCredentialsSchema = z.object({
  address: z.string(),
  signature: z.string(),
});

export type AuthCredentialsType = z.infer<typeof AuthCredentialsSchema>;

export enum AuthRolesEnum {
  VISITOR = 'VISITOR',
  FOUNDER = 'FOUNDER',
  MULTI = 'MULTI',
  ADMIN = 'ADMIN',
}

export const AuthSessionSchema = z.object({
  address: z.string(),
  sub: z.string(),
  role: z.string(),
});

export type AuthSessionType = z.infer<typeof AuthSessionSchema>;

export enum AuthRoutes {
  Founder = '/app/founder',
  FounderCreate = '/app/founder/create',
  FounderPatch = '/app/founder/patch',
}
