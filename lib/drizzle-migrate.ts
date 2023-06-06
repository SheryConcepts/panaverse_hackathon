import { db } from "@/db/db"
import { config } from "dotenv"
import { migrate } from "drizzle-orm/vercel-postgres/migrator"

config()

async function run() {
  try {
    await migrate(db, { migrationsFolder: "migrations" })
  } catch (e) {
    console.log("Error during migration", e)
    process.exitCode = 1
  }
}

run()
