"use client";

import { useEffect, useState, useTransition } from "react";

import ShoppingCartCard from "@/components/cart-page/shopping-cart-card";
import { toastDeleteFromCart } from "@/lib/toasts";

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
  productTitle: string;
  productPrice: number;
  productImages: string[];
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

  function deleteOrderOptimistic(
    id: number,
    action: (orderId: number) => Promise<void>
  ) {
    setRemovedOrder(orders.filter((o) => o.id === id)[0]);
    setOrders(orders.filter((o) => o.id !== id));
    startTransition(async () => {
      toastDeleteFromCart(action(id))
    });
  }

  useEffect(() => {
    if (failed) {
      removedOrder && setOrders([removedOrder, ...orders]);
      setFailed(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [failed]);

  return (
    <div className="flex w-full flex-auto flex-col gap-y-12 lg:w-1/2">
      {orders.map((o) => (
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
