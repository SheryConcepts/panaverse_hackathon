import Link from "next/link"

import { cn } from "@/lib/utils"

export default function NavItems({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "hidden w-1/3 flex-initial justify-around font-sans lg:flex",
        className
      )}
    >
      <Link href="/female">
        <li>Female</li>
      </Link>
      <Link href="/male">
        <li>Male</li>
      </Link>
      <Link href="/kids">
        <li>Kids</li>
      </Link>
      <Link href="/products">
        <li>Products</li>
      </Link>
    </ul>
  )
}
