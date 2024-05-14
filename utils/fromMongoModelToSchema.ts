/** @format */

import { ProjectStatusEnum, ProjectType } from '@/types';
import { IProjectModel } from './../db/models';
export function fromMongoModelToSchema(data: IProjectModel): ProjectType {
  return {
    id: data._id.toString(),
    founder: data.founder,
    projectName: data.projectName,
    imageUrl: data.imageUrl,
    startDate: data.startDate.toISOString(),
    contactName: data.contactName,
    contactTelegram: data.contactTelegram,
    contactEmail: data.contactEmail,
    web: data.web,
    twitter: data.twitter,
    pitchdeck: data.pitchdeck,
    tokenomik: data.tokenomik,
    description: data.description,
    ecosystem: data.ecosystem,
    team: data.team,
    tokenName: data.tokenName,
    tokenSymbol: data.tokenSymbol,
    tokenSupply: data.tokenSupply,
    tokenPrice: data.tokenPrice,
    status: ProjectStatusEnum[data.status as keyof typeof ProjectStatusEnum],
  };
}
