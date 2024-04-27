'use client'

import { useAccount } from "wagmi"
import { Account } from "./account"
import { WalletOptions } from "./walletOptions"

export default function ConnectWallet({ url }: { url: string }) {
    const { isConnected } = useAccount()
    if (isConnected) return <Account url={url} />
    return <WalletOptions url={url} />
} 