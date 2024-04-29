"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "@/public/money_bag.png";
import { Button } from "@nextui-org/react";
import Wave from "@/public/splash_png.png";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@nextui-org/dropdown";
import ConnectButton from "./ConnectButton"; 
import { useWalletStore } from "@/service/store";
import SwitchNetworkDropdown from "./networkDropdown";


const Header = () => {

  const { isConnect, handleConnectNotice } = useWalletStore();

  return (
    <div className="sticky top-0 z-10 flex justify-center relative shadow-lg h-[85px] items-center bg-[#a0dd85]">
      <Link
        href={"/"}
        className="max-[960px]:invisible flex absolute items-center left-[36px]"
      >
        <Image src={Logo} alt={""} height={40}></Image>
      </Link>

      {isConnect ? (
        <>
      <div className="max-[960px]:invisible flex flex-row justify-between content-center">
        <Link
          href={"/create"}
          className="font-inter text-white hover:text-[#FFFFFF8F] font-bold text-[24px] not-italic"
        >
          Create Project
        </Link>
        <Image src={Wave} alt={""} height={42} className="mx-[13px]" />
        {!isConnect ? (
          <Link
            href=""
            onClick={handleConnectNotice}
            className="font-inter text-white hover:text-[#FFFFFF8F] font-bold text-[24px] not-italic"
          >
            My Projects
          </Link>
        ) : (
          <Link
            href="/ownerprojects"
            className="font-inter text-white hover:text-[#FFFFFF8F] font-bold text-[24px] not-italic"
          >
            My Project
          </Link>
        )}
      </div>
      <div className="min-[960px]:invisible flex absolute left-[17px]">
        <Dropdown>
          <DropdownTrigger>
            <Image src={"/burger.svg"} alt="" width={40} height={40}></Image>
          </DropdownTrigger>
          <DropdownMenu aria-label="menu" variant="light">
            <DropdownSection showDivider>
              <DropdownItem>
                <Link href={"/create"} className="font-inter">
                  Create Project
                </Link>
              </DropdownItem>
            </DropdownSection>
            <DropdownItem>
              <Link href={"/ownerprojects"} className="font-inter">
                My Projects
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      </>
       ) : ( 
        <p className="typing-text text-white text-[24px] not-italic">
          SBS Web3 Hub
        </p>
        // <div>
        //   <DropdownMenu>
        //    <DropdownItem>
        //       <Link href={"/orders"} className="font-inter">
        //         Your Orders
        //       </Link>
        //     </DropdownItem>
        //   </DropdownMenu>
        //   </div>
        )}
      <div className="absolute right-[170px]">
          <SwitchNetworkDropdown />
      </div>
      <div className="absolute right-[17px]">
        <ConnectButton />
      </div>
    </div>
  );
};
export default Header;
