'use client'

import useWalletConnect from '@/services/hooks/useWalletConnect'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ButtonCreateProject() {
    const { handleConnectWallet } = useWalletConnect()
    const router = useRouter()
    const handler = async () => {
        await handleConnectWallet()
        router.push('/app/founder')
        router.refresh()
    }
    return (
        <button onClick={handler}>Create project</button>
    )
}
