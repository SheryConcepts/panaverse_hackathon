"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { eq, inArray } from "drizzle-orm";
import { LineItem } from "@/types/products";
import { db } from "@/db/db";
import { orders } from "@/db/schema";
import { deleteOrders } from "@/app/actions";

export default function ProcessCheckout({
  lineItems,
}: {
  lineItems: LineItem[];
}) {
  const router = useRouter();

  async function handleCheckout() {
    // Deleting orders from database and passing them as line_items to stripe.
    const toastId = toast.loading("Redirecting to Stripe");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({ line_items: lineItems }),
      });
      const url: string = await res.json();
      toast.dismiss(toastId);
      router.push(url);
    } catch(e) {
      toast.dismiss(toastId);
      toast.error("Failed to redirect to Stripe");
    }
  }

  return (
    <button
      onClick={handleCheckout}
      className="w-full max-w-xs self-center bg-gray-800  p-2 font-bold text-gray-50 ring-2 ring-gray-400  hover:bg-gray-700 active:bg-gray-800"
    >
      Process to checkout
    </button>
  );
}
