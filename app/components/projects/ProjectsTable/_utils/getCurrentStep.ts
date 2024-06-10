import { ProjectType, ProjectStatusEnum } from "@/types";

const CURRENT_STEP: { [key in ProjectStatusEnum]?: string } = {
  [ProjectStatusEnum.APPROVED]: "Upcoming",
  [ProjectStatusEnum.DEPLOYED]: "Pre-Launch",
  [ProjectStatusEnum.STARTED]: "Seed phase"
};

export const getCurrentStep
 = (status: ProjectType['status']) => {
  return CURRENT_STEP[status] || status;
};
