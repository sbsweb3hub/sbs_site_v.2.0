'use client'
import './index.css'
import React, { useState, useRef } from "react"
import Image from 'next/image'

const AddAvatar: React.FC = () => {
    const [image, setImage] = useState<string>('');
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
      <div className="avatar-uploader" onClick={() => fileInputRef.current?.click()}>
        {image ? (
          <div className="avatar-preview" style={{ backgroundImage: `url(${image})` }} />
        ) : (
          <div className='flex flex-col items-center'>
            <p className='text-[15px] text-[#00000080]'>
                Your logo
            </p>
            <Image 
              width={92}
              height={92}
              alt=''
              src='/avatar.png'
              className='my-[20px]'
            />
            <div className='flex justify-around items-center'> 
                <p className='text-[11px] text-[#00000080] mr-[10px]'>
                  Upload your image
                </p>
                <Image 
                    width={24}
                    height={24}
                    alt=''
                    src='/upload.png'
                />
            </div>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
    );
}

export default AddAvatar;