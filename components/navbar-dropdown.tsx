"use client";

import { ReactNode, useState } from "react";
import Link from "next/link"

import { Icons } from "@/components/icons";

export default function NavbarDropdownMenu({
  children,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div className="flex lg:hidden" onClick={() => setToggle(!toggle)}>
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
  );
}

function SpanningDropdown({
  toggleYourself,
  toggle,
  children,
}: {
  toggleYourself: Function;
  toggle: boolean;
  children: ReactNode;
}) {
  return (
    <div className="absolute left-0 top-0 h-screen w-screen bg-gray-50 px-12 py-10">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Icons.siteLogo />
        </Link>
        <Icons.cross
          className="cursor-pointer"
          onClick={() => toggleYourself(!toggle)}
        />
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-y-2">
        {children}
      </div>
    </div>
  );
}
