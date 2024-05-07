'use client'

import { addProject } from "@/services/project-service";
import { ErrorMessages, findErrors } from "@/utils/formUtils";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import Submit from "./submit";

const AddProjectForm = () => {
  const [state, formAction] = useFormState(addProject, { errors: [] });
  const { pending } = useFormStatus()
  const titleErrors = findErrors("title", state.errors);
  const dateErrors = findErrors("startDate", state.errors);
  const imageErrors = findErrors("image", state.errors);

  return (
    <div className="max-w-4xl mx-auto">
      <form action={formAction}>
        <div>
          <label htmlFor="title">
            <span>Title</span>
            <input id="title" type="text" name="title" className="p-2 border border-gray-300 rounded" />
          </label>
          <ErrorMessages errors={titleErrors} />
        </div>

        <div>
          <label htmlFor="startDate">
            <span>startDate</span>
            <input id="startDate" type="date" name="startDate" className="p-2 border border-gray-300 rounded" />
          </label>
          <ErrorMessages errors={dateErrors} />
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block font-semibold text-sm mb-2">
            Select an Image to Upload
          </label>
          <input
            id="image"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="image"
          />
          <ErrorMessages errors={imageErrors} />
        </div>
        <Submit />
        {/* <button type="submit" disabled={pending}>Submit {pending && 'submitting...'}</button> */}
      </form>

    </div>
  );
};

export default AddProjectForm;


