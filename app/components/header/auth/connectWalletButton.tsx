'use client'
import useWalletConnect from '@/services/hooks/useWalletConnect'
import * as React from 'react'

export function ConnectWalletButton() {

    const { handleConnectWallet } = useWalletConnect()
    return (
        <button onClick={handleConnectWallet} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">

            Connect MetaMask
        </button>
    )

}
