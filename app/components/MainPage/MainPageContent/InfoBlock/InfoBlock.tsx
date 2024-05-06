import React from "react";
import YellowLineU from "./YellowLineU";
import YellowLineD from "./YellowLineD";

const InfoBlock = () => {
    return (
        <div className="flex flex-col items-center mt-[200px]">
            <YellowLineU />
            <div className="flex flex-col items-center my-[40px]">
                <p className="text-[28px] text-[#FFF] font-light text-center">
                    Some more interesting details and water for your attention. <br/>Sincerely your team.
                </p>
            </div>
            <YellowLineD />
        </div>
    )
}

export default InfoBlock