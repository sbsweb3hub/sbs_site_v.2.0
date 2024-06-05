import React from "react"
import CustomAccordion from "./CustomAccordion/CustomAccordion";
import { Divider } from "@nextui-org/react";

const angelContent =
"Angel investors can mitigate investment risks and oversee the project implementation process. They gain a clear understanding of the team's integrity and commitment to following the established steps for product creation.";
const creatorContent =
"Project creators have the opportunity to earn the trust of angels by demonstrating their commitment to product development. They can rely on consistent financing through decentralized distribution via smart contracts.";
const industryContent =
"We enhance the startup support ecosystem by creating conditions conducive to launching new, fully developed products. Increased availability of tools fosters competition, driving the development of superior services, user-friendly interfaces, and cost-effective solutions.";


const OurUsers = () => {
    return (
        <CustomAccordion label="Our Users">
            <div className="flex flex-col items-center">
            <p className="text-[24px] text-[#D6DA1D]">
                Web3 business angels
            </p><br/>
            <p className="mb-[10px]">
                {angelContent}
            </p>
            <Divider/>
            <p className="text-[24px] mt-[15px] text-[#D6DA1D]">
                Project Creators
            </p><br/>
            <p className="mb-[10px]">
                {creatorContent}
            </p>
            <Divider/>
            <p className="text-[24px] mt-[15px] text-[#D6DA1D]">
                Crypto Industry
            </p><br/>
            <p>
                {industryContent}
            </p>
            </div>
        </CustomAccordion>
    )
}

export default OurUsers