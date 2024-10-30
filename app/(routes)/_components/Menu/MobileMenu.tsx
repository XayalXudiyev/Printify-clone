import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { routes } from "@/constans"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { RiMenuFill } from "react-icons/ri"

const MobileMenu = () => {
  return (
    <div className="lg:hidden flex items-center justify-center">
      <Sheet>
        <SheetTrigger>
          <RiMenuFill size={26} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <Image
                  alt="Logo"
                  src="/logo.png"
                  width={512}
                  height={120}
                  className=" h-10 w-auto"
                />
              </Link>
            </SheetTitle>
            <div className=" flex flex-col  pt-3 space-y-6">
              {routes.map((route) => (
                <Link key={route.id} href={route.href}>
                  {route.title}
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
