"use client";

import { useEffect, useState, useTransition } from "react";

import ShoppingCartCard from "@/components/cart-page/shopping-cart-card";

// function removeOrderAction(orderId: number): Promise<void> {
//   "use server";
//
//   return Promise.resolve();
// }

interface Order {
  id: number;
  quantity: number;
  size: string;
  productId: string;
  userId: string;
}

export default function Orders({
  orders: _orders,
}: {
  orders: {
    id: number;
    quantity: number;
    size: string;
    productId: string;
    userId: string;
    productTitle: string;
    productPrice: number;
    productImages: string[];
  }[];
}) {
  const [orders, setOrders] = useState(_orders);
  const [pending, startTransition] = useTransition();
  const [failed, setFailed] = useState(false);
  const [removedOrder, setRemovedOrder] = useState<false | Order>(false);

  console.log(orders);

  function deleteOrderOptimistic(
    id: number,
    action: (orderId: number) => Promise<void>
  ) {
    setRemovedOrder(orders.filter((o) => o.id === id)[0]);
    setOrders(orders.filter((o) => o.id !== id));
    startTransition(async () => {
      try {
        await action(id);
      } catch (e) {
        setFailed(true);
        console.warn(e);
      }
    });
  }

  useEffect(() => {
    if (failed) {
      // @ts-ignore
      setOrders([removedOrder, ...orders]);
      setFailed(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [failed]);

  return (
    <div className="flex w-1/2 flex-col gap-y-4">
      {orders.map((o) => (
        // @ts-ignore
        <ShoppingCartCard
          quantity={o.quantity}
          key={o.id}
          size={o.size}
          id={o.id}
          productImages={o.productImages}
          productTitle={o.productTitle}
          productPrice={o.productPrice}
          deleteOrder={deleteOrderOptimistic}
        />
      ))}
    </div>
  );
}
