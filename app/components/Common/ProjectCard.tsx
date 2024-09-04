import '@/app/components/Common/Buttons/SeeDetailsButton/index.css'
import '@/app/components/font.css'
import React, {useState, useEffect} from "react";
import { Progress, Avatar, Button, Tabs, Tab } from "@nextui-org/react";
import { Arrow } from './Buttons/SeeDetailsButton/Arrow';
import { ProjectType } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { getDataForProgressBar } from '@/services/onchain/onchain-service';

interface ProjectCardProps {
    status: 'live' | 'funded' | 'coming'
    project: ProjectType
}



const ProjectCard: React.FC<ProjectCardProps> = ({ status, project }) => {
    
    const validPrice = project.tokenPrice ?? 0
    const calculateCap = (tokenPrice: number | undefined , tokenForSeed: number | undefined) => {
        const price = tokenPrice ?? 0;
        const tokens = tokenForSeed ?? 0;
        return price * tokens;
    };

    const maxCap = calculateCap(project.tokenPrice, project.maxTokenForSeed).toString()

    const [raised, setRaised] = useState<string>("0");
    const [percentage, setPercentage] = useState<number>(0);
    const [label, setLabel] = useState<string>(`0 / ${maxCap}`)
    const [timeRemaining, setTimeRemaining] = useState<string>('0 hours 0 minutes 0 seconds');
    const [daysRemaining, setDaysRemaining] = useState<string>('0')

    const padWithZero = (number: number) => {
        return number.toString().padStart(2, '0');
    };
    

  

    useEffect(() => {
        const fetchData = async () => {
          if (project.onchainId !== undefined) {
            try {
              const data = await getDataForProgressBar(project.onchainId);
              setRaised(data.raised);
              const raisedValue = parseFloat(data.raised);
              const percentageValue = project.maxTokenForSeed ? (raisedValue / (project.maxTokenForSeed * validPrice)) * 100 : 0;
              if (!isNaN(percentageValue)) {
                setPercentage(parseFloat(percentageValue.toFixed(0)));
              } else {
                setPercentage(0);
              }
              setLabel(`${data.raised} / ${maxCap}`)
    
            } catch (error) {
              console.error(error);
            }
          }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000)
        return () => clearInterval(interval)
        
    }, [project.onchainId, project.maxTokenForSeed, validPrice, maxCap]);

    useEffect(() => {
        const calculateTimeRemaining = () => {
          const endDate = new Date(new Date(project.startDate!).getTime() + project.seedDuration! * 24 * 60 * 60 * 1000);
          const now = new Date();
          const timeDiff = endDate.getTime() - now.getTime();
    
          if (timeDiff <= 0) {
            setTimeRemaining('0 : 0 : 0 ');
            setDaysRemaining ('0')
            return;
          }
    
          if (Number(raised) === calculateCap(validPrice, project.maxTokenForSeed!)){
            setTimeRemaining('0 : 0 : 0 ');
            setDaysRemaining ('0')
            return;
          }
    
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
          setTimeRemaining(`${padWithZero(hours)} : ${padWithZero(minutes)} : ${padWithZero(seconds)}`);
          setDaysRemaining(`${days}`)
        };
    
        calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 1000);
        return () => clearInterval(interval);
      }, [project.startDate, project.seedDuration, validPrice, project.maxTokenForSeed, raised]);

    function formatUrl(url: string): string {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          return `http://${url}`;
        }
        return url;
    }

    const links = {
        web: project.web ? formatUrl(project.web) : null,
        twitter: project.twitter ? formatUrl(project.twitter) : null,
        discord: project.discord ? formatUrl(project.discord) : null,
        telegram: project.projectTg ? formatUrl(project.projectTg) : null,
    }


    
    
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
                            {new Date(
                                project.startDate as string
                                ).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <p className="text-[14px] text-[#FFFFFF] font-medium">
                            {/* 16:00 UTC */}
                        </p>
                    </div>
                </div>
                <div className='flex gap-[12px] ml-[46px] mt-[23px]'>
                    {links.twitter &&(
                        <Link
                            target='blank'
                            href={links.twitter}
                        >
                            <Image
                                src='/x.png'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                    )}
                    {links.telegram &&(
                        <Link
                            target='blank'
                            href={links.telegram}
                        >
                            <Image
                                src='/tg.png'
                                alt=''
                                width={18.6}
                                height={18.6}
                            /> 
                        </Link>
                    )}
                    {links.discord &&(
                        <Link
                            target='blank'
                            href={links.discord}
                        >
                            <Image
                                src='/discord.svg'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                    )}
                    {links.web && (
                        <Link
                            target='blank'
                            href={links.web}
                        >
                            <Image
                                src='/webw.svg'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                    )}
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
                                        {calculateCap(project.tokenPrice, project.maxTokenForSeed).toFixed(4)}
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {calculateCap(project.tokenPrice, project.minTokenForSeed).toFixed(4)} 
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {raised}
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
                    {links.twitter &&(
                        <Link
                            target='blank'
                            href={links.twitter}
                        >
                            <Image
                                src='/x.png'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                    )}
                    {links.telegram &&(
                        <Link
                            target='blank'
                            href={links.telegram}
                        >
                            <Image
                                src='/tg.png'
                                alt=''
                                width={18.6}
                                height={18.6}
                            /> 
                        </Link>
                    )}
                    {links.discord &&(
                        <Link
                            target='blank'
                            href={links.discord}
                        >
                            <Image
                                src='/discord.svg'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                    )}
                    {links.web && (
                        <Link
                            target='blank'
                            href={links.web}
                        >
                            <Image
                                src='/webw.svg'
                                alt=''
                                width={18.6}
                                height={18.6}
                            />
                        </Link>
                    )}
                </div>
                <div className="flex flex-col items-start ml-[0px]">
                    <p className="text-[15px] text-[#FFFFFF80] font-medium">
                        Launch date :
                    </p>
                    <p className="text-[15px] text-[#FFFFFF] font-medium">
                        {new Date(
                            project.startDate as string
                            ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}
                    </p>
                    <p className="text-[14px] text-[#FFFFFF] font-medium">
                        {new Date(
                            project.startDate as string
                            ).toLocaleTimeString("en-US", {
                            hour: '2-digit',
                            minute: '2-digit',
                            
                        })}
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
                                    {calculateCap(project.tokenPrice, project.maxTokenForSeed).toFixed(4)}
                                </p>
                                <p className="text-[15px] text-[#FFFFFF] font-normal">
                                    {calculateCap(project.tokenPrice, project.minTokenForSeed).toFixed(4)}
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
                            label={label}
                            size="lg"
                            value={percentage}
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
                            {daysRemaining} <span className='text-[#FFFFFF80]'>days</span>
                        </p>
                        <p className="text-[14px] text-[#FFFFFF] font-medium">
                            {timeRemaining}
                        </p>
                    </div>
                </div>
                <div className='flex gap-[12px] ml-[46px] mt-[23px]'>
                        {links.twitter &&(
                            <Link
                                target='blank'
                                href={links.twitter}
                            >
                                <Image
                                    src='/x.png'
                                    alt=''
                                    width={18.6}
                                    height={18.6}
                                />
                            </Link>
                        )}
                        {links.telegram &&(
                            <Link
                                target='blank'
                                href={links.telegram}
                            >
                                <Image
                                    src='/tg.png'
                                    alt=''
                                    width={18.6}
                                    height={18.6}
                                /> 
                            </Link>
                        )}
                        {links.discord &&(
                            <Link
                                target='blank'
                                href={links.discord}
                            >
                                <Image
                                    src='/discord.svg'
                                    alt=''
                                    width={18.6}
                                    height={18.6}
                                />
                            </Link>
                        )}
                        {links.web && (
                            <Link
                                target='blank'
                                href={links.web}
                            >
                                <Image
                                    src='/webw.svg'
                                    alt=''
                                    width={18.6}
                                    height={18.6}
                                />
                            </Link>
                        )}
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
                                        {calculateCap(project.tokenPrice, project.maxTokenForSeed).toFixed(4)}
                                    </p>
                                    <p className="text-[15px] text-[#FFFFFF] font-normal">
                                        {calculateCap(project.tokenPrice, project.minTokenForSeed).toFixed(4)}
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
