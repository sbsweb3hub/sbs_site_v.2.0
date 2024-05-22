/** @format */
'use server';
import { v2 as cloudinary } from 'cloudinary';
import { deleteImageFromProject } from './project-service';

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
        .upload_stream(function (error: any, result: CloudinaryResource) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        })
        .end(buffer);
    }
  );

  return secure_url;
}

const regex = /\/v\d+\/([^/]+)\.\w{3,4}$/;
const getPublicIdFromUrl = (url: string) => {
  const match = url.match(regex);
  return match ? match[1] : null;
};

export async function deleteImage(url: string): Promise<void> {
  'use server';

  try {
    const publicId = getPublicIdFromUrl(url);
    const { result } = await cloudinary.uploader.destroy(publicId!);
    if (result == !'ok') throw new Error('Failed to delete image!');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete image!');
  }
}
