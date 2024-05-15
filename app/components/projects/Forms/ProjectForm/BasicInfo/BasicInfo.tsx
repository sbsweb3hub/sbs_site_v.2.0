import React from "react";
import { Input } from "@nextui-org/react";

const BasicInfo = () => {
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
                className="w-[256px] h-[41px] text-[#000]"
            />
            <div className="flex items-center gap-[65px] mt-[27px]">
                <Input
                    isRequired 
                    variant="faded"
                    labelPlacement="outside"
                    label="Contact name"
                    placeholder="e.g. Name & Surname"
                    className="w-[256px] h-[41px] text-[#000]"
                />
                <Input
                    isRequired 
                    variant="faded"
                    labelPlacement="outside"
                    label="Contact Telegram Handle"
                    placeholder="e.g. @elon_musk"
                    className="w-[256px] h-[41px] text-[#000]"
                />
                <Input
                    isRequired 
                    variant="faded"
                    labelPlacement="outside"
                    label="Email"
                    placeholder="e.g. launch777@mail.xyz"
                    className="w-[256px] h-[41px] text-[#000]"
                />
            </div>
        </div>
    )
}

export default BasicInfo