import util from "util";
import React from "react";
import { groqFetch } from "@/sanity/lib/client";

import { images } from "@/config/site";

import HorizontalSlider from "./product-section-slider";

export default async function ProductSection() {
  const res = (await groqFetch(`
    *[_type == "product"] {
        "productSlug": productSlug.current,
        productTitle,
        productPrice,
        "productImage": productImages[0].asset->url,
}`)) as {
    productImage: string;
    productSlug: string;
    productPrice: number;
    productTitle: string;
  }[];
  
  return (
    <section className="flex  flex-col items-center justify-start gap-6 pt-20">
      <p className="text-small font-bold text-blue-600">Products</p>
      <h1 className="text-h3">Check What We Have</h1>
      <HorizontalSlider products={res} />
    </section>
  );
}
