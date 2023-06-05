import { groqFetch } from "@/sanity/lib/client"
import AddtoCart from "@/components/add-to-cart"

import { ReactJsonFormatter } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ProductImages from "@/components/product-images"

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
        productSlug,
        "productDetails": productInformation.productDetails,
        "productCare": productInformation.productCare
}`)


    return (
        <div>
            <div className="mx-auto flex flex-col items-center justify-start lg:flex-row lg:justify-between lg:items-center lg:gap-x-8">
                <ProductImages images={product.productImages} />
                <div className="flex-initial w-1/2 mt-4">
                    <div>
                        <h1>{product.productTitle}</h1>
                        <h2>{product.productType}</h2>
                    </div>
                    <div>
                        <h3>SELECT SIZE</h3>
                        <div className="flex flex-row gap-x-2">
                            {" "}
                            {product.productSizes.map((i: any) => (
                                <p>{i}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <AddtoCart />
                        <p>{product.productPrice}</p>
                    </div>
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
