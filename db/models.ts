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

interface IStepDate {
  startDate: Date;
  endDate: Date;
}

interface IDatesForProjectCard {
  seedRoundEndDate: Date;
  stepsDates: IStepDate[];
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
  tokenAddress: string;
  maxTokenForSeed: number;
  minTokenForSeed: number;
  seedDuration: number;
  status: string;
  steps: IStep[];
  datesForProjectCard?: IDatesForProjectCard;
  onchainId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const stepSchema = new mongoose.Schema(
  {
    duration: Number,
    desc: String,
  },
  { _id: false }
);

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
    },
    tokenSymbol: {
      type: String,
    },
    tokenSupply: {
      type: Number,
    },
    tokenPrice: {
      type: Number,
    },
    tokenAddress: String,
    maxTokenForSeed: {
      type: Number,
    },
    minTokenForSeed: {
      type: Number,
    },
    seedDuration: {
      type: Number,
    },
    status: {
      type: String,
      required: true,
      default: ProjectStatusEnum.EDITING,
    },
    steps: {
      type: [stepSchema],
    },
    onchainId: Number,
  },
  { timestamps: true }
);

projectSchema.virtual('datesForProjectCard').get(function () {
  if (
    !this.startDate ||
    !this.seedDuration ||
    !this.steps ||
    this.steps.length === 0
  ) {
    return null;
  }
  let seedRoundEndDate = new Date(this.startDate);
  seedRoundEndDate.setDate(seedRoundEndDate.getDate() + this.seedDuration);

  const stepsDates: Array<Record<string, Date>> = [];
  let currentStartDate = new Date(seedRoundEndDate);

  this.steps.forEach((step) => {
    const stepStartDate = new Date(
      currentStartDate.setDate(currentStartDate.getDate())
    );

    const stepEndDate = new Date(currentStartDate);
    stepEndDate.setDate(stepEndDate.getDate() + step.duration!);

    stepsDates.push({
      startDate: stepStartDate,
      endDate: stepEndDate,
    });

    currentStartDate = new Date(stepEndDate);
  });

  return { seedRoundEndDate, stepsDates };
});

// export const Project =
// mongoose.models.Project ||
// mongoose.model<IProjectModel>('Project', projectSchema);

export const Project =
  models.Project || mongoose.model<IProjectModel>('Project', projectSchema);
