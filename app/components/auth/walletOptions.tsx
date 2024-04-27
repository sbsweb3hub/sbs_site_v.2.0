'use client'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { Connector, useConnect, useDisconnect, useSignMessage } from 'wagmi'
import { injected } from 'wagmi/connectors'

export function WalletOptions({ url }: { url: string }) {
    const { connectors, connectAsync } = useConnect()
    const { disconnectAsync } = useDisconnect()
    const { signMessageAsync } = useSignMessage()
    const router = useRouter()

    //@todo - make hook & err handler
    const handleConnect = async () => {
        try {
            await connectAsync({ connector: injected() })
            const message = await signMessageAsync({ message: 'Hello Blast!' })
            const req = JSON.stringify(message)
            //@todo - make provider
            const resp = await fetch(`${url}/api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: req
            });
            router.refresh()
        } catch (error) {
            await disconnectAsync()
        }

    }
    return (
        <button onClick={handleConnect}>
            Connect MetaMask
        </button>
    )
    // connectors.map((connector) => (
    //     <button key={connector.uid} onClick={() => connect({ connector })}>
    //         {connector.name}
    //     </button>
    // ))
}