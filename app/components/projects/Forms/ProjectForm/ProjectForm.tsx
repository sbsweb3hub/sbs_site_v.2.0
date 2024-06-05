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
import { useBuildProject } from "@/services/hooks/useBuildProject";
import { useStartProject } from "@/services/hooks/useStartProject";
import { readContract } from "@/services/onchain-service";

const ProjectForm = ({ disabled, project }: { disabled?: boolean, project?: ProjectType }) => {
    const [state, formAction] = useFormState(project ? patchProject : addProject, { errors: [] });
    const { isLoading, buildProject } = useBuildProject();
    const { isLoadingStart, startProject } = useStartProject();

    return (
        <div className="light bg-[#FFF]">
            <form action={formAction} className="flex flex-col items-center">
                <AddImage imageUrl={project?.imageUrl!} disabled={disabled!} backgroundImageUrl={project?.backgroundImageUrl!} />
                <div className="flex flex-col w-[100%] min-[1728px]:w-[1728px] mt-[-20px] mb-[85px]">
                    <div className="flex items-center gap-[30px] mb-[46px] ml-[117px]">
                        <p className="text-[48px] text-[#000] font-semibold">
                            Application Form
                        </p>
                        <Image
                            width={40}
                            height={40}
                            alt=""
                            src='/form.png'
                        />
                    </div>
                    <p className="text-[20px] text-[#000] ml-[117px]">
                        <strong>Important</strong>: Fill in all fields carefully and clearly. The token data will be inserted into the smart contact and cannot be changed.
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

                {!disabled && <div className="flex justify-start w-[100%] min-[1728px]:w-[1728px] mb-[48px]">
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
                            const stepsInSeconds = project.steps.map(step => step.duration! * 86400)
                            const args: (string | number | bigint | number[])[] = [
                                project.projectName,
                                project.tokenSymbol!,
                                BigInt(project.tokenSupply!),
                                BigInt(project.minTokenForSeed!),
                                BigInt(project.tokenPrice!),
                                BigInt(project.maxTokenForSeed!),
                                project.steps.length + 1,
                                [project.seedDuration! * 86400, ...stepsInSeconds],
                            ]
                            return (<>
                                <DeleteProjectButton id={project.id} />
                                <button
                                    disabled={isLoading}
                                    onClick={() => buildProject(args, project.id)}
                                    className="w-[217px] h-[70px] bg-[#533A3ACC] 
                                    text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px]">
                                    {isLoading ? 'Buildig...' : 'Build project'}</button>

                            </>)
                        case ProjectStatusEnum.DEPLOYED:
                            return (<>
                                <button
                                    disabled={isLoadingStart}
                                    onClick={() => startProject(project.onchainId!, project.id)}
                                    className="w-[217px] h-[70px] bg-[#533A3ACC] 
                                    text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px]">
                                    {isLoadingStart ? 'Starting...' : 'Start project'}</button>

                            </>)
                        case ProjectStatusEnum.STARTED:
                            return (<>
                                <p className="text-black">Your project is successfully started!</p>

                            </>)
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
