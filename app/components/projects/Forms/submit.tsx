'use client'
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";


export default function Submit() {
    const status = useFormStatus();
    return (
        <Button 
            disabled={status.pending}
            className="w-[217px] h-[70px] bg-[#533A3ACC] text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px]"
        > 
            {status.pending ? "Saving..." : "Save as draft"}
        </Button>
    )
}
