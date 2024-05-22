
import React from 'react'
import { findProjectByFounder } from '@/services/project-service'
import { getSession } from '@/services/auth-service';
import ProjectForm from '@/app/components/projects/Forms/ProjectForm/ProjectForm';


export default async function Founder() {
  const session = await getSession()
  const project = await findProjectByFounder(session.address)

  return (
    <ProjectForm disabled={true} project={project} />

  )
}
