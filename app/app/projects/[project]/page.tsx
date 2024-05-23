import { findProjectById } from "@/services/project-service";
import { notFound } from "next/navigation";
import {
  ProjectTabs,
  BeAngelModal,
  Background,
  ProjectHeader,
} from "@/app/components/projects";
import "./index.css";

export default async function Project({
  params,
}: {
  params: { project: string };
}) {
  const { projectName, startDate, imageUrl } = await findProjectById(
    params.project
  );

  // @todo - what is the best approach to handle errors(notFound or Error)
  if (!projectName) notFound();

  return (
    <div className="wrapper">
      <div className="line">
        <Background />
        <ProjectHeader url={imageUrl} date={startDate} />
        <BeAngelModal />
      </div>

      <div className="tabs">
        <div className="title">Project: {projectName}</div>
        <ProjectTabs />
      </div>
    </div>
  );
}
