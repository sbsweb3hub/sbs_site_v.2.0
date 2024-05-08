'use client'
import { addProject } from "@/services/project-service";
import { findErrors } from "@/utils/formUtils";
import { useFormState } from "react-dom";
import Submit from "./submit";
import { CreateProjectSchema } from "@/types";
import { ZodNumber, ZodString } from "zod";
import { ProjectFormInput } from "./projectFormInput";

const AddProjectForm = () => {
  const [state, formAction] = useFormState(addProject, { errors: [] });
  const fieldsToExclude = new Set(['imageUrl']);

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
                errors={findErrors(key, state.errors)}
              />
            );
          } return null
        })}

        <Submit />
      </form>
    </div>
  );
};

export default AddProjectForm;

