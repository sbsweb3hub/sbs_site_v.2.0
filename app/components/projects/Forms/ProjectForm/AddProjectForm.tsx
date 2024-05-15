import React from "react";
import AddImage from "./AddImage/AddImage";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import BasicInfo from "./BasicInfo/BasicInfo";
import Links from "./Links/Links";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import TokenInfo from "./TokenInfo/TokenInfo";
import ProjectStartDate from "./ProjectStartDate/ProjectStartDate";
import SeedRound from "./SeedRound/SeedRound";
import DevSteps from "./DevSteps/DevSteps";
import Submit from "../submit";

const AddProject = () => {
    return (
        <div className="light bg-[#FFF]">
            <form className="flex flex-col items-center">
                <AddImage />
                <div className="flex flex-col w-[100%] min-[1728px]:w-[1728px] mt-[-20px] mb-[85px]">
                    <div className="flex items-center gap-[30px] mb-[46px] ml-[117px]">
                        <p className="text-[48px] text-[#000] font-semibold">
                            IDO Application Form
                        </p>
                        <Image 
                            width={40}
                            height={40}
                            alt=""
                            src='/form.png'
                        />
                    </div>
                    <p className="text-[20px] text-[#000] ml-[117px]">
                        <strong>Important</strong>: Blaunchpad would never request any funds upfront.<br/> Please verify all email communication as @blaunchpad.com
                    </p>
                </div>
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <BasicInfo />
                </div>
                <Divider
                  className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <Links />
                </div>
                <Divider
                  className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <ProjectDetails />
                </div>
                <Divider
                  className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <TokenInfo/>
                </div>
                <Divider
                  className="mb-[48px] bg-[#000] w-[1200px]"
                />
                 <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <ProjectStartDate/>
                </div>
                <Divider
                  className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <SeedRound/>
                </div>
                <Divider
                  className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <DevSteps/>
                </div>
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <Submit/>
                </div>
            </form>
        </div>

    )
}

export default AddProject
