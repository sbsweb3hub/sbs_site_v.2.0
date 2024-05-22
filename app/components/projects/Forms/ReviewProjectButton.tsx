'use client'
import { reviewProject, sendProjectToReview } from '@/services/project-service'
import { ProjectStatusEnum } from '@/types'
import React from 'react'

export default function ReviewProjectButton({ id }: { id: string }) {
    return (<>
        <button onClick={() => reviewProject(id, ProjectStatusEnum.APPROVED)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Approve</button>

        <button onClick={() => reviewProject(id, ProjectStatusEnum.DECLINED)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Decline</button>

    </>
    )
}
