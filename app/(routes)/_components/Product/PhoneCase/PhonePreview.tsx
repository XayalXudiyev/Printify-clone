"use client"

import ModalLogin from "@/components/ModalLogin"
import PhoneDesign from "@/components/PhoneDesign"
import { Button } from "@/components/ui/button"
import { cn, formatPrice } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import type { Configuration } from "@prisma/client"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Confetti from "react-dom-confetti"
import { FaCheck, FaShoppingCart } from "react-icons/fa"
import { PHONE_COLORS } from "./PhoneCase"

interface PhonePreviewProps {
  configuration: Configuration[]
}
const PhonePreview = ({ configuration }: PhonePreviewProps) => {
  const router = useRouter()

  console.log("configurations", configuration)

  const {
    caseColor,
    caseModel,
    caseMaterial,
    caseFinish,
    croppedImageUrl,
    id,
    basePrice,
    totalPrice,
  } = configuration

  const tw = PHONE_COLORS.find((color) => color.value === caseColor)?.tw

  const { isSignedIn, user } = useUser()

  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  useEffect(() => {
    setShowConfetti(true)
  }, [])

  return (
    <>
      <div className="pointer-events-none absolute select-none inset-0 flex justify-center overflow-hidden">
        <Confetti
          active={showConfetti}
          config={{ elementCount: 1000, spread: 350 }}
        />
      </div>
      <div className="px-10 mx-auto mt-16 flex  items-center text-sm  md:gap-8">
        <div className="w-1/3 md:col-span-3">
          <PhoneDesign
            imgSrc={configuration.croppedImageUrl}
            className={cn(`${tw}`, ",max-w-[200px] rounded-[46px] ")}
          />
        </div>

        <div className=" w-full justify-center items-center">
          <div className="flex flex-col md:flex-row  justify-center  border-b gap-x-20 pb-4">
            <div>
              <p className="text-zinc-950 font-bold text-xl ">FEATURES</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside text-lg">
                <li>Supports wirelles charging</li>
                <li>Shock-absorbing TPU material</li>
                <li>Eco-friendly packaging</li>
                <li>5-year printy warranty</li>
              </ol>
            </div>
            <div className="font-medium text-zinc-950">
              <p className="text-zinc-950 font-bold text-xl ">MATERIALS</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside text-lg">
                <li>Durable high-quality material</li>
                <li>Resistant to scratches and fingerprints</li>
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="flow-root text-sm">
                <div className="  flex justify-between items-center rounded-xl  mt-2">
                  <p className="text-gray-700">Base Price</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(basePrice)}
                  </p>
                </div>
                <div className="  flex justify-between items-center rounded-xl  mt-2">
                  <p className="text-gray-700">Material and Textured Finish</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice - basePrice)}
                  </p>
                </div>
                <div className="h-[1px] my-1 w-full bg-gray-400" />
                <div className="  flex justify-between items-center rounded-xl  mt-2">
                  <p className="text-gray-700">Order Total</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-96">
            {!isSignedIn && !user ? (
              <Button>
                <ModalLogin redirectUrl={`/catalog/${id}/phone/preview`} />
              </Button>
            ) : (
              <Button
                disabled={!isSignedIn || !user}
                onClick={() => router.push(`/catalog/${id}/phone/checkout`)}
              >
                Checkout <ArrowRightIcon />{" "}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PhonePreview
