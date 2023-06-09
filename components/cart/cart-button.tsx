import { cache } from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

import { cn, fetchUserOrders } from "@/lib/utils";
import CartButtonCount from "@/components/cart/cart-button-count";
import { Icons } from "@/components/icons";

const cachedFetchOrders = cache(fetchUserOrders);

export default async function CartButton({
  className,
}: {
  className?: string;
}) {
  let ordersAddedToCart: number;

  const { userId } = auth();
  if (userId) {
    ordersAddedToCart = await cachedFetchOrders(userId);
  }

  return (
    <Link
      href="/cart"
      className={cn(
        "relative hidden items-center justify-center rounded-full bg-gray-300 p-2 lg:flex",
        className
      )}
    >
      <Icons.cart className="w-6" />
      <CartButtonCount placedOrders={ordersAddedToCart!} />
    </Link>
  );
}
