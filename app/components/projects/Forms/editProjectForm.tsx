'use client'

import { patchProject } from "@/services/project-service";
import { ProjectType } from "@/types";


const EditProjectForm = ({ project }: { project: Partial<ProjectType> }) => {

    return (
        <div className="max-w-4xl mx-auto">
            <form action={patchProject} className="flex flex-col gap-4">
                <input type="text" placeholder="title" name="title" required defaultValue={project.projectName} className="p-2 border border-gray-300 rounded" />
                <input type="date" placeholder="startDate" name="startDate" required defaultValue={project?.startDate} className="p-2 border border-gray-300 rounded" />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EditProjectForm;
