"use client";

import { useEffect } from "react";
import { setQuantity } from "@/store/orderSlice";
import { useDispatch } from "react-redux";

export default function SuccessPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuantity(0));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="mx-auto w-2/3 px-20 py-10 text-center">
      <h1 className="text-h2 border-none">Your order has been Canceled</h1>
      <div className="scale-150">😿</div>
    </div>
  );
}
