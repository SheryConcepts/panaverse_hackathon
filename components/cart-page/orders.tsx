"use client";

import { useEffect, useState, useTransition } from "react";
import { PgTimestamp } from "drizzle-orm/pg-core";
import { toast } from "react-hot-toast";

import { toastDeleteFromCart } from "@/lib/toasts";
import ShoppingCartCard from "@/components/cart-page/shopping-cart-card";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "@/store/cartSlice";

interface Order {
  id: number;
  quantity: number;
  size: string;
  productId: string;
  userId: string;
  productTitle: string;
  productPrice: number;
  productImages: string[];
  modifiedAt: Date | null;
}

export default function Orders({ orders: _orders }: { orders: Order[] }) {
  const [orders, setOrders] = useState(_orders);
  const [, startTransition] = useTransition();
  const [failed, setFailed] = useState(false);
  const [removedOrder, setRemovedOrder] = useState<false | Order>(false);
  
  const dispatch = useDispatch();

  function deleteOrderOptimistic(
    id: number,
    action: (orderId: number) => Promise<void>
  ) {
    setRemovedOrder(orders.filter((o) => o.id === id)[0]);
    setOrders(orders.filter((o) => o.id !== id));
    startTransition(async () => {
      let toastId: string = "";
      try {
        toastId = toast.loading("Deleting order from cart");
        await action(id);
        dispatch(removeProductFromCart())
        toast.dismiss(toastId);
        toast.success("Order deleted from cart");
      } catch (e) {
        console.log(e);
        setFailed(true);
        toast.dismiss(toastId);
        toast.error("Failed deleting product to Cart");
      }
    });
  }
  
  function sortOrdersDescending(orders: Order[]): Order[] {
    return orders.sort((a, b) => {
      const modifiedA = a.modifiedAt || new Date(0);
      const modifiedB = b.modifiedAt || new Date(0);

      return modifiedB.getTime() - modifiedA.getTime();
    });
  }
  
  useEffect(() => {
    if (failed) {
      removedOrder &&
        setOrders(sortOrdersDescending([removedOrder, ...orders]));
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
