import { clsx, type ClassValue } from "clsx";
import { db } from "db/db";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchUserOrders(userId: string) {
  const orders = await db.query.orders.findMany({
    where: (order, { eq }) => eq(order.userId, userId),
  });
  
  return orders.length ?? 0;
}
