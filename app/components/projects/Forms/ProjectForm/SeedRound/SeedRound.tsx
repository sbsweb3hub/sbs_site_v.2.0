import { Input } from "@nextui-org/react";

const SeedRound = () => {
    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Seed round
            </p>
            <Input
                isRequired
                labelPlacement="outside"
                variant="faded"
                label="Duration [days]"
                placeholder="e. g. 45"
                className="w-[190px] h-[43px] text-[#000]"
            />
        </div>
    )
}

export default SeedRound