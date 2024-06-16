/** @format */

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import {
  createProject,
  getDataForProgressBar,
} from '../onchain/onchain-service';
import { ProjectStatusEnum } from '@/types';
import {
  changeProjectStatus,
  updateProjectWithOnchainData,
} from '../project-service';

export const useGetDataForProgressBar = () => {
  const [isLoadingDataForProgressBar, setLoading] = useState(false);

  const getDataForProgBar = async (id: number) => {
    setLoading(true);
    try {
      await getDataForProgressBar(id);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return { getDataForProgBar, isLoadingDataForProgressBar };
};
