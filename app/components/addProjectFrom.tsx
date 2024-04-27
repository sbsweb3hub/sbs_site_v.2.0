"use client";

import { createTodo } from "@/services/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useAccount } from "wagmi";


const initialState = {
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" aria-disabled={pending}>
            Add
        </button>
    );
}

export function AddProjectFrom() {
    const [state, formAction] = useFormState(createTodo, initialState);
    const { address } = useAccount()
    return (
        <form action={formAction} className="grid grid-cols-1 gap-4">

            <label htmlFor="projectName">Project Name</label>
            <input type="text" id="projectName" name="projectName" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="contactName">Contact Name</label>
            <input type="text" id="contactName" name="contactName" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="telegram">Telegram</label>
            <input type="text" id="telegram" name="telegram" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="web">Web</label>
            <input type="text" id="web" name="web" className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="twitter">Twitter</label>
            <input type="text" id="twitter" name="twitter" className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="pitchdeck">Pitchdeck</label>
            <input type="text" id="pitchdeck" name="pitchdeck" className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="tokenomik">Tokenomik</label>
            <input type="text" id="tokenomik" name="tokenomik" className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="links">Links</label>
            <input type="text" id="links" name="links" className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" name="startDate" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>

            <label htmlFor="ecosystem">Ecosystem</label>
            <input type="text" id="ecosystem" name="ecosystem" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="team">Team</label>
            <input type="text" id="team" name="team" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="members">Members</label>
            <input type="text" id="members" name="members" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="community">Community</label>
            <input type="text" id="community" name="community" required className="w-1/4  p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <SubmitButton />
            <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
            </p>
        </form>
    );
}



