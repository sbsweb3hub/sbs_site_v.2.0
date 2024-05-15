'use client'
import React, { useState } from 'react';
import { 
    Card,
    CardBody,
    CardHeader,
    Select, 
    SelectItem, 
    Textarea,
    Input 
} from "@nextui-org/react";
import {I18nProvider} from "@react-aria/i18n";

interface CardProps {
    index: number;
    total: number;
  }
  
const StepCard: React.FC<CardProps> = ({ index, total }) => {
    return (
        <Card
            className='w-[788px] h-[336px] mb-[27px] bg-[#D9D9D94D]'
        >
            <CardHeader>
                <div className='flex w-[100%] justify-between mx-[27px]'>
                    <p className='text-[24px] text-[#000] font-semibold'>
                        Dev step {index}
                    </p>
                    <p className='text-[24px] text-[#000] font-semibold'>
                        {index} / {total}
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <div className='flex flex-col ml-[27px] gap-[34px]'>
                    <Input 
                        isRequired
                        variant='faded'
                        label='Duration [days]'
                        labelPlacement='outside'
                        placeholder='e.g 45 days'
                        className='w-[401px] h-[43px] text-[#000]'
                    />
                    <Textarea
                        maxRows={5}
                        isRequired
                        labelPlacement="outside"
                        variant="faded"
                        label="Description"
                        placeholder="first steps, thinking, testnet launch, team hooliday,"
                        className='w-[401px] h-[140px] text-[#000]'
                    />
                </div>
            </CardBody>
        </Card>
    );
};

const DevSteps = () => {
    const [count, setCount] = useState<number>(3);
    
    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Development steps
            </p>
            <Select
                isRequired
                value={count}
                onChange={e => setCount(Number(e.target.value))}
                className='w-[232px] h-[43px] text-[#000]'
                labelPlacement='outside'
                label='Steps amount'
                defaultSelectedKeys='3'
            >
                <SelectItem key={3} value={3}>3</SelectItem>
                <SelectItem key={4} value={4}>4</SelectItem>
                <SelectItem key={5} value={5}>5</SelectItem>
            </Select>
            <div className='flex flex-col mt-[55px]'>
                {Array.from({ length: count }, (_, index) => <StepCard key={index} index={index + 1} total={count} />)}
            </div>
        </div>
    )
}

export default DevSteps