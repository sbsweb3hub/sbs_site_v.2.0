'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import UpYellow from "../UpYellow";
import DownYellow from "../DownYellow";

interface CustomAccordionProps {
    label: string,
    children: React.ReactNode
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({label, children}) => {
    return (
        <div className="flex flex-col items-center">
        <UpYellow/>
        <Accordion
            showDivider={false}
            itemClasses={{
                indicator: 'w-[20px] h-[20px]',
                base: 'flex flex-col items-center max-[650px]:scale-[0.7]',
                content: 'flex justify-center min-[860px]:w-[850px] min-[500px]:w-[450px] w-[350px] text-[20px] max-[650px]:scale-[0.9]',
                title: 'text-[32px]'
            }}
            className="max-[500px]:my-[40px]"
        >
            <AccordionItem key="1" aria-label={label} title={label}>
                <div className="flex text-center">
                    {children}
                </div>
            </AccordionItem>
        </Accordion>
        <div className="flex mb-[60px]">
            <DownYellow/>
        </div>
    </div>
    )
}

export default CustomAccordion