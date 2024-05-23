
import React from 'react'
import { fetchAllProjects, reviewProject } from '@/services/project-service'
import { ProjectStatusEnum } from '@/types';
import ReviewProjectButton from '@/app/components/projects/Forms/ReviewProjectButton';
import Image from 'next/image';


export default async function Admin() {
  const projectsForReview = await fetchAllProjects({
    filter: { status: ProjectStatusEnum.REVIEWING }
  })
  return (<> Hello Admin
    <ul >
      {projectsForReview.map(project => (
        <li key={project.id} className="border-b border-gray-300 last:border-b-0 py-4">
          <p >Name: {project.projectName}</p>
          <p >Desc: {project.description}</p>
          <p >StartDate: {project.startDate}</p>
          {project.imageUrl && <Image
            src={project.imageUrl!}
            width={500}
            height={500}
            alt="Picture of the author"
          />}
          <ReviewProjectButton id={project.id} />        </li>)
      )}
    </ul>
  </>)
}
