'use client'
import { logout } from '@/services/auth-service'
import { useRouter } from 'next/navigation'
import { useAccount, useDisconnect } from 'wagmi'
import { Button, Input } from '@nextui-org/react'

export function DisconnectWalletButton({ address }: { address: string }) {
    const { disconnectAsync } = useDisconnect()
    const router = useRouter()
    const handleDisconnect = async () => {
        await disconnectAsync()
        await logout()
        router.push('/app')
        router.refresh()
    }

    return (
        <div className='flex items-center  gap-[14px]'>
            <div className='flex items-center'>
                <p className='text-[16px] text-[#FFF] mr-[10px]'>
                    Blast points:
                </p>
                <div className='flex items-center justify-end w-[85px] 
                    h-[24px] text-[16px] font-bold text-[#FFF] rounded-[5px] border-[1px] border-white'>

                </div>
            </div>
            <div className='flex items-center'>
                <p className='text-[16px] text-[#FFF] mr-[10px]'>
                    Score:
                </p>
                <div className='flex items-center justify-end w-[65px] 
                    h-[24px] text-[16px] font-bold text-[#FFF] rounded-[5px] border-[1px] border-white'>

                </div>
            </div>
            {address && (
                <Button 
                    onClick={handleDisconnect} 
                    className="w-[154px] h-[42px] text-[#000] text-[16px] bg-[#D6DA1D] rounded-[8px]"
                >
                    <span>
                        {address.slice(0, 4)}...{address.slice(-4)}
                    </span>
                </Button>
            )}
        </div>
    )
}
