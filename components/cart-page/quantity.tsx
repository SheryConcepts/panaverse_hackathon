"use client";

import { useCallback, useState, useTransition } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

import { changeQuantity as action } from "@/app/actions";

type FunctionType = (...args: any[]) => any;
function debounced<T extends FunctionType>(
  func: T,
  duration: number
): (...args: Parameters<T>) => ReturnType<T> {
  let timeoutId: NodeJS.Timeout;
  let result: ReturnType<T>;

  return (...args: Parameters<T>) => {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      result = func(...args);
    }, duration);
    return result;
  };
}

export default function Quantity({
  quantity: serverQuantity,
  orderId,
}: {
  quantity: number;
  orderId: number;
}) {
  const [quantity, setQuantity] = useState(serverQuantity);
  const [, startTransition] = useTransition();

  // eslint-disable-next-line
  const changeQuantity = useCallback(debounced(action, 500), []);

  return (
    <div className="flex flex-row items-center gap-x-2">
      <button
        disabled={quantity === 1}
        onClick={() => {
          setQuantity(quantity === 0 ? 0 : quantity - 1);
          startTransition(async () => {
            try {
              await changeQuantity(orderId, "decrement", quantity);
            } catch (e) {
              setQuantity(quantity);
            }
          });
        }}
        className="w-10 scale-75 cursor-pointer rounded-full  bg-slate-200 p-2 font-bold text-gray-600  ring-1 ring-slate-500 transition duration-100 ease-in hover:scale-[0.8] hover:bg-slate-100 active:scale-75 active:bg-slate-300"
      >
        <MinusIcon />
      </button>
      <p className="">{quantity}</p>
      <button
        onClick={() => {
          setQuantity(quantity + 1);
          startTransition(async () => {
            try {
              await changeQuantity(orderId, "increment", quantity);
            } catch (e) {
              setQuantity(quantity);
            }
          });
        }}
        className="w-10 scale-75 cursor-pointer rounded-full  bg-slate-200 p-2 font-bold text-gray-600  ring-1 ring-slate-500 transition duration-100 ease-in hover:scale-[0.8] hover:bg-slate-100 active:scale-75 active:bg-slate-300"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
