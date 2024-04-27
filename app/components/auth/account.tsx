'use client'
import { logout } from '@/auth/lib'
import { useRouter } from 'next/navigation'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
    const { address } = useAccount()
    const { disconnectAsync } = useDisconnect()
    const router = useRouter()
    // const { data: ensName } = useEnsName({ address })
    // const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

    const handleDisconnect = async () => {
        await disconnectAsync()
        await fetch('http://localhost:3000/auth/logout')
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