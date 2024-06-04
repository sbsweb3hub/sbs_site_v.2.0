import React from "react";
import { Skeleton} from "@nextui-org/react";
import Image from "next/image";

const ProjectsLoader = () => {
    return (
        <> 
            <div className="flex flex-col items-center">
                <div className="relative">
                    <h1 className="absolute top-40 left-10 text-5xl">Projects</h1>
                    <Image src="/projects.svg" alt="projects" width={1682} height={360} />
                </div>
                <div className="flex flex-col w-full items-center mt-[20px]">
                    <Skeleton className="min-[1320px]:w-[1300px] w-11/12 h-[450px] rounded-[5px] mt-[40px]">
                        <div className="min-[1320px]:w-[1300px] w-11/12 h-[450px] rounded-[5px]"></div>
                    </Skeleton>
                </div>
            </div>
    
        </>
    )
}

export default ProjectsLoader