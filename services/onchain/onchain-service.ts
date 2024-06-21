/** @format */
import { IReadContractParams, IWriteContractParams } from '@/types';
import {
  BaseError,
  ContractFunctionRevertedError,
  createWalletClient,
  custom,
  publicActions,
  parseEther,
  createPublicClient,
  http,
  formatEther,
} from 'viem';

import {
  claimingAbi,
  createProjectAbi,
  getFundForProjectAbi,
  orderingAbi,
  projectsKeeperAbi,
  startFundsAbi,
  votingAbi,
} from './abi';
import { blastSepolia } from './chains';

const publicClient = createPublicClient({
  chain: blastSepolia,
  transport: http(),
});
export const walletClient = createWalletClient({
  chain: blastSepolia,
  transport: custom(window.ethereum),
}).extend(publicActions);
export const writeContract = async ({
  address,
  abi,
  functionName,
  args,
  value,
}: IWriteContractParams): Promise<`0x${string}` | undefined> => {
  try {
    const [account] = await walletClient.getAddresses();
    console.log('account', account);
    await walletClient.switchChain({ id: blastSepolia.id });
    const { request } = await walletClient.simulateContract({
      address,
      abi,
      functionName,
      account,
      args,
      value,
    });
    console.log('result', request);

    const hash = await walletClient.writeContract(request);
    console.log('hash', hash);
    return hash;
  } catch (err) {
    if (err instanceof BaseError) {
      const revertError = err.walk(
        (err) => err instanceof ContractFunctionRevertedError
      );
      if (revertError instanceof ContractFunctionRevertedError) {
        const errorName = revertError.data?.errorName ?? '';
        console.log(errorName);
      }
    }
    console.log(err);
    throw new Error('Fail to write tx');
  }
};
export const readContract = async ({
  address,
  abi,
  functionName,
  args,
}: IReadContractParams) => {
  try {
    await walletClient.switchChain({ id: blastSepolia.id });
    const dataFromChain = await walletClient.readContract({
      address,
      abi,
      functionName,
      args,
    });
    if (!dataFromChain) throw new Error('Fail to read data from contract');
    return dataFromChain;
  } catch (err) {
    console.log(err);
    throw new Error('Fail to read data from contract');
  }
};
export const readNewStartDateFromChain = async (
  id: number
): Promise<string> => {
  try {
    const newStartDate = (await walletClient.readContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_CREATE_PROJECT as `0x${string}`,
      abi: createProjectAbi,
      functionName: 'projectsViewSteps',
      args: [id],
    })) as unknown[];
    const date = new Date(Number(newStartDate[5] as BigInt) * 1000);
    return date.toISOString();
  } catch (err) {
    console.log(err);
    throw new Error('Fail to read new start date from chain');
  }
};
export const createProject = async (
  args: (string | number | bigint | number[])[],
  id: string
): Promise<string> => {
  try {
    console.log('args', args);
    const hash = await writeContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_CREATE_PROJECT as `0x${string}`,
      abi: createProjectAbi,
      functionName: 'create',
      args: args as (string | number | bigint | number[])[],
    });
    const { from: account } = await walletClient.waitForTransactionReceipt({
      hash: hash!,
    });
    console.log('account', account);
    const projectOnchainId = await getContractIdFromKeeper(account);
    if (!projectOnchainId) throw new Error('There is not project on chain');
    return projectOnchainId.toString();
  } catch (err) {
    console.log(err);
    throw new Error('Fail to create project');
  }
};
export const getContractIdFromKeeper = async (account: string) => {
  try {
    const idsArray = (await walletClient.readContract({
      address: process.env
        .NEXT_PUBLIC_CONTRACT_PROJECTS_KEEPER as `0x${string}`,
      abi: projectsKeeperAbi,
      functionName: 'getArrOfCreator',
      args: [account as `0x${string}`],
    })) as Array<number>;
    return idsArray.length > 0 ? idsArray.at(-1) : null;
  } catch (error) {
    console.log(error);
    throw new Error('Fail to get onchain project id');
  }
};
export const startProjectOnChain = async (id: number): Promise<void> => {
  try {
    const hash = await writeContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_START_FUNDS as `0x${string}`,
      abi: startFundsAbi,
      functionName: 'start',
      args: [id] as (string | number | bigint | number[])[],
    });
    await walletClient.waitForTransactionReceipt({
      hash: hash!,
    });
  } catch (err) {
    console.log(err);
    throw new Error('Fail to start project');
  }
};
export const readTokenAddressFromChain = async (
  id: number
): Promise<string> => {
  try {
    const [tokenAddress] = (await walletClient.readContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_CREATE_PROJECT as `0x${string}`,
      abi: createProjectAbi,
      functionName: 'projectsViewMain',
      args: [id],
    })) as unknown[];
    return tokenAddress as string;
  } catch (err) {
    console.log(err);
    throw new Error('Fail to read new start date from chain');
  }
};
export const beAnAngel = async (id: number, value: string): Promise<void> => {
  try {
    const hash = await writeContract({
      address: process.env.NEXT_PUBLIC_ORDERING as `0x${string}`,
      abi: orderingAbi,
      functionName: 'order',
      args: [id],
      value: parseEther(value),
    });
    const res = await walletClient.waitForTransactionReceipt({
      hash: hash!,
    });
  } catch (err) {
    console.log(err);
    throw new Error('Fail to become an angel');
  }
};
export const getDataForProgressBar = async (
  id: number
): Promise<Record<string, string>> => {
  try {
    const data = await publicClient.readContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_CREATE_PROJECT as `0x${string}`,
      abi: createProjectAbi,
      functionName: 'projectsViewPrice',
      args: [id],
    });
    const bigIntArray = data as bigint[];
    const totalSupply = formatEther(bigIntArray[0]);
    const raised = formatEther(bigIntArray[bigIntArray.length - 1]);
    return { totalSupply, raised };
  } catch (err) {
    console.log(err);
    throw new Error('Fail to get data for progress bar');
  }
};
export const getTranсhe = async (id: number): Promise<void> => {
  try {
    const hash = await writeContract({
      address: process.env.NEXT_PUBLIC_GET_FUND_FOR_PROJECT as `0x${string}`,
      abi: getFundForProjectAbi,
      functionName: 'getNextFund',
      args: [id],
    });
    const res = await walletClient.waitForTransactionReceipt({
      hash: hash!,
    });
  } catch (err) {
    console.log(err);
    throw new Error('Fail to get tranche');
  }
};
export const claimTokens = async (id: number): Promise<void> => {
  try {
    const hash = await writeContract({
      address: process.env.NEXT_PUBLIC_CLAIMING as `0x${string}`,
      abi: claimingAbi,
      functionName: 'claimTokens',
      args: [id],
    });
    const res = await walletClient.waitForTransactionReceipt({
      hash: hash!,
    });
  } catch (err) {
    console.log(err);
    throw new Error('Fail to claim tokens');
  }
};
export const refundEth = async (id: number): Promise<void> => {
  try {
    const hash = await writeContract({
      address: process.env.NEXT_PUBLIC_ORDERING as `0x${string}`,
      abi: orderingAbi,
      functionName: 'refundUsers',
      args: [id],
    });
    const res = await walletClient.waitForTransactionReceipt({
      hash: hash!,
    });
  } catch (err) {
    console.log(err);
    throw new Error('Fail to refund eth');
  }
};
export const negativeVote = async (id: number): Promise<void> => {
  try {
    const hash = await writeContract({
      address: process.env.NEXT_PUBLIC_VOTING as `0x${string}`,
      abi: votingAbi,
      functionName: 'vote',
      args: [id],
    });
    const res = await walletClient.waitForTransactionReceipt({
      hash: hash!,
    });
  } catch (err) {
    console.log(err);
    throw new Error('Fail to make negative vote');
  }
};
export const claimAllProjectTokens = async (id: number): Promise<void> => {
  try {
    const hash = await writeContract({
      address: process.env.NEXT_PUBLIC_GET_FUND_FOR_PROJECT as `0x${string}`,
      abi: getFundForProjectAbi,
      functionName: 'getAllProjectTokens',
      args: [id],
    });
    const res = await walletClient.waitForTransactionReceipt({
      hash: hash!,
    });
  } catch (err) {
    console.log(err);
    throw new Error('Fail to claim all tokens');
  }
};
export const getUserOrderedTokens = async (
  id: number,
  address: string
): Promise<number> => {
  try {
    const data = (await publicClient.readContract({
      address: process.env.NEXT_PUBLIC_ORDERING as `0x${string}`,
      abi: orderingAbi,
      functionName: 'getUserOrderedTokens',
      args: [id, address],
    })) as number;
    console.log('DATA FROM getUserOrderedTokens: ', data);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Fail to get data for progress bar');
  }
};
export const getAvailableToClaimTokensByUser = async (
  id: number,
  address: string
): Promise<number> => {
  try {
    const data = (await publicClient.readContract({
      address: process.env.NEXT_PUBLIC_CLAIMING as `0x${string}`,
      abi: claimingAbi,
      functionName: 'earned',
      args: [id, address],
    })) as number;
    console.log('DATA FROM getAvailableToClaimTokensByUser: ', data);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Fail to get data for progress bar');
  }
};
