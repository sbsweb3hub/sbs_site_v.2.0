import React from "react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarBrand,
    Image,
    Link
} from '@nextui-org/react'
import '@/app/components/footer.css'

const Footer = () => {
    return (
        <div className="relative flex flex-col w-[100%] justify-center items-center h-[170px] sm:h-[180px] bg-[#000] mt-[0px]">
            <div className="flex items-center max-[500px]:w-full max-[500px]:justify-end gap-[10px] top-[21px] max-[500px]:mr-[40px]">
                <Link isExternal href="https://twitter.com/angel_forge_">
                    <Image 
                        width={20}
                        height={20}
                        src="/xfooter.png"
                        radius="none"
                        alt="twitter"
                    />
                </Link>
                <Link isExternal href="https://t.me/angel_forge">
                    <Image 
                        width={22}
                        height={22}
                        src="/tgfooter.png"
                        radius="none"
                        alt="telegramm"
                    />
                </Link>
                <Link isExternal href="https://sbsweb3hubs-organization.gitbook.io/angelforge-white-paper/">
                    <Image 
                        width={22}
                        height={22}
                        src="/gitfooter.png"
                        radius="none"
                        alt="git"
                    />
                </Link>
                <Link isExternal href="https://medium.com/@AngelForge">
                    <Image
                        width={22}
                        height={22}
                        src="/medium64.png"
                        radius="none"
                        alt="medium"
                    />
                </Link>
                <Link isExternal href="https://www.linkedin.com/company/angelforge/">
                    <Image
                        width={25}
                        height={25}
                        src="/linkedin.png"
                        radius="none"
                        alt="linkedin"
                    />
                </Link>
            </div>
            <div className="absolute top-[10px] left-0 sm:top-[50px] sm:left-[20px] z-50">
                <div className="relative flex items-center">
                    <div className="absolute left-[0px]">
                        <Image
                            src="/forgelogo.png"
                            width={90}
                            height={90}
                            radius="none"
                            alt="logo"
                        />
                    </div>
                    <p className="text-[14px] ml-[62px] mt-[8px] text-[#FCFC03] italic">
                        AngelForge
                    </p>
                </div>
            </div>
            <Navbar className="bg-[#000] mt-[50px] sm:mt-0 mb-[20px]">
                <NavbarBrand>
                    
                </NavbarBrand>
                <NavbarContent justify="center" className="flex flex-col sm:flex-row gap-6">
                    <NavbarItem>
                        <Link 
                            href="/privacy_policy"
                            className="text-[24px]"
                            color="foreground"
                        >
                            Privacy Policy
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link 
                            href="/terms"
                            className="text-[24px]"
                            color="foreground"
                        >
                            Terms & Conditions
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
        
                </NavbarContent>
            </Navbar>
            <div className="absolute hidden lg:block top-[20px] right-[20px] z-[50]">
                <Link
                    href='https://solidityscan.com/published-report/project/a13965e63034021b'
                    target="blank"
                >
                    <Image 
                        src="/solidityscan.svg"
                        height={250}
                        width={270}
                    />
                </Link>
            </div>
            <div className="solidityscan absolute lg:hidden top-[20px] max-[500px]:top-[100px] right-[20px] z-[50]">
                <Link
                    href='https://solidityscan.com/published-report/project/a13965e63034021b'
                    target="blank"
                >
                    <Image
                        src="/solidityscanmb.svg"
                        height={103}
                        width={103}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Footer