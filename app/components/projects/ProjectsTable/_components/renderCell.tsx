import React from "react";
import { User } from "@nextui-org/react";
import { ProjectType, ProjectStatusEnum } from "@/types";
import { getCurrentStep } from "../_utils";

export const renderCell = (project: ProjectType, columnKey: React.Key) => {
  const cellValue = project[columnKey as keyof Omit<ProjectType, 'steps'>];

  switch (columnKey) {
    case "projectName":
      return (
        <User
          avatarProps={{
            radius: "sm",
            isBordered: true,
            showFallback: true,
            src: project.imageUrl,
          }}
          classNames={{
            wrapper: "ml-10",
          }}
          description={
            <div className="text-[#7D7D7D]">{project.tokenName}, {project.tokenSymbol}</div>
          }
          name={project.projectName}
        />
      );

    case "currentStep":
      return <p className="text-bold text-sm capitalize">{getCurrentStep(project.status)}</p>;
    case "softcapTokens":
      return <p className="text-bold text-sm capitalize">{project.minTokenForSeed}</p>;
    case "hardcapTokens":
      return <p className="text-bold text-sm capitalize">{project.maxTokenForSeed}</p>;
    case "tokenPrice":
      return <p className="text-bold text-sm capitalize">{cellValue as string}</p>;

    default:
      return cellValue;
  }
};
