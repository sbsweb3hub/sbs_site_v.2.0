'use client'

import { patchProject } from "@/services/project-service";
import { ProjectStatusEnum, ProjectType } from "@/types";
import { findErrors } from "@/utils/formUtils";
import { useFormState } from "react-dom";
import Submit from "./submit";
import { CreateProjectSchema } from "@/types";
import { ZodNumber, ZodString } from "zod";
import { ProjectFormInput } from "./projectFormInput";

const EditProjectForm = ({ project }: { project: Partial<ProjectType> }) => {
    const [state, formAction] = useFormState(patchProject, { errors: [] });
    const fieldsToExclude = new Set(['imageUrl', 'image']);

    return (
        <div className="max-w-4xl mx-auto">
            <form action={formAction}>
                {Object.entries(CreateProjectSchema.shape).map(([key, schema]) => {
                    if (!fieldsToExclude.has(key)) {
                        const type = schema instanceof ZodNumber ? "number" :
                            key === 'startDate' ? "date" :
                                key === 'image' ? "file" :
                                    schema instanceof ZodString ? "text" :
                                        "text";
                        return (
                            <ProjectFormInput
                                key={key}
                                label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                type={type}
                                name={key}
                                defaultValue={(project as Record<string, string>)[key]}
                                errors={findErrors(key, state.errors)}
                            />
                        );
                    } return null
                })}
                {/* <CustomImage path={project.imageUrl} /> */}
                {(() => {
                    switch (project.status) {
                        case ProjectStatusEnum.REVIEWING:
                            return <p>Pls wait while your project is reviewing!</p>;
                        case ProjectStatusEnum.DECLINED:
                            return <p>Your project has been declined, pls see details on your contact email</p>;
                        case ProjectStatusEnum.APPROVED:
                            return (
                                <p>Your project is approved, U can deploy it</p>
                            );
                        default:
                            return <Submit />;
                    }
                })()}
            </form>

        </div>
    );
};

export default EditProjectForm;

