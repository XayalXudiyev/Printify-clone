import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const UserMenu = () => {
  return (
    <div className="space-x-4">
      <Button variant="outline">
        <Link href={""}>Login</Link>
      </Button>
      <Button variant="myButton">
        <Link href={""}>Sign Up</Link>
      </Button>
    </div>
  )
}

export default UserMenu
