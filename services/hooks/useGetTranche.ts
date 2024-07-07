/** @format */

import { toast, ToastOptions } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { getTranсhe } from '../onchain/onchain-service';

export const useGetTranche = () => {
    const router = useRouter()
    const [isLoadingTranche, setLoading] = useState(false)

    const toastOptions: ToastOptions = {
        style: {
          backgroundColor: "#272726",
          color: "#FFF", 
        },
        progressStyle: {
          backgroundColor: "#FCFC03",
        },
    };

    const tranche = useCallback(
        async (onchainId: number) => {
            setLoading(true)
            try {
                await getTranсhe(onchainId)
                router.refresh()
                setLoading(false)
                toast.success("Transaction successful!", toastOptions);
            } catch (err) {
                console.error("Failed to get tranche", err);
                setLoading(false)
                toast.error("Failed to get a tranche.", toastOptions);
            }
            
        },
        [router, toastOptions]
    )
    
    return {isLoadingTranche, tranche}
}