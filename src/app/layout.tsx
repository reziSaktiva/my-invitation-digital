import type { Metadata } from "next";
import { Luckiest_Guy, } from "next/font/google";
import "./globals.css";


const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Rezi & Pracilia Wedding",
  description: "You're invited! Join Rezi & Pracilia on August 8, 2025, as they celebrate the beginning of their forever. Discover their love story and find all the details for their special day.",
  openGraph: {
    images: [
      {
        url: 'https://ik.imagekit.io/0yyvfumv6/gallery-8.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rezi & Pracilia Pre-wedding Photo',
      },
    ],
    locale: 'en_US',
    alternateLocale: 'id_ID',
    type: 'website',
    url: process.env.SITE_URL,
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
  twitter: {
    card: 'summary_large_image',
    title: 'The Wedding of Rezi & Pracilia',
    description:
      "You're invited! Join Rezi & Pracilia as they celebrate the beginning of their forever.",
    images: ['https://ik.imagekit.io/0yyvfumv6/gallery-8.jpeg'],
  },
  icons: {
    icon: '/icons/rp-logo.svg',
    shortcut: '/icons/rp-logo.svg',
    apple: '/icons/rp-logo.svg',
  },
  alternates: {
    canonical: process.env.SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${luckiestGuy.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
