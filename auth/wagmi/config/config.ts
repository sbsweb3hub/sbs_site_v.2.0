/** @format */

import { http, cookieStorage, createStorage, createConfig } from 'wagmi';
import { base, blast, mainnet } from 'wagmi/chains';
import { injected, safe, walletConnect } from 'wagmi/connectors';

const projectId = '780aa46bb5aa77aacfdf8cdbe431c38f';

export const config = createConfig({
  chains: [blast, mainnet, base],
  syncConnectedChain: true,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [injected(), walletConnect({ projectId }), safe()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [blast.id]: http(),
  },
});
