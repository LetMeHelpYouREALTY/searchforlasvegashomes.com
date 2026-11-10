import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navigation from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";
import WebVitalsMonitor from "@/components/WebVitalsMonitor";
import {
  ADDRESS_LINE,
  AGENT_LICENSE_LINE,
  AGENT_NAME,
  PHONE_DISPLAY,
  REALSCOUT_SCRIPT_URL,
  SITE_NAME,
  SITE_NAME_DOMAIN,
  SITE_URL,
} from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${AGENT_NAME} · Luxury Las Vegas Home Search`,
    template: `%s | ${SITE_NAME_DOMAIN}`,
  },
  description: `Search Las Vegas homes for sale with ${AGENT_NAME}, REALTOR®. Live MLS search across Summerlin, Henderson, and the Las Vegas Valley. Call ${PHONE_DISPLAY}.`,
  keywords: [
    "Las Vegas homes for sale",
    "luxury Las Vegas real estate",
    "Summerlin homes",
    "Henderson homes for sale",
    "Dr. Jan Duffy",
    "Las Vegas REALTOR",
    "home search Las Vegas",
  ],
  authors: [{ name: AGENT_NAME }],
  creator: AGENT_NAME,
  publisher: SITE_NAME_DOMAIN,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      undefined,
  },
  other: {
    "geo.region": "US-NV",
    "geo.placename": "Las Vegas",
    ICBM: "36.1507, -115.3332",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME_DOMAIN,
    title: `${SITE_NAME} | Luxury Las Vegas Homebuyer Search`,
    description: `Find Las Vegas homes with ${AGENT_NAME}. Live search, neighborhood guidance, and private tours.`,
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${AGENT_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${AGENT_NAME}`,
    description: `Luxury Las Vegas home search for buyers. Call ${PHONE_DISPLAY}.`,
    images: ["/api/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0c1219",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="//www.realscout.com" />
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Las Vegas" />
        <meta name="business-address" content={ADDRESS_LINE} />
        <meta name="business-phone" content={PHONE_DISPLAY} />
      </head>
      <body className="antialiased">

        <StructuredData />
        <Navigation />
        {children}
        <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper)] py-8 text-center text-xs text-[var(--color-text-muted)]">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME_DOMAIN} · {AGENT_NAME},{" "}
            REALTOR®
          </p>
          <p className="mt-1">{AGENT_LICENSE_LINE}</p>
          <p className="mt-1">{ADDRESS_LINE}</p>
          <p className="mt-1">
            Call{" "}
            <a href={`tel:+17022221964`} className="underline">
              {PHONE_DISPLAY}
            </a>{" "}
            · Equal Housing Opportunity
          </p>
        </footer>
        <Analytics />
        <SpeedInsights />
        <WebVitalsMonitor />
        <Script
          src={REALSCOUT_SCRIPT_URL}
          type="module"
          strategy="afterInteractive"
        />
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create", "WT-XQHVYQWW");
          window.widgetTracker("send", "pageview");
        `}</Script>
      </body>
    </html>
  );
}
