/** @format */

import { defineChain } from 'viem';

export const blast = defineChain({
  id: 1,
  name: 'Blast',
  nativeCurrency: { name: 'Blast', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://blastl2-mainnet.public.blastapi.io'] },
  },
  blockExplorers: {
    default: { name: 'Blastscan', url: 'https://blastscan.io' },
  },
});
