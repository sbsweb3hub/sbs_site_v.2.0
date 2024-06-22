
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
          <p >Founder: {project.founder}</p>
          <p >contactName: {project.contactName}</p>
          <p >contactTelegram: {project.contactTelegram}</p>
          <p >contactEmail: {project.contactEmail}</p>
          <p >web: {project.web}</p>
          <p >twitter: {project.twitter}</p>
          <p >pitchdeck: {project.pitchdeck}</p>
          <p >tokenomik: {project.tokenomik}</p>
          <p >discord: {project.discord}</p>
          <p >projectTg: {project.projectTg}</p>
          <p >pitchdeck: {project.pitchdeck}</p>
          <p >Desc: {project.description}</p>
          <p >shortDescription: {project.shortDescription}</p>
          <p >ecosystem: {project.ecosystem}</p>
          <p >team: {project.team}</p>
          <p >teamDescription: {project.teamDescription}</p>
          <p >tokenName: {project.tokenName}</p>
          <p >tokenAddress: {project.tokenAddress}</p>
          <p >tokenSymbol: {project.tokenSymbol}</p>
          <p >tokenSupply: {project.tokenSupply}</p>
          <p >tokenPrice: {project.tokenPrice}</p>
          <p >maxTokenForSeed: {project.maxTokenForSeed}</p>
          <p >minTokenForSeed: {project.minTokenForSeed}</p>
          <p >seedDuration: {project.seedDuration}</p>
          <p >status: {project.status}</p>
          <p >steps: {project.steps.length}</p>
          <p >onchainId: {project.onchainId}</p>
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
