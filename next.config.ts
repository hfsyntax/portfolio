import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
    cacheLife: {
      infinite: {
        stale: Infinity,
        revalidate: 0,
        expire: Infinity,
      },
    },
  },
}

export default nextConfig
