"use client";

import { useEffect } from "react";
import {
  decrementQuantity,
  incrementQuantity,
  orderSelector,
  setQuantity,
} from "@/store/orderSlice";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function Quantity({
  quantity: serverQuantity,
}: {
  quantity: number;
}) {
  const { quantity } = useSelector(orderSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuantity(serverQuantity));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-row items-center gap-x-2">
      <p
        onClick={() => dispatch(decrementQuantity())}
        className="w-10 scale-75 cursor-pointer rounded-full  bg-slate-200 p-2 font-bold text-gray-600  ring-1 ring-slate-500 transition duration-100 ease-in hover:scale-[0.8] hover:bg-slate-100 active:scale-75 active:bg-slate-300"
      >
        <MinusIcon />
      </p>
      <p className="">{quantity}</p>
      <p
        onClick={() => dispatch(incrementQuantity())}
        className="w-10 scale-75 cursor-pointer rounded-full  bg-slate-200 p-2 font-bold text-gray-600  ring-1 ring-slate-500 transition duration-100 ease-in hover:scale-[0.8] hover:bg-slate-100 active:scale-75 active:bg-slate-300"
      >
        <PlusIcon />
      </p>
    </div>
  );
}
