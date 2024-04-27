import Link from 'next/link';
import React from 'react';



const ProjectCard: React.FC<any> = ({ project }) => {
    return (
        <div className="w-32 h-44 bg-blue-500 text-white p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <h3 className="text-lg font-bold">{project.projectName}</h3>
            <p className="text-sm">{project.projectName}</p>
            <Link href={`/projects/${project.id}`}>
                I want to see this
            </Link>

        </div>
    );
};

export default ProjectCard;
