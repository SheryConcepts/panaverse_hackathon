import Link from "next/link";
import { groqFetch } from "@/sanity/lib/client";
import ProductCard from "@/components/product-card";

export default async function Page() {
  
  const products = await groqFetch(`
    *[_type == "product" && "kids" in productCategory] {
        _id,
        productTitle,
        productType,
        productPrice,
        productCategory,
        productSizes,
        "productImages": productImages[].asset->url,
        productSlug,
        "productDetails": productInformation.productDetails,
        "productCare": productInformation.productCare
}`)



  return (
    <div className="flex flex-wrap justify-around items-center gap-y-4">
      {products.map((p: any) => (
        <Link
          href={`/products/${p.productSlug.current}`}
          key={p._id}
        >
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
