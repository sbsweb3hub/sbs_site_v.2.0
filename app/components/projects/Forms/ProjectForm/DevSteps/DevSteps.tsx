'use client'
import React from 'react';
import { Card, CardBody, CardHeader, Input, Textarea } from "@nextui-org/react";
import { ProjectType } from '@/types';

interface CardProps {
    index: number;
    total: number;
    disabled?: boolean;
    project?: ProjectType
}

const StepCard: React.FC<CardProps> = ({ index, total, disabled, project }) => {
    return (
        <Card className='w-[788px] h-[336px] mb-[27px] bg-[#D9D9D94D]'>
            <CardHeader>
                <div className='flex w-[100%] justify-between mx-[27px]'>
                    <p className='text-[24px] text-[#000] font-semibold'>
                        Dev step {index + 1}
                    </p>
                    <p className='text-[24px] text-[#000] font-semibold'>
                        {index + 1} / {total}
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
                        type='number'
                        min='1'
                        name={`steps[${index}].duration`}
                        className='w-[401px] h-[43px] text-[#000]'
                        {...(disabled && { isDisabled: true })}
                        defaultValue={project ? String(project.steps[index].duration) : undefined}

                    />
                    <Textarea
                        maxRows={5}
                        isRequired
                        labelPlacement="outside"
                        variant="faded"
                        label="Description"
                        placeholder="first steps, thinking, testnet launch, team holiday,"
                        type='string'
                        name={`steps[${index}].desc`}
                        className='w-[401px] h-[140px] text-[#000]'
                        {...(disabled && { isDisabled: true })}
                        defaultValue={project?.steps[index].desc}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

const DevSteps = ({ disabled, project }: { disabled?: boolean, project?: ProjectType }) => {
    const [count, setCount] = React.useState<number>(project?.steps.length ?? 3);

    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Development steps
            </p>
            <select
                required
                value={count}
                onChange={e => setCount(Number(e.target.value))}
                className='w-[232px] h-[43px] text-[#000]'
            >
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <div className='flex flex-col mt-[55px]'>
                {Array.from({ length: count }, (_, index) => (
                    <StepCard key={index} index={index} total={count} disabled={disabled!} project={project!} />
                ))}
            </div>
        </div>
    )
}

export default DevSteps;
