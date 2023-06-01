import {cn} from "@/lib/utils";
import Link from "next/link";

export default function NavItems({className}: {className?: string}) {
  return (
    <ul className={cn("font-sans justify-around w-1/3 flex-initial hidden lg:flex", className)}>
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
