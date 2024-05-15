import { ErrorMessages } from "@/utils/formUtils";

export const ProjectFormInput = ({ label, type, name, errors, defaultValue }: { label: string, type: string, name: string, errors: string[], defaultValue?: string; }) => {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block font-semibold text-sm mb-2">
                {label}
                <input
                    id={name}
                    type={type}
                    name={name}
                    defaultValue={defaultValue}
                    className="block w-full border border-gray-300 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </label>
            <ErrorMessages errors={errors} />
        </div>
    );
};
