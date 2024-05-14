'use client'
import { sendProjectToReview } from '@/services/project-service'
import React from 'react'

export default function SendReviewButton({ id }: { id: string }) {
    return (
        <button onClick={() => sendProjectToReview(id)}>Send for review</button>
    )
}
