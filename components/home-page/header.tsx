import Image from "next/image";
import Link from "next/link";
import bazar from "@/public/bazar.png";
import bustle from "@/public/bustle.png";
import headerImage from "@/public/header-image.png";
import inStyle from "@/public/inStyle.png";
import versace from "@/public/versace.png";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex flex-row justify-between gap-y-4">
      <div className="flex w-1/2 flex-1 flex-col items-start justify-start gap-y-8 py-8 lg:flex-none ">
        <div className="text-p text-md rounded-md bg-blue-100 px-4  py-2 font-semibold text-blue-600">
          Sale 70%
        </div>
        <h1 className="text-h1 text-4xl md:text-5xl">
          An Industrial Take on Streetware
        </h1>
        <p className="text-lead text-md text-muted-foreground">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>

        <Button
          asChild
          className="border-foreground-muted w-2/3 rounded-none border-2 px-10 py-8 md:w-1/3"
        >
          <Link
            href="/products"
            className="flex flex-row items-center justify-center gap-x-4"
          >
            <ShoppingCart className="flex-none" />
            <p className="font-bold text-slate-100">Start Shopping</p>
          </Link>
        </Button>
        <div className="flex flex-row items-center justify-evenly gap-x-8">
          <Image src={bazar} alt="bazar" width={100} height={100} />
          <Image src={bustle} alt="bazar" width={100} height={100} />
          <Image src={versace} alt="bazar" width={100} height={100} />
          <Image src={inStyle} alt="bazar" width={100} height={100} />
        </div>
      </div>
      <div className="hidden aspect-square w-[600px] flex-none text-clip rounded-full bg-orange-50 lg:flex">
        <Image
          src={headerImage}
          alt="Header Image"
          className="aspect-auto w-full"
        />
      </div>
    </header>
  );
}
