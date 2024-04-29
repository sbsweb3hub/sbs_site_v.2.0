"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { ethers } from "ethers";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { User } from "@nextui-org/user";
import { CircularProgress, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { columns } from "@/app/ownerprojects/data";
import { useWalletStore } from "@/service/store";

interface Projects {
    [key: number]: UserProject;
  }
  type UserProject = {
    id: number;
    avatar: string;
    name: string;
    seed: number;
    ordered: number;
    received: number;
    stepAlive: string;
    voting: number;
    link: string;
  };



export default function Orders() {
  const {
    account,
    signer,
    provider,
    ABIcreateProject,
    ABIprojectsKeeper,
    ABIvoting,
  } = useWalletStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  type Project = typeof dataProjects[0];
  const [dataProjects, setDataProjects] = useState([
    {
      id: 1,
      avatar: "",
      name: "",
      seed: 0,
      ordered: 0,
      received: 0,
      stepAlive: "",
      voting: 0,
      link: "",
    },
  ]);

  const addrCreateProject = "0xEaE9C5B069e3d068b990C1fc1DD200A44e87D7F7";
  const createProjectProvider = new ethers.Contract(
      addrCreateProject,
      ABIcreateProject,
      provider
    );
  const addrProjectKeeper = "0x12870B750A6C4FCDA70a7F06FE3F84aE61857D3d";
  const projectKeeperProvider = new ethers.Contract(
      addrProjectKeeper,
      ABIprojectsKeeper,
      provider
    );
  const addrVoting = "0x310762F6C124Fa8177865AaBc84F806bcdDC5388";
  const votingProvider = new ethers.Contract(
      addrVoting ,
      ABIvoting,
      provider
    );

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      var userProjects: Projects = [];
      var newProject: UserProject = {
        id: 0,
        avatar: "",
        name: "",
        seed: 0,
        ordered: 0,
        received: 0,
        stepAlive: "",
        voting: 0,
        link: "",
      };
      var dataProjectsInside: any = [];
      const nextId = await createProjectProvider.projectIdMain();
      const allIds = Number(nextId) - 1; // все айдишники 
      const allDeletedProjects = await projectKeeperProvider.getDeletedIds();

     //  создание промежуточного массива, который меняет значение value from BigInt to Number(1n --> 1)
       var betweenArray: any = [];
       for(var i = 0; i < allDeletedProjects.length; i++){
        var between = Number(allDeletedProjects[i]);
        betweenArray.push(between);
       }

       // создание массива ids, без удаленных проектов
       const newArray = Array.from({ length: allIds }, (_, i) => i + 1).filter(num => !betweenArray.includes(num));

      for (let i = 0; i < newArray.length; i++) {
        var idProject = Number(newArray[i]); // id проекта
        const [ , , projectName, ] = await createProjectProvider.projectsViewMain(idProject);
        const [ordered, , miniSeed, price, , isProjectAlive, isProjectGetAllTokens, amountFund] = await createProjectProvider.projectsViewPrice(idProject);
        const minSeedEthers = Number(miniSeed) / 10**18;
        const orderedEthers = Number(ordered) / 10**18;
        const amountFundEthers = Number(amountFund) / 10**18;
        const witchStepAlive = await createProjectProvider.witchStepAlive(idProject);
        const negativeVote = await votingProvider.viewProjectResultVoting(idProject, witchStepAlive);
        var negativePower: number = 0;
        if(Number(negativeVote) != 0) {
            negativePower = Number(negativeVote) / ((Number(ordered) / 100));
        }
        const [amountSteps, , , , , , isPublicSeed] = await createProjectProvider.projectsViewSteps(idProject);
        var stepAlive: string = "";
        if(!isPublicSeed) {
           stepAlive = "Pre Launch";
        } else if(!isProjectAlive) {
           stepAlive = "Negative vote";
        } else if(isPublicSeed && Number(witchStepAlive) == 0) {
          stepAlive = "Seed phase";
        } else if(isPublicSeed && Number(witchStepAlive) == 1) {
          stepAlive = "Seed phase";
        } else if(isPublicSeed && Number(witchStepAlive) == 2) {
          stepAlive = "1st sprint";
        } else if(isPublicSeed && Number(witchStepAlive) == 3) {
          stepAlive = "2nd sprint";
        } else if(isPublicSeed && Number(witchStepAlive) == 4 && Number(amountSteps) == 4) {
          if(isProjectGetAllTokens) {
            stepAlive = "Goal achieved";
          } else {
          stepAlive = "Last force";
          }
        } else if(isPublicSeed && Number(witchStepAlive) == 4 && (Number(amountSteps) == 5 || Number(amountSteps) == 6)) {
          stepAlive = "3rd sprint";
        } else if(isPublicSeed && Number(witchStepAlive) == 5 && Number(amountSteps) == 5) {
          if(isProjectGetAllTokens) {
            stepAlive = "Goal achieved";
          } else {
          stepAlive = "Last force";
          }
        } else if(isPublicSeed && Number(witchStepAlive) == 5 && Number(amountSteps) == 6) {
          stepAlive = "4th sprint";
        } else if(isPublicSeed && Number(witchStepAlive) == 6 && Number(amountSteps) == 6) {
          if(isProjectGetAllTokens) {
            stepAlive = "Goal achieved";
          } else {
          stepAlive = "Last force";
          }
        }
        const linkOrder = "/desc_project/" + idProject;

        newProject.avatar = "/gear_2.png";
        newProject.name = projectName;
        newProject.seed = Number(minSeedEthers);
        newProject.ordered = Number(orderedEthers);
        newProject.received = Number(amountFundEthers);
        newProject.stepAlive = stepAlive;
        newProject.voting = negativePower;
        newProject.link = linkOrder;
        
        dataProjectsInside.push(
          (userProjects[idProject] = {
            id: idProject,
            avatar: newProject.avatar,
            name: newProject.name,
            seed: newProject.seed,
            ordered: newProject.ordered,
            received: newProject.received,
            stepAlive: newProject.stepAlive,
            voting: newProject.voting,
            link: newProject.link,
          })
         );
        }
        setDataProjects(dataProjectsInside);
        setIsLoading(false);
    })();
  }, []); 

  const renderCell = React.useCallback((project: Project, columnKey: React.Key) => {
    const cellValue = project[columnKey as keyof Project];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ src: project.avatar }}
            description={
              <Link href={{ pathname: project.link }}>
                <div className="text-[#006FEE] text-[14px] hover:text-[#002E62] font-medium">
                  Open Project
                </div>
              </Link>
            }
            name={cellValue}
          />
        );
      
      case "seed":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;

      case "ordered":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;

      case "received":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;

      case "stepAlive":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;

      case "voting":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;

      default:
        return cellValue;
    }
  }, []);

  return (
    <>
    {!isLoading ?
      <div className="flex flex-col h-screen flex flex-col items-center">
        <div className="p-[20px] xl:w-[1262px] w-11/12 border-1-solid-#3D59AD rounded-[15px] bg-[#7980A580] mt-[30px]">
          <Tabs variant="underlined" aria-label="Orders" className="w-full">
            <Tab key="active-orders" title="Active Projects">
              <Table isStriped aria-label="Active Orders Table">
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.uid}>{column.name}</TableColumn>
                  )}
                </TableHeader>
                {/* <TableBody items={orders}> */}
                <TableBody items={dataProjects}>
                  {(item) => (
                    <TableRow key={item.id}>
                      {(columnKey) => (
                        <TableCell>{renderCell(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Tab>
            <Tab key="orders-history" title="My invests">
              <Table aria-label="Orders History Table">
                <TableHeader>
                  <TableColumn>Name</TableColumn>
                  <TableColumn>Seed</TableColumn>
                  <TableColumn>Ordered</TableColumn>
                  <TableColumn>Received</TableColumn>
                  <TableColumn>StepAlive</TableColumn>
                  <TableColumn>Voting</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
              </Table>
            </Tab>
          </Tabs>
        </div>
      </div>
      : 
      <Spinner color="success" label="Please wait a couple of seconds while we upload the projects..." />
      }
    </>
  );
}
