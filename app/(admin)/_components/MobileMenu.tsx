"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "./Sidebar"

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex justify-end">
          <Button>
            <MenuIcon className="w-4 h-4 text-white" />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="bg-gray-800 text-white">
        <div className="flex flex-col gap-4">
          <div className="mx-auto my-12">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={120} height={120} />
            </Link>
          </div>
          {navLinks.map((link) => (
            <Button
              asChild
              variant="link"
              key={link.href}
              className="w-full h-12 justify-center text-yellow-500"
            >
              <Link href={link.href}>
                <div className=" text-[1.2rem]">{link.label}</div>
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
