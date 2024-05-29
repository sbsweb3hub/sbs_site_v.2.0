import { ProjectType } from "@/types";
import { Input } from "@nextui-org/react";

const TokenInfo = ({ disabled, project }: { disabled?: boolean, project?: ProjectType }) => {
    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Token information
            </p>
            <div className="flex items-start gap-[127px]">
                <div className="flex flex-col gap-[33px]">
                    <Input
                        labelPlacement="outside"
                        variant="faded"
                        label="Token name"
                        placeholder="Token name"
                        type='string'
                        name='tokenName'
                        className="w-[360px] h-[43px] text-[#000]"
                        {...(disabled && { isDisabled: true })}
                        defaultValue={project?.tokenName}
                    />
                    <Input
                        labelPlacement="outside"
                        variant="faded"
                        label="Total token supply"
                        placeholder="e.g. 100,000,000"
                        type='number'
                        name='tokenSupply'
                        className="w-[360px] h-[43px] text-[#000]"
                        min="0"
                        {...(disabled && { isDisabled: true })}
                        defaultValue={project ? String(project.tokenSupply) : undefined} />
                    <Input
                        labelPlacement="outside"
                        variant="faded"
                        label="Maximum tokens amount for seed round"
                        placeholder="e.g. 10,000,000"
                        className="w-[360px] h-[43px] text-[#000]"
                        type='number'
                        name='maxTokenForSeed'
                        min="0"
                        {...(disabled && { isDisabled: true })}
                        defaultValue={project ? String(project.maxTokenForSeed) : undefined} />
                </div>
                <div className="flex flex-col gap-[33px]">
                    <Input
                        labelPlacement="outside"
                        variant="faded"
                        label="Symbol of token"
                        placeholder="e.g. ETH"
                        type='string'
                        name='tokenSymbol'
                        className="w-[360px] h-[43px] text-[#000]"
                        {...(disabled && { isDisabled: true })}
                        defaultValue={project?.tokenSymbol}
                    />
                    <Input
                        labelPlacement="outside"
                        variant="faded"
                        label="Token price [$]"
                        placeholder="e.g. 0.005 $"
                        type='number'
                        name='tokenPrice'
                        className="w-[360px] h-[43px] text-[#000]"
                        min="0"
                        {...(disabled && { isDisabled: true })}
                        defaultValue={project ? String(project.tokenPrice) : undefined} />
                    <Input
                        labelPlacement="outside"
                        variant="faded"
                        label="Minimum tokens amount for seed round"
                        placeholder="e.g. 1,000,000"
                        className="w-[360px] h-[43px] text-[#000]"
                        type='number'
                        name='minTokenForSeed'
                        min="0"
                        {...(disabled && { isDisabled: true })}
                        defaultValue={project ? String(project.minTokenForSeed) : undefined} />
                </div>
            </div>
        </div>
    )
}

export default TokenInfo
