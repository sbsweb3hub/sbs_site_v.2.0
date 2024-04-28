/** @format */

import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export interface IProject extends Document {
  title: string;
  // owner: number;
  startDate: Date;
}

const projectSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    // owner: {
    //   type: String,
    //   required: true,
    // },
    startDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);
