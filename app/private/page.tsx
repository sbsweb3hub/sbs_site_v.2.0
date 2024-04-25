'use server'
import React from 'react'
import Link from 'next/link'
//@todo make GET /projects/:id and check by id


export default async function Private() {

  return (
    <Link href='/private/create'>Create your project</Link>
  )
}
