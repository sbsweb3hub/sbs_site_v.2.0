import { fetchAllProjects } from "@/services/project-service";
import MainPage from "../components/MainPage/MainPage";
import { notFound } from "next/navigation";
import { ProjectStatusEnum } from "@/types";

export default async function App() {

    const projects = await fetchAllProjects(
        {
            filter: {
                status: { $in: [ProjectStatusEnum.DEPLOYED, ProjectStatusEnum.STARTED, ProjectStatusEnum.APPROVED] },
            }
        })
    if (!projects) notFound()
    return (<>
        <MainPage projects={projects} />
    </>
    );
}
