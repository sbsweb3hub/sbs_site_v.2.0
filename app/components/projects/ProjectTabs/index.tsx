"use client";
import {
  Divider,
  Tab,
  Tabs,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { Input } from "../../Input";
import { useProjectStore } from "../_store/store";
import StepAccordion from "./StepAccordion/StepAccordion";
import Voting from "./Voting/Voting";
import css from "./index.module.scss";

export const ProjectTabs = () => {
  const { setIsMainTab, isMainTab } = useProjectStore();

  return (
    <div className={css.tabs}>
      <div className={css.title}>
        <div className="">Project: Name </div>
        {isMainTab && (
          <Input className={css.short} value="Short description" size="xl" />
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
            <div className="flex flex-col gap-7">
              <Input label="Project’s name" value="FRST" size="m" />
              <Input
                label="Token’s address"
                value="Ox0A7f...CB77E4c2Da"
                size="l"
                icon
              />
            </div>
            <div className="flex flex-col gap-7">
              <Input label="Project’s symbol" value="FRST" size="m" />
              <Input
                label="Project’s owner"
                value="0xF687...5A846a4023"
                size="l"
              />
            </div>
            <div className="flex flex-col gap-7">
              <Input label="Amount steps" value="4" size="s" />
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
              Full Description - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, aut? Placeat at sed distinctio. Vero laborum
              exercitationem consectetur doloremque nobis, quas repellat harum
              repudiandae eligendi consequatur est optio nulla repellendus.
            </AccordionItem>
          </Accordion>
        </Tab>
        <Tab key="tokens" title="Tokens">
          <div className="flex w-full flex-wrap mb-6 gap-40 mt-10">
            <div className="flex flex-col gap-7">
              <Input label="Token’s price, ETH" value="0.005" size="m" />
              <Input
                label="Maximum token supply, $FRST"
                value="1000"
                size="m"
              />
            </div>
            <div className="flex flex-col gap-7">
              <Input label="Seed phase, $FRST" value="100" size="l" icon />

              <Input label="Maximum token supply, $FRST" value="50" size="l" />
            </div>
            <div className="flex flex-col gap-7">
              <Input label="Ordered tokens, $FRST" value="1" size="s" />
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
                  <Input label="Date" value="Date" size="m" />
                </div>
                <div className="flex flex-col">
                  <Input label="Time" value="Time" size="m" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-[1044px] h-[98px] bg-[#EEEEEE] mt-[40px] ml-[8px]">
              <div className="flex items-center gap-[10px] text-[#000] text-[22px] font-semibold ml-[55px]">
                <p>9 feb. 2024</p>
                <p>-</p>
                <p>9 mar. 2024</p>
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
              First steps, thinking, testnet launch, team hooliday, road map,
              investors, marketing plan, team vision, details about step, new
              features, future prosapects. New changes and differences, team
              building
            </StepAccordion>
            <StepAccordion
              index="2"
              startDate="9 apr. 2024"
              endDate="9 jun. 2024"
            >
              First steps, thinking, testnet launch, team hooliday, road map,
              investors, marketing plan, team vision, details about step, new
              features, future prosapects. New changes and differences, team
              building
            </StepAccordion>
            <StepAccordion
              index="3"
              startDate="9 apr. 2024"
              endDate="9 jun. 2024"
            >
              First steps, thinking, testnet launch, team hooliday, road map,
              investors, marketing plan, team vision, details about step, new
              features, future prosapects. New changes and differences, team
              building
            </StepAccordion>
            <StepAccordion
              index="4"
              startDate="9 apr. 2024"
              endDate="9 jun. 2024"
            >
              First steps, thinking, testnet launch, team hooliday, road map,
              investors, marketing plan, team vision, details about step, new
              features, future prosapects. New changes and differences, team
              building
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
      </Tabs>
      <Divider />
    </div>
  );
};
