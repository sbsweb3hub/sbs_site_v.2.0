"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { Input } from "../../Input";

export const ProjectTabs = () => {
  return (
    <>
      <Tabs
        className="mt-28"
        classNames={{
          tabList: "gap-28 p-0 border-divider",
          cursor: " group-data-[selected=true]:bg-[#DCDCDC]",
          tabContent: "group-data-[selected=true]:text-[#000]",
        }}
        variant="light"
        aria-label="Tabs variants"
        // TODO:
        // onSelectionChange={(key) =>  console.log(key)}
      >
        <Tab key="main" title="Main">
          <div className="flex w-full flex-wrap mb-6 gap-56">
            <div className="flex flex-col gap-7">
              <Input label="Project’s name" value="Project’s name" size="m" />
              <Input
                label="Project’s symbol"
                value="Project’s symbol"
                size="m"
              />
              <Input label="Amount steps" value="Amount steps" size="s" />
            </div>
            <div className="flex flex-col gap-7">
              <Input
                label="Token’s address"
                value="Token’s address"
                size="l"
                icon
              />
              <Input label="Project’s owner" value="Project’s owner" size="l" />
            </div>
          </div>
        </Tab>
        <Tab key="tokens" title="Tokens">
          <div className="flex w-full flex-wrap mb-6 gap-56">
            <div className="flex flex-col gap-7">
              <Input
                label="Token’s price, ETH"
                value="Token’s price, ETH"
                size="m"
              />
              <Input
                label="Seed phase, $FRST"
                value="Seed phase, $FRST"
                size="m"
              />
              <Input
                label="Ordered tokens, $FRST"
                value="Ordered tokens, $FRST"
                size="s"
              />
            </div>
            <div className="flex flex-col gap-7">
              <Input
                label="Token’s address"
                value="Token’s address"
                size="l"
                icon
              />
              <Input
                label="Maximum token supply, $FRST"
                value="Minimum seed, $FRST"
                size="l"
              />
            </div>
          </div>
        </Tab>
        <Tab key="steps" title="Steps" />
        <Tab key="voting" title="Voting" />
      </Tabs>
    </>
  );
};
