import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"
import React from "react"

const UserMenu = async () => {
  const user = await currentUser()

  return (
    <div>
      {user ? (
        <div className="flex items-center justify-center gap-3">
          {/* order page   */}
          <Link href="/order">
            <Button variant="outline" className="bg-myColor-100 text-white">
              Order
            </Button>
          </Link>
          {/* dashboard page */}
          <Link href="/dashboard">
            <Button variant="destructive">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <div className="space-x-4">
          <Button variant="outline">
            <Link href="sign-in">Login</Link>
          </Button>
          <Button variant="default">
            <Link href="sign-up">Sign Up</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default UserMenu
