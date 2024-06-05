import Spinner from '@/app/components/Spinner'
import React from 'react'
import Image from 'next/image'
import ProjectsLoader from '@/app/components/Loaders/ProjectsTable/ProjectsLoader'

export default function Loading() {
    return (
        // <div>LoadingProjects....LoadingProjects....LoadingProjects</div>
      <ProjectsLoader/>
    )
}
