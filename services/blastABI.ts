/** @format */

export const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_contract_Keeper',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'contract ProjectToken',
            name: 'projectContract',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'projectName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'projectSymbol',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct ProjectManagerMain.CreateMain',
        name: 'project',
        type: 'tuple',
      },
    ],
    name: 'ProjectCreatedMain',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxTokenSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minTokenSale',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'publicSale',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isProjectAlive',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isPrijectGetAllTokens',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'fundsForProject',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct ProjectManagerPrice.CreatePrice',
        name: 'project',
        type: 'tuple',
      },
    ],
    name: 'ProjectCreatedPrice',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint8',
            name: 'amountSteps',
            type: 'uint8',
          },
          {
            internalType: 'uint256[]',
            name: 'timeSteps',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'rewardTimePerStep',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'dateSteps',
            type: 'uint256[]',
          },
          {
            internalType: 'bool[]',
            name: 'isStepsPerProject',
            type: 'bool[]',
          },
          {
            internalType: 'uint256',
            name: 'startTime',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isPublicSale',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct ProjectManagerSteps.CreateSteps',
        name: 'project',
        type: 'tuple',
      },
    ],
    name: 'ProjectCreatedSteps',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'projectIdSteps',
        type: 'uint256',
      },
    ],
    name: 'ProjectStartSteps',
    type: 'event',
  },
  {
    inputs: [],
    name: 'claimableAddr',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectIdPrice',
        type: 'uint32',
      },
    ],
    name: 'closeProject',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
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
        name: '_projectId',
        type: 'uint32',
      },
    ],
    name: 'deleteProjectFromArr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFundForProjectAddr',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    name: 'isPublicSale',
    outputs: [
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
        name: '_projectIdPrice',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: '_tokenSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_fundsForProject',
        type: 'uint256',
      },
    ],
    name: 'orderPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectIdSteps',
        type: 'uint32',
      },
      {
        internalType: 'bool[]',
        name: '_isStepsPerProject',
        type: 'bool[]',
      },
    ],
    name: 'orderSteps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'orderingAddr',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'orderingAddrStep',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    name: 'ownerOfProject',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'projectIdMain',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'projectIdPrice',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'projectIdSteps',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
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
        internalType: 'address',
        name: '_startAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_claimableAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_getFundForProjectAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_orderingAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_votingAddr',
        type: 'address',
      },
    ],
    name: 'setAllowedAddrs',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectIdPrice',
        type: 'uint32',
      },
    ],
    name: 'setGettingAllTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'setNewOwner',
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
      {
        internalType: 'address',
        name: '_newOwnerOfProject',
        type: 'address',
      },
    ],
    name: 'setNewOwnerOfProject',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'startAddr',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokensForProjectAddrStep',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokensMainForProjectAddr',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectIdSteps',
        type: 'uint32',
      },
      {
        internalType: 'uint8',
        name: '_stepIsLive',
        type: 'uint8',
      },
    ],
    name: 'updateAfterSBSFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_projectIdSteps',
        type: 'uint32',
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
      {
        internalType: 'uint256[]',
        name: '_rewardTimePerStep',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_dateSteps',
        type: 'uint256[]',
      },
      {
        internalType: 'bool[]',
        name: '_isStepsPerProject',
        type: 'bool[]',
      },
      {
        internalType: 'uint256',
        name: '_startTime',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isPublicSale',
        type: 'bool',
      },
    ],
    name: 'updateSteps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'votingAddr',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    name: 'witchStepAlive',
    outputs: [
      {
        internalType: 'uint8',
        name: 'step',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
