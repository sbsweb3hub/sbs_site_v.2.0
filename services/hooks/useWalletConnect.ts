/** @format */
import { useRouter } from 'next/navigation';
import { injected } from 'wagmi/connectors';
import { useConnect, useDisconnect, useSignMessage } from 'wagmi';

export default function useWalletConnect() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const router = useRouter();

  const handleConnectWallet = async () => {
    try {
      const {
        accounts: [address],
      } = await connectAsync({ connector: injected() });

      const nonceResponse = await fetch(`/api/v1/auth/nonce/${address}`);
      const { nonce } = await nonceResponse.json();
      if (!nonceResponse.ok) throw new Error('Failed to fetch nonce');

      const message = `Welcome to Blast!\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n${address.toLowerCase()}\n\nNonce:\n${nonce}`;
      const signature = await signMessageAsync({ message });

      const loginResponse = await fetch(`/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signature, address }),
      });
      if (!loginResponse.ok) throw new Error('Failed to login');
      router.refresh();
    } catch (err) {
      console.error('Failed to connect wallet:', err);
      await disconnectAsync();
      router.push('/app');
    }
  };

  return { handleConnectWallet };
}
