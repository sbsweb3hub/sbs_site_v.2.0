import React from "react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarBrand,
    Image,
    Link
} from '@nextui-org/react'

const Footer = () => {
    return (
        <div className="relative flex flex-col w-[100%] justify-end items-center h-[170px] sm:h-[120px] bg-[#000] mt-[0px]">
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
                <Link isExternal href="https://sbsweb3hubs-organization.gitbook.io/light-paper">
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
                            src="forgelogo.png"
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
                            isDisabled 
                            isExternal 
                            href="#"
                            className="text-[24px]"
                            color="foreground"
                        >
                            Privacy Statement
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            isDisabled
                            isExternal 
                            href="#"
                            className="text-[24px]"
                            color="foreground"
                        >
                            Cookie Policy
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">

                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default Footer