import React from "react";
import { Image } from "@nextui-org/react";
import EnterAppButton from "./CustomButton";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex flex-col items-center h-[82px] w-full bg-[#000] bg-opacity-60 backdrop-blur-md fixed z-[20]">
            <div className="flex justify-between w-full">
                <Link
                    href='/'
                >
                    <Image 
                        src='/forgelogo.png'
                        alt="logo"
                        width={80}
                        height={80}
                        radius="none"
                        className="ml-[20px]"
                    />
                </Link>
                <div className="flex scale-[0.6]">
                    <EnterAppButton/>
                </div>
            </div>
        </header>
    )
}

export default Header