import { db } from "@/db/db";
import { groqFetch } from "@/sanity/lib/client";
import { auth } from "@clerk/nextjs";

import OrderSummary from "@/components/cart-page/order-summary";
import Orders from "@/components/cart-page/orders";

async function fetchPlacedOrders(userId: string) {
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

  console.log(idsString);
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

type order = {
  id: number;
  quantity: number;
  size: string;
  productId: string;
  userId: string;
  _id: string;
  productTitle: string;
  productPrice: number;
  productImages: string[];
};

export default async function Page() {
  const { userId } = auth();
  if (userId) {
    const orders: order[] = await fetchPlacedOrders(userId);
    
    const totalQunatity = orders.reduce((prev, curr, i, arr) => {
      return prev + curr.quantity;
    }, 0);

    const subtotal = orders.reduce((prev, curr, i, arr) => {
      return prev + curr.productPrice * curr.quantity;
    }, 0);
    
    return (
      <div className="mx-auto  max-w-screen-lg px-8">
        <h2 className="mb-8 text-3xl font-bold">Shopping Cart</h2>
        {orders ? (
          <div className="flex flex-col items-center justify-between  gap-x-4 sm:flex-col md:flex-col lg:flex-row lg:items-start">
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
    <div className="mx-auto  max-w-screen-lg px-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      <p>Please Sign in to Continue</p>
    </div>;
  }
}
