
import React from 'react'
import { findProjectByFounder } from '@/services/project-service'
import { getSession } from '@/services/auth-service'
import { ConnectWalletButton } from '@/app/components/auth/connectWalletButton'
import Link from 'next/link'


export default async function Founder() {
  const session = await getSession()
  if (session) {
    const { title, startDate } = await findProjectByFounder(session.address)
    return (<>
      <h1>Your current project</h1>
      <h2>Title: {title}</h2>
      <h2>TitStartAt: {startDate.toISOString()}</h2>
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
