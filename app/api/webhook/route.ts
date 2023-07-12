import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";

const WEBHOOK_ENDPOINT_SK =
  "whsec_YP01QiOHyhRWuwxMP4AGyyRfSSgo1Gqh";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const fullFillOrder = async (customerEmail: string) => {
  const email = new Resend(process.env.RESEND_KEY);
  await email.sendEmail({
    from: "Shery <onboarding@resend.dev>",
    to: customerEmail,
    subject: "Your order is placed",
    html: "<h1>Thank you for trusting us with money</h1><p>You are not getting your money back and products were never real in the first place. All hail Piracy</p>",
  });
};

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();
    const sig = req.headers.get("stripe-signature");
    const event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      WEBHOOK_ENDPOINT_SK
    );
    if (event.type === "checkout.session.completed") {
      const session = await stripe.checkout.sessions.retrieve(
      // @ts-ignore
        event.data.object.id
      );
      await fullFillOrder(session.customer_details?.email!);
    }
    return NextResponse.json(payload, {
      status: 200,
      statusText: "OK",
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
