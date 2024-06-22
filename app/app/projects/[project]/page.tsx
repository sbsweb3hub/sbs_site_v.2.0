import { findProjectById } from "@/services/project-service";
import { notFound } from "next/navigation";
import {
  ProjectTabs,
  BeAngelModal,
  Background,
  ProjectHeader,
} from "@/app/components/projects";
import "./index.css";
import { ProjectStatusEnum } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default async function Project({
  params,
}: {
  params: { project: string };
}) {
  const project = await findProjectById(
    params.project, true
  );
  // @todo - what is the best approach to handle errors(notFound or Error)
  if (!project) notFound();

  const links = {
    web: project.web,
    twitter: project.twitter,
    discord: project.discord,
    telegram: project.projectTg,
    pitch: project.pitchdeck
  }

  return (
    <div className="wrapper">
      <div className="line">
        <Background />
        <ProjectHeader {...project} />
        {project.status === ProjectStatusEnum.STARTED && <BeAngelModal onChainId={project.onchainId} symbol={project.tokenSymbol} tokenPrice={project.tokenPrice} />}
      </div>


      <div className="tabs">
        {/* <div className="title">Project: {project.projectName}</div> */}
        <ProjectTabs project={project} />
      </div>

    </div>
  );
}
