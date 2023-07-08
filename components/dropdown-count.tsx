"use client"

import Link from "next/link";
import { cn} from "@/lib/utils";
import CartButtonCount from "@/components/cart/cart-button-count";
import { Icons } from "@/components/icons";


export default function DropCount({
  className,
  orders,
  handleToggle,
}: {
  className?: string;
  orders: number
  handleToggle: () => void
}) {


  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full bg-slate-200 p-2 lg:hidden",
        className
      )}
      onClick={handleToggle}
    >
    
      <Icons.dropdownIcon className="w-6" />
      <CartButtonCount orders={orders} />
    </div>
  );
}
