'use client'
import React, { useMemo, useState } from "react";
import { Input } from "@nextui-org/react";
import { validateInput } from "@/utils/validationUtils";

const BasicInfo = () => {

    const [formData, setFormData] = useState({
        projectName: "",
        contactEmail: "",
        contactTelegram: "",
        contactName: ""
    });

    const handleChange = (field: string) => (value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const isInvalid = useMemo(() => ({
        projectName: formData.projectName !== "" && !validateInput('projectName', formData.projectName),
        contactEmail: formData.contactEmail !== "" && !validateInput('email', formData.contactEmail),
        contactTelegram: formData.contactTelegram !== "" && !validateInput('telegram', formData.contactTelegram),
        contactName: formData.contactName !== "" && !validateInput('contactName', formData.contactName)
    }), [formData]);

    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Basic information
            </p>
            <Input
                isRequired
                variant="faded"
                labelPlacement="outside"
                label="Project name"
                placeholder="e. g. Launching"
                type='string'
                name='projectName'
                className="w-[256px] h-[41px] text-[#000]"
                isInvalid={isInvalid.projectName}
                color={isInvalid.projectName ? "danger" : "success"}
                errorMessage={isInvalid.projectName && "Project name should be less than 10 digits"}
                onValueChange={handleChange("projectName")}
            />
            <div className="flex items-center gap-[65px] mt-[27px]">
                <Input
                    variant="faded"
                    labelPlacement="outside"
                    label="Contact name"
                    placeholder="e.g. Name & Surname"
                    type='string'
                    name='contactName'
                    isInvalid={isInvalid.contactName}
                    color={isInvalid.contactName ? "danger" : "success"}
                    errorMessage={isInvalid.contactName && "Contact name should be less than 10 degits"}
                    onValueChange={handleChange("contactName")}
                    className="w-[256px] h-[41px] text-[#000]"
                />
                <Input
                    variant="faded"
                    labelPlacement="outside"
                    label="Contact Telegram Handle"
                    placeholder="e.g. @elon_musk"
                    type='string'
                    name='contactTelegram'
                    isInvalid={isInvalid.contactTelegram}
                    color={isInvalid.contactTelegram ? "danger" : "success"}
                    errorMessage={isInvalid.contactTelegram && "Please enter a valid TG"}
                    onValueChange={handleChange("contactTelegram")}
                    className="w-[256px] h-[41px] text-[#000]"
                />
                <Input
                    isRequired
                    variant="faded"
                    labelPlacement="outside"
                    label="Email"
                    placeholder="e.g. launch777@mail.xyz"
                    type='string'
                    name='contactEmail'
                    isInvalid={isInvalid.contactEmail}
                    color={isInvalid.contactEmail ? "danger" : "success"}
                    errorMessage={isInvalid.contactEmail && "Please enter a valid email"}
                    onValueChange={handleChange("contactEmail")}
                    className="w-[256px] h-[41px] text-[#000]"
                />
            </div>
        </div>
    )
}

export default BasicInfo
