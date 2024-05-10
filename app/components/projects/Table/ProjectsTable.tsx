"use client";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { COLUMNS } from "./_constants";
import { Project } from "./_types";
import { SearchInput, renderCell } from "./_components";
import { ProjectType } from "@/types";



export default function ProjectsTable({ projects }: { projects: Array<ProjectType> }) {

  return (
    <Tabs
      aria-label="Projects"
      variant="light"
      classNames={{
        cursor: "w-full bg-[#22d3ee] group-data-[selected=true]:bg-[#fff]",
        tab: "py-4 px-8 h-12",
        tabContent: "group-data-[selected=true]:text-[#000]",
      }}
    >
      <Tab key="active-projects" title="Active Projects">
        <Table
          aria-label="Projects Table"
          color="danger"
          selectionMode="single"
          onRowAction={(key) => {
            return <Link href={`/app/projects/${key}`} />;
          }}
          isStriped
          isHeaderSticky
          classNames={{
            wrapper: "p-0 bg-[#292929] data-[empty=true]:bg-[#fff]",
            th: "bg-[#A6A6A6] text-[#202020]",
            tbody: "bg-[#292929]",
            td: "group-data-[odd=true]:bg-[#3F3F3F]",
          }}
          topContent={<SearchInput />}
          topContentPlacement="outside"
        >
          <TableHeader columns={COLUMNS}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No projects found"} items={projects}>
            {(item: ProjectType) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Tab>
      <Tab key="my-invests" title="My invests">
        <Table
          aria-label="My projects invests"
          classNames={{
            wrapper: "p-0 bg-[#292929] data-[empty=true]:bg-[#fff]",
            th: "bg-[#A6A6A6] text-[#202020]",
            tbody: "bg-[#292929]",
            td: "group-data-[odd=true]:bg-[#3F3F3F]",
          }}
          topContent={<SearchInput />}
          topContentPlacement="outside"
        >
          <TableHeader columns={COLUMNS}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"You do not have investment"}>
            {[]}
          </TableBody>
        </Table>
      </Tab>
    </Tabs>
  );
}
