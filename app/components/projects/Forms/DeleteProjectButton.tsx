'use client'
import { deleteProject } from '@/services/project-service'
import React from 'react'


export default function DeleteProjectButton({ id }: { id: string }) {

    return (
        <button className="w-[217px] h-[70px] bg-[#533A3ACC] text-[#FFF] text-[24px] rounded-[5px] font-medium ml-[117px]" onClick={() => deleteProject(id)} >Delete project draft</button>
    )
}
