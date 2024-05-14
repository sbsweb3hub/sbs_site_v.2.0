
import React from 'react'
import { findProjectByFounder } from '@/services/project-service'
import { getSession } from '@/services/auth-service';
import Link from 'next/link'
import CustomImage from '@/app/components/projects/customImage';
import SendReviewButton from '@/app/components/projects/Forms/SendReviewButton';
import { ProjectStatusEnum } from '@/types';


export default async function Founder() {
  const session = await getSession()
  const project = await findProjectByFounder(session.address)

  return (<>
    <h1>Your current project</h1>
    <h2>Title: {project.projectName}</h2>
    <h2>StartAt: {project.startDate}</h2>
    {project.imageUrl && <CustomImage path={project.imageUrl!} />}
    {project.status === ProjectStatusEnum.REVIEWING ?
      <p>Pls wait while your project is reviewing!</p>
      : <>  <Link href='/app/founder/patch' type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
        Edit draft</Link>
        <SendReviewButton id={project.id} />
      </>}
  </>)
}
