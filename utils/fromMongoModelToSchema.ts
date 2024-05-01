/** @format */

import { ProjectType } from '@/types';
import { IProjectModel } from './../db/models';
export function fromMongoModelToSchema(data: IProjectModel): ProjectType {
  return {
    id: data._id.toString(),
    founder: data.founder,
    title: data.title,
    startDate: data.startDate.toISOString(),
  };
}
