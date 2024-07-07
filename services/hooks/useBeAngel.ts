/** @format */

import { toast, ToastOptions } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { beAnAngel } from '../onchain/onchain-service';
import { useDisclosure } from '@nextui-org/react';

export const useBeAngel = () => {
    const router = useRouter()
    const [isLoadingAngel, setLoading] = useState(false)
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

    const beAngel = useCallback(
        async (onchainId: number, value: string, onClose: () => void) => {
            setLoading(true)
            try {
                await beAnAngel(onchainId, value)
                router.refresh()
                setLoading(false)
                onClose()
                toast.success("Transaction successful!", toastOptions);
            } catch (err) {
                console.error("Failed to become an angel:", err);
                setLoading(false)
                onClose()
                toast.error(
                    "Failed to become an angel. Please try again.",
                    toastOptions
                );
            }
            
        },
        [router, toastOptions]
    )
    
    return {isLoadingAngel, beAngel}
}