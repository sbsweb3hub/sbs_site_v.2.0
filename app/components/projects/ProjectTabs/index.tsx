"use client";
import {
  Divider,
  Tab,
  Tabs,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Image from "next/image";
import { Input } from "../../Input";
import { useProjectStore } from "../_store/store";
import StepAccordion from "./StepAccordion/StepAccordion";
import Voting from "./Voting/Voting";
import iconCopy from "@/public/copy-icon.svg";
import css from "./index.module.scss";
import { ProjectStatusEnum, ProjectType } from "@/types";

export const ProjectTabs = ({ project }: { project: ProjectType }) => {
  const { setIsMainTab, isMainTab } = useProjectStore();

  return (
    <div className={css.tabs}>
      <div className={css.title}>
        <div className="">Project: Name </div>
        {isMainTab && (
          <Input
            className={css.short}
            value={project.shortDescription}
            size="xl"
          />
        )}
      </div>
      <Tabs
        className="mt-20"
        classNames={{
          tabList:
            "gap-28 w-full relative rounded-none p-0 border-b-1 border-[#000] px-[10px]",
          cursor: " group-data-[selected=true]:bg-[#DCDCDC]",
          tabContent: "group-data-[selected=true]:text-[#000]",
          tab: "text-[24px] mb-[10px]",
        }}
        size="lg"
        variant="light"
        aria-label="Tabs variants"
        onSelectionChange={(key) => {
          key === "main" ? setIsMainTab(true) : setIsMainTab(false);
        }}
      >
        <Tab key="main" title="Main">
          <div className="flex w-full gap-40 mt-10">
            <div className="flex flex-col gap-7 relative">
              <Input
                label="Project’s name"
                value={project.projectName}
                size="m"
              />
              <Input
                label="Token’s address"
                value={`${project.founder.slice(
                  0,
                  6
                )}...${project.founder.slice(-10)}`}
                size="l"
                icon
              />
              <button
                className={css.buttonIcon}
                onClick={async () => {
                  await navigator.clipboard.writeText(project.founder);
                }}
              >
                <Image src={iconCopy} width={20} height={20} alt="icon copy" />
              </button>
            </div>
            <div className="flex flex-col gap-7 relative">
              <Input label="Project’s symbol" value="FRST" size="m" />
              <Input
                label="Project’s owner"
                value={`${project.founder.slice(
                  0,
                  6
                )}...${project.founder.slice(-10)}`}
                size="l"
              />

              <button
                className={css.buttonIcon}
                onClick={async () => {
                  await navigator.clipboard.writeText(project.founder);
                }}
              >
                <Image src={iconCopy} width={20} height={20} alt="icon copy" />
              </button>
            </div>
            <div className="flex flex-col gap-7">
              <Input
                label="Amount steps"
                value={project.steps.length.toString()}
                size="s"
              />
            </div>
          </div>
          <Accordion
            className="mt-10"
            itemClasses={{
              base: "mt-16 mb-10",
              indicator: "w-[25px] h-[25px] rounded-[8px]",
              title: "text-[24px] font-semibold text-[#000]",
              content: "px-2  text-[16px]",
              trigger:
                "px-2 py-0 data-[hover=true]:bg-[#C4C4C4] rounded-lg h-14 flex items-center",
            }}
          >
            <AccordionItem
              key="1"
              aria-label="Full Description"
              title="Full Description"
            >
              Full Description - Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate, aut? Placeat at sed distinctio. Vero
              laborum exercitationem consectetur doloremque nobis, quas repellat
              harum repudiandae eligendi consequatur est optio nulla
              repellendus.
            </AccordionItem>
          </Accordion>
        </Tab>

        <Tab key="tokens" title="Tokens">
          <div className="flex w-full flex-wrap mb-6 gap-40 mt-10">
            <div className="flex flex-col gap-7">
              <Input
                label="Token’s price, ETH"
                value={project.tokenPrice?.toString()}
                size="m"
              />
              <Input
                label="Minimum seed, $FRST"
                value={project.minTokenForSeed?.toString()}
                size="l"
              />
            </div>
            <div className="flex flex-col gap-7">
              <Input
                label="Seed phase, $FRST"
                value={project.seedDuration?.toString()}
                size="m"
              />
              <Input
                label="Maximum token supply, $FRST"
                value={project.maxTokenForSeed?.toString()}
                size="l"
              />
            </div>
            <div className="flex flex-col gap-7">
              <Input
                label="Ordered tokens, $FRST"
                value={project.founder}
                size="s"
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
                    value={new Date(
                      project.startDate as string
                    ).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                    size="m"
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    label="Time"
                    value={new Date(
                      project.startDate as string
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    })}
                    size="m"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[1044px] h-[98px] bg-[#EEEEEE] mt-[40px] ml-[8px]">
              <div className="flex items-center gap-[10px] text-[#000] text-[22px] font-semibold ml-[55px]">
                <p>
                  {new Date(project.startDate as string).toLocaleDateString(
                    "en-US",
                    { day: "numeric", month: "short", year: "numeric" }
                  )}
                </p>
                <p>-</p>
                <p>
                  {new Date(
                    project.datesForProjectCard?.seedRoundEndDate as string
                  ).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
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
                startDate={new Date(step.startDate).toLocaleDateString(
                  "en-US",
                  { day: "numeric", month: "short", year: "numeric" }
                )}
                endDate={new Date(step.endDate).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              >
                {project.steps[index].desc}
              </StepAccordion>
            ))}
          </div>
        </Tab>
        {project.status === ProjectStatusEnum.STARTED && (
          <Tab key="voting" title="Voting">
            <div className="flex flex-col w-full">
              <div className="flex items-start gap-[90px] mt-[40px]">
                <p className="text-[24px] text-[#000] font-semibold">
                  Next voting:
                </p>
                <div className="flex items-center gap-[18px]">
                  <div className="flex flex-col">
                    <Input label="Date" value="Date" size="m" />
                  </div>
                  <div className="flex flex-col">
                    <Input label="Time" value="Time" size="m" />
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
        )}
      </Tabs>
      <Divider />
    </div>
  );
};
