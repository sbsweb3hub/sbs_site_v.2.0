'use client'

import { useAccount } from "wagmi"
import { Account } from "./account"
import { WalletOptions } from "./walletOptions"

export default function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <WalletOptions />
} 