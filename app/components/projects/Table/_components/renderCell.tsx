import React from "react";
import { User } from "@nextui-org/react";
import { Project } from "../_types";
import Link from "next/link";

export const renderCell = (project: Project, columnKey: React.Key) => {
  const cellValue = project[columnKey as keyof Project];

  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{
            radius: "sm",
            isBordered: true,
            showFallback: true,
            src: project.avatar,
          }}
          classNames={{
            wrapper: "ml-10",
          }}
          description={
            <Link href={`/app/projects/${project.id}`}>
              <div className="text-[#7D7D7D]">{project.underName}</div>
            </Link>
          }
          name={cellValue}
        />
      );

    case "seed":
    case "ordered":
    case "received":
    case "stepAlive":
    case "voting":
      return <p className="text-bold text-sm capitalize">{cellValue}</p>;

    default:
      return cellValue;
  }
};
