'use client'
import { sendProjectToReview } from '@/services/project-service'
import React from 'react'

export default function SendReviewButton({ id }: { id: string }) {
    return (
        <button onClick={() => sendProjectToReview(id)} className="w-[217px] h-[70px] bg-[#533A3ACC] text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px]">Send for review</button>
    )
}
