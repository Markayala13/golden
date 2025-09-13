import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import { Toaster } from '@/components/ui/toaster'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-source-sans-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Custom Pools & Pavers in Texas | Texas Pool & Pavers',
  description: 'Top-rated specialists in custom swimming pools, elegant paver driveways, and luxury outdoor living spaces in Texas. Professional pool construction, hardscaping, BBQ islands, fire pits, and covered patios. Get your free quote today!',
  keywords: 'custom pools Texas, paver driveways, pool construction, hardscaping, BBQ islands, fire pits, covered patios, outdoor living, San Antonio pools, Texas pavers',
  authors: [{ name: 'Texas Pool & Pavers' }],
  creator: 'Texas Pool & Pavers',
  publisher: 'Texas Pool & Pavers',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/LOGOS/PAVERS LOGO.PNG',
  },
  openGraph: {
    title: 'Custom Pools & Pavers in Texas | Texas Pool & Pavers',
    description: 'Top-rated specialists in custom swimming pools, elegant paver driveways, and luxury outdoor living spaces in Texas. Professional pool construction, hardscaping, BBQ islands, fire pits, and covered patios. Get your free quote today!',
    url: 'https://texaspoolandpavers.com',
    siteName: 'Texas Pool & Pavers',
    images: [
      {
        url: '/LOGOS/PAVERS LOGO.PNG',
        width: 1200,
        height: 630,
        alt: 'Texas Pool & Pavers Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Pools & Pavers in Texas | Texas Pool & Pavers',
    description: 'Top-rated specialists in custom swimming pools, elegant paver driveways, and luxury outdoor living spaces in Texas.',
    images: ['/LOGOS/PAVERS LOGO.PNG'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
