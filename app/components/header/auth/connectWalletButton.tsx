'use client'
import useWalletConnect from '@/services/hooks/useWalletConnect'
import * as React from 'react'
import { Button } from '@nextui-org/react'

export function ConnectWalletButton() {

    const { handleConnectWallet } = useWalletConnect()
    return (
        <Button 
            onClick={handleConnectWallet} 
            className="w-[154px] h-[42px] text-[#000] text-[16px] bg-[#D6DA1D] rounded-[8px]"
        >
            Connect
        </Button>
    )

}