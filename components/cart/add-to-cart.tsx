"use client";

import { useContext, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { v4 as uuidV4 } from "uuid";

import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { SiteContext } from "@/components/context/context-provider";

function useQuantity(initialValue: number) {
  const quantityRef = useRef(initialValue);
  const [number, setNumber] = useState(quantityRef.current);

  function setPreservedNumber(newValue: number) {
    setNumber((v) => {
      quantityRef.current = newValue;
      return newValue;
    });
  }

  return { quantity: quantityRef.current, setQuantity: setPreservedNumber };
}

export default function AddtoCart({
  productSlug,
  productSizes,
  productPrice,
  addProductToCartAction,
}: {
  productSlug: string;
  productSizes: string[];
  productPrice: number;
  addProductToCartAction: (
    productSlug: string,
    quantity: number,
    size?: string
  ) => Promise<void>;
}) {
  const { isSignedIn } = useUser();
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useLocalStorage(productSlug, 0);
  const { setFailed, startTransition } = useContext(SiteContext);

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
              <h1>{typeof window === undefined ?  null : quantity}</h1>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
        </div>
      </div>
      {isSignedIn ? (
        <button
          onClick={() => {
            startTransition(async () => {
              try {
                await addProductToCartAction(productSlug, quantity, size);
              } catch (e) {
                setFailed(true);
              }
            });
          }}
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
