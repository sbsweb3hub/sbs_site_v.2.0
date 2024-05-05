'use client'
import '@/app/components/Common/Buttons/SeeDetailsButton/index.css'
import '@/app/components/font.css'
import React from "react";
import { Progress, Avatar, Button, Tabs, Tab } from "@nextui-org/react";
import { Arrow } from './Buttons/SeeDetailsButton/Arrow'; 

interface ProjectCardProps  {
  isFunded?: boolean;
}



const ProjectCard: React.FC<ProjectCardProps> = ({ isFunded = false }) => {
  return isFunded ? (
    <div
      style={{
        width: "464px",
        height: "663px",
        background: "url(/fcard.svg) no-repeat",
        minWidth: "464px",
        minHeight: "663px"
      }}
      className="relative flex flex-col items-start"
    >
        <Avatar 
            src="/Logo.png"
            className="absolute w-[84px] h-[75px] border-black border-[5px] top-[128px] left-[32px] rounded-[20px]"
        />

        <div
            style={{
            borderRadius: "0px 0px 5px 5px",
            border: "0px solid #000",
            background: "linear-gradient(0deg, #F1F1F1 59.18%, #7D7D7D 100%)",
            }}
            className="flex flex-col w-[79.7%] h-[84px] mt-[188px] ml-[22.5px]"
        >
            <div className="flex justify-between items-center mt-[32px] mr-[34px] ml-[25px]">
                <p 
                    className='text-[24px] text-[#000] font-bold' 
                    style={{fontFamily: 'Geom Graphic'}}
                >
                    GuideDAOwifHAT
                </p>
                <p className="text-[15px] text-[#000] font-normal">
                    Built on
                </p>
            </div>
        </div>
        <div className="flex justify-between items-start mt-[15px] ml-[46px]">
            <div className="relative flex flex-col gap-[4px]">
                <Progress
                    label='5,000 / 5,000 ETH' 
                    size="lg"
                    value={100}
                    showValueLabel={true}
                    classNames={{
                        value: 'absolute top-[35px]',
                        base: 'w-[180px] h-[33px]',
                        label: 'absolute top-[42px] right-0 text-[10px] font-normal',
                        indicator: 'bg-gradient-to-r from-[#3E3E10] to-[#FCFC03]'
                    }}
                />
            </div>
            <div className="flex flex-col items-start ml-[79px]">
                <p className="text-[11px] text-[#FFFFFF80] font-medium">
                    Launch date
                </p>
                <p className="text-[15px] text-[#FFFFFF] font-medium">
                    5/15/2024
                </p>
                <p className="text-[14px] text-[#FFFFFF] font-medium">
                    16:00 UTC
                </p>
            </div>
        </div>
        <div className="flex flex-col w-[80%] ml-[30px] mt-[20px]"> 
            <Tabs
                variant="underlined"
                aria-label="project-info"
            >
                <Tab key='offerings' title='Offerings'>
                    <div className="flex justify-between items-center ml-[8px] mt-[25px]">
                        <div className="flex flex-col items-start gap-[10px]">
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                Token price
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                Fundraise goal
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                Max allocation
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                Total raise
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-[10px] mr-[52px]">
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                0.02
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                3,000,000 $                            
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                50,000,000
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                3,800,000 $
                            </p>
                        </div>
                    </div>
                </Tab>
                <Tab key='description' title='Description'>
                    <div className="flex flex-col items-start ml-[10px] mt-[25px]">
                        <p>
                            Description info
                        </p>
                    </div>
                </Tab>
                <Tab key='other-info' title='Other info'>
                    <div className="flex flex-col items-start ml-[10px] mt-[25px]">
                        <p>
                            Other info
                        </p>
                    </div>
                </Tab>
            </Tabs>
        </div>
        <div className='absolute left-[38px] bottom-[36px]'>
            <Button
                className="custom-button"
                radius='none'
                endContent={<Arrow/>}
            >
                See details
            </Button>
        </div>
    </div>
  ) : (
    <div
      style={{
        width: "464px",
        height: "663px",
        background: "url(/ucard.svg) no-repeat",
        minWidth: "464px",
        minHeight: "663px"
      }}
      className="relative flex flex-col items-start"
    >
        <Avatar 
            src="/Logo.png"
            className="absolute w-[84px] h-[75px] border-black border-[5px] top-[128px] left-[32px] rounded-[20px]"
        />

        <div
            style={{
            borderRadius: "0px 0px 5px 5px",
            border: "0px solid #000",
            background: "linear-gradient(0deg, #F1F1F1 59.18%, #7D7D7D 100%)",
            }}
            className="flex flex-col w-[79.7%] h-[84px] mt-[188px] ml-[22.5px]"
        >
            <div className="flex justify-between items-center mt-[32px] mr-[34px] ml-[25px]">
                <p 
                    style={{fontFamily: 'Geom Graphic'}}
                    className="text-[24px] text-[#000] font-bold"
                >
                    GuideDAOwifHAT
                </p>
                <p className="text-[15px] text-[#000] font-normal">
                    Built on
                </p>
            </div>
        </div>
        <div className="flex justify-between items-start mt-[15px] ml-[46px]">
            <div className="relative flex flex-col gap-[4px]">
                <Progress
                    label='4,000 / 5,000 ETH' 
                    size="lg"
                    value={80}
                    showValueLabel={true}
                    classNames={{
                        value: 'absolute top-[35px]',
                        base: 'w-[180px] h-[33px]',
                        label: 'absolute top-[42px] right-0 text-[10px] font-normal',
                        indicator: 'bg-gradient-to-r from-[#172418] to-[#58D865]'
                    }}
                />
            </div>
            <div className="flex flex-col items-start ml-[79px]">
                <p className="text-[11px] text-[#FFFFFF80] font-medium">
                    Launch date
                </p>
                <p className="text-[15px] text-[#FFFFFF] font-medium">
                    5/15/2024
                </p>
                <p className="text-[14px] text-[#FFFFFF] font-medium">
                    16:00 UTC
                </p>
            </div>
        </div>
        <div className="flex flex-col w-[80%] ml-[30px] mt-[20px]"> 
            <Tabs
                variant="underlined"
                aria-label="project-info"
            >
                <Tab key='offerings' title='Offerings'>
                    <div className="flex justify-between items-center ml-[8px] mt-[25px]">
                        <div className="flex flex-col items-start gap-[10px]">
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                Token price
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                Fundraise goal
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                Max allocation
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                Total raise
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-[10px] mr-[52px]">
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                0.02
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                3,000,000 $                            
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                50,000,000
                            </p>
                            <p className="text-[15px] text-[#FFFFFF] font-normal">
                                3,800,000 $
                            </p>
                        </div>
                    </div>
                </Tab>
                <Tab key='description' title='Description'>
                    <div className="flex flex-col items-start ml-[10px] mt-[25px]">
                        <p>
                            Description info
                        </p>
                    </div>
                </Tab>
                <Tab key='other-info' title='Other info'>
                    <div className="flex flex-col items-start ml-[10px] mt-[25px]">
                        <p>
                            Other info
                        </p>
                    </div>
                </Tab>
            </Tabs>
        </div>
        <div className='absolute left-[38px] bottom-[36px]'>
            <Button
                className="custom-button"
                radius='none'
                endContent={<Arrow/>}
            >
                See details
            </Button>
        </div>
    </div>
  );
};

export default ProjectCard;
