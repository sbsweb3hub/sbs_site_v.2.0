
import React from 'react'
import { findProjectByFounder } from '@/services/project-service'
import { ConnectWalletButton } from '@/app/components/Header/auth/connectWalletButton'
import { cookies } from 'next/headers';
import { decrypt } from '@/services/auth-service';
import { redirect } from 'next/navigation'
import Link from 'next/link'


export default async function Founder() {
  const resp = cookies().get('session')?.value;
  let session = null
  if (resp) {
    session = await decrypt(resp)
  }
  if (session) {
    if (!session.isFounder) redirect('/app/founder/create')
    const { title, startDate } = await findProjectByFounder(session.address)
    console.log('TITLE', title, startDate)
    return (<>
      <h1>Your current project</h1>
      <h2>Title: {title}</h2>
      <h2>StartAt: {startDate}</h2>
      <Link href='/app/founder/patch' type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
        Edit</Link>
    </>
    )
  }
  return (<>
    <h1>Log in PLS</h1>
    <ConnectWalletButton />
  </>
  )
}
