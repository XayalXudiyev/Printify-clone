"use client"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { useUploadThing } from "@/lib/uploadthing"
import { cn } from "@/lib/utils"
import { ImageIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import React, { startTransition, useState, useTransition } from "react"
import DropZone, { type FileRejection } from "react-dropzone"
import { FaMousePointer } from "react-icons/fa"
import { RiLoader2Fill } from "react-icons/ri"

const CatalogPage = () => {
  const { toast } = useToast()
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0)

  const router = useRouter()
  const [isPending, setIsPending] = useTransition()

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId
      startTransition(() => {
        router.push(`/catalog/${configId}`)
      })
    },
    onUploadProgress: (progress) => {
      setUploadProgress(progress)
    },
  })

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined })
    setIsDragOver(false)
  }
  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles
    setIsDragOver(false)

    toast({
      title: `${file.file.type} type is not supported`,
      description: "Please upload a valid image file",
      variant: "destructive",
    })
  }
  return (
    <div className="px-10 mx-auto ">
      <div
        className={cn(
          "relative h-[500px] flex-1 my-16 w-full rounded-xl  bg-gray-900/5 p-2 ring-1  ring-inset ring-gray-900/10  lg:rounded-2xl  flex  justify-center flex-col items-center",
          { "ring-blue-900/25  bg-blue-900/10": isDragOver },
        )}
      >
        <div className="relative flex flex-1 flex-col items-center justify-center w-full">
          <DropZone
            accept={{
              "image/jpeg": [".jpg"],
              "image/png": [".png"],
              "image/jpg": [".jpg"],
            }}
            onDropAccepted={onDropAccepted}
            onDropRejected={onDropRejected}
            onDragEnter={() => setIsDragOver(true)}
            onDragLeave={() => setIsDragOver(false)}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <input {...getInputProps()} />

                {isDragOver ? (
                  <FaMousePointer className="w-6 h-6 text-zinc-500 mb-2" />
                ) : isUploading || isPending ? (
                  <RiLoader2Fill className="animate-spin w-6 h-6 text-zinc-500 mb-2" />
                ) : (
                  <ImageIcon className="w-6 h-6 text-zinc-500 mb-2" />
                )}

                <div className="flex flex-col justify-center mb-2 text-sm  to-zinc-700">
                  {isUploading ? (
                    <div className=" flex flex-col items-center ">
                      <p>Uploading...</p>
                      <div>
                        <Progress
                          value={uploadProgress}
                          className="mt-4 w-44 h-1 bg-gray-400"
                        />
                      </div>
                    </div>
                  ) : isPending ? (
                    <div className="flex flex-col items-center ">
                      <p>Redirecting please waiting...</p>
                    </div>
                  ) : isDragOver ? (
                    <div className="flex flex-col items-center ">
                      <p>Drop File</p>
                    </div>
                  ) : (
                    <div>
                      <p>Click or drag and drop an image here</p>
                    </div>
                  )}
                </div>

                {isUploading ? null : <div>Jpg,Png,Jpeg</div>}
              </div>
            )}
          </DropZone>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage
