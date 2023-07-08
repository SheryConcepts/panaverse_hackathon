"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/db/db";
import { orders } from "@/db/schema";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export async function addProductToCart(
  productId: string,
  quantity: number,
  size: string | undefined
) {
  const { userId } = auth();

  if (!userId) throw new Error("You must be logged in");

  try {
    console.log("Adding new product");

    await db.insert(orders).values({
      userId,
      productId,
      quantity,
      size: size ?? "",
    });

    revalidatePath(`/cart`);
  } catch (e) {
    console.error("Error while fetching data", e);
  }
}

export async function deleteAction(id: number) {
  try {
    console.log(`deleting order with ID=${id}`);
    await db.delete(orders).where(eq(orders.id, id));
    console.log(`deleted order with ID=${id}`);
    revalidatePath("/cart");
  } catch (e) {
    console.warn(`Error while deleting order with ID=${id}`, e);
  }
}

export async function changeQuantity(
  orderId: number,
  mode: "increment" | "decrement",
  currValue: number
) {
  console.log('running action')
  const {userId} = auth();
  if (!userId) throw new Error("You are not Authorized")
  
  try {
    if (mode === "increment") {
      await db
        .update(orders)
        .set({ quantity: currValue + 1 })
        .where(eq(orders.id, orderId));
    }
    if (mode === "decrement") {
      !(currValue <= 0) &&
        (await db
          .update(orders)
          .set({ quantity: currValue - 1 })
          .where(eq(orders.id, orderId)));
    }
    revalidatePath("/cart");
  } catch (e) {
    console.log("Error While Changing Order In Database", e);
    throw new Error("There was an error")
  }
}
