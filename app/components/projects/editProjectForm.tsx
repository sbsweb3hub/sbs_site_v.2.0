'use client'

import { addProject } from "@/services/project-service";
import { ProjectType } from "@/types";


const EditProjectForm = ({ project }: { project: ProjectType }) => {


    return (
        <div className="max-w-4xl mx-auto">
            <form action={addProject} className="flex flex-col gap-4">
                <input type="text" placeholder="title" name="title" required defaultValue={project.title} className="p-2 border border-gray-300 rounded" />
                <input type="date" placeholder="startDate" name="startDate" required defaultValue={project.startDate.toISOString()} className="p-2 border border-gray-300 rounded" />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EditProjectForm;