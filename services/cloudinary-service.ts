/** @format */

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
}

export async function uploadImage(file: File): Promise<string> {
  'use server';
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { secure_url } = await new Promise<CloudinaryResource>(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          // {
          // tags: ['nextjs-server-actions-upload-sneakers'],
          // upload_preset: 'nextjs-server-actions-upload'
          // },
          function (error: any, result: CloudinaryResource) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    }
  );

  return secure_url;
}
