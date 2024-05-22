/** @format */

import { z } from 'zod';

/** Projects types */
//@todo - movew to env
const MAX_FILE_SIZE = 2000000;

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export enum ProjectStatusEnum {
  EDITING = 'EDITING',
  REVIEWING = 'REVIEWING',
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
  DEPLOYED = 'DEPLOYED',
}

export const StepSchema = z.object({
  duration: z.number(),
  desc: z.string(),
});
export type StepType = z.infer<typeof StepSchema>;

export const ProjectSchema = z.object({
  id: z.string(),
  founder: z.string(),
  projectName: z.string().min(1, 'Project name is required'),
  imageUrl: z.string().optional(),
  backgroundImageUrl: z.string().optional(),
  contactName: z.string().optional(),
  contactTelegram: z.string().optional(),
  contactEmail: z.string(),
  web: z.string().optional(),
  twitter: z.string().optional(),
  pitchdeck: z.string().optional(),
  tokenomik: z.string().optional(),
  discord: z.string().optional(),
  projectTg: z.string().optional(),
  startDate: z.string().min(1, 'Start date is required'),
  description: z.string().optional(),
  shortDescription: z.string().optional(),
  ecosystem: z.string().optional(),
  team: z.string().optional(),
  teamDescription: z.string().optional(),
  tokenName: z
    .string()
    .min(1, 'Token name is required')
    .max(10, 'Token name is too long, it should be less than 10 digits'),
  tokenSymbol: z
    .string()
    .min(1, 'Token symbol is required')
    .max(4, 'Token name is too long, it should be less than 4 digits'),
  tokenSupply: z.coerce
    .number()
    .min(1, 'Token supply is required')
    .max(100000000, 'Token supply is too big, it should be less than 100b'),
  tokenPrice: z.coerce
    .number()
    .min(0.00001, 'Token price is required')
    .max(1000, 'Token price is too big, it should be less than 1000 eth?'),
  maxTokenForSeed: z.coerce.number(),
  minTokenForSeed: z.coerce.number(),
  seedDuration: z.coerce.number(),
  status: z.nativeEnum(ProjectStatusEnum),
  // members: z.string().min(1, 'Member details are required'),
  // community: z.string().min(1, 'Community details are required'),
  steps: z.array(StepSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type ProjectType = z.infer<typeof ProjectSchema>;

export const CreateProjectSchema = ProjectSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  founder: true,
  status: true,
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
  FOUNDER = '/app/founder',
  FOUNDER_CREATE = '/app/founder/create',
  FOUNDER_PATCH = '/app/founder/patch',
  ADMIN = '/app/admin',
}
