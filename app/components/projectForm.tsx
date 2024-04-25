'use client'
import DashboardService from "@/services/dashboard-service";
import { ReactNode } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateProjectSchema } from "@/types";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export const ProjectForm = () => {
    const methods = useForm({
        resolver: zodResolver(CreateProjectSchema)
    })
    const router = useRouter()
    const { address } = useAccount()
    const { handleSubmit } = methods;
    //@todo make revalidateTag('project') and maybe server action form
    const onSubmit = async (data: any) => {
        const inputData = { ...data, owner: address }
        const response = await DashboardService.createProject(inputData);
        if (response.status === 201) router.push('/private')
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                <UiTextFieldLayout>
                    <UiFormHeaderSubmit title="Submit Form" message="Fill out the form below" />
                    <UiTextInput id="projectName" label="projectName" />
                    <UiTextInput id="contactName" label="Contact Name" />
                    <UiTextInput id="telegram" label="Telegram" />
                    <UiTextInput id="email" label="Email" />
                    <UiTextInput id="web" label="Web" />
                    <UiTextInput id="twitter" label="Twitter" />
                    <UiTextInput id="pitchdeck" label="Pitch Deck" />
                    <UiTextInput id="tokenomik" label="Tokenomics" />
                    <UiTextInput id="links" label="Links" />
                    <UiTextInput id="startDate" label="Start Date" />
                    <UiTextInput id="description" label="Description" />
                    <UiTextInput id="ecosystem" label="Ecosystem" />
                    <UiTextInput id="team" label="Team" />
                    <UiTextInput id="members" label="Members" />
                    <UiTextInput id="community" label="Community" />
                </UiTextFieldLayout>
            </form>
        </FormProvider>
    );
};


const UiTextInput = ({ id, label }: { id: string, label: string }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className="mb-4 max-w-md w-full">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                id={id}
                type="text"
                {...register(id)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors[id] && <p className="text-red-500 text-xs mt-2">{errors[id]?.message as any}</p>}
        </div>
    );
};

function UiFormHeaderSubmit({
    title,
    message,
}: {
    title: string;
    message: string;
}) {
    return (
        <div className="flex justify-between max-w-md w-full">
            <h3 className="text-[18px]">{title}</h3>
            <div className="flex items-center gap-4">
                <div>{message}</div>
                <button
                    type="submit"
                    className="border border-outline rounded-[12px] bg-main min-w-[140px] py-3 ml-auto"
                >
                    Create project
                </button>
            </div>
        </div>
    );
}

function UiTextFieldLayout({ children }: { children: ReactNode }) {
    return <div className="flex flex-col gap-1 w-full max-w-md mx-auto">{children}</div>;
}

