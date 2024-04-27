import DashboardService from "@/services/dashboard-service"
import { ProjectType } from "@/types";
import { notFound } from "next/navigation";

export default async function Project({ params }: { params: { project: string } }) {
    const response = await DashboardService.getProjectById(params.project)
    // @todo - what is the best approach to handle errors(notFound or Error)
    if (!response) notFound()

    const { projectName, contactName } = response
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="font-bold text-6xl mb-1">Project: {projectName}</div>
                <p className=" mb-4 text-4xl">
                    Owner: {contactName}
                </p>
            </div>
        </div>
    );
}

