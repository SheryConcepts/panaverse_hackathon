"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/db/db";
import { orders, users } from "@/db/schema";
import { groqFetch } from "@/sanity/lib/client";
import { type User } from "@clerk/backend";
import { auth, currentUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export async function addProductToCart(
  productId: string,
  quantity: number,
  size: string | undefined,
) {
  // faking a delay using promise timeout
  // const result = await new Promise<string>((resolve) =>
  //   setTimeout(() => {
  //     resolve("hello");
  //   }, 1000)
  // );
  // throw new Error("error")
  const { userId } = auth();
  console.log(userId);

  if (!userId) throw new Error("You must be logged in");

  try {
    // const {
    //   id: userId,
    //   emailAddresses,
    //   firstName,
    //   lastName,
    // } = (await currentUser()) as User;
    // const { emailAddress } = emailAddresses[0];
    // const name = `${firstName} ${lastName}`;
    //
    // !userId && {
    //   
    // console.log("upserting current user to database");
    // await db
    //   .insert(users)
    //   .values({
    //     email: emailAddress,
    //     name,
    //     id: userId,
    //   })
    //   .onConflictDoNothing();
    // console.log("upserted current user to database");
    // console.log("adding current order to database");
    // }

    await db.insert(orders).values({
      userId,
      productId,
      quantity,
      size: size ?? "",
    });

    revalidatePath(`/cart`);
    // revalidatePath(`/products/${productSlug}`);
    console.log("added current order to database");
  } catch (e) {
    console.error("Error while fetching data", e);
  }
}

export async function deleteAction(id: number) {
  try {
    console.log(`deleting order with ID=${id}`);
    await db.delete(orders).where(eq(orders.id, id));
    console.log(`deleted order with ID=${id}`);
    revalidatePath('/cart')
  } catch (e) {
    console.warn(`Error while deleting order with ID=${id}`, e);
  }
}
