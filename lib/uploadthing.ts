import {
    generateUploadButton,
    generateUploadDropzone,
    generateReactHelpers,
    generateUploader,
} from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";


export const UploadButton = generateUploadButton<OurFileRoutereRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
export const UpLoader = generateUploader<OurFileRouter>();