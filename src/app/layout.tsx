import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getOrganizationSchema, getWebsiteSchema, SchemaScript } from "@/lib/schema";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Thryvo | Student-Centric Platform for Campus Placements & Skill Development',
  description: 'Thryvo is a student-centric platform focused on campus placements, skill development, and global higher-education opportunities.',
  keywords: 'thryvo, campus placements, skill development, higher education, students, colleges, employers',
  authors: [{ name: 'Thryvo Team' }],
  robots: 'index, follow',
  metadataBase: new URL('https://www.thryvo.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thryvo.com',
    title: 'Thryvo | Student-Centric Platform for Campus Placements & Skill Development',
    description: 'Thryvo is a student-centric platform focused on campus placements, skill development, and global higher-education opportunities.',
    siteName: 'Thryvo',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thryvo - Student-Centric Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thryvo | Student-Centric Platform',
    description: 'Student-centric platform for career development and opportunities',
    images: ['/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Thryvo | Student-Centric Platform for Campus Placements & Skill Development" />
        <meta property="og:description" content="Thryvo is a student-centric platform focused on campus placements, skill development, and global higher-education opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thryvo.com/" />
        <meta property="og:image" content="/file.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <SchemaScript schema={getOrganizationSchema()} />
        <SchemaScript schema={getWebsiteSchema()} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
