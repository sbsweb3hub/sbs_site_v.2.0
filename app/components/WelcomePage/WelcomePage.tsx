'use client'
import React from "react";
import { Element } from 'react-scroll'
import LetterFadeInText from "../StartPage/startPageContent/FadedText";
import Wave from "./WelcomePageContent/Wave";
import EnterAppButton from "./WelcomePageContent/CustomButton";
import NewsLetter from "../StartPage/startPageContent/NewsLetter";
import { Button, Link } from "@nextui-org/react";
import Header from "./WelcomePageContent/Header";
import UpLine from "../MainPage/MainPageContent/UpLine";
import MainVision from "./WelcomePageContent/MainVision";
import KeyBenefits from "./WelcomePageContent/KeyBenefits";
import OurUsers from "./WelcomePageContent/OurUsers";
import Partners from "../StartPage/startPageContent/Partners";
import FooterLine from "../MainPage/MainPageContent/FooterLine";
import LearnMore from "./WelcomePageContent/LearmMore";
import WhiteArrow from "../MainPage/MainPageContent/WhiteArrow";


const WelcomePage = () => {
    return (
        <div className="flex flex-col items-center w-full  h-full">
            <Header />
            <div className="flex mt-[85px]">
                <UpLine />
            </div>
            <div className="scale-85 max-[650px]:scale-[0.5]"
                style={{
                    fontSize: '128px',
                    color: '#D6DA1D',
                    fontWeight: '600',
                    marginTop: '60px',
                    marginBottom: '35px',
                    fontStyle: 'italic',
                }}
            >
                <LetterFadeInText text="AngelForge" useWaypoint={false} />
            </div>
            <div className="min-[965px]:w-[959px] w-11/12 text-[32px] text-[#FFF] font-medium text-center scale-85 max-[650px]:scale-[0.7]">
                <p>Our unbelievable platform will send your project to the moon inevitable. Just create and participate and have fun.</p>
            </div>
            <LearnMore />
            <div className="">
                <Wave />
            </div>
            <Element name="info" className="element"></Element>
            <div className="flex mt-[100px]">
                <MainVision/>
            </div>
            <Button
                href="https://sbsweb3hubs-organization.gitbook.io/light-paper"
                target="blank"
                as={Link}
                variant="bordered"
                color="default"
                endContent={<WhiteArrow/>}
                className="w-[310px] h-[66px] text-[#D4D4D4] text-[20px] font-light max-[650px]:scale-[0.8]"

            >
                Explore more on GitBook
            </Button>
            <div className="flex mt-[50px]">
                <KeyBenefits/>
            </div>
            <div className="flex mt-[100px]">
                <OurUsers/>
            </div>
            <Partners/>
            <NewsLetter />
            <div className="flex mt-[40px]">
                <FooterLine/>
            </div>
        </div>
    )
}

export default WelcomePage
