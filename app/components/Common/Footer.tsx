import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "@/public/logo_w3a.svg";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const Footer = () => {
    return (
        <>
        <div className="sticky bottom-0 z-10 min-[960px]:invisible flex justify-center relative shadow-lg h-[85px] items-center bg-[#6078F9] mt-[100px]">
            <Link href={"/"} className="flex absolute items-center right-[36px]">
                <Image src={Logo} alt={""} height={40}></Image>
            </Link>
        
         {/* <Table aria-label="Example static collection table">
         <TableHeader>
           <TableColumn>NAME</TableColumn>
           <TableColumn>ROLE</TableColumn>
           <TableColumn>STATUS</TableColumn>
         </TableHeader>
         <TableBody>
           <TableRow key="1">
             <TableCell>Tony Reichert</TableCell>
             <TableCell>CEO</TableCell>
             <TableCell>Active</TableCell>
           </TableRow>
           <TableRow key="2">
             <TableCell>Zoey Lang</TableCell>
             <TableCell>Technical Lead</TableCell>
             <TableCell>Paused</TableCell>
           </TableRow>
           <TableRow key="3">
             <TableCell>Jane Fisher</TableCell>
             <TableCell>Senior Developer</TableCell>
             <TableCell>Active</TableCell>
           </TableRow>
           <TableRow key="4">
             <TableCell>William Howard</TableCell>
             <TableCell>Community Manager</TableCell>
             <TableCell>Vacation</TableCell>
           </TableRow>
         </TableBody>
       </Table> */}
       </div>
       </>
    );

};

export default Footer