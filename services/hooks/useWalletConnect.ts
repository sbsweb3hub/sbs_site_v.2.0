/** @format */
import { useRouter } from 'next/navigation';
import { injected } from 'wagmi/connectors';
import { useConnect, useDisconnect, useSignMessage } from 'wagmi';
import { getNonce, login } from '../auth-service';

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
      const { nonce } = await getNonce(address);
      const message = `Welcome to AngelForge!\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n${address.toLowerCase()}\n\nNonce:\n${nonce}`;
      const signature = await signMessageAsync({ message });
      await login({ address, signature });
      router.refresh();
    } catch (err) {
      console.error('Failed to connect wallet:', err);
      await disconnectAsync();
      router.push('/app');
    }
  };

  return { handleConnectWallet };
}
