'use client'
import '@/app/components/WelcomePage/WelcomePageContent/index.css'
import React from "react";
import { Chip, Button, useDisclosure } from "@nextui-org/react";
import CustomModal from "../../Forms/ProjectForm/Modals/CustomModal";


interface VotingCardProps {
    status: 'live' | 'finished' | 'coming'
    index: string
    startDate: string
    endDate: string
    votes: string
}

const Voting: React.FC<VotingCardProps> = ({status, index, startDate, endDate, votes}) => {
    
    const {isOpen, onOpen, onClose} = useDisclosure();

    if (status === 'finished') {
        return (
            <>
                <div className="flex items-center gap-[150px] w-[1175px] h-[103px] bg-[#E5E5E599] rounded-[3px] mt-[70px]">
                    <div className="flex items-end gap-[30px] ml-[20px]">
                        <p className="text-[22px] text-[#000] font-semibold">
                        {index} )
                        </p>
                        <div className="flex flex-col gap-[15px]">
                            <p className="text-[18px] text-[#828282] font-semibold">
                                Start date
                            </p>
                            <p className="text-[22px] text-[#000] font-semibold">
                                {startDate}
                            </p>
                        </div>
                        <p className="text-[22px] text-[#000] font-semibold">
                            -
                        </p>
                        <div className="flex flex-col gap-[15px]">
                            <p className="text-[18px] text-[#828282] font-semibold">
                                End date
                            </p>
                            <p className="text-[22px] text-[#000] font-semibold">
                                {endDate}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[18px] text-[#828282] font-semibold">
                            Status
                        </p>
                        <p className="text-[22px] text-[#000] font-semibold">
                            Finished
                         </p>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[18px] text-[#828282] font-semibold">
                            Negative votes
                        </p>
                        <p className="text-[22px] text-[#000] font-semibold">
                            {votes}%
                         </p>
                    </div>
                </div>
            </>
        )
    }

    if (status === 'live') {
        return (
            <>
                <div className="relative flex items-center gap-[150px] w-[1175px] h-[103px] bg-[#DDDDDD] border-[3px] border-[#312F2B] rounded-[3px] mt-[70px]">
                    <Chip
                        radius='none'
                        className='absolute w-[238px] h-[46px] bg-[#312F2B] text-[#FFF] text-[22px] top-[-48px] left-[-3px]'
                    >
                        Current voting
                    </Chip>
                    <div className="flex items-end gap-[30px] ml-[20px]">
                        <p className="text-[22px] text-[#000] font-semibold">
                        {index} )
                        </p>
                        <div className="flex flex-col gap-[15px]">
                            <p className="text-[18px] text-[#828282] font-semibold">
                                Start date
                            </p>
                            <p className="text-[22px] text-[#000] font-semibold">
                                {startDate}
                            </p>
                        </div>
                        <p className="text-[22px] text-[#000] font-semibold">
                            -
                        </p>
                        <div className="flex flex-col gap-[15px]">
                            <p className="text-[18px] text-[#828282] font-semibold">
                                End date
                            </p>
                            <p className="text-[22px] text-[#000] font-semibold">
                                {endDate}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[18px] text-[#828282] font-semibold">
                            Status
                        </p>
                        <p className="text-[22px] text-[#000] font-semibold">
                            Live
                        </p>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[18px] text-[#828282] font-semibold">
                            Negative votes
                        </p>
                        <p className="text-[22px] text-[#000] font-semibold">
                            {votes}%
                        </p>
                    </div>
                    <Button
                        onPress={onOpen}
                        size="lg"
                        className="absolute bg-[#FFEFDC] border-[#BA8888] border-[3px] text-[#D18A73] text-[18px] right-[10px]"
                    >
                        Negative Vote
                    </Button>
                    <CustomModal
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                       <p className="text-[26px] text-[#EDE4B5] font-bold mt-[15px]">
                            Voting disclaimer
                       </p>
                       <p className="w-[85%] text-[18px] text-[#EDE4B5] font-bold mt-[15px]">
                            You dont need to vote if you continue to believe in the project,  otherwise You can do it.
                       </p>
                       <p className="w-[85%] text-[18px] text-[#EDE4B5] font-bold mt-[20px]">
                             Your voting power is 56,000 $FRST
                       </p>
                       <div className='flex items-center mt-[0px]'>
                            <Button
                                onPress={onClose}
                                className='w-[134px] h-[41px] bg-[#272726] border-[1px] border-[#D7CFA5] rounded-[5px] text-[#EDE4B5] text-[16px]'
                            >
                                Back
                            </Button>
                            <Button
                                className='svg-button text-lg font-semibold scale-[0.6]'
                            >
                                I want to Vote
                            </Button>
                       </div>
                    </CustomModal>
                </div>
            </>
        )
    }

    if (status === 'coming') {
        return (
            <>
                <div className="flex items-center gap-[150px] w-[1175px] h-[103px] bg-[#E5E5E599] rounded-[3px] mt-[70px]">
                    <div className="flex items-end gap-[30px] ml-[20px]">
                        <p className="text-[22px] text-[#000] font-semibold">
                        {index} )
                        </p>
                        <div className="flex flex-col gap-[15px]">
                            <p className="text-[18px] text-[#828282] font-semibold">
                                Start date
                            </p>
                            <p className="text-[22px] text-[#000] font-semibold">
                                {startDate}
                            </p>
                        </div>
                        <p className="text-[22px] text-[#000] font-semibold">
                            -
                        </p>
                        <div className="flex flex-col gap-[15px]">
                            <p className="text-[18px] text-[#828282] font-semibold">
                                End date
                            </p>
                            <p className="text-[22px] text-[#000] font-semibold">
                                {endDate}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[18px] text-[#828282] font-semibold">
                            Status
                        </p>
                        <p className="text-[22px] text-[#000] font-semibold">
                            Coming Soon
                         </p>
                    </div>
                </div>
            </>
        )
    }

    return null
}

export default Voting