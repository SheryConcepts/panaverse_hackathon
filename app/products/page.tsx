import Link from "next/link";
import { groqFetch } from "@/sanity/lib/client";

import ProductCard from "@/components/product-card";
import { fetchAllProductsArray } from "@/lib/fetch-products";

export default async function Page() {
  const products = await fetchAllProductsArray();

  return (
    <div className="flex flex-wrap items-center justify-evenly gap-x-4 gap-y-20 pb-20 pt-16">
      {products.map((p: any) => (
        <Link href={`/products/${p.productSlug}`} key={p._id}>
          <ProductCard
            productImage={p.productImages[0] ?? ""}
            productTitle={p.productTitle}
            productType={p.productType}
            productPrice={p.productPrice}
            key={p._id}
          />
        </Link>
      ))}
    </div>
  );
}
