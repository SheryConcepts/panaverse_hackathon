"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import DropDownCount from "@/components/dropdown-count";
import { Icons } from "@/components/icons";

import CartButton from "./cart/cart-button";

export default function NavbarDropdownMenu({
  children,
  orders,
}: {
  children?: ReactNode;
  className?: string;
  orders: number;
}) {
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <DropDownCount
        className="cursor-pointer"
        handleToggle={() => setToggle(!toggle)}
        orders={orders}
      />
      <>
        {toggle ? (
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-gray-50 px-12 py-10">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Icons.siteLogo />
              </Link>
              <Icons.cross
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-2">
              <div onClick={() => setToggle(!toggle)}>{children}</div>
              <ul
                className={cn(
                  "flex w-1/3 flex-initial font-sans font-medium lg:hidden",
                  "flex-col items-center justify-center gap-y-1"
                )}
              >
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/female");
                    // create an artificial wait of 200 milliseconds
                    setTimeout(() => {
                      setToggle(!toggle);
                    }, 400);
                  }}
                >
                  Female
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/male");
                    // create an artificial wait of 200 milliseconds
                    setTimeout(() => {
                      setToggle(!toggle);
                    }, 400);
                  }}
                >
                  Male
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/kids");
                    // create an artificial wait of 200 milliseconds
                    setTimeout(() => {
                      setToggle(!toggle);
                    }, 400);
                  }}
                >
                  Kids
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/products");
                    // create an artificial wait of 200 milliseconds
                    setTimeout(() => {
                      setToggle(!toggle);
                    }, 400);
                  }}
                >
                  Products
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </>
    </>
  );
}
