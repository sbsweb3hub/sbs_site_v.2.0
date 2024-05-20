'use client'
import { deleteProject } from '@/services/project-service'
import React from 'react'

export default function DeleteProjectButton({ id }: { id: string }) {
    return (
        <button onClick={() => deleteProject(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Delete project draft</button>
    )
}
