import Link from "next/link";
import { ConnectWalletButton } from "./auth/connectWalletButton";
import ButtonCreateProject from "./buttonCreateProject";
import { DisconnectWalletButton } from "./auth/disconnectWalletButton";
import { AuthRolesEnum } from "@/types";
import { getSession } from "@/services/auth-service";
import { getDataFromBlastApi, getPoints } from "@/services/blast-api-service";



const Header = async () => {
    const session = await getSession()
    //@todo - make revalidate SWR
    const { balancesByPointType } = await getDataFromBlastApi()

    return (
        <header className="bg-[#000] text-white text-[24px] flex justify-between items-center h-[81px]">
            <div className="flex items-center ml-[37px] gap-[43px]">
                <Link href='/app'>Home</Link>
                <Link href='/app/projects'>Projects</Link>
                {session
                    ? (session.role === AuthRolesEnum.FOUNDER ? <Link href='/app/founder'>My project</Link> : <Link href='/app/founder/create'>Create project</Link>)
                    : <ButtonCreateProject />
                }
            </div>
            {session ? <DisconnectWalletButton points={balancesByPointType ?? 'n/a'} address={session.address} /> : <ConnectWalletButton />}
        </header>
    );
};

export default Header;
