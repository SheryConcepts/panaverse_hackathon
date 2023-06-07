import { db } from "@/db/db";
import { auth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export default async function CartButton({
  className,
}: {
  className?: string;
}) {
  
  let ordersAddedToCart: number;

  const { userId } = auth();
  if (userId) {
    const data = await db.query.users.findFirst({
      with: {
        orders: true,
      },
      where: (users, { eq }) => eq(users.id, userId),
    });

    ordersAddedToCart = data?.orders.length ?? 0;
  }
  
  return (
    <div
      className={cn(
        "relative hidden items-center justify-center rounded-full bg-gray-300 p-2 lg:flex",
        className
      )}
    >
      <Icons.cart className="w-6" />
      <span className="absolute right-[2px] top-[2px] flex w-4 items-center justify-center rounded-full bg-red-300 text-xs font-bold text-red-700">
        {ordersAddedToCart! && 0}
      </span>
    </div>
  );
}
