import { Button } from "@/components/ui/button"
import { routes } from "@/constans"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="border-t-2 border-t-myColor-200">
      <div className="container mx-auto py-16">
        <div className="text-center space-y-8">
          <h2 className="text-2xl font-semibold ">
            Have Questions About Print
          </h2>
          <p className="font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
            saepe.
          </p>
          <Button variant="myButton">Help Center</Button>
        </div>
      </div>

      <div className="mt-8 bg-myColor-200 p-8">
        <div className="container flex flex-row mx-auto">
          <Link href="/">
            <Image
              alt="Logo"
              src="/logo.png"
              width={512}
              height={120}
              className=" h-10 w-auto"
            />
          </Link>
          <div className="flex flex-row gap-4 ml-auto">
            <Button size="icon" variant="myButton">
              <Link href={""}>
                <FaFacebook />
              </Link>
            </Button>
            <Button size="icon" variant="myButton">
              <Link href={""}>
                <FaInstagram />
              </Link>
            </Button>
            <Button size="icon" variant="myButton">
              <Link href={""}>
                <FaTwitter />
              </Link>
            </Button>
            <Button size="icon" variant="myButton">
              <Link href={""}>
                <FaLinkedin />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center my-6 space-x-8">
        {routes.map((route) => (
          <Link key={route.id} href={route.href}>
            {route.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer
