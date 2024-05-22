import React from "react";
import { User } from "@nextui-org/react";
import { ProjectType } from "@/types";

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
            <div className="text-[#7D7D7D]">{project.projectName}</div>
          }
          name={cellValue}
        />
      );

    // case "seed":
    // case "ordered":
    // case "received":
    // case "stepAlive":
    // case "voting":
    case "tokenName":
    case "tokenSymbol":
    case "tokenSupply":
    case "tokenPrice":
      return <p className="text-bold text-sm capitalize">{cellValue}</p>;

    default:
      return cellValue;
  }
};
