import { ProjectType } from "@/types";
import { Input } from "@nextui-org/react";

const SeedRound = ({ disabled, project }: { disabled?: boolean, project?: ProjectType }) => {
    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Seed round
            </p>
            <Input
                labelPlacement="outside"
                variant="faded"
                label="Duration [days]"
                placeholder="e. g. 45"
                className="w-[190px] h-[43px] text-[#000]"
                type='number'
                name='seedDuration'
                min='1'
                {...(disabled && { isDisabled: true })}
                defaultValue={project ? String(project.seedDuration) : undefined}
            />
        </div>
    )
}

export default SeedRound
