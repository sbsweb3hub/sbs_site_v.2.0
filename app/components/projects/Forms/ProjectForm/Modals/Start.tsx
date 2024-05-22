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


const Start = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
      <>
        <Button
            onPress={onOpen}
            variant="light"
            style={{
                background: "url(/startbutton.svg) no-repeat",
                width: "318px",
                height: "85px",
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
                <Button
                    variant="light"
                    style={{
                        background: "url(/start.svg) no-repeat",
                        width: "261px",
                        height: "70px",
                    }}
                    className="text-[24px] text-[#000] font-semibold"
                >
                    LAUNCH
                </Button>
                <Button
                    className="w-[134px] h-[41px] rounded-[5px] 
                        border-[1px] border-[#D7CFA5] bg-[#272726] text-[24px] text-[#EDE4B5] font-semibold"
                    onPress={onClose}
                >
                    Cancel
                </Button>
            </div>
        </CustomModal>
      </>  
    )
}

export default Start