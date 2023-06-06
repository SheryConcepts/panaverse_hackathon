import { cache } from "react"
import { createClient, groq } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  studioUrl: "/studio",
  useCdn,
})

const sanityCachedFetch = cache(client.fetch.bind(client))

export async function groqFetch(query: string) {
  return await sanityCachedFetch(groq`${query}`)
}

// Now use it just like before, fully deduped, cached and optimized by react
