import { fetchAllProjects } from "@/services/project-service";
import MainPage from "../components/MainPage/MainPage";
import { notFound } from "next/navigation";

export default async function App() {
    const projects = await fetchAllProjects()
    if (!projects) notFound()

    return (<>
        <MainPage projects={projects} />
    </>
    );
}
