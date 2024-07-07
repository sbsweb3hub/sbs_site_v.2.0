/** @format */

import { toast, ToastOptions } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { claimTokens } from '../onchain/onchain-service';
import { useDisclosure } from '@nextui-org/react';

export const useClaim = () => {
    const router = useRouter()
    const [isLoadingClaim, setLoading] = useState(false)
    const {onClose} = useDisclosure()

    const toastOptions: ToastOptions = {
        style: {
          backgroundColor: "#272726",
          color: "#FFF", 
        },
        progressStyle: {
          backgroundColor: "#FCFC03",
        },
    };

    const claim = useCallback(
        async (onchainId: number, onClose: () => void) => {
            setLoading(true)
            try {
                await claimTokens(onchainId)
                router.refresh()
                setLoading(false)
                onClose()
                toast.success("Claim successful!", toastOptions);
            } catch (err) {
                console.error("Failed to claim", err);
                setLoading(false)
                onClose()
                toast.error("Failed to claim.", toastOptions);
            }
            
        },
        [router, toastOptions]
    )
    
    return {isLoadingClaim, claim}
}