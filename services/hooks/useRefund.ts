/** @format */

import { toast, ToastOptions } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { refundEth } from '../onchain/onchain-service';

export const useRefund = () => {
    const router = useRouter()
    const [isLoadingRefund, setLoading] = useState(false)

    const toastOptions: ToastOptions = {
        style: {
          backgroundColor: "#272726",
          color: "#FFF", 
        },
        progressStyle: {
          backgroundColor: "#FCFC03",
        },
    };

    const refund = useCallback(
        async (onchainId: number) => {
            setLoading(true)
            try {
                await refundEth(onchainId)
                router.refresh()
                setLoading(false)
                toast.success("Refund successful!", toastOptions);
            } catch (err) {
                console.error("Failed to refund", err);
                setLoading(false)
                toast.error("Failed to make a refund.", toastOptions);
            }
            
        },
        [router, toastOptions]
    )
    
    return {isLoadingRefund, refund}
}