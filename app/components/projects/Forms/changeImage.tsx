'use client'
import React from 'react'
import CustomImage from '../customImage'
import { deleteImage } from '@/services/cloudinary-service'

export default function ChangeImage({ projectId, imageUrl }: { projectId: string, imageUrl: string }) {
    return (
        <>
            <CustomImage path={imageUrl} />
            <button onClick={() => deleteImage(projectId, imageUrl)}>Change image</button>
        </>

    )
}
