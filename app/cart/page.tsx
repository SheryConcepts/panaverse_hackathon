import { db } from "@/db/db";
import { groqFetch } from "@/sanity/lib/client";
import { auth } from "@clerk/nextjs";

import { Order } from "@/types/products";
import { fetchAllProducts } from "@/lib/fetch-products";
import OrderSummary from "@/components/cart-page/order-summary";
import Orders from "@/components/cart-page/orders";

async function _fetchPlacedOrders(userId: string) {
  const dbOrders = (
    await db.query.users.findFirst({
      with: {
        orders: true,
      },
      where: (users, { eq }) => eq(users.id, userId),
    })
  )?.orders;

  const ids = dbOrders!.map((o: any) => o.productId);
  const idsString = `[${ids.map((id) => `"${id}"`).join(", ")}]`;

  const sanityProducts =
    await groqFetch(`*[_type == "product" && _id in ${idsString}] {
        _id,
        productTitle,
        productPrice,
        "productImages": productImages[].asset->url,
    }`);
  const orders: any = dbOrders?.map((o: any) => {
    const product = sanityProducts.find((p: any) => p._id == o.productId);
    return { ...o, ...product };
  });
  return orders;
}

async function fetchPlacedOrders(userId: string) {
  const placedOrderProductIds = (
    await db.query.users.findFirst({
      with: {
        orders: true,
      },
      where: (users, { eq }) => eq(users.id, userId),
    })
  )?.orders;

  const allProductsSanity = await fetchAllProducts();

  if (placedOrderProductIds) {
    const placedOrders = placedOrderProductIds.map((p) => {
      console.log(p)
      // Assuming that a match exists in DB
      const { _id, productTitle, productPrice, productImages } =
        allProductsSanity[p.productId];
      return {
        ...p,
        productTitle,
        productPrice,
        productImages,
        _id,
      };
    });
    return placedOrders;
  }
  return [];
}

export default async function Page() {
  const { userId } = auth();
  if (userId) {
    const orders = await fetchPlacedOrders(userId);
    console.log(orders)
    
    const totalQunatity = orders.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    const subtotal = orders.reduce((prev, curr, i, arr) => {
      return prev + curr.productPrice * curr.quantity;
    }, 0);

    return (
      <div className="mx-auto max-w-screen-lg px-8 py-10">
        <h2 className="mb-8 text-3xl font-bold">Shopping Cart</h2>
        {orders.length !== 0 ? (
          <div className="flex flex-col items-start justify-start  gap-x-8 gap-y-12 lg:flex-row lg:items-start lg:justify-between">
            <Orders orders={orders} />
            <OrderSummary totalQuantity={totalQunatity} subtotal={subtotal} />
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
        <p>Please Sign in to Continue</p>
      </div>
    );
  }
}
