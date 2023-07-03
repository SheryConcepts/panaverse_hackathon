"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImages({ images }: { images: string[] }) {
  const [showcaseImage, setshowcaseImage] = useState(images[0]);
  return (
    <div className=" flex flex-1 flex-row items-center justify-start gap-x-4">
      <div className="flex flex-col items-center justify-start gap-y-2 ">
        {images.map((i) => (
          <Image
            key={i}
            src={i}
            className="aspect-square w-32 flex-auto"
            width={80}
            height={80}
            alt="temp alt"
            onMouseEnter={() => setshowcaseImage(i)}
          />
        ))}
      </div>
      <div className="">
        <Image
          className="aspect-square flex-auto transition  ease-in-out"
          src={showcaseImage}
          width={600}
          height={600}
          alt="temp alt"
        />
      </div>
    </div>
  );
}
