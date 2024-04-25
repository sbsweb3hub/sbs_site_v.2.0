'use client'

import { useEffect } from "react"
import { useAccount } from "wagmi"
import { walletConnect } from "wagmi/connectors"
import { ethers } from "ethers"
import AuthService from "@/auth/auth-service"
// import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

//@todo - refactor this
export default function ConnectButton() {
    const { address, isConnected, isDisconnected } = useAccount()
    const router = useRouter();

    useEffect(() => {
        if (isDisconnected) {
            (async () => {
                await AuthService.logout();
                localStorage.removeItem('walletConnected');
                router.push('/')
                router.refresh()

            })()
        }
    }, [isDisconnected]);



    useEffect(() => {
        if (isConnected) {
            const isAlreadySigned = localStorage.getItem('walletConnected');
            if (!isAlreadySigned) {
                (async () => {
                    try {
                        const provider = new ethers.BrowserProvider(window.ethereum);
                        const signer = await provider.getSigner();
                        const fetchedNonce = await AuthService.getNonce(address!);
                        console.log("fetchedNonce address:", fetchedNonce);
                        const signature = await signer.signMessage(fetchedNonce?.toString()!);
                        await AuthService.sendSign(address!, signature);
                        localStorage.setItem('walletConnected', 'true');
                        router.refresh()

                    } catch (error) {
                        console.log(error);
                    }
                })();
            }
        } else {
            localStorage.removeItem('walletConnected');
        }
    }, [isConnected]);




    return <w3m-button />
}  