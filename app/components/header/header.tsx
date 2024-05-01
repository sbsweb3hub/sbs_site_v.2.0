import Link from "next/link";
import { decrypt, getSession } from "@/services/auth-service";
import { cookies } from "next/headers";
import { ConnectWalletButton } from "./auth/connectWalletButton";
import { DisconnectWalletButton } from "./auth/disconnectWalletButton";
// import { findProjectByFounder } from "@/services/project-service";
import ButtonCreateProject from "./buttonCreateProject";


const Header = async () => {
    // const session = await getSession();
    // console.log('HEADER session', session)
    const resp = cookies().get('session')?.value;
    let session = null
    if (resp) {
        session = await decrypt(resp)
        console.log('session', session)
    }
    //@todo find user in DB and return OR refresh token?

    // let isFounder = undefined;
    // if (session) isFounder = await findProjectByFounder(session?.address)

    return (
        <header className="bg-[#000] text-white text-lg p-4 flex justify-between items-center">
            <Link href='/app'>MAIN</Link>
            {/* @todo make role for founder */}
            {session
                ? (session.isFounder ? <Link href='/app/founder'>My project</Link> : <Link href='/app/founder/create'>Create project</Link>)
                : <ButtonCreateProject />
            }
            {session ? <DisconnectWalletButton address={session.address} /> : <ConnectWalletButton />}
        </header>
    );
};

export default Header;
