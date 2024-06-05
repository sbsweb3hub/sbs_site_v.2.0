import React from "react";
import LoadCard from "../../Common/LoadingCard";

const AppLoader = () => {
    return (
        <>
            <div className="flex justify-center items-center ml-[40px] gap-[-20px] mt-[150px]">
                <LoadCard />
                <div className="max-[900px]:hidden">
                    <LoadCard/>
                </div>
                <div className="max-[1400px]:hidden">
                    <LoadCard/>
                </div>
            </div>
        </>
    )
}

export default AppLoader

