import { ProjectType } from '@/types';
import Link from 'next/link';
import React, { FC } from 'react';



const ProjectCard: FC<any> = ({ project }: { project: ProjectType }) => {
    return (
        <div className="w-32 h-44 bg-blue-500 text-white p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <Link href={`/app/projects/${project.id}`}>
                I want to see this
            </Link>

        </div>
    );
};

export default ProjectCard;
