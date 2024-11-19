import { PHONE_COLORS } from "@/app/(routes)/_components/Product/PhoneCase/PhoneCase"
import PhoneDesign from "@/components/PhoneDesign"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { CaseColor } from "@prisma/client"
import { Eye } from "lucide-react"
import React from "react"

interface PhotoModalProps {
  croppedImageUrl: string
  caseColor: string
}

const PhotoModal = ({ croppedImageUrl, caseColor }: PhotoModalProps) => {
  const tw = PHONE_COLORS.find((color) => color.value === caseColor)?.tw

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Eye className="w-4 h-4" />
      </DialogTrigger>
      <DialogContent className="h-screen max-w-[360px]">
        <PhoneDesign
          imgSrc={croppedImageUrl}
          className={cn(`${tw}`, ",max-h-[400px] rounded-[46px] ")}
        />
      </DialogContent>
    </Dialog>
  )
}

export default PhotoModal
