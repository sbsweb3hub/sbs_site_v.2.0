/** @format */

import {
  Abi,
  BaseError,
  Client,
  ContractFunctionRevertedError,
  createPublicClient,
  createWalletClient,
  custom,
  decodeFunctionResult,
  http,
  publicActions,
} from 'viem';
import { defineChain } from 'viem';
import { changeProjectStatus } from './project-service';
import { ProjectStatusEnum } from '@/types';
const blastSepolia = defineChain({
  id: 168587773,
  name: 'blastSepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia.blast.io'],
      webSocket: ['wss://blast-sepolia.drpc.org'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://sepolia.blastscan.io/' },
  },
});
export const startFundsAbi: Abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectId',
        type: 'uint32',
      },
    ],
    name: 'start',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
export const createProjectAbi: Abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'projectId',
        type: 'uint32',
      },
    ],
    name: 'projectsViewSteps',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'projectId',
        type: 'uint32',
      },
    ],
    name: 'projectsViewMain',
    outputs: [
      {
        internalType: 'contract ProjectToken',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_projectName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectSymbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_maxTokenSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minTokenSale',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_publicSale',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: '_amountSteps',
        type: 'uint8',
      },
      {
        internalType: 'uint256[]',
        name: '_timeSteps',
        type: 'uint256[]',
      },
    ],
    name: 'create',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'projectId',
        type: 'uint32',
      },
    ],
    name: 'projectsViewMain',
    outputs: [
      {
        internalType: 'contract ProjectToken',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export const projectsKeeperAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_creator',
        type: 'address',
      },
    ],
    name: 'getArrOfCreator',
    outputs: [
      {
        internalType: 'uint32[]',
        name: '',
        type: 'uint32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
export const walletClient = createWalletClient({
  chain: blastSepolia,
  transport: custom(window.ethereum),
}).extend(publicActions);

interface IWriteContractParams {
  address: `0x${string}`;
  abi: Abi;
  functionName: string;
  args?: (string | number | bigint | number[])[];
}

interface IReadContractParams {
  address: `0x${string}`;
  abi: Abi;
  functionName: string;
  args?: (string | number | bigint | number[])[];
}

export const writeContract = async ({
  address,
  abi,
  functionName,
  args,
}: IWriteContractParams): Promise<`0x${string}` | undefined> => {
  try {
    const [account] = await walletClient.getAddresses();
    await walletClient.switchChain({ id: blastSepolia.id });
    const { request } = await walletClient.simulateContract({
      address,
      abi,
      functionName,
      account,
      args,
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
      args: [account],
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
