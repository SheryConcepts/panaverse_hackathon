export default function OrderSummary({
  totalQuantity,
  subtotal,
}: {
  totalQuantity: number;
  subtotal: number;
}) {
  return (
    <div className="gap-y- w-1/4 p-4">
      <h1>Order Summary</h1>
      <div className="flex justify-between">
        <p>quantity</p>
        <p>{totalQuantity}</p>
      </div>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>{subtotal}</p>
      </div>
      <button className="w-full p-4 border-blue-900 border-2 mt-2 text-blue-900 bg-blue-500">Process to checkout</button>
    </div>
  );
}
