
import React from 'react'
import AddProjectForm from '../components/addProjectForm'
import { fetchAllProjects } from '@/services/project-service'


export default async function Private() {
  const data = await fetchAllProjects()
  return (<>
    <h1>Your current project</h1>
    <p>{data && data[data.length - 1]?.title}</p>
    <AddProjectForm />
  </>
  )
}
