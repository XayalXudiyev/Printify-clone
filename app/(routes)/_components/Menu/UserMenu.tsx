import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"
import React from "react"

const UserMenu = async () => {

  const user = await currentUser()


  return (
    <div>

      {
        user ? (
          <div className="flex items-center justify-center gap-3">
            <Link href="/dashboard" >
              <Button variant='outline'>
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <div className="space-x-4">
            <Button variant="outline">
              <Link href='sign-in'>Login</Link>
            </Button>
            <Button variant="myButton">
              <Link href='sign-up'>Sign Up</Link>
            </Button>
          </div>
        )
      }

    </div>
  )
}

export default UserMenu
