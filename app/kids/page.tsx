import { fetchSanityProducts } from "@/lib/utils"
import { groqFetch } from "@/sanity/lib/client"
import JsonReactFormatter from "react-json-formatter"

export default async function Page() {
  const result = await fetchSanityProducts();
  const data: string = JSON.stringify(result)

  const jsonStyle = {
    propertyStyle: { color: "red" },
    stringStyle: { color: "green" },
    numberStyle: { color: "darkorange" },
  }
  // console.log(data)
  return <JsonReactFormatter json={data} tabWith={6} jsonStyle={jsonStyle} />
}
