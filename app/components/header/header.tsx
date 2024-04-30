import Link from "next/link";
import { getSession } from "@/services/auth-service";
import { ConnectWalletButton } from "../auth/connectWalletButton";
import { DisconnectWalletButton } from "../auth/disconnectWalletButton";
import { findProjectByFounder } from "@/services/project-service";
import ButtonCreateProject from "./buttonCreateProject";


const Header = async () => {
    const session = await getSession();
    let isFounder = undefined;
    if (session) isFounder = await findProjectByFounder(session?.address)

    return (
        <header className="bg-blue-500 text-white text-lg p-4 flex justify-between items-center">
            <Link href='/app'>MAIN</Link>
            {/* @todo make role for founder */}
            {session ? (isFounder ? <Link href='/app/founder'>My project</Link> : <Link href='/app/founder/create'>Create project</Link>)
                : <ButtonCreateProject />
            }
            {session ? <DisconnectWalletButton address={session.address} /> : <ConnectWalletButton />}
        </header>
    );
};

export default Header;
