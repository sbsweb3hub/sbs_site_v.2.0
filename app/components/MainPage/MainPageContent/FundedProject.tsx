'use client'
import React from "react";
import { Button, Link } from "@nextui-org/react";
import CardContainer from "../../Common/CardContainer";
import WhiteArrow from "./WhiteArrow";
import ProjectCard from "../../Common/ProjectCard";
import { ProjectType } from "@/types";

const FundedProject = ({ projects }: { projects: Array<ProjectType> }) => {
    return (
        <div className="flex flex-col w-full mt-[40px] mb-[20px]">
            <div className="flex max-[761px]:flex-col min-[762px]:justify-between 
                    min-[762px]:items-center items-start w-11/12 min-[762px]:w-[480px] max-[761px]:gap-3
                    mb-[10px] min-[1040px]:ml-[170px] min-[851px]:ml-[100px] ml-[50px]">
                <span className="text-[32px] text-[#FFF] font-bold">
                    Funded projects
                </span>
                <Button
                    href="/app/projects"
                    as={Link}
                    variant="bordered"
                    endContent={<WhiteArrow />}
                    style={{
                        borderRadius: '13px',
                        width: '199px',
                        height: '43.6px',
                        textAlign: 'center',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#FFF',
                    }}
                    className="scale-85"
                >
                    Explore projects
                </Button>
            </div>
            <div className="flex justify-center items-center scale-85 max-[500px]:scale-[0.8] ml-[40px]">
                <div className="">
                    <ProjectCard status="funded" project={projects[6]} />
                </div>
                <div className="max-[900px]:hidden">
                    <ProjectCard status="funded" project={projects[7]} />
                </div>
                <div className="max-[1400px]:hidden">
                    <ProjectCard status="funded" project={projects[8]} />
                </div>
                {/* <div className="max-[1850px]:hidden">
                    <ProjectCard status="funded" project={projects[9]} />
                </div>
                <div className="max-[2200px]:hidden">
                    <ProjectCard status="funded" project={projects[10]} />
                </div>
                <div className="max-[2800px]:hidden">
                    <ProjectCard status="funded" project={projects[10]} />
                </div> */}
            </div>
        </div>
    )
}

export default FundedProject
