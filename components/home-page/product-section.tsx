import React from "react";
import { fetchAllProductsArray as fetchAllProducts  } from "@/lib/fetch-products";
import HorizontalSlider from "./product-section-slider";

export default async function ProductSection() {
  const res = await fetchAllProducts();
  const products = res.map((p) => {
    return {
      productTitle: p.productTitle,
      productPrice: p.productPrice,
      productSlug: p.productSlug,
      productImage: p.productImages[0],
    };
  });
  
  return (
    <section className="flex  flex-col items-center justify-start gap-6 pt-20">
      <p className="text-small font-bold text-blue-600">Products</p>
      <h1 className="text-h3">Check What We Have</h1>
      <HorizontalSlider products={products} />
    </section>
  );
}
