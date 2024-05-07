'use client'

import { CldImage } from 'next-cloudinary';

import React from 'react'

export default function CustomImage({ path }: { path: string }) {
    return (
        <CldImage
            width="500"
            height="500"
            src={path}
            crop="fill"
            sizes="100vw"
            alt="Description of my image"
        />
    )
}


