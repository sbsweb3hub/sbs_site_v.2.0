import { ProjectType } from '@/types';
import { validateInput } from '@/utils/validationUtils';
import { Input } from '@nextui-org/react'
import { useMemo, useState } from 'react';

const Links = ({ disabled, project }: { disabled?: boolean, project?: ProjectType }) => {
    const [formData, setFormData] = useState({
        web: "",
        twitter: "",
        discord: "",
        pitchdeck: "",
        projectTg: ""
    });

    const handleChange = (field: string) => (value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const isInvalid = useMemo(() => ({
        web: formData.web !== "" && !validateInput('web', formData.web),
        twitter: formData.twitter !== "" && !validateInput('email', formData.twitter),
        discord: formData.discord !== "" && !validateInput('discord', formData.discord),
        pitchdeck: formData.pitchdeck !== "" && !validateInput('pitchdeck', formData.pitchdeck),
        projectTg: formData.projectTg !== "" && !validateInput('projectTg', formData.projectTg),

    }), [formData]);
    return (
        <div className='flex flex-col ml-[117px]'>
            <p className='text-[26px] text-[#000] font-semibold mb-[46px]'>
                Links
            </p>
            <div className='flex flex-col gap-[32px]'>
                <Input
                    variant="faded"
                    labelPlacement="outside"
                    label="Website"
                    placeholder="https://launch.com"
                    type='string'
                    name='web'
                    className="w-[256px] h-[41px] text-[#000]"
                    isInvalid={isInvalid.web}
                    color={isInvalid.web ? "danger" : "success"}
                    errorMessage={isInvalid.web && "URL should be less than 32 digits"}
                    onValueChange={handleChange("web")}
                    {...(disabled && { isDisabled: true })}
                    defaultValue={project?.web}
                />
                <Input
                    variant="faded"
                    labelPlacement="outside"
                    label="Project Twitter"
                    placeholder="https://twitter.com/superproject"
                    type='string'
                    name='twitter'
                    className="w-[346px] h-[41px] text-[#000]"
                    isInvalid={isInvalid.twitter}
                    color={isInvalid.twitter ? "danger" : "success"}
                    errorMessage={isInvalid.twitter && "Twitter name should be less than 15 digits"}
                    onValueChange={handleChange("projectName")}
                    {...(disabled && { isDisabled: true })}
                    defaultValue={project?.twitter}
                />
                <Input
                    variant="faded"
                    labelPlacement="outside"
                    label="Project Discord"
                    placeholder="https://discord.com/superproject"
                    type='string'
                    name='discord'
                    className="w-[346px] h-[41px] text-[#000]"
                    isInvalid={isInvalid.discord}
                    color={isInvalid.discord ? "danger" : "success"}
                    errorMessage={isInvalid.discord && "Project name should be less than 10 digits"}
                    onValueChange={handleChange("discord")}
                    {...(disabled && { isDisabled: true })}
                    defaultValue={project?.discord}
                />
                <Input
                    variant="faded"
                    labelPlacement="outside"
                    label="Project Telegram"
                    placeholder="https://t.me/superproject"
                    className="w-[346px] h-[41px] text-[#000]"
                    type='string'
                    name='projectTg'
                    isInvalid={isInvalid.projectTg}
                    color={isInvalid.projectTg ? "danger" : "success"}
                    errorMessage={isInvalid.projectTg && "project Telegram name should be less than 15 digits"}
                    onValueChange={handleChange("projectTg")}
                    {...(disabled && { isDisabled: true })}
                    defaultValue={project?.projectTg}
                />
                <Input
                    variant="faded"
                    labelPlacement="outside"
                    label="Whitepaper/Pitch"
                    placeholder="https://drive.google.com/drive/...."
                    type='string'
                    name='pitchdeck'
                    className="w-[577px] h-[41px] text-[#000]"
                    isInvalid={isInvalid.pitchdeck}
                    color={isInvalid.pitchdeck ? "danger" : "success"}
                    errorMessage={isInvalid.pitchdeck && "Pitchdeck should be less than 232 digits"}
                    onValueChange={handleChange("Pitchdeck")}
                    {...(disabled && { isDisabled: true })}
                    defaultValue={project?.pitchdeck} />
            </div>
        </div>
    )
}

export default Links
