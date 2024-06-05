'use client'
import '@/app/components/font.css'
import '@/app/components/projects/Forms/ProjectForm/Modals/index.css'
import { deleteProject } from '@/services/project-service'
import React from 'react'
import {
    Button,
    useDisclosure
} from "@nextui-org/react";
import CustomModal from './ProjectForm/Modals/CustomModal'
import Image from "next/image";



export default function DeleteProjectButton({ id }: { id: string }) {
    
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
         <>
         <Button
             onPress={onOpen}
             style={{
                 width: "158px",
                 height: "42px",
                 fontFamily: "Geom Graphic",
                 backgroundColor: "#696969"
             }}
             className="text-[16px] text-[##DFDFDF] font-light tracking-[1.6px] mb-[48px]"

         >
             Delete
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
                 Are you sure you want to DELETE your Project ?
             </p>
             <div className="flex items-center gap-[54px] mt-[20px] scale-85">
                 <Button
                     className="w-[197px] h-[70px] rounded-[5px] bg-[#EDE4B5] text-[24px] text-[#000] font-semibold"
                     onPress={onClose}
                 >
                     Return back
                 </Button>
                 <button 
                    className="w-[200px] h-[70px] rounded-[5px] border-[1px] border-[#D7CFA5] bg-[#272726] 
                        text-[24px] text-[#EDE4B5] font-semibold hover:bg-[#3A3A3A] active:bg-[#1A1A1A]" 
                    onClick={() => deleteProject(id)} 
                >
                    Delete project
                </button>
             </div>
         </CustomModal>
     </>
    )
}
