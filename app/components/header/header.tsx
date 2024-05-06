import Link from "next/link";
import { getSession } from "@/services/auth-service";
import { ConnectWalletButton } from "./auth/connectWalletButton";
import ButtonCreateProject from "./buttonCreateProject";
import { DisconnectWalletButton } from "./auth/disconnectWalletButton";
import { AuthRolesEnum } from "@/types";

const Header = async () => {
    const session = await getSession()
    return (
        <header className="bg-[#000] text-white text-lg p-4 flex justify-between items-center">
            <Link href='/app'>MAIN</Link>
            {session
                ? (session.role === AuthRolesEnum.FOUNDER ? <Link href='/app/founder'>My project</Link> : <Link href='/app/founder/create'>Create project</Link>)
                : <ButtonCreateProject />
            }
            {session ? <DisconnectWalletButton address={session.address} /> : <ConnectWalletButton />}
        </header>
    );
};

export default Header;
