import Image from "next/image";
import promotion2 from "@/public/promotion_2.png";

export default function Card3() {
  return (
    <div className="flex w-1/2 flex-col items-start  justify-between rounded-sm bg-orange-200 px-6 pt-6">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-small text-md self-start font-extralight text-gray-800">
          Flex Sweatshirt
        </h3>
        <div className="flex flex-wrap flex-row items-end justify-start gap-x-2 self-start">
          <p className="text-small text-lg font-light line-through">$100.00</p>
          <p className="text-small text-lg font-bold">$75.00</p>
        </div>
      </div>
      <Image
        src={promotion2}
        alt="Card Image"
        className="aspect-auto justify-self-start"
      />
    </div>
  );
}
