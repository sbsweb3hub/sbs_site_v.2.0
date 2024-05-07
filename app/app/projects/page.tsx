import React from "react";
// import ProjectCard from '../../components/projects/projectCard'
// import { notFound } from 'next/navigation'
// import { fetchAllProjects } from '@/services/project-service'
import ProjectsTable from "@/app/components/projects/Table/ProjectsTable";
import Image from "next/image";

const items = [
  {
    id: "66326e7d68aef323432",
    avatar: "",
    name: "First prodigy ",
    underName: "$ FRST",
    seed: "acbB",
    ordered: 0,
    received: 7777,
    stepAlive: "Seed phase",
    voiting: 0,
  },
  {
    id: "32343234543",
    avatar: "",
    name: "BlastWifaHat",
    underName: "$ BWIF",
    seed: "d72dNew",
    ordered: 2,
    received: 7777,
    stepAlive: "Seed phase",
    voiting: 0,
  },
  {
    id: "54255",
    avatar: "",
    name: "BestLaunchpad ",
    underName: "$ BLPD",
    seed: "12d0",
    ordered: 0,
    received: 7777,
    stepAlive: "Seed phase",
    voiting: 0,
  },
  {
    id: "234565432345",
    avatar: "",
    name: "GuideDAOwithHAT",
    underName: "$ GOHAT",
    seed: "NewSuper",
    ordered: 0,
    received: 7777,
    stepAlive: "Seed phase",
    voiting: 0,
  },
  {
    id: "2345654345",
    avatar: "",
    name: "BestLaunchpad",
    underName: "$ BLPD",
    seed: "f7b3Miiii",
    ordered: 0,
    received: 7777,
    stepAlive: "Seed phase",
    voiting: 0,
  },
];

export default async function Projects() {
  /* 
    const projects = await fetchAllProjects()
    if (!projects) notFound()
 */
  return (
    <div className="px-14">
      <div className="relative">
        <h1 className="absolute top-40 left-10 text-5xl">Projects</h1>
        <Image src="/projects.svg" alt="projects" width={1682} height={360} />
      </div>
      <ProjectsTable projects={items} />
    </div>
  );
}

