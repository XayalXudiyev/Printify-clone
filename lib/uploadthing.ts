import type { OurFileRouter } from "@/app/api/uploadthing/core"
import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
} from "@uploadthing/react"

export const UploadButton = generateUploadButton<OurFileRoutereRouter>()
export const UploadDropzone = generateUploadDropzone<OurFileRouter>()
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>()
export const UpLoader = generateUploader<OurFileRouter>()
