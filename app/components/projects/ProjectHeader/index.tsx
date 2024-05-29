"use client";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import { useProjectStore } from "../_store/store";
import css from "./index.module.scss";
import { ProjectStatusEnum, ProjectType } from "@/types";

const isLaunchTime = false;
const isSeedTime = true;



export const ProjectHeader = (project: ProjectType) => {
  const { isMainTab } = useProjectStore();

  return (
    <div className={css.main}>
      <Image
        src={project.imageUrl!}
        width={509}
        height={266}
        alt="Picture of the author"
        className="rounded-3xl"
      />

      {project.status === ProjectStatusEnum.STARTED && <div className={css.content}>
        {isMainTab ? (
          <>
            {isSeedTime && (
              <div className="flex w-full">
                <div className="flex flex-col">
                  <p className={css.title}>Seed round time:</p>

                  <Progress
                    size="lg"
                    color="success"
                    aria-label="Loading..."
                    value={70}
                    className="mt-28"
                  />

                  <div className="flex mt-16">
                    <div className="flex flex-col mr-14">
                      <p className={css.miniTitle}>Soft cap:</p>
                      <p className={css.subTitle}>
                        35 <span className={css.day}>ETH</span>
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className={css.miniTitle}>Hard cap:</p>
                      <p className={css.subTitle}>
                        60 <span className={css.day}>ETH</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-28">
                  <div className="flex flex-col">
                    <p className={css.miniTitle}>Ends in:</p>
                    <p className={css.subTitle}>
                      35 <span className={css.day}>days</span>
                    </p>
                  </div>
                  <div className="flex flex-col mt-9">
                    <p className={css.miniTitle}>Progress:</p>
                    <p className={css.subTitle}>47 %</p>
                  </div>
                  <div className="flex flex-col mt-9">
                    <p className={css.miniTitle}>Raised:</p>
                    <p className={css.raised}>24 ETH</p>
                  </div>
                </div>
              </div>
            )}
            {isLaunchTime && (
              <>
                <p className={css.start}>Starts in</p>
                <p className={css.title}>Launch time: {project.startDate}</p>
              </>
            )}
          </>
        ) : (
          <table className={css.tokenHeader}>
            <tbody>
              <tr>
                <td>My investment :</td>
                <td>2 ETH</td>
              </tr>
              <tr>
                <td>Available to refund :</td>
                <td>0 ETH</td>
              </tr>
              <tr>
                <td>My ordered tokens :</td>
                <td>250,000 $FRST</td>
              </tr>
              <tr>
                <td>Available to claim :</td>
                <td>60,000 $FRST</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>}
    </div>
  );
};
