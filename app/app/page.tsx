import { fetchAllProjects } from "@/services/project-service";
import { notFound } from "next/navigation";
import ProjectCard from "../components/Projects/projectCard";
import Link from "next/link";

export default async function App() {
    const projects = await fetchAllProjects()
    if (!projects) notFound()
    return (<>


        <div className="flex flex-col items-center mt-8">
            <h1>This is App</h1>
            <h1 className="text-2xl font-bold">Projects for MAIN</h1>
            <ul className="grid grid-cols-3 gap-4 mt-4 w-full max-w-4xl">
                {projects.slice(0, 3).map((project) => (
                    <li key={project.id} className="col-span-1">
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>

        </div>
        <Link href='/app/projects' className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            Explore projects
        </Link>
    </>
    );
}
