import {cn} from "@/lib/utils";

export default function NavItems({className}: {className?: string}) {
  return (
    <ul className={cn("font-sans justify-around w-1/3 flex-initial hidden lg:flex", className)}>
      <li>Female</li>
      <li>Male</li>
      <li>Kids</li>
      <li>All Products</li>
    </ul>
  )
}
