
import React from 'react'
import { getSession } from '@/services/auth-service'
import { ConnectWalletButton } from '@/app/components/auth/connectWalletButton'
import AddProjectForm from '@/app/components/projects/addProjectForm'
import { findProjectByFounder } from '@/services/project-service'
import { redirect } from 'next/navigation'


export default async function CreateProject() {
  const session = await getSession()
  if (session) {
    const isFounder = await findProjectByFounder(session.address)
    if (isFounder) {
      redirect('/app/founder')
    }
    return (<>
      <h1>Create your project</h1>
      <AddProjectForm />
    </>
    )
  }
  return (<>
    <h1>Log in PLS</h1>
    <ConnectWalletButton />
  </>
  )
}
