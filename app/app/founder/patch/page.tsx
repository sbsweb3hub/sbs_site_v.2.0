
import React from 'react'
import { getSession } from '@/services/auth-service';
import { findProjectByFounder } from '@/services/project-service'
import EditProjectForm from '@/app/components/projects/Forms/editProjectForm';
import { ProjectType } from '@/types';


export default async function PatchProject() {
  const session = await getSession()
  const project: ProjectType = await findProjectByFounder(session.address)
  return (<>
    <h1>Edit your project</h1>
    <EditProjectForm project={project} />

  </>)
}
