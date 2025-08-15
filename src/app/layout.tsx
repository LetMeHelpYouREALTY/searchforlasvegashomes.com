import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Jan Duffy - Las Vegas Real Estate Market Research & Analysis",
  description: "Las Vegas's premier real estate market researcher and data analyst. Expert in market trends, property valuation, and investment analysis. Where data meets real estate.",
  keywords: "Las Vegas real estate, market research, property analysis, Dr. Jan Duffy, real estate data, market trends, investment analysis, Nevada properties",
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
  openGraph: {
    title: "Dr. Jan Duffy - Las Vegas Real Estate Market Research & Analysis",
    description: "Las Vegas's premier real estate market researcher and data analyst. Expert in market trends, property valuation, and investment analysis.",
    url: 'https://searchforlasvegashomes.com',
    siteName: 'SearchForLasVegasHomes.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Real Estate Market Research Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Jan Duffy - Las Vegas Real Estate Market Research & Analysis",
    description: "Las Vegas's premier real estate market researcher and data analyst. Expert in market trends, property valuation, and investment analysis.",
    images: ['/og-image.jpg'],
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
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
