import Link from "next/link";
import { auth } from "@clerk/nextjs";

import { fetchUserOrders } from "@/lib/fetch-products";
import { cn } from "@/lib/utils";
import CartButtonCount from "@/components/cart/cart-button-count";
import { Icons } from "@/components/icons";

export default async function CartButton({
  className,
}: {
  className?: string;
}) {
  const { userId } = auth();
  const ordersPlaced = (userId && (await fetchUserOrders(userId))) || 0;

  return (
    <Link
      href="/cart"
      prefetch={false}
      className={cn(
        "relative hidden items-center justify-center rounded-full bg-slate-200 p-2 lg:flex",
        className
      )}
    >
      <Icons.cart className="w-6" />
      <CartButtonCount orders={ordersPlaced} />
    </Link>
  );
}
