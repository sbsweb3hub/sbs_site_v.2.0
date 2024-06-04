/** @format */

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import {
  readNewStartDateFromChain,
  startProjectOnChain,
} from '../onchain-service';
import {
  changeProjectStatus,
  updateProjectWithOnchainData,
} from '../project-service';
import { ProjectStatusEnum } from '@/types';

export const useStartProject = () => {
  const router = useRouter();
  const [isLoadingStart, setLoading] = useState(false);

  const startProject = useCallback(
    async (onchainId: number, id: string) => {
      setLoading(true);
      try {
        console.log('onchainId', onchainId);
        await startProjectOnChain(onchainId);
        const newStartDate = await readNewStartDateFromChain(onchainId);
        await Promise.all([
          updateProjectWithOnchainData(id, { startDate: newStartDate }),
          changeProjectStatus(id, ProjectStatusEnum.STARTED),
        ]);
        router.refresh();
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    },
    [router]
  );

  return { isLoadingStart, startProject };
};
