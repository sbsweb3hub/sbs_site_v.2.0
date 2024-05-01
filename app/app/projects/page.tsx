import React from 'react'
import ProjectCard from '../../components/projects/projectCard'
import { notFound } from 'next/navigation'
import { fetchAllProjects } from '@/services/project-service'

export default async function Projects() {
    const projects = await fetchAllProjects()
    if (!projects) notFound()
    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold">All Projects</h1>
            <ul className="grid grid-cols-3 gap-4 mt-4 w-full max-w-4xl">
                {projects.map((project, id) => (
                    <li key={id} className="col-span-1">
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>

        </div>
    );
};

