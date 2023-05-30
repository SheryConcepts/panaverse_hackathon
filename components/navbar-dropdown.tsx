"use client"

import { ReactNode, useState } from "react"

import { Icons } from "@/components/icons"

export default function NavbarDropdownMenu({
  children,
}: {
  children?: ReactNode
  className?: string }) {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <>
      <div className="lg:hidden flex" onClick={() => setToggle(!toggle)}>
        <Icons.dropdownIcon className="" />
      </div>
      <>
        {toggle ? (
          <SpanningDropdown toggleYourself={setToggle} toggle={toggle}>
            {children}
          </SpanningDropdown>
        ) : null}
      </>
    </>
  )
}


function SpanningDropdown({
  toggleYourself,
  toggle,
  children,
}: {
  toggleYourself: Function
  toggle: boolean
  children: ReactNode
}) {
  return (
    <div className="px-12 py-10 absolute left-0 top-0 w-screen h-screen bg-gray-50">
      <div className="flex items-center justify-between">
        <Icons.siteLogo /> 
        <Icons.cross className="cursor-pointer" onClick={() => toggleYourself(!toggle)}>Toggle</Icons.cross>
      </div>
      <div className="flex flex-col mt-10 items-center justify-center gap-y-2">{children}</div>
    </div>
  )
}
