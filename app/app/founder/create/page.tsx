
import React from 'react'
import { cookies } from 'next/headers';
import { decrypt, getSession } from '@/services/auth-service';
import { redirect } from 'next/navigation'
import AddProjectForm from '@/app/components/projects/addProjectForm';
import { ConnectWalletButton } from '../../../components/header/auth/connectWalletButton';
import { AuthRolesEnum } from '@/types';


export default async function CreateProject() {
  const session = await getSession()

  // const resp = cookies().get('session')?.value;
  // let session = null
  // if (resp) {
  //   session = await decrypt(resp)
  // }
  if (session) {
    if (session.role === AuthRolesEnum.FOUNDER) {
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
