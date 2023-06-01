import Image from "next/image"
import Link from "next/link"
import { groqFetch } from "@/sanity/lib/client"

export default async function Page() {
  
  const products = await groqFetch(`
    *[_type == "product"] {
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

function ProductCard({
  productImage,
  productTitle,
  productType,
  productPrice,
}: any) {
  return (
    <div className="">
      <Image src={productImage} width={300} height={100} alt="" />
      <h1>{productTitle}</h1>
      <h2>{productType}</h2>
      <p>{productPrice}</p>
    </div>
  )
}
