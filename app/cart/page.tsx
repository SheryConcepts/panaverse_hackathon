import OrderSummary from "@/components/cart-page/order-summary";
import ShoppingCartCard from "@/components/cart-page/shopping-cart-card";

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-lg px-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      <div className="flex flex-col items-center lg:items-start  justify-between gap-x-4 sm:flex-col md:flex-col lg:flex-row">
        <div className="flex w-1/2 flex-col gap-y-4">
          <ShoppingCartCard />
          <ShoppingCartCard />
          <ShoppingCartCard />
          <ShoppingCartCard />
          <ShoppingCartCard />
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
