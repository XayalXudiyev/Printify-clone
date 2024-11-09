"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useRef, useState } from "react"
import { Rnd } from "react-rnd"
import HandleComponent from "../HandleComponent"

interface PhoneDesignConfigProps {
    configId: string
    imageUrl: string
    imageDimensions: {
        width: number
        height: number
    }
}

const PhoneDesignConfig = ({
    configId,
    imageDimensions,
    imageUrl,
}: PhoneDesignConfigProps) => {
    const { toast } = useToast()
    const router = useRouter()

    const [renderDimensions, setRenderDimensions] = useState({
        width: imageDimensions.width / 4,
        height: imageDimensions.height / 4,
    })

    const [renderPosition, setRenderPosition] = useState({
        x: 150,
        y: 205,
    })

    const phoneCaseRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div className="px-10 mx-auto">
            <div className="relative grid grid-cols-1 lg:grid-cols-3  mt-20 mb-20 pb-20">
                <div
                    ref={containerRef}
                    className="col-span-2  relative h-[600px]  bg-black overflow-hidden w-full  max-w-4xl flex items-center justify-center rounded-lg border border-dashed border-gray-300 p-12 text-center"
                >
                    <div className="relative w-60  bg-opacity-50 pointer-events-none aspect-[896/1840]">
                        <AspectRatio
                            ratio={896 / 1840}
                            className="aspect-[896/1840] pointer-events-none z-50 relative"
                            ref={phoneCaseRef}
                        >
                            <Image
                                src="/phone-template.png"
                                fill
                                alt="phone case"
                                className="pointer-events-none z-50 select-none"
                            />
                        </AspectRatio>
                        <div className="absolute z-40 inset-0 left-[2px] top-px bottom-px right-[2px] rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.7)]">
                            {" "}
                        </div>
                        <div className="absolute bg-yellow-200 inset-0 left-[2px] top-px bottom-px right-[2px] rounded-[32px] ">
                            {" "}
                        </div>
                    </div>

                    <Rnd

                        default={{
                            x: 320,
                            y: 205,
                            height: imageDimensions.height / 4,
                            width: imageDimensions.width / 4
                        }}

                        onDragStop={(_, data) => {
                            const { x, y } = data 
                            setRenderPosition({ x, y })
                        }}
                        className="absolute z-20 border-[3px] border-primary"
                        lockAspectRatio
                        resizeHandleComponent={{
                            bottomRight: <HandleComponent />,
                            bottomLeft: <HandleComponent />,
                            topRight: <HandleComponent />,
                            topLeft: <HandleComponent />,
                        }}
                    >
                        <div className="w-full h-full relative">
                            <Image
                                src={imageUrl}
                                alt="design"
                                fill
                                className="pointer-events-none"
                            />
                        </div>
                    </Rnd>
                </div>
                <div className=" col-span-1">a</div>
            </div>
        </div>
    )
}

export default PhoneDesignConfig
