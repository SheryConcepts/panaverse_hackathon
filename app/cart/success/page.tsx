"use client";

import { useEffect } from "react";
import { setQuantity } from "@/store/orderSlice";
import Confetti from "react-confetti";
import { useDispatch } from "react-redux";

export default function SuccessPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuantity(0));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="mx-auto w-2/3 px-20 py-10 text-center">
      <Confetti className="mx-auto" height={980} width={980} />
      <h1 className="text-h2 border-none">Congrats Your Order Is Placed</h1>
      <div className="scale-150">😀</div>
    </div>
  );
}
