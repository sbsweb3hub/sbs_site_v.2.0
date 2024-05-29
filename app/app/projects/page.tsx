import React from "react";
import { notFound } from 'next/navigation'
import { fetchAllProjects } from '@/services/project-service'
import Image from "next/image";
import InfiniteScroll from "@/app/components/projects/ProjectsTable/InfiniteScroll";
import { ProjectStatusEnum } from "@/types";


export default async function Projects() {
  //@todo - add cache & loader
  const projects = await fetchAllProjects(
    {
      filter: {
        status: { $in: [ProjectStatusEnum.DEPLOYED, ProjectStatusEnum.STARTED, ProjectStatusEnum.APPROVED] },
      }
    })
  if (!projects) notFound()
  return (
    <div className="px-14">
      <div className="relative">
        <h1 className="absolute top-40 left-10 text-5xl">Projects</h1>
        <Image src="/projects.svg" alt="projects" width={1682} height={360} />
      </div>

      <InfiniteScroll projects={projects} />
    </div>

  );
}

