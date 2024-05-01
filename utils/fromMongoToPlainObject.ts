/** @format */

import { IProjectModel } from '@/db/models';
import { ProjectType } from '@/types';

export function fromMongoToPlainObject(
  mongoDocument: IProjectModel
): ProjectType {
  const jsonObject = mongoDocument.toObject({
    getters: true,
    virtuals: false,
    versionKey: false,
  });

  const plainObject = {
    id: jsonObject._id.toString(),
    title: jsonObject.title,
    founder: jsonObject.founder,
    startDate: jsonObject.startDate,
  };

  return plainObject;
}