
import React from 'react'
// import { getSession } from '@/services/auth-service'
import { ConnectWalletButton } from '@/app/components/Header/auth/connectWalletButton'
import EditProjectForm from '@/app/components/Projects/editProjectForm'
import { cookies } from 'next/headers';
import { decrypt } from '@/services/auth-service';
import { findProjectByFounder } from '@/services/project-service'
// import { fromMongoToPlainObject } from '@/utils/fromMongoToPlainObject'
// import { fromMongoModelToSchema } from '@/utils/fromMongoModelToSchema'


export default async function PatchProject() {
  const resp = cookies().get('session')?.value;
  let session = null
  if (resp) {
    session = await decrypt(resp)
  }
  if (session) {
    const project = await findProjectByFounder(session.address)
    return (<>
      <h1>Edit your project</h1>
      <EditProjectForm project={project} />
    </>)
  }
  return (<>
    <h1>Log in PLS</h1>
    <ConnectWalletButton />
  </>
  )
}
