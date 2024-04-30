
import React from 'react'
import { getSession } from '@/services/auth-service'
import { ConnectWalletButton } from '@/app/components/auth/connectWalletButton'
import { findProjectByFounder } from '@/services/project-service'
import EditProjectForm from '@/app/components/projects/editProjectForm'
import { fromMongoToPlainObject } from '@/utils/fromMongoToPlainObject'


export default async function PatchProject() {
  const session = await getSession()
  if (session) {
    const mongoResonse = await findProjectByFounder(session.address)
    const project = fromMongoToPlainObject(mongoResonse!)
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
