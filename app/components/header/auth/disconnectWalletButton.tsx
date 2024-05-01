'use client'
import { useRouter } from 'next/navigation'
import { useAccount, useDisconnect } from 'wagmi'

export function DisconnectWalletButton({ address }: { address: string }) {
    const { disconnectAsync } = useDisconnect()
    const router = useRouter()
    const handleDisconnect = async () => {
        await disconnectAsync()
        await fetch(`/api/v1/auth/logout`)
        router.push('/app')
        router.refresh()
    }

    return (
        <div>
            {address && (
                <span>
                    {address.slice(0, 4)}...{address.slice(-4)}
                </span>
            )}
            <button onClick={handleDisconnect} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">
                Disconnect
            </button>
        </div>
    )
}
