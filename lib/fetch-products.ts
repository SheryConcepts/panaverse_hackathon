import "server-only";
import { cache } from "react";
import { groqFetch } from "@/sanity/lib/client";
import { db } from "db/db";

import { Product, ProductsRecord } from "@/types/products";

export async function fetchUserOrders(userId: string) {
  const orders = await db.query.orders.findMany({
    where: (order, { eq }) => eq(order.userId, userId),
  });

  return orders.length ?? 0;
}

export const fetchAllProductsArray = cache(async (): Promise<Product[]> => {
  return await groqFetch(`
    *[_type == "product"] {
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
  }`);
});

export async function fetchAllProductsRecord() {
  const allPrdouctsArray = await fetchAllProductsArray();
  let allProductsHashMap: ProductsRecord = {};

  allPrdouctsArray.forEach((p) => {
    allProductsHashMap[p._id] = p;
  });

  return allProductsHashMap!;
}

export const fetchAllProducts = cache(fetchAllProductsRecord);

export function preload() {
  void fetchAllProducts();
}
