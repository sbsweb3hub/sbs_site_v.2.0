import DashboardService from '@/services/dashboard-service'
import React from 'react'
import ProjectCard from '../components/projectCard'
import { notFound } from 'next/navigation'


export default async function Projects() {
    const projects = await DashboardService.getProjects()
    if (!projects) notFound()
    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold">Projects</h1>
            <ul className="grid grid-cols-3 gap-4 mt-4 w-full max-w-4xl">
                {/* @ts-ignore */}
                {projects.map((project) => (
                    <li key={project.id} className="col-span-1">
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

