"use client";
import { Divider, Tab, Tabs, Accordion, AccordionItem } from "@nextui-org/react";
import { Input } from "../../Input";
import { useProjectStore } from "../_store/store";
import StepAccordion from "./StepAccordion/StepAccordion";
import Voting from "./Voting/Voting";
import { ProjectStatusEnum, ProjectType } from "@/types";

export const ProjectTabs = ({ project }: { project: ProjectType }) => {
  const { setIsMainTab } = useProjectStore();

  return (
    <>
      <Tabs
        className="mt-28"
        classNames={{
          tabList: "gap-28 w-full relative rounded-none p-0 border-b-1 border-[#000] px-[10px]",
          cursor: " group-data-[selected=true]:bg-[#DCDCDC]",
          tabContent: "group-data-[selected=true]:text-[#000]",
          tab: 'text-[24px] mb-[10px]'
        }}
        size="lg"
        variant="light"
        aria-label="Tabs variants"
        onSelectionChange={(key) => {
          key === "main" ? setIsMainTab(true) : setIsMainTab(false);
        }}
      >
        <Tab key="main" title="Main">
          <div className="flex w-full flex-wrap mb-6 gap-56">
            <div className="flex flex-col gap-7">
              <Input label="Project’s name"
                value={project.projectName}
                size="m" />
              <Input
                label="Project’s symbol"
                value={project.tokenSymbol}
                size="m"
              />
              <Input label="Amount steps" value={project.steps.length.toString()} size="s" />
            </div>
            <div className="flex flex-col gap-7">
              <Input
                label="Token’s address"
                value={project.founder}
                size="l"
                icon
              />
              <Input label="Project’s owner"
                value={project.founder}
                size="l" />
            </div>
          </div>
        </Tab>
        <Tab key="tokens" title="Tokens">
          <div className="flex w-full flex-wrap mb-6 gap-56">
            <div className="flex flex-col gap-7">
              <Input
                label="Token’s price, ETH"
                value={project.tokenPrice?.toString()}
                size="m"
              />
              <Input
                label="Seed phase, $FRST"
                value={project.seedDuration?.toString()}
                size="m"
              />
              <Input
                label="Ordered tokens, $FRST"
                value={project.founder}
                size="s"
              />
            </div>
            <div className="flex flex-col gap-7">
              <Input
                label="Token’s address"
                value={project.founder}
                size="l"
                icon
              />
              <Input
                label="Maximum token supply, $FRST"
                value={project.tokenSupply?.toString()}
                size="l"
              />
            </div>
          </div>
        </Tab>
        <Tab key="steps" title="Steps">
          <div className="light flex flex-col w-full">
            <div className="flex items-start gap-[90px] mt-[40px]">
              <p className="text-[24px] text-[#000] font-semibold">
                Project start:
              </p>
              <div className="flex items-center gap-[18px]">
                <div className="flex flex-col">
                  <Input
                    label="Date"
                    value={new Date(project.startDate as string).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                    size="m"
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    label="Time"
                    value={new Date(project.startDate as string).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                    size="m"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[1044px] h-[98px] bg-[#EEEEEE] mt-[40px] ml-[8px]">
              <div className="flex items-center gap-[10px] text-[#000] text-[22px] font-semibold ml-[55px]">
                <p>
                  {new Date(project.startDate as string).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
                <p>
                  -
                </p>
                <p>
                  {new Date(project.datesForProjectCard?.seedRoundEndDate as string).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              </div>
              <p className="text-[#828282] text-[22px] font-semibold mr-[21px]">
                Seed Round
              </p>
            </div>
            {project.datesForProjectCard?.stepsDates.map((step, index) => (
              <StepAccordion
                key={index}
                index={(index + 1).toString()}
                startDate={new Date(step.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                endDate={new Date(step.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
              >
                {project.steps[index].desc}
              </StepAccordion>
            ))}

          </div>
        </Tab>
        {project.status === ProjectStatusEnum.STARTED && <Tab key="voting" title="Voting">
          <div className="flex flex-col w-full">
            <div className="flex items-start gap-[90px] mt-[40px]">
              <p className="text-[24px] text-[#000] font-semibold">
                Next voting:
              </p>
              <div className="flex items-center gap-[18px]">
                <div className="flex flex-col">
                  <Input
                    label="Date"
                    value="Date"
                    size="m"
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    label="Time"
                    value="Time"
                    size="m"
                  />
                </div>
              </div>
            </div>
            <Voting
              status="finished"
              index="1"
              startDate="20 jun. 2024"
              endDate="20 jul. 2024"
              votes="5"
            />
            <Voting
              status="live"
              index="2"
              startDate="20 jul. 2024"
              endDate="20 aug. 2024"
              votes="5"
            />
            <Voting
              status="coming"
              index="3"
              startDate="20 aug. 2024"
              endDate="20 sep. 2024"
              votes=""
            />
          </div>
        </Tab>}
      </Tabs>
      <Divider />
    </>
  );
};
