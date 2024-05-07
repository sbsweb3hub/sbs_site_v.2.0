import React from "react";
import BlueBackgroud from "./MainPageContent/BlueBackground";
import UpLine from "./MainPageContent/UpLine";
import DownLine from "./MainPageContent/DownLine";
import Logo from "./MainPageContent/SBSLogo";
import ComingSoon from "../StartPage/startPageContent/ComingSoon";
import ScrollingCards from "../Common/ScrollingCards";
import ProjectCard from "../Common/ProjectCard";
import InfoBlock from "./MainPageContent/InfoBlock/InfoBlock";
import FundedProject from "./MainPageContent/FundedProject";
import FooterLine from "./MainPageContent/FooterLine";

const MainPage = () => {

    return (
        <div className="flex flex-col items-center w-full h-full">
            <BlueBackgroud />
            <UpLine />
            <Logo />
            <DownLine />
            <ComingSoon />
            <InfoBlock />
            <FundedProject />
            <FooterLine />
        </div>
    )

}

export default MainPage