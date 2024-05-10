import CustomImage from "@/app/components/projects/customImage";
import { findProjectById } from "@/services/project-service";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Project({ params }: { params: { project: string } }) {
    const { projectName, startDate, imageUrl } = await findProjectById(params.project)
    // @todo - what is the best approach to handle errors(notFound or Error)
    if (!projectName) notFound()
    return (
        <div className="min-h-screen text-black flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="font-bold  text-6xl mb-1">Project: {projectName}</div>
                <p className=" mb-4 text-4xl">
                    Start at: {startDate}
                </p>
                {/* {imageUrl && <CustomImage path={imageUrl!} />} */}
                {imageUrl && <Image
                    src={imageUrl!}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />}

            </div>
        </div>
    );
}

