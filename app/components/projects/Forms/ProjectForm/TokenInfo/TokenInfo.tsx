import { Input } from "@nextui-org/react";

const TokenInfo = () => {
    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Token information
            </p>
            <div className="flex items-start gap-[127px]">
                <div className="flex flex-col gap-[33px]">
                    <Input
                        isRequired
                        labelPlacement="outside"
                        variant="faded"
                        label="Token name"
                        placeholder="Token name"
                        className="w-[360px] h-[43px] text-[#000]"
                    />
                     <Input
                        isRequired
                        labelPlacement="outside"
                        variant="faded"
                        label="Total token supply"
                        placeholder="e.g. 100,000,000"
                        className="w-[360px] h-[43px] text-[#000]"
                    />
                     <Input
                        isRequired
                        labelPlacement="outside"
                        variant="faded"
                        label="Maximum tokens amount for seed round"
                        placeholder="e.g. 10,000,000"
                        className="w-[360px] h-[43px] text-[#000]"
                    />
                </div>
                <div className="flex flex-col gap-[33px]">
                    <Input
                        isRequired
                        labelPlacement="outside"
                        variant="faded"
                        label="Symbol of token"
                        placeholder="e.g. ETH"
                        className="w-[360px] h-[43px] text-[#000]"
                    />
                     <Input
                        isRequired
                        labelPlacement="outside"
                        variant="faded"
                        label="Token price [$]"
                        placeholder="e.g. 0.005 $"
                        className="w-[360px] h-[43px] text-[#000]"
                    />
                     <Input
                        isRequired
                        labelPlacement="outside"
                        variant="faded"
                        label="Minimum tokens amount for seed round"
                        placeholder="e.g. 1,000,000"
                        className="w-[360px] h-[43px] text-[#000]"
                    />
                </div>
            </div>
        </div>
    )
}

export default TokenInfo