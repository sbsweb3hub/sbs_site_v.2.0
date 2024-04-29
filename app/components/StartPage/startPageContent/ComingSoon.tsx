import React from "react";
import { Button } from "@nextui-org/react";
import LoadingCard from "../../Common/LoadingProjectCard";
import MediaQuery from 'react-responsive'


const ComingSoon = () => {
    return (
        <div className="flex flex-col w-full mt-[85px]">
            <div className="flex max-[761px]:flex-col min-[762px]:justify-between 
                    min-[762px]:items-center items-start w-11/12 min-[762px]:w-[723px] max-[761px]:gap-3 mb-[70px] ml-[36px]">
                <span className="text-[36px] text-[#FFF] font-bold">
                    Upcoming on Launchpad
                </span>
                <Button
                    isDisabled
                    style={{
                        borderRadius: '13px',
                        width: '199px',
                        height: '43.6px',
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '300',
                        color: '#000',
                        backgroundColor: '#938C8C'
                    }}
                >
                    Coming Soon
                </Button>
            </div>
            <div className="flex justify-center max-[1399px]:gap-3 gap-6 items-center mx-[32px]">
                <div>
                    <LoadingCard />
                </div>
                <MediaQuery minWidth={1400}>
                    <div>
                        <LoadingCard />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={902}>
                    <div>
                        <LoadingCard />
                    </div>
                </MediaQuery>
            </div>
        </div>
    )
}

export default ComingSoon