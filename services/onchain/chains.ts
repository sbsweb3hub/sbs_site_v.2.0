/** @format */

import { defineChain } from 'viem';

export const blastSepolia = defineChain({
  id: 168587773,
  name: 'blastSepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [
        'https://sepolia.blast.io',
        'https://blast-sepolia.blockpi.network/v1/rpc/public',
        'https://blast-sepolia.drpc.org',
      ],
      webSocket: ['wss://blast-sepolia.drpc.org'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://sepolia.blastscan.io/' },
  },
});

export const blastMain = defineChain({
  id: 81457,
  name: 'Blast Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [
        'https://rpc.ankr.com/blast',
        'https://blast.din.dev/rpc',
        'https://blastl2-mainnet.public.blastapi.io',
        'https://blast.blockpi.network/v1/rpc/public',
      ],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://blastscan.io' },
  },
})
