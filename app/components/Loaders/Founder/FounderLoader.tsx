import '@/app/components/projects/Forms/ProjectForm/AddImage/AddBackground/index.css'
import React from 'react'
import { Skeleton } from '@nextui-org/react'

const FounderLoader = () => {
    return (
        <div className='bg-[#FFF] h-screen'>
            <Skeleton className='background'>
                <div className='background'>
                </div>
            </Skeleton>
        </div>
    )
}

export default FounderLoader