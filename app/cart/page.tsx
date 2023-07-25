export const dynamic = "force-dynamic"

import { auth } from "@clerk/nextjs";
import Link from "next/link";
import OrderSummary from "@/components/cart-page/order-summary";
import Orders from "@/components/cart-page/orders";
import { fetchPlacedOrders } from "@/lib/fetch-products";

export default async function Page() {
  const { userId } = auth();
  if (userId) {
    const orders = await fetchPlacedOrders(userId);
    console.log(orders)

    const totalQunatity = orders.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    const subtotal = orders.reduce((prev, curr) => {
      return prev + curr.productPrice * curr.quantity;
    }, 0);

    return (
      <div className="mx-auto max-w-screen-lg px-8 py-10">
        <h2 className="mb-8 text-3xl font-bold">Shopping Cart</h2>
        {orders.length !== 0 ? (
          <div className="flex flex-col items-start justify-start  gap-x-8 gap-y-12 lg:flex-row lg:items-start lg:justify-between">
            <Orders orders={orders} />
            <OrderSummary orders={orders} totalQuantity={totalQunatity} subtotal={subtotal} />
          </div>
        ) : (
          <p>No orders in Cart</p>
        )}
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="mx-auto  max-w-screen-lg px-8">
        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
        <p>Please <Link href="/sign-in">Sign</Link> in to Continue</p>
      </div>
    );
  }
}
