'use client'
import React from "react";
import '@/app/components/projects/Forms/ProjectForm/Modals/index.css'
import '@/app/components/font.css'
import {
    Button,
    useDisclosure
} from "@nextui-org/react";
import CustomModal from "./CustomModal";
import Image from "next/image";
import { deleteProject } from "@/services/project-service";
import { useFormStatus } from "react-dom";


const Build = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const status = useFormStatus();

    return (
        <>
            <Button
                onPress={onOpen}
                variant="light"
                style={{
                    background: "url(/buildbutton.svg) no-repeat",
                    width: "318px",
                    height: "92.5px",
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
                <div className="flex flex-col items-center gap-[25px] scale-85">
                    {/* <Button
                        variant="light"
                        style={{
                            // background: "url(/build.svg) no-repeat",
                            background: status.pending ? "Saving..." : "Save as draft",
                            width: "311px",
                            height: "77px",
                        }}
                        disabled={status.pending}
                    >
                        {status.pending ? "Saving..." : "Save as draft"}

                    </Button> */}
                    <button
                        disabled={status.pending}
                        className="w-[217px] h-[70px] bg-[#533A3ACC] text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px]"
                    >
                        {status.pending ? "Saving..." : "Save as draft"}
                    </button>
                    <Button
                        className="w-[134px] h-[41px] rounded-[5px] 
                        border-[1px] border-[#D7CFA5] bg-[#272726] text-[24px] text-[#EDE4B5] font-semibold"
                        onPress={onClose}
                    >
                        Cancel
                    </Button>

                </div>
            </CustomModal >
        </>
    )
}

export default Build
