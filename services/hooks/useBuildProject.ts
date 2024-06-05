/** @format */

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { createProject } from '../onchain/onchain-service';
import { ProjectStatusEnum } from '@/types';
import {
  changeProjectStatus,
  updateProjectWithOnchainData,
} from '../project-service';

export const useBuildProject = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const buildProject = useCallback(
    async (args: (string | number | bigint | number[])[], id: string) => {
      setLoading(true);
      try {
        const projectOnchainId = await createProject(args, id);
        await Promise.all([
          updateProjectWithOnchainData(id, { onchainId: projectOnchainId }),
          changeProjectStatus(id, ProjectStatusEnum.DEPLOYED),
        ]);
        router.refresh();
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  return { buildProject, isLoading };
};
