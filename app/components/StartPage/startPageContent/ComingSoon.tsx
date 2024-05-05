import React from "react";
import { Button, Link } from "@nextui-org/react";
import ScrollingCards from "../../Common/ScrollingCards";
import WhiteArrow from "../../MainPage/MainPageContent/WhiteArrow";

const ComingSoon = () => {
    return (
        <div className="flex flex-col w-full mt-[100px]">
            <div className="flex max-[761px]:flex-col min-[762px]:justify-between 
                    min-[762px]:items-center items-start w-11/12 min-[762px]:w-[723px] max-[761px]:gap-3 mb-[70px] ml-[36px]">
                <span className="text-[36px] text-[#FFF] font-bold">
                    Upcoming on Launchpad
                </span>
                <Button
                    href="/app/projects"
                    as={Link}
                    variant="bordered"
                    endContent={<WhiteArrow/>}
                    style={{
                        borderRadius: '13px',
                        width: '199px',
                        height: '43.6px',
                        textAlign: 'center',
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#FFF',
                    }}
                >
                    Explore projects
                </Button>
            </div>
            <div className="flex justify-center max-[1399px]:gap-3 gap-6 items-center mx-[32px]">
                <ScrollingCards />
            </div>
        </div>
    )
}

export default ComingSoon