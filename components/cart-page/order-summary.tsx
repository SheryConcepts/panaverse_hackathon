import { Order } from "@/types/products";

import ProcessCheckout from "./process-checkout";

export default function OrderSummary({
  totalQuantity,
  subtotal,
  orders,
}: {
  totalQuantity: number;
  subtotal: number;
  orders: Order[];
}) {
  // stripe line items with price_data
  const lineItems = orders.map((o) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: o.productTitle,
          images: o.productImages,
        },
        unit_amount: o.productPrice * 100,
      },
      quantity: o.quantity,
      adjustable_quantity: {
        enabled: true,
      },
    };
  });

  const orderIds = orders.map((o) => {
    return o.id;
  });

  return (
    <div className="flex w-full flex-col gap-y-6 bg-gray-50 p-8 lg:w-2/5">
      <h1 className="text-h4">Order Summary</h1>
      <div className="flex justify-between">
        <p className="">Quantity</p>
        <p className="">{totalQuantity} Products</p>
      </div>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>${subtotal}</p>
      </div>
      <ProcessCheckout  lineItems={lineItems} />
    </div>
  );
}
