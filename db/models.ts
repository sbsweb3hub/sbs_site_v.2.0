/** @format */

import { AuthRolesEnum, ProjectStatusEnum } from '@/types';
import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

interface IUserModel extends Document {
  address: string;
  nonce: string;
  role: string;
  tgId: string;
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
    tgId: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const models = mongoose.models || {};

export const User =
  models.User || mongoose.model<IUserModel>('User', userSchema);
// export const User =
//   mongoose.models.User || mongoose.model<IUserModel>('User', userSchema);

export interface IStep {
  duration: number;
  desc: string;
}

export interface IProjectModel extends Document {
  projectName: string;
  founder: string;
  startDate: Date;
  imageUrl?: string;
  backgroundImageUrl?: string;
  contactName?: string;
  contactTelegram?: string;
  contactEmail: string;
  web?: string;
  twitter?: string;
  pitchdeck?: string;
  tokenomik?: string;
  discord?: string;
  projectTg?: string;
  description?: string;
  shortDescription?: string;
  ecosystem?: string;
  team?: string;
  teamDescription?: string;
  tokenName: string;
  tokenSymbol: string;
  tokenSupply: number;
  tokenPrice: number;
  maxTokenForSeed: number;
  minTokenForSeed: number;
  seedDuration: number;
  status: string;
  steps: IStep[];
  createdAt?: Date;
  updatedAt?: Date;
}

const stepSchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

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
    backgroundImageUrl: {
      type: String,
    },
    contactName: String,
    contactTelegram: String,
    contactEmail: {
      type: String,
      required: true,
    },
    web: String,
    twitter: String,
    pitchdeck: String,
    discord: String,
    projectTg: String,
    tokenomik: String,
    description: String,
    shortDescription: String,
    ecosystem: String,
    team: String,
    teamDescription: String,
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
    maxTokenForSeed: {
      type: Number,
      required: true,
    },
    minTokenForSeed: {
      type: Number,
      required: true,
    },
    seedDuration: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: ProjectStatusEnum.EDITING,
    },
    steps: {
      type: [stepSchema],
    },
  },
  { timestamps: true }
);

// export const Project =
// mongoose.models.Project ||
// mongoose.model<IProjectModel>('Project', projectSchema);

export const Project =
  models.Project || mongoose.model<IProjectModel>('Project', projectSchema);
