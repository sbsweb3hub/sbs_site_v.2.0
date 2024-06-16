/** @format */

import { Abi } from 'viem';

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
] as const;
export const createProjectAbi: Abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'projectId',
        type: 'uint32',
      },
    ],
    name: 'projectsViewPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
export const projectsKeeperAbi: Abi = [
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
] as const;
export const orderingAbi: Abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectId',
        type: 'uint32',
      },
    ],
    name: 'order',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectId',
        type: 'uint32',
      },
    ],
    name: 'refundUsers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
export const getFundForProjectAbi: Abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectId',
        type: 'uint32',
      },
    ],
    name: 'getNextFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectId',
        type: 'uint32',
      },
    ],
    name: 'getAllProjectTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
export const claimingAbi: Abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectId',
        type: 'uint32',
      },
    ],
    name: 'claimTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
export const votingAbi: Abi = [
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectId',
        type: 'uint32',
      },
    ],
    name: 'vote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
