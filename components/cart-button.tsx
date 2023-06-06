import { cn } from "@/lib/utils"

import { Icons } from "./icons"

export default function CartButton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative hidden items-center justify-center rounded-full bg-gray-300 p-2 lg:flex",
        className
      )}
    >
      <Icons.cart className="w-6" />
      <span className="absolute right-[2px] top-[2px] flex w-4 items-center justify-center rounded-full bg-red-300 text-xs font-bold text-red-700">
        1
      </span>
    </div>
  )
}
