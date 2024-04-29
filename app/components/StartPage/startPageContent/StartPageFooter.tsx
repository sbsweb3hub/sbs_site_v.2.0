import React from "react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarBrand,
    Image,
    Link
} from '@nextui-org/react'

const StartPageFooter = () => {
    
    return (
        <div className="relative flex flex-col w-[100%] justify-end h-[170px] bg-[#999] mt-[62px]">
            <div className="absolute flex gap-[6px] right-[31px] top-[21px]">
                <Link isExternal href="https://twitter.com/SBSweb3Hub">
                    <Image 
                        width={36}
                        height={36}
                        src="/twitter.svg"
                    />
                </Link>
                <Link isExternal href="https://t.me/SBSweb3">
                    <Image 
                        width={36}
                        height={36}
                        src="/telegram.svg"
                    />
                </Link>
            </div>
            <Navbar className="bg-[#999] mb-[42px]">
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

export default StartPageFooter