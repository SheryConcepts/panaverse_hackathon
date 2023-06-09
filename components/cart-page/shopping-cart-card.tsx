export default function ShoppingCartCard() {
  return (
    <div className="flex justify-between gap-x-4 flex-col md:flex-row">
      <div>IMAGE</div>
      <div>
        <div className="flex flex-col justify-between">
          <h1>TITLE</h1>
          <h1>DELETE ICON</h1>
        </div>
        <div>
          <p>DRESS</p>
        </div>
        <div>
          <p>Delivery Estimation</p>
        </div>
        <div>
          <p>5 Working Days</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>$100</p>
          <div className="flex flex-row gap-x-2">
            <p>-</p>
            <p>2</p>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
