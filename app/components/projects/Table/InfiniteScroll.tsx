'use client'
import React from 'react'
import ProjectsTable from './ProjectsTable'
import { ProjectType } from '@/types'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchAllProjects } from "@/services/project-service";


export default function InfiniteScroll({ projects }: { projects: Array<ProjectType> }) {
    //@todo - move page to env
    const [page, setPage] = useState(2)
    const [items, setItems] = useState<ProjectType[]>(projects)
    const { ref, inView } = useInView()
    const loadMoreProjects = async () => {
        const fetchedProjects = await fetchAllProjects(page)
        setItems([...items, ...fetchedProjects])
        setPage(page + 1)
    }

    useEffect(() => {
        if (inView) {
            loadMoreProjects()
        }
    }, [inView])
    //@todo - fix loader
    return (
        <>
            <ProjectsTable projects={items} />
            <div ref={ref}>
                Loading...
            </div>
        </>

    )
}
