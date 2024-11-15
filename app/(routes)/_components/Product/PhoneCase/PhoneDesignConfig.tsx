"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { cn, formatPrice } from "@/lib/utils"
import { Radio, RadioGroup } from "@headlessui/react"
import { ArrowRightIcon, CaretDownIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useRef, useState } from "react"
import { Rnd } from "react-rnd"
import HandleComponent from "../HandleComponent"
import {
  PHONE_BASE_PRICE,
  PHONE_COLORS,
  PHONE_FINISHES,
  PHONE_MATERIALS,
  PHONE_MODELS,
} from "./PhoneCase"

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

  const [options, setOptions] = useState<{
    color: (typeof PHONE_COLORS)[number]
    model: (typeof PHONE_MODELS)[number]
    material: (typeof PHONE_MATERIALS)[number]
    finish: (typeof PHONE_FINISHES)[number]
  }>({
    color: PHONE_COLORS[0],
    model: PHONE_MODELS[0],
    material: PHONE_MATERIALS[0].options[0],
    finish: PHONE_FINISHES[0].options[0],
  })

  return (
    <div className="px-10 mx-auto">
      <div className="relative grid grid-cols-1 lg:grid-cols-3  mt-20 mb-20 pb-20">
        <div
          ref={containerRef}
          className="col-span-2  relative h-[600px]  bg-black overflow-hidden w-full  max-w-4xl flex items-center justify-center rounded-lg border border-dashed border-gray-300 p-12 text-center"
        >
          <div className="relative w-60  bg-opacity-50 pointer-events-none aspect-[896/1831]">
            <AspectRatio
              ratio={896 / 1831}
              className="aspect-[896/1831] pointer-events-none z-50 relative"
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
            <div
              className={cn(
                "absolute inset-0 left-[3px] top-px bottom-px right-[3px] rounded-[32px] ",
                `${options.color.tw}`,
              )}
            >
              {" "}
            </div>
          </div>

          <Rnd
            default={{
              x: 320,
              y: 205,
              height: imageDimensions.height / 4,
              width: imageDimensions.width / 4,
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
        <div className=" col-span-1 h-[600px] relative flex flex-col bg-white">
          <ScrollArea className="relative flex-1 overflow-auto">
            <div className="px-8 pb-12 pt-8">
              <h2 className="text-2lg font-semibold">
                Cutomize your phone case
              </h2>
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={options.color}
                  onChange={(value) => setOptions({ ...options, color: value })}
                >
                  <Label>
                    <span className="text-sm font-bold">Color : </span>{" "}
                    <span className="font-bold uppercase">
                      {options.color.label}
                    </span>
                  </Label>
                  <div className="flex flex-row space-x-3 mt-4 ">
                    {PHONE_COLORS.map((color) => (
                      <RadioGroup.Option
                        key={color.label}
                        value={color}
                        className={({ focus, checked }) =>
                          cn(
                            "h-8 w-8 relative -m-1 cursor-pointer rounded-full  border-2 flex items-center justify-center",
                            { [`${color.twBorder} p-0.5`]: focus || checked },
                          )
                        }
                      >
                        <span
                          className={cn(
                            `${color.tw} h-full w-full rounded-full  border border-black border-opacity-10`,
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>

                <div className="relative flex flex-col gap-3 w-full">
                  <Label className="font-bold">Model</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-fit 500 justify-between"
                      >
                        {options.model.label}
                        <CaretDownIcon className="w-4 h-4 shrink-0  opacity-50 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                      {PHONE_MODELS.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          onClick={() =>
                            setOptions({ ...options, model: model })
                          }
                          className="w-full flex items-center justify-between text-sm gap-1"
                        >
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="">
                  {PHONE_MATERIALS.map(
                    ({ label, options: selectableOptions }) => (
                      <RadioGroup
                        key={label}
                        value={options.material}
                        onChange={(value) =>
                          setOptions({ ...options, material: value })
                        }
                      >
                        <Label className="capitalize font-bold">{label}</Label>
                        <div className="mt-3 space-y-4 ">
                          {selectableOptions.map((option) => (
                            <RadioGroup.Option
                              key={option.label}
                              value={option}
                              className={({ focus, checked }) =>
                                cn(
                                  "relative block cursor-pointer rounded-lg bg-white px-6 py-2 shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between",
                                  {
                                    "border-myColor-100": focus || checked, // Burada sınıf kontrolü yapılacak
                                  },
                                )
                              }
                            >
                              {option.label}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    ),
                  )}

                  {PHONE_FINISHES.map(
                    ({ label, options: selectableOptions }) => (
                      <RadioGroup
                        key={label}
                        value={options.finish}
                        onChange={(value) =>
                          setOptions({ ...options, finish: value })
                        }
                        className="mt-4"
                      >
                        <Label className="capitalize font-bold">{label}</Label>
                        <div className="mt-3 space-y-4 ">
                          {selectableOptions.map((option) => (
                            <RadioGroup.Option
                              key={option.label}
                              value={option}
                              className={({ focus, checked }) =>
                                cn(
                                  "relative block cursor-pointer rounded-lg bg-white px-6 py-2 shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between",
                                  { "border-myColor-100": focus || checked },
                                )
                              }
                            >
                              {option.label}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    ),
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="w-full px-8 h-16 bg-white">
            <div className="h-px w-full bg-zinc-200" />
            <div className="h-full w-full flex justify-end items-center">
              <div className="flex items-center gap-6 w-full">
                <p className="text-sm font-bold">
                  {formatPrice(
                    (PHONE_BASE_PRICE +
                      options.material.price +
                      options.finish.price) /
                      100,
                  )}
                </p>
                <Button size="sm" className="w-fit">
                  Continue... <ArrowRightIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneDesignConfig
