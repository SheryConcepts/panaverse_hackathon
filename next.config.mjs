// import { config } from "dotenv"

// load .env variables into process.env
// config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
