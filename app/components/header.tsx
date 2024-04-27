import { getSession } from "@/auth/lib";
import Link from "next/link";
import ConnectWallet from "./auth/connectWalletButton";
import { headers } from "next/headers";


const Header = async () => {
    const session = await getSession();
    const protocol = headers().get('x-forwarded-proto') as string
    const host = headers().get('host') as string
    const url = protocol + "://" + host
    console.log(url)

    return (
        <header className="bg-blue-500 text-white text-lg p-4 flex justify-between items-center">
            <Link href='/'>Header Content</Link>
            <Link href='/projects'>PROJECTS</Link>
            {session && <Link href='/private'>Private lounge</Link>}
            <ConnectWallet url={url} />
        </header>
    );
};

export default Header;
