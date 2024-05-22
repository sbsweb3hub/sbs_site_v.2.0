
import React from 'react'
import { getSession } from '@/services/auth-service';
import { findProjectByFounder } from '@/services/project-service'
import { ProjectType } from '@/types';
import ProjectForm from '@/app/components/projects/Forms/ProjectForm/ProjectForm';


export default async function PatchProject() {
  const session = await getSession()
  const project: ProjectType = await findProjectByFounder(session.address)
  return (
    <ProjectForm project={project!} />)
}
