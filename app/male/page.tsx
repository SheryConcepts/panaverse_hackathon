import Link from "next/link"
import ProductCard from "@/components/product-card"
import { fetchAllProductsArray } from "@/lib/fetch-products";

export default async function Page() {
  const allProducts = await fetchAllProductsArray();
  const products = allProducts.filter(p => p.productCategory.includes("male"));

  return (
    <div className="flex flex-wrap items-center justify-around gap-y-4">
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
  )
}
