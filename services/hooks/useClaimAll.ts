/** @format */

import { toast, ToastOptions } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { claimAllProjectTokens } from '../onchain/onchain-service';

export const useClaimAll = () => {
    const router = useRouter()
    const [isLoadingClaimAll, setLoading] = useState(false)

    const toastOptions: ToastOptions = {
        style: {
          backgroundColor: "#272726",
          color: "#FFF", 
        },
        progressStyle: {
          backgroundColor: "#FCFC03",
        },
    };

    const claimAll = useCallback(
        async (onchainId: number) => {
            setLoading(true)
            try {
                await claimAllProjectTokens(onchainId)
                router.refresh()
                setLoading(false)
                toast.success("Transaction successful!", toastOptions);
            } catch (err) {
                console.error("Failed to claim all tokens:", err);
                setLoading(false)
                toast.error("Failed to claim all tokens.", toastOptions);
            }
            
        },
        [router, toastOptions]
    )
    
    return {isLoadingClaimAll, claimAll}
}