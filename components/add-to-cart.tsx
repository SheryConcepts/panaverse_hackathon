"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { v4 as uuidV4 } from "uuid";

import { Button } from "./ui/button";

export default function AddtoCart({
  productSlug,
  productSizes,
  productPrice,
  addProductToCart,
}: {
  productSlug: string;
  productSizes: string[];
  productPrice: number;
  addProductToCart: (
    productSlug: string,
    quantity: number,
    size?: string
  ) => void;
}) {
  const { isSignedIn } = useUser();
  const [size, setSize] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(0);

  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <div className="w-1/3">
        <h3>SELECT SIZE</h3>
        <div className="flex flex-row gap-x-2">
          {productSizes.map((i: string) => (
            <button onClick={() => setSize(i)} key={uuidV4()}>
              {i}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <h1>Quantity</h1>
          <div className="flex gap-x-4">
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <h1>{quantity}</h1>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
      </div>
      {isSignedIn ? (
        <button
          onClick={() =>
            startTransition(() => addProductToCart(productSlug, quantity, size))
          }
        >
          ADD TO CART
        </button>
      ) : (
        <Link href="/sign-in">
          <p>Sign in</p>
        </Link>
      )}
    </div>
  );
}
