'use client'
import { useRouter } from 'next/navigation'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account({ url }: { url: string }) {
    const { address } = useAccount()
    const { disconnectAsync } = useDisconnect()
    const router = useRouter()
    const handleDisconnect = async () => {
        await disconnectAsync()
        await fetch(`${url}/api/v1/auth/logout`)
        router.refresh()
    }

    return (
        <div>
            {/* {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />} */}
            {/* {address && <div>{ensName ? `${ensName} (${address})` : address}</div>} */}
            {address && (
                <span>
                    {address.slice(0, 4)}...{address.slice(-4)}
                </span>
            )}
            <button className="ml-4" onClick={handleDisconnect}>
                Disconnect
            </button>
        </div>
    )
}