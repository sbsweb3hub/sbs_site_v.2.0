/** @format */

import { toast, ToastOptions } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { negativeVote } from '../onchain/onchain-service';
import { useDisclosure } from '@nextui-org/react';

export const useVote = () => {
    const router = useRouter()
    const [isLoadingVote, setLoading] = useState(false)
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

    const vote = useCallback(
        async (onchainId: number, onClose: () => void) => {
            setLoading(true)
            try {
                await negativeVote(onchainId)
                router.refresh()
                setLoading(false)
                onClose()
                toast.success("Vote successful!", toastOptions);
            } catch (err) {
                console.error("Failed to vote", err);
                setLoading(false)
                onClose()
                toast.error("Vote failed!", toastOptions);
            }
            
        },
        [router, toastOptions]
    )
    
    return {isLoadingVote, vote}
}