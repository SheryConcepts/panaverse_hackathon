"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { LineItem } from "@/types/products";

export default function ProcessCheckout({
  lineItems,
}: {
  lineItems: LineItem[];
}) {
  const router = useRouter();

  async function handleCheckout() {
    const toastId = toast.loading("Redirecting to Stripe");
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ line_items: lineItems }),
    });
    const url: string = await res.json();
    router.push(url);
    toast.dismiss(toastId);
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
