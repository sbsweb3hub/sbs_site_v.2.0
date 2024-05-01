import React from "react";
import LetterFadeInText from "../StartPage/startPageContent/FadedText";
import { Chakra_Petch } from "next/font/google";
import Wave from "./WelcomePageContent/Wave";
import EnterAppButton from "./WelcomePageContent/CustomButton";
import NewsLetter from "../StartPage/startPageContent/NewsLetter";
import { Button, Link } from "@nextui-org/react";




const WelcomePage = () => {
    return (
        <div className="relative flex flex-col items-center w-full  h-full">
            <div className="max-[1044px]:hidden"
                style={{
                    fontSize: '128px',
                    color: '#D6DA1D',
                    fontWeight: '600',
                    marginTop: '400px',
                    marginBottom: '35px',
                    fontStyle: 'italic',
                }}
            >
                <LetterFadeInText text="Step-Blast-Step"  useWaypoint={false}/>
            </div>
            <div className="min-[1045px]:hidden flex flex-col">
                <div
                    style={{
                        fontSize: '128px',
                        color: '#D6DA1D',
                        fontWeight: '600',
                        marginTop: '400px',
                        marginBottom: '0px',
                        fontStyle: 'italic',
                    }}
                >
                    <LetterFadeInText text="Step-"  useWaypoint={false}/>
                </div>
                <div 
                    style={{
                        fontSize: '128px',
                        color: '#D6DA1D',
                        fontWeight: '600',
                        marginTop: '0',
                        marginBottom: '0',
                        fontStyle: 'italic',
                    }}
                >
                    <LetterFadeInText text="Blast-"  useWaypoint={false}/>
                </div>
                <div 
                    style={{
                        fontSize: '128px',
                        color: '#D6DA1D',
                        fontWeight: '600',
                        marginTop: '0',
                        marginBottom: '35px',
                        fontStyle: 'italic',
                    }}
                >
                    <LetterFadeInText text="Step"  useWaypoint={false}/>
                </div>
            </div>
            <div className="min-[965px]:w-[959px] w-11/12 text-[32px] text-[#FFF] font-medium text-center mt-[16px]">
               <p>Our unbelievable platform will send your project to the moon inevitable. Just create and participate and have fun.</p>
            </div>
            <Button
                href="https://sbsweb3hubs-organization.gitbook.io/light-paper"
                target="blank"
                as={Link}
                variant="bordered"
                color="default"
                className="w-[153px] h-[37px] text-[#D4D4D4] text-[16px] font-light mt-[20px]"
                
            >
                Learn more
            </Button>
            <div className="absolute z-[-1] top-[680px] max-[1045px]:top-[1100px] 
                    max-[930px]:top-[1160px] max-[645px]:top-[1210px] max-[471px]:top-[1260px] max-[434px]:top-[1320px]">
                <Wave />
            </div>
            <div className="min-[965px]:w-[959px] w-11/12 text-[32px] text-[#FFF] font-medium text-center 
                    min-[1111px]:mt-[548px] mt-[300px] min-[1850px]:mt-[680px] min-[2145px]:mt-[1150px] min-[3140px]:mt-[1350px]">
                Some more interesting details will reveal soon.
            </div>
            <div className="mt-[68px]">
                <EnterAppButton />
            </div>
            <NewsLetter />
        </div>
    )
}

export default WelcomePage