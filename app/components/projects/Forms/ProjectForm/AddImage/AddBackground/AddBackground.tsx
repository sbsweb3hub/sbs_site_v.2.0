'use client'
import './index.css'
import React, { useState, useRef } from "react"
import Image from 'next/image'

const AddBackground: React.FC<{ backgroundImageUrl: string, disabled: boolean }> = ({ backgroundImageUrl, disabled }) => {
    //@todo -  надо здесь вьебать валидацию типа файла и размера

    const [image, setImage] = useState<string>(backgroundImageUrl ?? '');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onload = (upload) => {
                if (upload.target) {
                    setImage(upload.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="background" onClick={disabled ? undefined : () => fileInputRef.current?.click()}>
            {image ? (
                <div className="background-preview" style={{ backgroundImage: `url(${image})` }} />
            ) : (
                <div className='flex flex-col mt-[237px] ml-[409px]'>
                    <p className='text-[16px] text-[#FFF]'>
                        Background
                    </p>
                    <div className='flex items-center'>
                        <p className='text-[11px] text-[#D6D6D6] mr-[10px]'>
                            Upload<br /> your image
                        </p>
                        <Image
                            width={39}
                            height={39}
                            alt=''
                            src='/uploadback.png'
                        />
                    </div>
                </div>
            )}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
                name='backgroundImage'
            />
        </div>
    );
}

export default AddBackground;
