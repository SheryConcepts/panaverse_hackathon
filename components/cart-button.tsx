import { Icons } from "./icons"

export default function CartButton() {
  return (
    <div className="relative flex items-center justify-center rounded-full bg-gray-300 p-2 lg:flex hidden">
      <Icons.cart  className="w-6"/>
      <span className="absolute bg-red-300 rounded-full w-4 text-red-700 flex items-center justify-center top-[2px] right-[2px] text-xs font-bold">
        1
      </span>
    </div>
  )
}
