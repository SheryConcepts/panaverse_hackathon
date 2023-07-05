"use client";

import { useContext, useEffect, useState } from "react";
import {cn} from "@/lib/utils"
import { SiteContext } from "../context/context-provider";

export default function CartButton({ placedOrders }: { placedOrders: number }) {
  const { isMutating, mutationFailed, setFailed } = useContext(SiteContext);
  const [orders, setOrders] = useState(placedOrders);
  console.log(isMutating, mutationFailed, orders);

  useEffect(() => {
    if (isMutating) {
      setOrders(orders + 1);
    }
    if (mutationFailed) {
      setOrders(orders - 1);
      setFailed(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMutating, mutationFailed]);

    return (
      <span className={cn("absolute right-[2px] top-[2px] flex w-4 items-center justify-center rounded-full bg-red-300 text-xs font-bold text-red-700", !orders && "hidden" )}>
      {orders}
    </span>
  );
}
