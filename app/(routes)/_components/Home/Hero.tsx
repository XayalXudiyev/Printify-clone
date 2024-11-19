import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaCheck } from "react-icons/fa"

const Hero = () => {
  return (
    <div className=" mx-auto px-10 py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/2 float-start flex-col justify-center">
          <h2 className=" text-3xl lg:text-5xl font-semibold">
            Create and sell custom products
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <p className=" flex items-center  gap-2 text-lg ">
              <FaCheck className="text-myColor-100" />
              100% Free to use
            </p>
            <p className=" flex items-center  gap-2 text-lg ">
              <FaCheck className="text-myColor-100" />
              900+ High quality products
            </p>
            <p className=" flex items-center  gap-2 text-lg ">
              <FaCheck className="text-myColor-100" />
              Largest global print network
            </p>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row lg:gap-6">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          <div className=" mt-4 ">
            <p className="text-sm text-myColor-100 font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center items-center">
          <Image
            src="/hero.gif"
            alt="hero"
            width={512}
            height={512}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
