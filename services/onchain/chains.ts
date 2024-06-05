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
