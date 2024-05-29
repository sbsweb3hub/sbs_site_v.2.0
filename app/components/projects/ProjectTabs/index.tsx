"use client";
import { Divider, Tab, Tabs, Accordion, AccordionItem } from "@nextui-org/react";
import { Input } from "../../Input";
import { useProjectStore } from "../_store/store";
import StepAccordion from "./StepAccordion/StepAccordion";
import Voting from "./Voting/Voting";
import { ProjectType } from "@/types";

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
              <Input label="Amount steps" value={project.steps.length.toFixed()} size="s" />
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
                    value={project.startDate}
                    size="m"
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    label="Time"
                    value={project.startDate}
                    size="m"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[1044px] h-[98px] bg-[#EEEEEE] mt-[40px] ml-[8px]">
              <div className="flex items-center gap-[10px] text-[#000] text-[22px] font-semibold ml-[55px]">
                <p>
                  9 feb. 2024
                </p>
                <p>
                  -
                </p>
                <p>
                  9 mar. 2024
                </p>
              </div>
              <p className="text-[#828282] text-[22px] font-semibold mr-[21px]">
                Seed Round
              </p>
            </div>
            <StepAccordion
              index="1"
              startDate="9 apr. 2024"
              endDate="9 jun. 2024"
            >
              First steps, thinking, testnet launch, team hooliday, road map, investors, marketing plan, team vision, details about step, new features, future prosapects. New changes and differences, team building
            </StepAccordion>
            <StepAccordion
              index="2"
              startDate="9 apr. 2024"
              endDate="9 jun. 2024"
            >
              First steps, thinking, testnet launch, team hooliday, road map, investors, marketing plan, team vision, details about step, new features, future prosapects. New changes and differences, team building
            </StepAccordion>
            <StepAccordion
              index="3"
              startDate="9 apr. 2024"
              endDate="9 jun. 2024"
            >
              First steps, thinking, testnet launch, team hooliday, road map, investors, marketing plan, team vision, details about step, new features, future prosapects. New changes and differences, team building
            </StepAccordion>
            <StepAccordion
              index="4"
              startDate="9 apr. 2024"
              endDate="9 jun. 2024"
            >
              First steps, thinking, testnet launch, team hooliday, road map, investors, marketing plan, team vision, details about step, new features, future prosapects. New changes and differences, team building
            </StepAccordion>
          </div>
        </Tab>
        <Tab key="voting" title="Voting">
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
        </Tab>
      </Tabs>
      <Divider />
    </>
  );
};
