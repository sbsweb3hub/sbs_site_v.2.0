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
            <div className="flex items-center gap-[10px] right-[50%] top-[21px]">
                <Link isExternal href="https://twitter.com/SBSweb3Hub">
                    <Image 
                        width={20}
                        height={20}
                        src="/xfooter.png"
                        radius="none"
                    />
                </Link>
                <Link isExternal href="https://t.me/SBSweb3">
                    <Image 
                        width={22}
                        height={22}
                        src="/tgfooter.png"
                        radius="none"
                    />
                </Link>
                <Link isExternal href="https://t.me/SBSweb3">
                    <Image 
                        width={22}
                        height={22}
                        src="/gitfooter.png"
                        radius="none"
                    />
                </Link>
            </div>
            <Navbar className="bg-[#000] mt-[50px] sm:mt-0 mb-[20px]">
                <NavbarBrand>

                </NavbarBrand>
                <NavbarContent justify="center" className="flex flex-col sm:flex-row gap-6">
                    <NavbarItem>
                        <Link 
                            isExternal 
                            href="https://sbsweb3hubs-organization.gitbook.io/light-paper"
                            className="text-[24px]"
                            color="foreground"
                        >
                            GitBook
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