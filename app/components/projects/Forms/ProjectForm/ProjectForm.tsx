'use client'
import '@/app/components/projects/Forms/ProjectForm/Modals/index.css'
import '@/app/components/font.css'
import React from "react";
import AddImage from "./AddImage/AddImage";
import { Divider, Input, Button, useDisclosure, Spinner } from "@nextui-org/react";
import CustomModal from "./Modals/CustomModal";
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
import { readContract } from "@/services/onchain/onchain-service";
import { toBigIntWithDecimals } from '@/utils/toBigIntWithDecimals';
import { getTranсhe, claimAllProjectTokens } from '@/services/onchain/onchain-service';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectForm = ({ disabled, project }: { disabled?: boolean, project?: ProjectType }) => {
    const [state, formAction] = useFormState(project ? patchProject : addProject, { errors: [] });
    const { isLoading, buildProject } = useBuildProject();
    const { isLoadingStart, startProject } = useStartProject();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toastOptions: ToastOptions = {
        style: {
          backgroundColor: "#272726",
          color: "#FFF", 
        },
        progressStyle: {
          backgroundColor: "#FCFC03",
        },
      };

    const handleTranche = async () => {
        if (project?.onchainId !== undefined) {
          try {
            await getTranсhe(project.onchainId);
            toast.success("Transaction successful!", toastOptions);
          } catch (err) {
            console.error("Failed to get tranche", err);
            toast.error("Failed to get a tranche.", toastOptions);
          }
        } else {
          console.error("onChainId is undefined");
        }
    };

    const handleClaimAll = async () => {
        if (project?.onchainId !== undefined) {
          try {
            await claimAllProjectTokens(project.onchainId);
            toast.success("Transaction successful!", toastOptions);
          } catch (err) {
            console.error("Failed to claim all tokens:", err);
            toast.error("Failed to claim all tokens.", toastOptions);
          }
        } else {
          console.error("onChainId is undefined");
        }
    };

    return (
        <div className="light bg-[#FFF]">
            <ToastContainer />
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
                            return <p className="text-black w-[100%] min-[1728px]:w-[1728px] ml-[117px] text-[18px] font-semibold">Pls wait while your project is reviewing!</p>;
                        case ProjectStatusEnum.DECLINED:
                            return (<>
                                <div className="flex flex-col gap-[15px] w-[100%] min-[1728px]:w-[1728px] ml-[117px]">
                                    < p className="text-red-500 text-[18px] font-semibold"> We are sorry, but we cant approve your project! We have sent details to your contact email.</p >
                                    <DeleteProjectButton id={project.id} />
                                </div>
                            </>)
                        case ProjectStatusEnum.APPROVED:
                            const stepsInSeconds = project.steps.map(step => step.duration! * 86400)
                            const args: (string | number | bigint | number[])[] = [
                                project.projectName,
                                project.tokenSymbol!,
                                toBigIntWithDecimals(project.tokenSupply, 18),
                                toBigIntWithDecimals(project.minTokenForSeed, 18),
                                toBigIntWithDecimals(project.tokenPrice, 18),
                                toBigIntWithDecimals(project.maxTokenForSeed, 18),
                                project.steps.length + 1,
                                [project.seedDuration! * 86400, ...stepsInSeconds],
                            ]
                            return (<>
                                <div className='flex justify-start items-center w-[100%] min-[1728px]:w-[1728px] ml-[117px] gap-[40px]'>
                                    <DeleteProjectButton id={project.id} />
                                    <Button
                                        onPress={onOpen}
                                        variant="light"
                                        style={{
                                            background: "url(/buildbutton.svg) no-repeat",
                                            width: "318px",
                                            height: "92.5px",
                                            marginBottom: '48px'
                                        }}

                                    >
                                    </Button>
                                    <CustomModal
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <p className="text-[32px] text-[#EDE4B5] font-bold mt-[47px]">
                                            Create project ?
                                        </p>
                                        <div className="flex items-center gap-[54px] scale-85 mt-[20px]">
                                            <button
                                                disabled={isLoading}
                                                onClick={() => buildProject(args, project.id)}
                                                className="w-[148px] h-[70px] rounded-[5px] bg-[#EDE4B5] text-[24px] text-[#000] 
                                                font-semibold hover:bg-[#D7CFA5] active:bg-[#BFB087]"
                                            >
                                                {isLoading ? <Spinner color='default' size='md' className='mt-[7px]' /> : 'Create'}
                                            </button>
                                            <Button
                                                className="w-[148px] h-[70px] rounded-[5px] 
                                                border-[1px] border-[#D7CFA5] bg-[#272726] text-[24px] text-[#EDE4B5] font-semibold"
                                                onPress={onClose}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </CustomModal >
                                </div>

                            </>)
                        case ProjectStatusEnum.DEPLOYED:
                            return (<>
                                <div className='flex justify-start items-center w-[100%] min-[1728px]:w-[1728px] ml-[117px]'>
                                    <Button
                                        onPress={onOpen}
                                        variant="light"
                                        style={{
                                            background: "url(/startbutton.svg) no-repeat",
                                            width: "318px",
                                            height: "85px",
                                            marginBottom: '48px'
                                        }}

                                    >
                                    </Button>
                                    <CustomModal
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <p className="text-[32px] text-[#EDE4B5] font-bold mt-[47px]">
                                            Launch project ?
                                        </p>
                                        <div className="flex flex-col items-center gap-[25px] scale-85">
                                            <button
                                                disabled={isLoadingStart}
                                                onClick={() => startProject(project.onchainId!, project.id)}
                                                style={{
                                                    background: "url(/start.svg) no-repeat",
                                                    width: "261px",
                                                    height: "70px",
                                                }}
                                                className="text-[24px] text-[#000] font-semibold"
                                            >
                                                {isLoadingStart ? <Spinner color='default' size='md' className='mt-[7px]' /> : 'LAUNCH'}
                                            </button>
                                            <Button
                                                className="w-[134px] h-[41px] rounded-[5px] 
                                                    border-[1px] border-[#D7CFA5] bg-[#272726] text-[24px] text-[#EDE4B5] font-semibold"
                                                onPress={onClose}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </CustomModal>
                                </div>

                            </>)
                        case ProjectStatusEnum.STARTED:
                            return (<>
                                <p className="text-black w-[100%] min-[1728px]:w-[1728px] ml-[117px] text-[24px] font-semibold">Your project is successfully started!</p>
                                <div className='flex items-center w-[100%] min-[1728px]:w-[1728px] ml-[117px] mt-[30px] gap-[30px]'>
                                    <Button
                                        onPress={handleTranche}
                                        style={{
                                            background: "url(/startbutton.svg) no-repeat",
                                            width: "318px",
                                            height: "85px",
                                            marginBottom: '48px'
                                        }}
                                    >
                                        <div className='flex items-center justify-center text-black text-[22px] font-semibold w-[100%] h-[60%] bg-[#FCFC03]'>
                                            GET TRANCHE
                                        </div>
                                    </Button>
                                    <Button
                                        onPress={handleClaimAll}
                                        style={{
                                            width: "158px",
                                            height: "42px",
                                            fontFamily: "Geom Graphic",
                                            backgroundColor: "#FCFC03"
                                        }}
                                        className="text-[16px] text-black font-light tracking-[1.6px] mb-[48px]"
                                    >
                                        Claim All
                                    </Button>
                                </div>
                            </>)
                        default:
                            return <>
                                <div className="flex justify-start items-center w-[100%] min-[1728px]:w-[1728px] gap-[40px]">
                                    <Link
                                        href='/app/founder/patch'
                                        type="submit"
                                    >
                                        <button className="w-[217px] h-[70px] bg-[#533A3ACC] text-[#FFF] text-[24px] 
                                            rounded-[5px] font-medium ml-[117px] hover:bg-[#704C4C] active:bg-[#402828] mb-[48px]"
                                        >
                                            Edit draft
                                        </button>
                                    </Link>
                                    <SendReviewButton id={project.id} />
                                    <DeleteProjectButton id={project.id} />
                                </div>
                            </>;
                    }
                })()
            }
        </div>
    )
}

export default ProjectForm
