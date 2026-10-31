import type { Metadata, Viewport } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navigation from '@/components/Navigation';
import StructuredData from '@/components/StructuredData';
import WebVitalsMonitor from '@/components/WebVitalsMonitor';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SearchForLasVegasHomes.com | Dr. Jan Duffy - Premier Real Estate Market Researcher",
  description: "Las Vegas's only research-driven REALTOR® combining Ph.D. research methodology with proprietary market analysis. Get data-driven insights for buying, selling, and investing in Las Vegas real estate.",
  keywords: [
    "Las Vegas real estate",
    "real estate market research",
    "Dr. Jan Duffy",
    "property valuation",
    "market analysis",
    "investment calculator",
    "neighborhood analysis",
    "Las Vegas homes",
    "real estate data",
    "market forecasting"
  ],
  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Dr. Jan Duffy",
  publisher: "SearchForLasVegasHomes.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://searchforlasvegashomes.com'),
  alternates: {
    canonical: '/',
  },
  // Google's August 2025 requirements
  other: {
    'google-site-verification': 'your-verification-code',
    'property-listing-schema': 'enabled',
    'inp-optimized': 'true',
    'core-web-vitals': 'compliant',
    'mobile-first': 'true',
    'avif-support': 'enabled',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://searchforlasvegashomes.com',
    siteName: 'SearchForLasVegasHomes.com',
    title: 'Dr. Jan Duffy - Las Vegas Premier Real Estate Market Researcher',
    description: 'Data-driven real estate insights and market analysis from Las Vegas\'s only research-driven REALTOR®',
    images: [
      {
        url: '/api/og-image',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Las Vegas Real Estate Market Researcher',
        type: 'image/avif', // Google's preferred format for 2025
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jan Duffy - Las Vegas Premier Real Estate Market Researcher',
    description: 'Data-driven real estate insights and market analysis from Las Vegas\'s only research-driven REALTOR®',
    creator: '@DrJanDuffy',
    images: ['/api/og-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

// Google's August 2025 viewport requirements
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  // New for INP optimization
  interactiveWidget: 'resizes-content',
  // Mobile-first optimization
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google's 2025 Resource Hints for Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//vercel.live" />
        
        {/* Preload critical resources for INP optimization */}
        <link rel="preload" href="/api/og-image" as="image" type="image/avif" />
        
        {/* Core Web Vitals optimization */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Google's real estate specific meta tags */}
        <meta name="property-listing-schema" content="enabled" />
                      <meta name="real-estate-market" content="Las Vegas, NV" />
              <meta name="property-type" content="residential, commercial, investment" />
              <meta name="business-address" content="1980 Festival Plaza Drive, Suite 300, Las Vegas, NV 89135" />
              <meta name="business-location" content="Downtown Summerlin" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <Navigation />
        {children}
        <footer className="border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SearchForLasVegasHomes.com · Dr. Jan Duffy, REALTOR®</p>
          <p className="mt-1">Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC</p>
        </footer>
        <Analytics />
        <SpeedInsights />
        <WebVitalsMonitor />
        {/* Widget Tracker */}
        {process.env.VERCEL_ENV === "production" && (
          <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create", "WT-XQHVYQWW");
          window.widgetTracker("send", "pageview");
          `}</Script>
        )}
      </body>
    </html>
  );
}
