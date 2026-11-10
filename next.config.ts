import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://va.vercel-scripts.com https://vercel.live https://widgetbe.com",
  "connect-src 'self' https://www.realscout.com https://em.realscout.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://vercel.live https://widgetbe.com",
  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "frame-src 'self' https://www.google.com https://maps.google.com https://www.realscout.com https://em.realscout.com https://vercel.live",
  "worker-src 'self' blob:",
].join("; ");

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@heroicons/react", "framer-motion"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    deviceSizes: [320, 640, 768, 1024, 1366, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "em.realscout.com" },
      { protocol: "https", hostname: "www.realscout.com" },
    ],
  },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
