import "server-only";
import { cache } from "react";
import { groqFetch } from "@/sanity/lib/client";
import { db } from "db/db";
import { eq } from "drizzle-orm";
import { Product, ProductsRecord } from "@/types/products";
import {  orders } from "@/db/schema";

export async function fetchUserOrders(userId: string) {
  const returnOrders = await db.query.orders.findMany({
    where: eq(orders.userId, userId)
  });

  return returnOrders.length ?? 0;
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


export async function fetchPlacedOrders(userId: string) {
  const placedOrderProductIds = (
    await db.query.orders.findMany({
      where: (users, { eq }) => eq(orders.userId, userId),
    })
  );

  const allProductsSanity = await fetchAllProducts();

  if (placedOrderProductIds) {
    const placedOrders = placedOrderProductIds.map((p) => {
      // Assuming that a match exists in DB
      const { _id, productTitle, productPrice, productImages } =
        allProductsSanity[p.productId];
      return {
        ...p,
        productTitle,
        productPrice,
        productImages,
        _id,
      };
    });
    return placedOrders;
  }
  return [];
}
