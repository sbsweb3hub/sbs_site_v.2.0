/** @format */

import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

interface IUser extends Document {
  address: string;
  nonce: string;
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
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export interface IProjectModel extends Document {
  title: string;
  founder: string;
  startDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const projectSchema = new Schema(
  {
    title: {
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
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project ||
  mongoose.model<IProjectModel>('Project', projectSchema);
