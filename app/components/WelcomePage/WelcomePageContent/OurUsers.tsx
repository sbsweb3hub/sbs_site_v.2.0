import React from "react"
import CustomAccordion from "./CustomAccordion/CustomAccordion";
import { Divider } from "@nextui-org/react";

const angelContent =
"Angels hedges their investment risks and oversees the project implementation process. They get an accurate vision of the integrity of the team, of its intention to follow exactly the set step of creating a product.";
const creatorContent =
"The opportunity to receive a trust from the angels. To prove your intentions and desires to implement the product. Be sure of constant financing through decentralized distribution by a smart contract.";
const industryContent =
"Improvement of the startup support sphere. We create conditions for the launch of new finished products. The more tools there are, the more competition there is, which is a guide to the best service, user-friendly interfaces and cheap products.";


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