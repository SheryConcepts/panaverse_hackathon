"use client";

import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function AddtoCart() {
  const { isSignedIn } = useUser();
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
  );
}
