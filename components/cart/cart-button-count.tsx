"use client";

import { useEffect } from "react";
import { cartSelector, setProducts } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

import { cn } from "@/lib/utils";

export default function CartButton({ orders }: { orders: number }) {
  const { ordersPlaced } = useSelector(cartSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders) {
      dispatch(setProducts(orders));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  return (
    <span
      className={cn(
        "absolute right-[2px] top-[2px] flex w-4 items-center justify-center rounded-full bg-red-300 text-xs font-bold text-red-700",
        orders === 0 && ordersPlaced === 0 && "hidden"
      )}
    >
      {ordersPlaced}
    </span>
  );
}

