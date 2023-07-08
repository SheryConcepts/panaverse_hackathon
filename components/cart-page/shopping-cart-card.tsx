import Image from "next/image";
import { Trash2 as DeleteIcon, MinusIcon, PlusIcon } from "lucide-react";

import { deleteAction } from "@/app/actions";

import Quantity from "./quantity";

export default function ShoppingCartCardClient({
  quantity,
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
    <div className="flex w-full flex-col justify-start gap-4 md:flex-row">
      <Image
        src={productImages[0]}
        alt={productTitle}
        className="aspect-square  rounded-md"
        width={150}
        height={150}
      />
      <div className="grow space-y-2">
        <div className="flex justify-between ">
          <h1 className="text-h4 font-light ">{productTitle}</h1>
          <button onClick={() => deleteOrder(id, deleteAction)}>
            <DeleteIcon />
          </button>
        </div>
        <div className="space-y-1">
          <p className="text-lead text-sm font-bold tracking-wide text-gray-500">
            DRESS
          </p>
          <div>
            <p className="font-bold">Delivery Estimation</p>
            <p className="text-sm font-medium text-yellow-400">
              5 Working Days
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-lg font-bold">${productPrice}</p>
            <Quantity quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}
