
import React from 'react'
// import { getSession } from '@/services/auth-service'
import { ConnectWalletButton } from '@/app/components/Header/auth/connectWalletButton'
import AddProjectForm from '@/app/components/Projects/addProjectForm'
import { cookies } from 'next/headers';
import { decrypt } from '@/services/auth-service';
import { redirect } from 'next/navigation'


export default async function CreateProject() {
  const resp = cookies().get('session')?.value;
  let session = null
  if (resp) {
    session = await decrypt(resp)
  }
  if (session) {
    if (session.isFounder) {
      redirect('/app/founder')
    }
    return (<>
      <h1>Create your project</h1>
      <AddProjectForm />
    </>)
  }
  return (<>
    <h1>Log in PLS</h1>
    <ConnectWalletButton />
  </>
  )
}
