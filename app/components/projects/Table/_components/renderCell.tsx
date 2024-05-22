import React from "react";
import { User } from "@nextui-org/react";
import { Project } from "../_types";
import Link from "next/link";
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
            <Link href={`/app/projects/${project.id}`}>
              <div className="text-[#7D7D7D]">{project.projectName}</div>
            </Link>
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
