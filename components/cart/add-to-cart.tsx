"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { addProductToCart} from "@/store/cartSlice";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { cn } from "@/lib/utils";

export default function AddtoCart({
  productSizes,
  productPrice,
  productId,
  addProductToCartAction,
}: {
  productSlug: string;
  productSizes: string[];
  productPrice: number;
  productId: string;
  addProductToCartAction: (
    productId: string,
    quantity: number,
    size?: string
  ) => Promise<void>;
}) {
  const { isSignedIn } = useUser();
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-small text-bold text-gray-950 ">SELECT SIZE</h3>
          <div className="flex flex-row justify-start gap-x-2">
            {productSizes.map((i: string) => (
              <button
                className={cn(
                  "aspect-square w-10 scale-90 rounded-full bg-slate-200 p-2 text-gray-600  ring-1 ring-slate-500 transition duration-100 ease-in hover:scale-100 hover:bg-slate-100 active:scale-90 active:bg-slate-300",
                  size === i ? "bg-slate-300" : ""
                )}
                onClick={() => setSize(i)}
                key={uuidV4()}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-start gap-x-8">
          <h1 className="text-lead text-gray-800">Quantity</h1>
          <div className="flex items-center gap-x-1">
            <button
              className="w-10 scale-75 rounded-full  bg-slate-200 p-2 font-bold text-gray-600  ring-1 ring-slate-500 transition duration-100 ease-in hover:scale-[0.8] hover:bg-slate-100 active:scale-75 active:bg-slate-300"
              onClick={() => setQuantity(quantity - 1 < 0 ? 0 : quantity - 1)}
            >
              -
            </button>
            <h1>{quantity}</h1>
            <button
              className="w-10 scale-75 rounded-full  bg-slate-200 p-2 font-bold text-gray-600  ring-1 ring-slate-500 transition duration-100 ease-in hover:scale-[0.8] hover:bg-slate-100 active:scale-75 active:bg-slate-300"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      {isSignedIn ? (
        <div className="flex w-full flex-row items-center justify-start gap-x-4">
          <button
            className="flex-1 border bg-gray-700 px-8 py-4 font-bold text-gray-50 ring-1 ring-slate-500 transition duration-100 ease-in hover:bg-gray-600 active:bg-gray-700"
            onClick={async () => {
              let toastId: string;
              try {
                toastId = toast.loading("Adding Product to Cart");
                await addProductToCartAction(productId, quantity, size);
                dispatch(addProductToCart());
                toast.dismiss(toastId);
                toast.success("Added Product to Cart");
              } catch (e) {
                toast.dismiss(toastId!);
                toast.error(`Failed while adding product to cart: ${e}`,);
                console.log(e);
              }
            }}
          >
            ADD TO CART
          </button>
          <h3 className="text-h3">{productPrice} $</h3>
        </div>
      ) : ( <Link href="/sign-in">
          <p>Sign in</p>
        </Link>
      )}
    </div>
  );
}
