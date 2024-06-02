import Link from "next/link";
import Image from "next/image";
import { ConnectWalletButton } from "./auth/connectWalletButton";
import ButtonCreateProject from "./buttonCreateProject";
import { DisconnectWalletButton } from "./auth/disconnectWalletButton";
import { AuthRolesEnum } from "@/types";
import { getSession } from "@/services/auth-service";
import { getDataFromBlastApi } from "@/services/blast-api-service";


const Header = async () => {
    const session = await getSession()
    //@todo - make revalidate SWR
    const { balancesByPointType } = await getDataFromBlastApi()
    const points = parseFloat(balancesByPointType?.LIQUIDITY?.available)?.toFixed(2) ?? "n/a"
    return (
        <header className="bg-[#000] text-white text-[18px] flex justify-between items-center h-[81px]">
            <div className="flex items-center">
                <Link
                    href='/'
                >
                    <Image
                        src='/forgelogo.png'
                        alt="logo"
                        width={90}
                        height={90}
                    />
                </Link>
                <div className="flex items-center ml-[0px] gap-[43px]">
                    <Link href='/app'>Home</Link>
                    <Link href='/app/projects'>Projects</Link>
                    {session
                        ? (session.role === AuthRolesEnum.FOUNDER ? <Link href='/app/founder'>My project</Link> : <Link href='/app/founder/create'><span className="text-[#FCFC03]">Create project</span></Link>)
                        : <ButtonCreateProject />
                    }
                </div>
            </div>
            {session ? <DisconnectWalletButton points={points} address={session.address} /> : <ConnectWalletButton />}
        </header>
    );
};

export default Header;
