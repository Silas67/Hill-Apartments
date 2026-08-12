import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as fallback. Meaningfully smaller than JPEG on the
    // slower mobile connections most visitors will be on.
    formats: ["image/avif", "image/webp"],
    // Optimised variants are content-hashed, so they can cache for a year.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  // Strip console.* from production bundles but keep errors and warnings.
  compiler: {
    removeConsole: { exclude: ["error", "warn"] },
  },
};

export default nextConfig;
