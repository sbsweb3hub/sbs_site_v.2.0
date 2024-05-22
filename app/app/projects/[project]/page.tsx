import { findProjectById } from "@/services/project-service";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Progress } from "@nextui-org/react";
import {
  ProjectTabs,
  BeAngelModal,
  Background,
} from "@/app/components/projects";
import "./index.css";

const isLaunchTime = false;
const isSeedTime = true;

export default async function Project({
  params,
}: {
  params: { project: string };
}) {
  const { projectName, startDate, imageUrl } = await findProjectById(
    params.project
  );

  // @todo - what is the best approach to handle errors(notFound or Error)
  if (!projectName) notFound();

  return (
    <div className="wrapper">
      <div className="line">
        <Background />
        <div className="main">
          <Image
            src={imageUrl!}
            width={509}
            height={266}
            alt="Picture of the author"
            className="rounded-3xl"
          />

          <div className="flex w-[500px] relative">
            {isLaunchTime && (
              <>
                <p className="start">Starts in</p>
                <p className="text-4xl">Launch time: {startDate}</p>
              </>
            )}
            {isSeedTime && (
              <div className="flex w-full">
                <div className="flex flex-col">
                  <p className="text-4xl">Seed round time:</p>

                  <Progress
                    size="lg"
                    color="success"
                    aria-label="Loading..."
                    value={70}
                    className="mt-28"
                  />

                  <div className="flex mt-16">
                    <div className="flex flex-col mr-14">
                      <p className="miniTitle">Soft cap:</p>
                      <p className="subTitle">
                        35 <span className="day">ETH</span>
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="miniTitle">Hard cap:</p>
                      <p className="subTitle">
                        60 <span className="day">ETH</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-28">
                  <div className="flex flex-col">
                    <p className="miniTitle">Ends in:</p>
                    <p className="subTitle">
                      35 <span className="day">days</span>
                    </p>
                  </div>
                  <div className="flex flex-col mt-9">
                    <p className="miniTitle">Progress:</p>
                    <p className="subTitle">47 %</p>
                  </div>
                  <div className="flex flex-col mt-9">
                    <p className="miniTitle">Raised:</p>
                    <p className="raised">24 ETH</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="btn">
          <BeAngelModal />
        </div>
      </div>

      <div className="tabs">
        <div className="title">Project: {projectName}</div>
        <ProjectTabs />
      </div>
    </div>
  );
}
