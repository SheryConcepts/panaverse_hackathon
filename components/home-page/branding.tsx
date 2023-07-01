import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandingImage from "@/public/feature.webp";

import { Button } from "../ui/button";

export default function Branding() {
  return (
    <div className="relative z-[1] mt-10 flex flex-col gap-y-2 overflow-x-clip bg-gray-50 p-8">
      <SectionBackground />
      <h1 className="text-h2 border-6 mx-auto  border-none py-8 leading-normal  lg:mr-2 lg:w-1/3 lg:px-0 lg:text-right">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex w-full gap-x-6 lg:w-1/2">
          <div className="flex w-1/2 flex-col gap-y-4">
            <Quality h="Using Good Quality Materials" />
            <Quality h="Modern Fashion Design" />
          </div>
          <div className="flex w-1/2 flex-col gap-y-4">
            <Quality h="100% Handmade Products" />
            <Quality h="Discount for Bulk Orders" />
          </div>
        </div>
        <div className="flex w-full flex-row gap-x-4 gap-y-8 lg:w-1/2">
          <div className="w-full lg:w-1/2">
            <Image
              src={BrandingImage}
              alt="Girl in a hoodie"
              className="aspect-auto"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-4 lg:w-1/2 lg:justify-between">
            <p className="text-lead text-lg font-light">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button
              asChild
              className="border-foreground-muted max-w-1/2 rounded-none border-2 border-gray-300"
            >
              <Link href="/products">
                <p className="font-semibold text-slate-100">See All Products</p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Quality({ h }: { h: ReactNode }) {
  return (
    <div className="flex  flex-col items-start justify-start gap-y-2">
      <h1 className="text-h5 text-lg font-semibold text-gray-600">{h}</h1>
      <p className="text-lead text-sm font-light">
        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
      </p>
    </div>
  );
}

function SectionBackground() {
  return (
    <div className="absolute z-[-2] h-full w-full p-4 text-6xl font-bold text-gray-100 md:text-8xl">
      Different from others
    </div>
  );
}
