import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2022-11-15" });

export async function POST(req: NextRequest) {
  // console.log(await req.json())
  // console.log(req)
  // const session = stripe.checkout.sessions.create({
  //   line_items: [
  //     j
  //   ]
  // });
  return NextResponse.json(req)
}
