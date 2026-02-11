import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { DM_Sans as V0_Font_DM_Sans, Space_Mono as V0_Font_Space_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _dmSans = V0_Font_DM_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900","1000"] })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  title: 'Free QR Code Generator - No Watermark | Create Custom QR Codes',
  description: 'Generate free QR codes without watermarks. Customize colors, size, and error correction. Download or copy your QR codes instantly. Perfect for URLs, websites, and links.',
  keywords: [
    'QR code generator',
    'free QR code',
    'no watermark',
    'QR code maker',
    'custom QR code',
    'generate QR code',
    'QR code online',
    'QR code creator',
    'URL to QR code',
    'watermark free QR'
  ],
  authors: [{ name: 'QR Code Generator' }],
  creator: 'QR Code Generator',
  publisher: 'QR Code Generator',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://qr-code-generator.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Free QR Code Generator - No Watermark',
    description: 'Generate free QR codes without watermarks. Customize colors, size, and error correction. Download or copy your QR codes instantly.',
    url: '/',
    siteName: 'QR Code Generator',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'QR Code Generator - Free and No Watermark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free QR Code Generator - No Watermark',
    description: 'Generate free QR codes without watermarks. Customize colors, size, and error correction.',
    images: ['/icon.svg'],
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
