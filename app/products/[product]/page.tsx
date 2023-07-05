import { groqFetch } from "@/sanity/lib/client";

import AddtoCart from "@/components/cart/add-to-cart";
import ProductImages from "@/components/product-images";
import { addProductToCart } from "@/app/actions";
import { fetchAllProductsArray } from "@/lib/fetch-products";
import { Product } from "@/types/products";

export default async function Page({
  params: { product: productSlug },
}: {
  params: { product: string };
}) {
  
  // fetching all products from cache
  const products = await fetchAllProductsArray();
  // Assuming that product with slug already exists upon error Error() boundary will be rendered
  const product = products.find(p => p.productSlug === productSlug) as Product;

  return (
    <div>
      <div className="mx-auto flex flex-col items-center justify-start gap-y-24 pb-16 pt-20 lg:flex-row lg:items-center lg:justify-evenly lg:gap-x-10">
        <ProductImages images={product.productImages} />
        <div className="space-y-12 self-start px-4 lg:self-center lg:pr-12">
          <div className="">
            <h1 className="text-h3 font-normal tracking-wide">
              {product.productTitle}
            </h1>
            <h2 className="text-lead font-bold capitalize text-gray-400">
              {product.productType}
            </h2>
          </div>
          <AddtoCart
            productSlug={product.productSlug}
            productSizes={product.productSizes}
            productPrice={product.productPrice}
            productId={product._id}
            addProductToCartAction={addProductToCart}
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-screen-xl flex-col items-start justify-start bg-slate-50  p-8 pb-32">
        <div className="relative w-full  border-b-2 border-b-gray-700 py-12">
          <h1 className="text-h1 absolute top-9 z-[-1]  text-5xl tracking-wider  text-gray-200/40 sm:top-4 sm:text-8xl ">
            Overview
          </h1>
          <h2 className="text-h4 tracking-wide">Product Information</h2>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-12 py-8">
          <div className="flex flex-row justify-between gap-x-12">
            <h2 className="text-lead flex-none text-base font-bold capitalize text-gray-400">
              PRODUCT DETAILS
            </h2>
            <p className="text-base  font-normal text-gray-600">
              {product.productDetails}
            </p>
          </div>
          <div className="flex flex-row justify-start gap-x-20">
            <h2 className="text-lead flex-none text-base font-bold capitalize text-gray-400">
              PRODUCT CARE
            </h2>
            <div className="flex flex-col">
              {product.productCare.map((i: string) => (
                <li className="font-bold text-gray-600">{i}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
