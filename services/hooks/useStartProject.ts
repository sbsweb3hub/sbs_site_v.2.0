/** @format */

import { toast, ToastOptions } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import {
  readNewStartDateFromChain,
  readTokenAddressFromChain,
  startProjectOnChain,
} from '../onchain/onchain-service';
import {
  changeProjectStatus,
  updateProjectWithOnchainData,
} from '../project-service';
import { ProjectStatusEnum } from '@/types';

export const useStartProject = () => {
  const router = useRouter();
  const [isLoadingStart, setLoading] = useState(false);

  const toastOptions: ToastOptions = {
    style: {
      backgroundColor: "#272726",
      color: "#FFF", 
    },
    progressStyle: {
      backgroundColor: "#FCFC03",
    },
  };

  const startProject = useCallback(
    async (onchainId: number, id: string) => {
      setLoading(true);
      try {
        console.log('onchainId', onchainId);
        await startProjectOnChain(onchainId);
        const newStartDate = await readNewStartDateFromChain(onchainId);
        const tokenAddress = await readTokenAddressFromChain(onchainId);
        await Promise.all([
          updateProjectWithOnchainData(id, {
            startDate: newStartDate,
            tokenAddress,
          }),
          changeProjectStatus(id, ProjectStatusEnum.STARTED),
        ]);
        router.refresh();
        setLoading(false);
        toast.success("Start successful!", toastOptions);
      } catch (err) {
        console.error(err);
        setLoading(false);
        toast.error("Failed to start project", toastOptions)
      }
    },
    [router, toastOptions]
  );

  return { isLoadingStart, startProject };
};
