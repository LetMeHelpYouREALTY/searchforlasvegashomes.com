import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Google's August 2025 requirements
  experimental: {
    // Enable latest optimizations
    optimizePackageImports: ['@heroicons/react', 'framer-motion'],
    // INP optimization
    optimizeCss: true,
  },
  
  images: {
    // Google's preferred format order for 2025
    formats: ['image/avif', 'image/webp'],
    // Minimum cache TTL for Core Web Vitals
    minimumCacheTTL: 31536000,
    // Enable AVIF support
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    // Real estate specific optimization
    deviceSizes: [320, 640, 768, 1024, 1366, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // INP optimization
    unoptimized: false,
  },
  
  // Performance optimizations for Core Web Vitals
  compress: true,
  poweredByHeader: false,
  
  // Headers for Core Web Vitals optimization
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Core Web Vitals optimization headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      // Image optimization headers
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Accept-Encoding',
            value: 'br, gzip, deflate'
          }
        ],
      }
    ];
  },
  
  // Webpack optimizations for INP
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          // Separate image chunks for better caching
          images: {
            test: /\.(png|jpe?g|gif|svg|webp|avif)$/,
            name: 'images',
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;
