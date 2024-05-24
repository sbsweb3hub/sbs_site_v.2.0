import React from "react";
import { Button, Link } from "@nextui-org/react";
import ProjectCard from "../../Common/ProjectCard";
import { ProjectType } from "@/types";
import WhiteArrow from "./WhiteArrow";
import CardLine from "./CardLine";

const LiveProject = ({ projects }: { projects: Array<ProjectType> }) => {
    return (
        <div className="flex flex-col">
            <div
                style={{
                        background: "url(/greyframe.svg) center no-repeat",
                }}
                className="relative flex flex-col max-[1400px]:hidden items-center justify-center w-[1624px] h-[860px] scale-85"

            >
                <div className="absolute flex max-[761px]:flex-col min-[762px]:justify-between 
                        min-[762px]:items-center items-start w-11/12 min-[762px]:w-[580px] max-[761px]:gap-3
                        mb-[70px] min-[1040px]:ml-[170px] min-[851px]:ml-[100px] ml-[50px] top-[-5px] left-[-100px]">
                    <span className="text-[36px] text-[#D3D300] font-bold">
                        Live on Launchpad
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
                    >
                        Explore projects
                    </Button>
                </div>
                <div className="flex justify-center items-center scale-100 max-[500px]:scale-[0.8] ml-[40px] gap-[-20px]">
                    <div className="flex flex-col items-center">
                        <ProjectCard status="live" project={projects[6]} />
                        <div className="mt-[20px] scale-85">
                            <CardLine />
                        </div>
                    </div>
                    <div className="flex flex-col items-center max-[900px]:hidden">
                        <ProjectCard status="live" project={projects[7]} />
                        <div className="mt-[20px] scale-85">
                            <CardLine />
                        </div>
                    </div>
                    <div className="flex flex-col items-center max-[1400px]:hidden">
                        <ProjectCard status="live" project={projects[8]} />
                        <div className="mt-[20px] scale-85">
                            <CardLine />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col min-[1401px]:hidden w-full mt-[40px] mb-[20px]">
                <div className="flex max-[761px]:flex-col min-[762px]:justify-between 
                        min-[762px]:items-center items-start w-11/12 min-[762px]:w-[580px] max-[761px]:gap-3
                        mb-[10px] min-[1040px]:ml-[10px] min-[851px]:ml-[10px] ml-[10px]">
                    <span className="text-[32px] text-[#D3D300] font-bold">
                        Live on Launchpad
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
                <div className="flex justify-center items-center gap-[60px] scale-85 max-[500px]:scale-[0.8] ml-[40px]">
                    <div className="">
                        <ProjectCard status="live" project={projects[6]} />
                    </div>
                    <div className="max-[900px]:hidden">
                        <ProjectCard status="live" project={projects[7]} />
                    </div>
                    <div className="max-[1400px]:hidden">
                        <ProjectCard status="live" project={projects[8]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveProject