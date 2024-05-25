import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface StepAccordionProps {
   startDate: string,
   endDate: string,
   index: string,
   children: React.ReactNode
}

const StepAccordion: React.FC<StepAccordionProps> = ({startDate, endDate, index, children}) => {
    return (
        <>
            <Accordion
                  className="mt-[20px] w-[200px]"
                  itemClasses={{
                    base: 'w-[1044px]',
                    indicator: 'flex items-center justify-center w-[25px] h-[25px] text-[#000] bg-[#C4C4C4] rounded-[8px]',
                    titleWrapper: 'flex flex-row items-center justify-between',
                    heading: 'bg-[#D8D8D8] h-[98px] pr-[10px]',
                    title: 'ml-[15px] text-[22px] font-semibold',
                    subtitle: 'text-[16px]',
                    startContent: 'ml-[15px] text-[22px] font-semibold'
                  }}
                >
                  <AccordionItem startContent={`${index})`} title={`${startDate} - ${endDate}`} subtitle='Step details'>
                  <div className="flex flex-col ml-[30px] gap-[21px] mt-[15px]">
                        <p className="text-[16px] font-semibold">
                          Description
                        </p>
                        <p className="text-[16px] text-[#00000080]">
                          {children}
                        </p>
                    </div>
                  </AccordionItem>
                </Accordion>
        </>
    )
}

export default StepAccordion