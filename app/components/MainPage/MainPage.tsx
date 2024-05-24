'use client'
import React from "react";
import BlueBackgroud from "./MainPageContent/BlueBackground";
import UpLine from "./MainPageContent/UpLine";
import DownLine from "./MainPageContent/DownLine";
import Logo from "./MainPageContent/SBSLogo";
import ComingSoon from "../StartPage/startPageContent/ComingSoon";
import InfoBlock from "./MainPageContent/InfoBlock/InfoBlock";
import FundedProject from "./MainPageContent/FundedProject";
import FooterLine from "./MainPageContent/FooterLine";
import LiveProject from "./MainPageContent/LiveProject";
import Uline from "./MainPageContent/Uline";
import Dline from "./MainPageContent/Dline";
import { ProjectType } from "@/types";

const MainPage = ({ projects }: { projects: Array<ProjectType> }) => {

    return (
        <div className="flex flex-col items-center w-screen h-full">
            <BlueBackgroud /> 
            <UpLine />
           {/*  <Logo />
            <DownLine /> */}
            <ComingSoon projects={projects} />
            <Uline />
            <LiveProject projects={projects}/>
            <Dline/>
            <FundedProject projects={projects} />
            <FooterLine />
        </div>
    )

}

export default MainPage
