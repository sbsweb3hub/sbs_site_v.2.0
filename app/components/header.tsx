import { getSession } from "@/auth/lib";
import Link from "next/link";
import ConnectWallet from "./auth/connectWalletButton";


const Header = async () => {
    const session = await getSession();

    return (
        <header className="bg-blue-500 text-white text-lg p-4 flex justify-between items-center">
            <Link href='/'>Header Content</Link>
            <Link href='/projects'>PROJECTS</Link>
            {session && <Link href='/private'>Private lounge</Link>}
            <ConnectWallet />
        </header>
    );
};

export default Header;
