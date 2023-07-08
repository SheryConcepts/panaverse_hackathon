export default function OrderSummary({
  totalQuantity,
  subtotal,
}: {
  totalQuantity: number;
  subtotal: number;
}) {
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
      <button className="w-full max-w-xs self-center bg-gray-800  p-2 font-bold text-gray-50 ring-2 ring-gray-400  hover:bg-gray-700 active:bg-gray-800">
        Process to checkout
      </button>
    </div>
  );
}
