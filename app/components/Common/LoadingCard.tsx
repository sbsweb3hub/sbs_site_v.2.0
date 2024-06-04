import '@/app/components/Common/Buttons/SeeDetailsButton/index.css'
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const LoadCard = () => {
    return (
       /*  <Card className="shrink-0 sm:w-[438px] w-[365px] h-[461px] space-y-5 p-4 bg-[#797979]" radius="lg">
            <Skeleton className="rounded-lg">
                <div className="h-40 rounded-lg bg-default-300"></div>
            </Skeleton>
                <div className="space-y-10">
            <Skeleton className="w-3/5 rounded-lg">
                <div className="h-12 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
                <div className="h-12 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">  
                <div className="h-12 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
            </div>
        </Card> */
        <>
            <div
                style={{
                    width: "414px",
                    height: "663px",
                    background: "url(/greycard.svg) no-repeat",
                   // background: `url(${project?.backgroundImageUrl}) no-repeat`,
                    minWidth: "414px",
                    minHeight: "663px"
                }}
                className="relative flex flex-col items-start scale-85  max-[500px]:scale-[0.8]"
            >
                <Skeleton className='lcard absolute top-[10px] left-[14px]'>
                    <div className="lcard absolute top-[10px] left-[14px]">
                    </div>
                </Skeleton>
                <Skeleton className='w-[386px] h-[84px] mt-[190px] ml-[14px] rounded-[5px]'>
                    <div className='w-[386px] h-[84px] mt-[190px] ml-[14px] rounded-[5px]'>

                    </div>
                </Skeleton>
                <Skeleton className='w-[200px] h-[60px] mt-[20px] ml-[14px] rounded-[5px]'>
                    <div className='w-[200px] h-[60px] mt-[20px] ml-[14px] rounded-[5px]'>
                    </div>
                </Skeleton>
                <Skeleton className='w-[386px] h-[165px] ml-[14px] mt-[40px] rounded-[5px]'>
                    <div className='w-[386px] h-[165px] ml-[14px] mt-[40px] rounded-[5px]'>

                    </div>
                </Skeleton>
            </div>
        </>
    )
}

export default LoadCard