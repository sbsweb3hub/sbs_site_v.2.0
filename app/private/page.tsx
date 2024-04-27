
import React from 'react'
import Link from 'next/link'
// import ProjectCard from '../components/projectCard'
// import { revalidateTag } from 'next/cache'


export default async function Private() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, { next: { tags: ['project'] } })
  // const [project] = (await response.json()).reverse()
  // revalidateTag('project')

  return (<>
    <Link href='/private/create'>Create your project</Link>
    {/* <ProjectCard project={project} /> */}
  </>
  )
}
