import { fetchProjectById } from "@/services/project-service";
import { notFound } from "next/navigation";

export default async function Project({ params }: { params: { project: string } }) {
    const { title, startDate } = await fetchProjectById(params.project)
    // @todo - what is the best approach to handle errors(notFound or Error)
    if (!title) notFound()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="font-bold text-6xl mb-1">Project: {title}</div>
                <p className=" mb-4 text-4xl">
                    Start at: {startDate.toISOString()}
                </p>
            </div>
        </div>
    );
}

