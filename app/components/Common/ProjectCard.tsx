import '@/app/components/Common/Buttons/SeeDetailsButton/index.css'
import '@/app/components/font.css'
import React from "react";
import { Progress, Avatar, Button, Tabs, Tab } from "@nextui-org/react";
import { Arrow } from './Buttons/SeeDetailsButton/Arrow';
import { ProjectType } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    status: 'live' | 'funded' | 'coming'
    project: ProjectType
}



const ProjectCard: React.FC<ProjectCardProps> = ({ status, project }) => {
    if (status === 'funded') {
        return (
            <div
                style={{
                    width: "464px",
                    height: "663px",
                    background: "url(/fcard.svg) no-repeat",
                    //background: `url(${project?.backgroundImageUrl}) no-repeat`,
                    minWidth: "464px",
                    minHeight: "663px"
                }}
                className="relative flex flex-col items-start"
            >   
                <div 
                    style={{
                        background: `url(${project?.backgroundImageUrl}) no-repeat`,
                    }}
                    className="clip-path-svg absolute top-[22.5px] left-[21.5px]">

                </div>
                <Avatar
                    src={project?.imageUrl}
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
                            className='text-[22px] text-[#000] font-semibold'
                            style={{ fontFamily: 'Geom Graphic' }}
                        >
                            {project?.projectName}
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
                        <p className="text-[15px] text-[#FFFFFF80] font-medium">
                            Completed :
                        </p>
                        <p className="text-[15px] text-[#FFFFFF] font-medium">
                            {project?.startDate}
                        </p>
                        <p className="text-[14px] text-[#FFFFFF] font-medium">
                            {/* 16:00 UTC */}
                        </p>
                    </div>
                </div>
                <div className='flex gap-[12px] ml-[46px] mt-[23px]'>
                    <Link
                        target='blank'
                        href='/'
                    >
                        <Image
                            src='/x.png'
                            alt=''
                            width={18.6}
                            height={18.6}
                        />
                    </Link>
                    <Link
                        target='blank'
                        href='/'
                    >
                        <Image
                            src='/tg.png'
                            alt=''
                            width={18.6}
                            height={18.6}
                        />
                    </Link>
                    <Link
                        target='blank'
                        href='/'
                    >
                        <Image
                            src='/git.png'
                            alt=''
                            width={18.6}
                            height={18.6}
                        />
                    </Link>
                    <Link
                        target='blank'
                        href='/'
                    >
                        <Image
                            src='/ds.png'
                            alt=''
                            width={18.6}
                            height={18.6}
                        />
                    </Link>
                </div>
                <div className="flex flex-col w-[80%] ml-[30px] mt-[20px]">
                    <Tabs
                        variant="underlined"
                        aria-label="project-info"
                    >
                        <Tab key='offerings' title='Offerings'>
                            <div className="flex justify-between items-center ml-[8px] mt-[0px]">
                                <div className="flex flex-col items-start gap-[10px]">
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        Token price
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        Hard Cap
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        Soft Cap
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        Total raises
                                    </p>
                                </div>
                                <div className="flex flex-col items-start gap-[10px] mr-[52px]">
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {project?.tokenPrice}
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {project?.tokenSupply}
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {project?.tokenName}
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {project?.tokenSymbol}
                                    </p>
                                </div>
                            </div>
                        </Tab>
                        <Tab key='description' title='Description'>
                            <div className="flex flex-col items-start ml-[10px] mt-[25px]">
                                <p>
                                    {project?.description}
                                </p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <div className='absolute left-[38px] bottom-[25px]'>
                    <Link href={`/app/projects/${project?.id}`}>
                        <Button
                            className="custom-button"
                            radius='none'
                            endContent={<Arrow />}
                        >
                            See details
                        </Button>
                    </Link>

                </div>
            </div >
        )
    }
    if (status === 'coming') {
        return (
        <div
            style={{
                width: "464px",
                height: "663px",
                background: "url(/ucard.svg) no-repeat",
               // background: `url(${project?.backgroundImageUrl}) no-repeat`,
                minWidth: "464px",
                minHeight: "663px"
            }}
            className="relative flex flex-col items-start"
        >
            <div 
                style={{
                    background: `url(${project?.backgroundImageUrl}) no-repeat`,
                }}
                className="clip-path-svg absolute top-[22.5px] left-[21.5px]">

            </div>
            <Avatar
                src={project?.imageUrl}
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
                        style={{ fontFamily: 'Geom Graphic' }}
                        className="text-[22px] text-[#000] font-semibold"
                    >
                        {project?.projectName}
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-start mt-[30px] ml-[46px]">
                <div className='flex items-center gap-[12px] mr-[124px] mt-[5px]'>
                    <Link
                        target='blank'
                        href='/'
                    >
                        <Image
                            src='/x.png'
                            alt=''
                            width={18.6}
                            height={18.6}
                        />
                    </Link>
                    <Link
                        target='blank'
                        href='/'
                    >
                        <Image
                            src='/tg.png'
                            alt=''
                            width={18.6}
                            height={18.6}
                        />
                    </Link>
                    <Link
                        target='blank'
                        href='/'
                    >
                        <Image
                            src='/git.png'
                            alt=''
                            width={18.6}
                            height={18.6}
                        />
                    </Link>
                    <Link
                        target='blank'
                        href='/'
                    >
                        <Image
                            src='/ds.png'
                            alt=''
                            width={18.6}
                            height={18.6}
                        />
                    </Link>
                </div>
                <div className="flex flex-col items-start ml-[0px]">
                    <p className="text-[15px] text-[#FFFFFF80] font-medium">
                        Launch date :
                    </p>
                    <p className="text-[15px] text-[#FFFFFF] font-medium">
                        {project?.startDate}
                    </p>
                    <p className="text-[14px] text-[#FFFFFF] font-medium">
                        {/* 16:00 UTC */}
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
                                    Hard Cap
                                </p>
                                <p className="text-[15px] text-[#FFFFFF] font-normal">
                                    Soft Cap
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-[10px] mr-[52px]">
                                <p className="text-[15px] text-[#FFFFFF] font-normal">
                                    {project?.tokenPrice}
                                </p>
                                <p className="text-[15px] text-[#FFFFFF] font-normal">
                                    {project?.tokenSupply}
                                </p>
                                <p className="text-[15px] text-[#FFFFFF] font-normal">
                                    {project?.tokenName}
                                </p>
                            </div>
                        </div>
                    </Tab>
                    <Tab key='description' title='Description'>
                        <div className="flex flex-col items-start ml-[10px] mt-[25px]">
                            <p>
                                {project?.description}
                            </p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <div className='absolute left-[38px] bottom-[36px]'>
                <Link href={`/app/projects/${project?.id}`}>
                    <Button
                        className="custom-button"
                        radius='none'
                        endContent={<Arrow />}
                    >
                        See details
                    </Button>
                </Link>
            </div>
        </div>
    );
    }
    if (status === 'live') {
        return (
            <div
            style={{
                width: "414px",
                height: "663px",
                background: "url(/lcard.svg) no-repeat",
               // background: `url(${project?.backgroundImageUrl}) no-repeat`,
                minWidth: "414px",
                minHeight: "663px"
            }}
            className="relative flex flex-col items-start"
            >
                <div 
                    style={{
                        background: `url(${project?.backgroundImageUrl}) no-repeat`,
                    }}
                    className="lcard absolute top-[10px] left-[14px]">

                </div>
                <Avatar
                    src={project?.imageUrl}
                    className="absolute w-[84px] h-[75px] border-black border-[5px] top-[128px] left-[32px] rounded-[20px]"
                />

                <div
                    style={{
                        borderRadius: "0px 0px 5px 5px",
                        border: "0px solid #000",
                        background: "linear-gradient(0deg, #F1F1F1 59.18%, #7D7D7D 100%)",
                    }}
                    className="flex flex-col w-[386px] h-[84px] mt-[176px] ml-[14px]"
                >
                    <div className="flex justify-between items-center mt-[32px] mr-[34px] ml-[25px]">
                        <p
                            style={{ fontFamily: 'Geom Graphic' }}
                            className="text-[22px] text-[#000] font-semibold"
                        >
                            {project?.projectName}
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
                        <p className="text-[12px] text-[#FFFFFF80] font-medium">
                            Ends in :
                        </p>
                        <p className="text-[17px] text-[#FFFFFF] font-medium">
                            20 <span className='text-[#FFFFFF80]'>days</span>
                        </p>
                        <p className="text-[14px] text-[#FFFFFF] font-medium">
                            16 : 00 : 00
                        </p>
                    </div>
                </div>
                <div className='flex gap-[12px] ml-[46px] mt-[23px]'>
                        <Link
                            target='blank'
                            href='/'
                        >
                            <Image
                                src='/x.png'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                        <Link
                            target='blank'
                            href='/'
                        >
                            <Image
                                src='/tg.png'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                        <Link
                            target='blank'
                            href='/'
                        >
                            <Image
                                src='/git.png'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                        <Link
                            target='blank'
                            href='/'
                        >
                            <Image
                                src='/ds.png'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
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
                                        Hard Cap
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        Soft Cap
                                    </p>
                                </div>
                                <div className="flex flex-col items-start gap-[10px] mr-[52px]">
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {project?.tokenPrice}
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {project?.tokenSupply}
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {project?.tokenName}
                                    </p>
                                </div>
                            </div>
                        </Tab>
                        <Tab key='description' title='Description'>
                            <div className="flex flex-col items-start ml-[10px] mt-[25px]">
                                <p>
                                    {project?.description}
                                </p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <div className='absolute left-[38px] bottom-[36px]'>
                    <Link href={`/app/projects/${project?.id}`}>
                        <Button
                            className="custom-button"
                            radius='none'
                            endContent={<Arrow />}
                            style={{
                                backgroundColor: '#D3D300'
                            }}
                        >
                            See details
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
    return null
};

export default ProjectCard;
