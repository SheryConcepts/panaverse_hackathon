import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { orders } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs";

export async function POST(req: NextRequest ) {
  const userId = auth();
  if (userId) throw new Error("You must be logged in");
  const { productId, quantity, size } = await req.json();

  try {
    console.log("Adding new product");

    await db.insert(orders).values({
      userId,
      productId,
      quantity,
      size: size ?? "",
    });
    revalidatePath("/cart");
  } catch (e) {
    console.log(e)
    throw new Error("Failed to add product to cart");
  }
}

