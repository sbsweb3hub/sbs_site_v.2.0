import React from "react";
import {Image, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider} from "@nextui-org/react";

export default function FooterStartPage() {
  return (
    <>
      <Divider className="mt-[25px]" />
      <Table className="mt-[25px]" aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="text-center">Social</TableColumn>
          <TableColumn className="text-center">Docs</TableColumn>
          <TableColumn className="text-center">Contacts</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className="cell">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/x_logo.png"
                width={40}
              />
            </TableCell>
            <TableCell className="cell-text">
                GitBook
            {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/gitbook_logo.png"
                width={80}
              /> */}
            </TableCell>
            <TableCell className="cell">
                E-mail
            {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/email_logo.png"
                width={40}
              /> */}
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell className="cell">
                TG_channel
              {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/telegram_logo.png"
                width={40}
              /> */}
            </TableCell>
            <TableCell className="cell-text">
            GitHub
            {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/github_logo2.png"
                width={40}
              /> */}
            </TableCell>
            <TableCell className="cell">
                TG-chat
            {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/telegram_logo.png"
                width={40}
              /> */}
            </TableCell>
          </TableRow>
          {/* <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </>
  );
}
