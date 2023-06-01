import { groqFetch } from "@/sanity/lib/client"
import { clsx, type ClassValue } from "clsx"
import JsonFormatter from "react-json-formatter"
import { twMerge } from "tailwind-merge"

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
  });
  
}
