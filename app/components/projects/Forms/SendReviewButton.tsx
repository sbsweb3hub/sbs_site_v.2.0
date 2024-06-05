'use client'

import { sendProjectToReview } from '@/services/project-service'
import React from 'react'
import '@/app/components/projects/Forms/ProjectForm/Modals/index.css'
import '@/app/components/font.css'
import { 
    Button,
    useDisclosure
} from "@nextui-org/react";
import CustomModal from './ProjectForm/Modals/CustomModal'
import Image from "next/image";

export default function SendReviewButton({ id }: { id: string }) {
    
    const {isOpen, onOpen, onClose} = useDisclosure();
    
    return (
        <>
            <Button
                onPress={onOpen}
                variant="light"
                style={{
                    background: "url(/reviewbutton.svg) no-repeat",
                    width: "318px",
                    height: "91.5px",
                    fontFamily: "Geom Graphic"
                }}
                className="text-[24px] text-[#FFF] font-semibold mb-[48px]"

            >
                Send for review
            </Button>
            <CustomModal
                isOpen={isOpen}
                onClose={onClose}
            >
                <Image
                    src='/warning.png'
                    alt=""
                    width={51}
                    height={51}
                    className="mt-[32px]"
                />
                <p className="text-[24px] text-[#EDE4B5] font-medium mt-[10px]"> 
                    Are you sure you want to send form for review?
                </p>
                <div className="flex items-center gap-[54px] mt-[20px] scale-85">
                    <button 
                        onClick={() => sendProjectToReview(id)} 
                        className="w-[148px] h-[70px] rounded-[5px] bg-[#EDE4B5] text-[24px] text-[#000] 
                            font-semibold hover:bg-[#D7CFA5] active:bg-[#BFB087]"
                    >
                        Confirm
                    </button>
                    <Button
                        className="w-[148px] h-[70px] rounded-[5px] 
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
