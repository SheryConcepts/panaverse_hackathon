import type { Config } from "drizzle-kit"

export default {
  schema: "./db/schema.ts",
  out: "./migrations",
  connectionString: process.env.POSTGRES_URL,
} satisfies Config
