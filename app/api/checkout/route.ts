import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

//
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextRequest) {
  try {
    const { line_items } = await req.json();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/cart/sucess"
          : `${process.env.HOST}/cart/success`,
      cancel_url:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/cart/cancel"
          : `${process.env.HOST}/cart/cancel`,
      currency: "usd",
    });
    return NextResponse.json(session.url!, { status: 200, statusText: "OK" });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
