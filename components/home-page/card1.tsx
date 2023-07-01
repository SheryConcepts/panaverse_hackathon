
import promotion1 from "@/public/promotion_1.png";
import Image from "next/image";

export default function Card1() {
  return (
    <div className="flex w-full flex-col items-start justify-center rounded-sm bg-gray-300  sm:flex-row sm:items-center sm:justify-between">
      <div className="p-8">
        <h2 className="text-h2 border-none text-2xl">GET UP TO 60%</h2>
        <p className="text-lead text-xl text-card-foreground">
          For the summer Season
        </p>
      </div>
      <Image
        src={promotion1}
        alt="Card Image"
        className="aspect-auto self-end"
      />
    </div>
  );
}
