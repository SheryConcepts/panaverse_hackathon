import Image from "next/image";
import { deleteAction } from "@/app/actions";

export default function ShoppingCartCardClient({
  quantity,
  size,
  deleteOrder,
  id,
  productPrice,
  productTitle,
  productImages,
}: {
  quantity: number;
  size: string;
  id: number;
  productPrice: number;
  productImages: string[];
  productTitle: string;
  deleteOrder: (id: number, action: (v: number) => Promise<void>) => void;
}) {
  // const productData = await fetchSanityProducts(product);
  // console.log(productData)
  return (
    <div className="flex flex-col justify-between gap-x-4 md:flex-row">
      <Image src={productImages[0]} alt={productTitle} width={150} height={150} />
      <div className="w-3/4">
        <div className="flex justify-between">
          <h1>{productTitle}</h1>
          <button onClick={() => deleteOrder(id, deleteAction)}>
            DELETE ICON
          </button>
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
          <p>{productPrice}</p>
          <div className="flex flex-row gap-x-2">
            <p>-</p>
            <p>{quantity}</p>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
