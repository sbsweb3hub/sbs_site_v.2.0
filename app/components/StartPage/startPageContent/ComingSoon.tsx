import React from "react";
import { Button, Link } from "@nextui-org/react";
import ScrollingCards from "../../Common/ScrollingCards";
import WhiteArrow from "../../MainPage/MainPageContent/WhiteArrow";
import ProjectCard from "../../Common/ProjectCard";
import { ProjectType } from "@/types";

const ComingSoon = ({ projects }: { projects: Array<ProjectType> }) => {
    return (
        <div className="flex flex-col w-full mt-[30px]">
            <div className="flex max-[761px]:flex-col min-[762px]:justify-between 
                    min-[762px]:items-center items-start w-11/12 min-[762px]:w-[623px] max-[761px]:gap-3
                    mb-[0px] min-[1040px]:ml-[170px] min-[851px]:ml-[100px] ml-[50px]">
                <span className="text-[32px] text-[#FFF] font-bold">
                    Upcoming on Launchpad
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
                    <ProjectCard status="coming" project={projects[0]} />
                </div>
                <div className="max-[900px]:hidden">
                    <ProjectCard status="coming" project={projects[1]} />
                </div>
                <div className="max-[1400px]:hidden">
                    <ProjectCard status="coming" project={projects[2]} />
                </div>
                <div className="max-[1850px]:hidden">
                    <ProjectCard status="coming" project={projects[3]} />
                </div>
                <div className="max-[2200px]:hidden">
                    <ProjectCard status="coming" project={projects[4]} />
                </div>
                <div className="max-[2800px]:hidden">
                    <ProjectCard status="coming" project={projects[5]} />
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
