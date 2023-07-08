import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import {db} from "@/db/db"
import { orders } from "@/db/schema";

type ReqBody  = {
  
  productId: string,
  quantity: number,
  size: string | undefined,
}

export async function POST(req: NextRequest) {
  const { userId } = auth();

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

    console.log("Adding new product")
    await db.insert(orders).values({
      userId,
      productId,
      quantity,
      size: size ?? "",
    });
    
    revalidatePath(`/cart`);
    // revalidatePath(`/products/${productSlug}`);
  } catch (e) {
    console.error("Error while fetching data", e);
    NextResponse({})
  }
}
