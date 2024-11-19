import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
