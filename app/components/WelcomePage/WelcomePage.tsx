import React from "react";
import LetterFadeInText from "../StartPage/startPageContent/FadedText";
import { Chakra_Petch } from "next/font/google";
import Wave from "./WelcomePageContent/Wave";
import EnterAppButton from "./WelcomePageContent/CustomButton";
import NewsLetter from "../StartPage/startPageContent/NewsLetter";

const chakraPetch = Chakra_Petch({weight: '600', subsets: ['latin']})
const mdChakraPetch = Chakra_Petch ({weight: '500', subsets: ['latin']})

const WelcomePage = () => {
    return (
        <div className="flex flex-col items-center w-screen  h-full">
            <div
                className={chakraPetch.className}
                style={{
                    fontSize: '128px',
                    color: '#D6DA1D',
                    fontWeight: '400',
                    marginTop: '400px',
                    marginBottom: '35px',
                    fontStyle: 'italic'
                }}
            >
                <LetterFadeInText text="Step-Blast-Step"  useWaypoint={false}/>
            </div>
            <div className="min-[965px]:w-[959px] w-11/12 text-[32px] text-[#FFF] font-medium text-center mt-[16px]">
               <p className={mdChakraPetch.className}>Our unbelievable platform will send your project to the moon inevitable. Just create and participate and have fun.</p>
            </div>
            <div>
                <Wave />
            </div>
            <div className="min-[965px]:w-[959px] w-11/12 text-[32px] text-[#FFF] font-medium text-center mt-[57px]">
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