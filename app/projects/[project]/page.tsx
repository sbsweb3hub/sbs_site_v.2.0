import DashboardService from "@/services/dashboard-service"

export default async function Project({ params }: { params: any }) {
    const { projectName, contactName } = await DashboardService.getProjectById(params.project)
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

