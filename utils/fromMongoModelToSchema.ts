/** @format */

import { ProjectStatusEnum, ProjectType, StepType } from '@/types';
import { IProjectModel } from './../db/models';
export function fromMongoModelToSchema(data: IProjectModel): ProjectType {
  return {
    id: data._id.toString(),
    founder: data.founder,
    projectName: data.projectName,
    imageUrl: data.imageUrl,
    backgroundImageUrl: data.backgroundImageUrl,
    startDate: data.startDate.toISOString(),
    contactName: data.contactName,
    contactTelegram: data.contactTelegram,
    contactEmail: data.contactEmail,
    web: data.web,
    twitter: data.twitter,
    pitchdeck: data.pitchdeck,
    discord: data.discord,
    projectTg: data.projectTg,
    tokenomik: data.tokenomik,
    description: data.description,
    shortDescription: data.shortDescription,
    ecosystem: data.ecosystem,
    team: data.team,
    teamDescription: data.teamDescription,
    tokenName: data.tokenName,
    tokenSymbol: data.tokenSymbol,
    tokenSupply: data.tokenSupply,
    tokenPrice: data.tokenPrice,
    maxTokenForSeed: data.maxTokenForSeed,
    minTokenForSeed: data.minTokenForSeed,
    seedDuration: data.seedDuration,
    status: ProjectStatusEnum[data.status as keyof typeof ProjectStatusEnum],
    steps: data.steps.map((step) => ({
      duration: step.duration,
      desc: step.desc,
    })) as StepType[],
    datesForProjectCard: data.datesForProjectCard
      ? {
          seedRoundEndDate:
            data.datesForProjectCard.seedRoundEndDate?.toISOString() || null,
          stepsDates: data.datesForProjectCard.stepsDates.map((stepDate) => ({
            startDate: stepDate.startDate.toISOString(),
            endDate: stepDate.endDate.toISOString(),
          })),
        }
      : undefined,
    onchainId: data.onchainId,
    createdAt: data.startDate.toISOString(),
    updatedAt: data.startDate.toISOString(),
  };
}
