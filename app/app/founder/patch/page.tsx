
import React from 'react'
// import { getSession } from '@/services/auth-service'
import { ConnectWalletButton } from '../../../components/header/auth/connectWalletButton'
import { cookies } from 'next/headers';
import { decrypt, getSession } from '@/services/auth-service';
import { findProjectByFounder } from '@/services/project-service'
import EditProjectForm from '@/app/components/projects/editProjectForm';
// import { fromMongoToPlainObject } from '@/utils/fromMongoToPlainObject'
// import { fromMongoModelToSchema } from '@/utils/fromMongoModelToSchema'


export default async function PatchProject() {
  const session = await getSession()

  // const resp = cookies().get('session')?.value;
  // let session = null
  // if (resp) {
  //   session = await decrypt(resp)
  // }
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
