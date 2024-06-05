'use client'
import { useFormStatus } from "react-dom";


export default function Submit() {
    const status = useFormStatus();
    return (
        <button
            disabled={status.pending}
            className="w-[217px] h-[70px] bg-[#533A3ACC] text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px] hover:bg-[#704C4C] active:bg-[#402828]"
        >
            {status.pending ? "Saving..." : "Save as draft"}
        </button>

    )
}
