
import React from 'react'
import { getSession } from '@/services/auth-service'
import { ConnectWalletButton } from '@/app/components/auth/connectWalletButton'
import { findProjectByFounder } from '@/services/project-service'
import EditProjectForm from '@/app/components/projects/editProjectForm'


export default async function PatchProject() {
  const session = await getSession()
  if (session) {
    const project = await findProjectByFounder(session.address)
    return (<>
      <h1>Edit your project</h1>
      <EditProjectForm project={project} />
    </>
    )
  }
  return (<>
    <h1>Log in PLS</h1>
    <ConnectWalletButton />
  </>
  )
}
