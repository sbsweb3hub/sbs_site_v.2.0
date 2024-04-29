import React from "react";
import { Divider } from "@nextui-org/react";

export default function WhyNeed() {
    const angelContent =
    "Angels hedges their investment risks and oversees the project implementation process. They get an accurate vision of the integrity of the team, of its intention to follow exactly the set step of creating a product.";
    const creatorContent =
    "The opportunity to receive a trust from the angels. To prove your intentions and desires to implement the product. Be sure of constant financing through decentralized distribution by a smart contract.";
    const industryContent =
    "Improvement of the startup support sphere. We create conditions for the launch of new finished products. The more tools there are, the more competition there is, which is a guide to the best service, user-friendly interfaces and cheap products.";

  return (
    <>
    <article className="flex flex-col h-[450px]">
        <div className="flex flex-col">
            <p className="text-lg text-[#FFF]">
              Web3 business angels
            </p>
            <p className="text-sm text-[#D3D3D3]">
              Safe & Openness
            </p>
            <p className="text-base text-[#FFF] mt-[10px]">
              {angelContent}
            </p>
        </div>
        <Divider className="my-4" />
        <div className="flex flex-col">
            <p className="text-lg text-[#FFF]">
              Project's creators
            </p>
            <p className="text-sm text-[#D3D3D3]">
              Fairness
            </p>
            <p className="text-base text-[#FFF] mt-[10px]">
              {creatorContent}
            </p>
        </div>
        <Divider className="my-4" />
        <div className="flex flex-col">
            <p className="text-lg text-[#FFF]">
              Crypto industry
            </p>
            <p className="text-sm text-[#D3D3D3]">
              Healthy development
            </p>
            <p className="text-base text-[#FFF] mt-[10px]">
              {industryContent}
            </p>
        </div>
    </article>
    </>
  );
}
