
import React from 'react'
import { findProjectByFounder } from '@/services/project-service'
import { getSession } from '@/services/auth-service';
import Link from 'next/link'
import CustomImage from '@/app/components/projects/customImage';
import SendReviewButton from '@/app/components/projects/Forms/SendReviewButton';
import { ProjectStatusEnum } from '@/types';
import { button } from '@nextui-org/react';
import DeleteProjectButton from '@/app/components/projects/Forms/DeleteProjectButton';


export default async function Founder() {
  const session = await getSession()
  const project = await findProjectByFounder(session.address)

  return (<>
    <h1>Your current project</h1>
    <h2>Title: {project.projectName}</h2>
    <h2>StartAt: {project.startDate}</h2>
    {project.imageUrl && <CustomImage path={project.imageUrl!} />}

    {(() => {
      switch (project.status) {
        case ProjectStatusEnum.REVIEWING:
          return <p>Pls wait while your project is reviewing!</p>;
        case ProjectStatusEnum.DECLINED:
          return (<>
            < p > We are sorry, but we cant approve your project! We have sent details to your contact email.</p >
            <DeleteProjectButton id={project.id} />
          </>)
        case ProjectStatusEnum.APPROVED:
          return (<>
            <DeleteProjectButton id={project.id} />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Deploy</button>
          </>);
        default:
          return <>
            <Link href='/app/founder/patch' type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              Edit draft
            </Link>
            <SendReviewButton id={project.id} />
            <DeleteProjectButton id={project.id} />
          </>;
      }
    })()}

  </>)
}
