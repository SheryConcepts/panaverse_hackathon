import Link from "next/link";
import { auth } from "@clerk/nextjs";

import { cn, fetchUserOrders } from "@/lib/utils";
import CartButtonCount from "@/components/cart/cart-button-count";
import { Icons } from "@/components/icons";


export default async function CartButton({
  className,
}: {
  className?: string;
}) {
  let ordersAddedToCart: number;

  const { userId } = auth();
  if (userId) {
    ordersAddedToCart = await fetchUserOrders(userId);
  }

  return (
    <Link
      href="/cart"
      className={cn(
        "relative hidden items-center justify-center rounded-full bg-slate-200 p-2 lg:flex",
        className
      )}
    >
      <Icons.cross className="w-6" />
      <CartButtonCount orders={ordersAddedToCart!} />
    </Link>
  );
}
