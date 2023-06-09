export default function OrderSummary() {
  return (
    <div className="w-1/4 gap-y-8 p-4">
      <h1>Order Summary</h1>
      <div className="flex justify-between">
        <p>Quantity</p>
        <p>2</p>
      </div>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>$500</p>
      </div>
    </div>
  );
}
