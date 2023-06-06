"use client"

import Link from "next/link"
import { useUser } from "@clerk/nextjs"

import { Button } from "./ui/button"

export default function AddtoCart() {
  const { isSignedIn } = useUser()
  return (
    <div>
      {isSignedIn ? (
        <Button>ADD TO CART</Button>
      ) : (
        <Link href="/sign-in">
          <p>Sign in</p>
        </Link>
      )}
    </div>
  )
}
