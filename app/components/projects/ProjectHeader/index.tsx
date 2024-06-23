"use client";
import { useState, useEffect } from "react";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import { useProjectStore } from "../_store/store";
import css from "./index.module.scss";
import { ProjectStatusEnum, ProjectType } from "@/types";
import { getDataForProgressBar, getUserOrderedTokens, getAvailableToClaimTokensByUser } from "@/services/onchain/onchain-service";
import { useAccount } from "wagmi";

const isLaunchTime = false;
const isSeedTime = true;



export const ProjectHeader = (project: ProjectType) => {
  const { isMainTab } = useProjectStore();
  const [raised, setRaised] = useState<string>("0");
  const [percentage, setPercentage] = useState<number>(0);
  const [label, setLabel] = useState<string>('In progress');
  const [invest, setInvest] = useState<string>('0')
  const [ordered, setOrdered] = useState<string>('0')
  const [claimable, setClaimable] = useState<string>('0')
  const [timeRemaining, setTimeRemaining] = useState<string>('0 hours 0 minutes 0 seconds');
  const [daysRemaining, setDaysRemaining] = useState<string>('0')



  const account = useAccount()




  const validPrice = project.tokenPrice ?? 0
  const validId = project.onchainId ?? 0

  // const handleUserTokens = async () => {
    
  //   if (validId !== undefined && account.address!== undefined) {
  //     try {
  //       console.log(getAvailableToClaimTokensByUser(validId, account.address))
  //       // Дополнительные действия после успешного вызова, если нужно
  //     } catch (err) {
  //       console.error("Failed to become an angel:", err);
  //     }
  //   }
  // }

  const calculateCap = (tokenPrice: number | undefined , tokenForSeed: number | undefined) => {
    const price = tokenPrice ?? 0;
    const tokens = tokenForSeed ?? 0;
    return price * tokens;
  };

  const padWithZero = (number: number) => {
    return number.toString().padStart(2, '0');
  };

  useEffect(() => {
    const fetchData = async () => {
      if (project.onchainId !== undefined) {
        try {
          const data = await getDataForProgressBar(project.onchainId);
          setRaised(data.raised);
          const raisedValue = parseFloat(data.raised);
          const percentageValue = project.maxTokenForSeed ? (raisedValue / (project.maxTokenForSeed * validPrice)) * 100 : 0;
          setPercentage(percentageValue);

          const minTokenForSeed = project.minTokenForSeed;
          const maxTokenForSeed = project.maxTokenForSeed;

          if (!isNaN(raisedValue) && minTokenForSeed !== undefined && raisedValue >= (minTokenForSeed * validPrice) && maxTokenForSeed !== undefined && raisedValue < (maxTokenForSeed * validPrice)) {
            setLabel('Soft cap reached!');
          } else if (!isNaN(raisedValue) && maxTokenForSeed !== undefined && raisedValue === (maxTokenForSeed * validPrice)) {
            setLabel('Finished!');
          } else {
            setLabel('In progress');
          }

          if (account.address !== undefined) {
            const tokenSizeBig = await getUserOrderedTokens (project.onchainId, account.address)
            const tokenSize = Number(tokenSizeBig)
            const investValue = validPrice * tokenSize
            setInvest(investValue.toString())
            setOrdered(tokenSize.toString())
            
            try {
            const claimSize = await getAvailableToClaimTokensByUser(project.onchainId, account.address)
            setClaimable(claimSize.toString())
            
            } catch (error) {
              console.log(error)
            }
            
          }

          

        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
    
  }, [project.onchainId, project.maxTokenForSeed, project.minTokenForSeed, validPrice, account]);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const endDate = new Date(new Date(project.startDate!).getTime() + project.seedDuration! * 24 * 60 * 60 * 1000);
      const now = new Date();
      const timeDiff = endDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        setTimeRemaining('0 : 0 : 0 ');
        setDaysRemaining ('0')
        return;
      }

      if (Number(raised) === calculateCap(validPrice, project.maxTokenForSeed!)){
        setTimeRemaining('0 : 0 : 0 ');
        setDaysRemaining ('0')
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeRemaining(`${padWithZero(hours)} : ${padWithZero(minutes)} : ${padWithZero(seconds)}`);
      setDaysRemaining(`${days}`)
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, [project.startDate, project.seedDuration, validPrice, project.maxTokenForSeed, raised]);


  return (
    <div className={css.main}>
      <Image
        src={project.imageUrl! ?? '/avatar.png'}
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
                    label={label}
                    color="success"
                    aria-label="Loading..."
                    value={percentage}
                    className="mt-28"
                    classNames={{
                      indicator: 'bg-gradient-to-r from-[#172418] to-[#58D865]'
                    }}
                  />

                  <div className="flex mt-16">
                    <div className="flex flex-col mr-14">
                      <p className={css.miniTitle}>Soft cap:</p>
                      <p className={css.subTitle}>
                      {calculateCap(project.tokenPrice, project.minTokenForSeed)} <span className={css.day}>ETH</span>
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className={css.miniTitle}>Hard cap:</p>
                      <p className={css.subTitle}>
                      {calculateCap(project.tokenPrice, project.maxTokenForSeed)} <span className={css.day}>ETH</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-28">
                  <div className="flex flex-col">
                    <p className={css.miniTitle}>Ends in:</p>
                    <p className={css.subTitle}>
                      {daysRemaining} <span className={css.day}>days</span>
                    </p>
                    <p className={css.subTitle} style={{width: '160px', fontSize: '30px'}}>
                      {timeRemaining}
                    </p>
                  </div>
                  <div className="flex flex-col mt-9">
                    <p className={css.miniTitle}>Progress:</p>
                    <p className={css.subTitle}>{percentage} %</p>
                  </div>
                  <div className="flex flex-col mt-9">
                    <p className={css.miniTitle}>Raised:</p>
                    <p className={css.raised}>{raised} ETH</p>
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
                <td>{invest} ETH</td>
              </tr>
              <tr>
                <td>Available to refund :</td>
                <td>0 ETH</td>
              </tr>
              <tr>
                <td>My ordered tokens :</td>
                <td>{ordered} ${project.tokenSymbol}</td>
              </tr>
              <tr>
                <td>Available to claim :</td>
                <td>{claimable} ${project.tokenSymbol}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>}
    </div>
  );
};
