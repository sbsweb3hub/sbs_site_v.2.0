import { Textarea, Input } from "@nextui-org/react";

const ProjectDetails = () => {
    return (
        <div className="flex flex-col ml-[117px]">
            <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
                Project Details
            </p>
            <div className="flex flex-col gap-[14px]">
                <Textarea
                    maxRows={3}
                    isRequired
                    labelPlacement="outside"
                    variant="faded"
                    label="Project description"
                    placeholder="Describe the project , incuding the scope of the project and an explanation of how mature the project is."
                    type='string'
                    name='description'
                    className="w-[719px] h-[109px] text-[#000]"
                />
                <Textarea
                    maxRows={3}
                    labelPlacement="outside"
                    variant="faded"
                    label="Short project description on preview card"
                    placeholder="Describe the ecosysyem. Explain where the project is hosted , the token to be issued and the grants received."
                    className="w-[719px] h-[109px] text-[#000]"
                    type='string'
                    name='shortDescription'
                />
                <Input
                    labelPlacement="outside"
                    variant="faded"
                    label="Amount of team members"
                    placeholder="e.g. 10 full-time, 5 part-time, hiring 2"
                    className="w-[360px] h-[43px] text-[#000]"
                    type='string'
                    name='team'
                />
                <Textarea
                    maxRows={3}
                    isRequired
                    labelPlacement="outside"
                    variant="faded"
                    label="Team Description"
                    placeholder="Describe the story of how the team came together with the relevant experience. Linkedn links are appreciated."
                    type='string'
                    name='teamDescription'
                    className="w-[719px] h-[109px] text-[#000]"
                />
                <Textarea
                    maxRows={3}
                    isRequired
                    labelPlacement="outside"
                    variant="faded"
                    label="Describe Current Community"
                    placeholder="e. g. Provide details of what the current community consist of e.g. 30,000 Twitter followers and 20,000 telegram members."
                    type='string'
                    name='ecosystem'
                    className="w-[719px] h-[109px] text-[#000]"
                />
            </div>
        </div>
    )
}

export default ProjectDetails
