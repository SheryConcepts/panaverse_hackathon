"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/db/db";
import { orders, users } from "@/db/schema";
import { groqFetch } from "@/sanity/lib/client";
import { type User } from "@clerk/backend";
import { auth, currentUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export async function addProductToCart(
  productSlug: string,
  quantity: number,
  size: string | undefined
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
    const { _id: productId }: { _id: string } = await groqFetch(`
    *[_type == "product" && productSlug.current == "${productSlug}"][0] {
        _id,
        productTitle,
        productType,
        productPrice,
        productCategory,
        productSizes,
        "productImages": productImages[].asset->url,
        "productSlug": productSlug.current,
        "productDetails": productInformation.productDetails,
        "productCare": productInformation.productCare
}`);

    const {
      id: userId,
      emailAddresses,
      firstName,
      lastName,
    } = (await currentUser()) as User;
    const { emailAddress } = emailAddresses[0];
    const name = `${firstName} ${lastName}`;

    console.log("upserting current user to database");
    await db
      .insert(users)
      .values({
        email: emailAddress,
        name,
        id: userId,
      })
      .onConflictDoNothing();
    console.log("upserted current user to database");

    console.log("adding current order to database");
    await db.insert(orders).values({
      userId,
      productId,
      quantity,
      size: size ?? "",
    });

    // after adding products to cart we revalidate cache of CartButton component to update the order's count
    // revalidateTag("cart-button-cache");
    revalidatePath(`/cart`);
    revalidatePath(`/products/${productSlug}`);
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
