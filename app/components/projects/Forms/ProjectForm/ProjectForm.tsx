'use client'
import React from "react";
import AddImage from "./AddImage/AddImage";
import { Divider, Input } from "@nextui-org/react";
import Image from "next/image";
import BasicInfo from "./BasicInfo/BasicInfo";
import Links from "./Links/Links";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import TokenInfo from "./TokenInfo/TokenInfo";
import ProjectStartDate from "./ProjectStartDate/ProjectStartDate";
import SeedRound from "./SeedRound/SeedRound";
import DevSteps from "./DevSteps/DevSteps";
import Submit from "../submit";
import { addProject, patchProject } from "@/services/project-service";
import { useFormState } from "react-dom";
import { ProjectStatusEnum, ProjectType } from "@/types";
import DeleteProjectButton from "../DeleteProjectButton";
import SendReviewButton from "../SendReviewButton";
import Link from 'next/link'
import Build from "./Modals/Build";
import Delete from "./Modals/Delete";

const ProjectForm = ({ disabled, project }: { disabled?: boolean, project?: ProjectType }) => {
    const [state, formAction] = useFormState(project ? patchProject : addProject, { errors: [] });
    return (
        <div className="light bg-[#FFF]">
            <form action={formAction} className="flex flex-col items-center">
                <AddImage imageUrl={project?.imageUrl!} disabled={disabled!} backgroundImageUrl={project?.backgroundImageUrl!} />
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
                        <strong>Important</strong>: Blaunchpad would never request any funds upfront.<br /> Please verify all email communication as @blaunchpad.com
                    </p>
                </div>
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <BasicInfo disabled={disabled!} project={project!} />

                </div>
                <Divider
                    className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <Links disabled={disabled!} project={project!} />
                </div>
                <Divider
                    className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <ProjectDetails disabled={disabled!} project={project!} />
                </div>
                <Divider
                    className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <TokenInfo disabled={disabled!} project={project!} />
                </div>
                <Divider
                    className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <ProjectStartDate disabled={disabled!} />
                </div>
                <Divider
                    className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <SeedRound disabled={disabled!} project={project!} />
                </div>
                <Divider
                    className="mb-[48px] bg-[#000] w-[1200px]"
                />
                <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <DevSteps disabled={disabled!} project={project!} />
                </div>




                {!project && <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
                    <Submit />
                </div>}


            </form>
            {(project && disabled) &&
                (() => {
                    switch (project?.status) {
                        case ProjectStatusEnum.REVIEWING:
                            return <p className="text-black">Pls wait while your project is reviewing!</p>;
                        case ProjectStatusEnum.DECLINED:
                            return (<>
                                < p className="text-black"> We are sorry, but we cant approve your project! We have sent details to your contact email.</p >
                                <DeleteProjectButton id={project.id} />
                            </>)
                        case ProjectStatusEnum.APPROVED:
                            return (<>
                                <DeleteProjectButton id={project.id} />
                                <button className="w-[217px] h-[70px] bg-[#533A3ACC] text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px]">Deploy</button>
                            </>);
                        default:
                            return <>
                                <Link href='/app/founder/patch' type="submit" className="w-[217px] h-[70px] bg-[#533A3ACC] text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px]">
                                    Edit draft
                                </Link>
                                <SendReviewButton id={project.id} />
                                <DeleteProjectButton id={project.id} />
                            </>;
                    }
                })()
            }
        </div>

    )
}

export default ProjectForm
