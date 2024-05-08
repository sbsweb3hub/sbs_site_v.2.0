/** @format */

import { AuthRolesEnum } from '@/types';
import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

interface IUserModel extends Document {
  address: string;
  nonce: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema(
  {
    address: {
      type: String,
      unique: true,
      required: true,
    },
    nonce: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: AuthRolesEnum.VISITOR,
    },
  },
  { timestamps: true }
);

const models = mongoose.models || {};

export const User =
  models.User || mongoose.model<IUserModel>('User', userSchema);
// export const User =
//   mongoose.models.User || mongoose.model<IUserModel>('User', userSchema);

export interface IProjectModel extends Document {
  projectName: string;
  founder: string;
  startDate: Date;
  imageUrl?: string;
  contactName?: string;
  contactTelegram?: string;
  contactEmail?: string;
  web?: string;
  twitter?: string;
  pitchdeck?: string;
  tokenomik?: string;
  description?: string;
  ecosystem?: string;
  team?: string;
  tokenName: string;
  tokenSymbol: string;
  tokenSupply: number;
  tokenPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      unique: true,
      required: true,
    },
    founder: {
      type: String,
      required: true,
      unique: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    contactName: String,
    contactTelegram: String,
    contactEmail: String,
    web: String,
    twitter: String,
    pitchdeck: String,
    tokenomik: String,
    description: String,
    ecosystem: String,
    team: String,
    tokenName: {
      type: String,
      required: true,
      // maxlength: 10,
    },
    tokenSymbol: {
      type: String,
      required: true,
      // maxlength: 4,
    },
    tokenSupply: {
      type: Number,
      required: true,
      // min: 1,
      // max: 100000000,
    },
    tokenPrice: {
      type: Number,
      required: true,
      // min: 0.0000000001,
      // max: 1000,
    },
  },
  { timestamps: true }
);

// export const Project =
// mongoose.models.Project ||
// mongoose.model<IProjectModel>('Project', projectSchema);

export const Project =
  models.Project || mongoose.model<IProjectModel>('Project', projectSchema);
