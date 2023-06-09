import { groqFetch } from "@/sanity/lib/client"
import { clsx, type ClassValue } from "clsx"
import JsonFormatter from "react-json-formatter"
import { twMerge } from "tailwind-merge"
import {db} from "@/db/db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchSanityProducts() {
  return await groqFetch(
    `*[_type == "product"] {
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
}`
  )
}

export function ReactJsonFormatter({ data }: { data: string }) {
  const jsonStyle = {
    propertyStyle: { color: "red" },
    stringStyle: { color: "green" },
    numberStyle: { color: "darkorange" },
  }

  return JsonFormatter({
    json: data,
    tabWith: 8,
    jsonStyle,
  })
}


export async function fetchUserOrders(userId: string) {
  const data = await db.query.users.findFirst({
    with: {
      orders: true,
    },
    where: (users, { eq }) => eq(users.id, userId),
  });
  return data?.orders.length ?? 0;
}
