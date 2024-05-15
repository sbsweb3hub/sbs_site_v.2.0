'use client'
import { sendProjectToReview } from '@/services/project-service'
import React from 'react'

export default function SendReviewButton({ id }: { id: string }) {
    return (
        <button onClick={() => sendProjectToReview(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Send for review</button>
    )
}
