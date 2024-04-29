import React from "react";
import { 
    Accordion, 
    AccordionItem, 
    Avatar
} from "@nextui-org/react";
import Benefits from "./Benefits";
import Greating from "./Greating";
import WhyNeed from "./WhyNeed";

const AboutProject = () => {
    
    return (
        <Accordion selectionMode="multiple" className="mt-[20px]">
            <AccordionItem
                key='1'
                aria-label="Main Vision"
                startContent= {
                    <Avatar
                        src="/vision.svg"
                        radius="lg"
                    />
                }
                title='Main Vision' 
            >
                <div className="flex justify-center">
                    <Greating />
                </div>
            </AccordionItem>
            <AccordionItem
                key='2'
                aria-label="Key Benefits"
                startContent= {
                    <Avatar
                        src="/value.svg"
                        radius="lg"
                    />
                }
                title='Key Benefits' 
            >
                <div className="flex justify-center">
                    <Benefits/>
                </div>
            </AccordionItem>
            <AccordionItem
                key='3'
                aria-label="Our Users"
                startContent= {
                    <Avatar
                        src="/hacker.svg"
                        radius="lg"
                    />
                }
                title='Our Users' 
            >
                <div className="flex justify-center">
                    <WhyNeed/>
                </div>
            </AccordionItem>
        </Accordion>
    )
}

export default AboutProject