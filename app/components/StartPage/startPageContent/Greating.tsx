import React from "react";
import {Divider, Link} from "@nextui-org/react";

export default function Greating() {
  return (
    <div className="h-[350px]">
        <ul className="list-disc ml-[25px] mr-[15px]">
          <li>Turn an idea into a finished product using the infrastructure / SBS-Hub. </li>
          <Divider className="my-4" />
          <li>SBS-Hub provides all the tools and competencies that are necessary for the implementation of each specific task.</li>
          <Divider className="my-4" />
          <li> Do you have an idea? - come and implement it.</li>
          <li>Are you a professional in your field? - come and find the perfect project for yourself.</li>
          <li>Do you have a desire to support the project? - come and become the angel of the future unicorn. </li>
      </ul>
      <Divider className="my-4"/>
        <Link
          isExternal
          showAnchorIcon
          href="https://sbsweb3hubs-organization.gitbook.io/light-paper/"
        >
          Explore more on GitBook.
        </Link>
    </div>
  );
}
