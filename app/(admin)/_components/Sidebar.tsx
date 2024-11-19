"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
export const navLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Order",
    href: "/order",
  },
]

const Sidebar = () => {
  return (
    <div className="hidden lg:flex h-screen px-10 bg-gray-800 border-r-2">
      <div className="flex flex-col w-full">
        <div className="mx-auto my-12">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={120} height={120} />
          </Link>
        </div>
        <nav className="flex flex-col  md:flex">
          <ul className="hidden md:flex flex-col gap-4  text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Button asChild variant="link" key={link.href}>
                  <div className="text-yellow-500 text-xl">
                    <Link href={link.href}>{link.label}</Link>
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
