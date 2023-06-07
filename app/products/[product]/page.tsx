import { groqFetch } from "@/sanity/lib/client"

import { ReactJsonFormatter } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import AddtoCart from "@/components/add-to-cart"
import ProductImages from "@/components/product-images"
import { addProductToCart } from "@/app/actions"

export default async function Page({
  params: { product: productSlug },
}: {
  params: { product: string }
}) {
  const product = await groqFetch(`
    *[_type == "product" && productSlug.current == "${productSlug}"][0] {
        _id,
        productTitle,
        productType,
        productPrice,
        productCategory,
        productSizes,
        "productImages": productImages[].asset->url,
        "productSlug": productSlug.current,
        "productDetails": productInformation.productDetails,
        "productCare": productInformation.productCare
}`)

  return (
    <div>
      <div className="mx-auto flex flex-col items-center justify-start lg:flex-row lg:items-center lg:justify-between lg:gap-x-8">
        <ProductImages images={product.productImages} />
        <div className="mt-4 w-1/2 flex-initial">
          <div>
            <h1>{product.productTitle}</h1>
            <h2>{product.productType}</h2>
          </div>
          <AddtoCart
            productSlug={product.productSlug}
            productSizes={product.productSizes}
            productPrice={product.productPrice}
            addProductToCart={addProductToCart}
          />
        </div>
      </div>
      <div>
        <h2>Product Information</h2>
      </div>
      <div className="flex flex-row justify-between gap-x-4">
        <h2>Product Details</h2>
        <p>{product.productDetails}</p>
      </div>
      <div className="flex flex-row justify-start gap-x-8">
        <h2>Product Care</h2>
        <div className="flex flex-col">
          {product.productCare.map((i: string) => (
            <li>{i}</li>
          ))}
        </div>
      </div>
    </div>
  )
}
