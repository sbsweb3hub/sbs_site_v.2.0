/** @format */

import { z } from 'zod';

/** Projects types */

export const ProjectSchema = z.object({
  id: z.string(),
  founder: z.string(),
  title: z.string().min(1, 'Project name is required'),
  // contactName: z.string().min(1, 'Contact name is required'),
  // telegram: z.string().min(1, 'Telegram handle is required'),
  // email: z.string().email().min(1, 'Email is required'),
  // web: z.string().optional(),
  // twitter: z.string().optional(),
  // pitchdeck: z.string().optional(),
  // tokenomik: z.string().optional(),
  // links: z.string().optional(),
  startDate: z.string(),
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
});

export type CreateProjectType = z.infer<typeof CreateProjectSchema>;

/** Auth types */

export const AuthCredentialsSchema = z.object({
  address: z.string(),
  signature: z.string(),
  isFounder: z.boolean(),
});

export type AuthCredentialsType = z.infer<typeof AuthCredentialsSchema>;
