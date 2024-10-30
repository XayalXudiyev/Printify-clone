import { Button } from "@/components/ui/button"
import { routes } from "@/constans"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { IoMenuSharp } from "react-icons/io5"
import MobileMenu from "./MobileMenu"
import UserMenu from "./UserMenu"

const Header = () => {
  return (
    <div className="h-16 shadow-md bg-white w-full fixed z-50">
      <div className="px-10 mx-auto flex flex-row items-center justify-between p-3">
        <MobileMenu />

        <div className=" items-center justify-center mr-auto">
          <Link href="/">
            <Image
              alt="Logo"
              src="/logo.png"
              width={512}
              height={120}
              className=" h-10 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex mr-auto ml-16  space-x-8">
          {routes.map((route) => (
            <Link key={route.id} href={route.href}>
              {route.title}
            </Link>
          ))}
        </nav>

        <UserMenu />
      </div>
    </div>
  )
}

export default Header
