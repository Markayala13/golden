import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import { Toaster } from '@/components/ui/toaster'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'

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
  title: 'Premium Pool Construction & Stone Work in Texas | Golden Boy Stonework - Austin, San Antonio, Houston',
  description: 'Texas\'s premier custom pool builders and stone craftsmen. Expert pool construction, luxury stonework, outdoor kitchens, fire pits, and elegant patios serving Austin, San Antonio, Houston, and all of Texas. Licensed, insured, and trusted by thousands. Free estimates available.',
  keywords: 'custom pools Austin TX, pool builders San Antonio, luxury stonework Houston, outdoor living spaces Texas, pool construction Austin, stone patios San Antonio, BBQ islands Houston, fire pits Austin TX, pool contractors Texas, hardscaping San Antonio, outdoor kitchens Austin, swimming pool installation Texas, stone veneer Houston, paver driveways Austin, pool decks San Antonio, landscape design Texas, backyard remodeling Austin, luxury pools Houston, stone fireplaces San Antonio, pool renovation Texas, outdoor entertainment Austin, custom stonework Houston, pool design San Antonio, Texas pool builders, Austin pool company, San Antonio stonework, Houston outdoor living, Round Rock pools, Pflugerville stonework, Cedar Park pool builders, Georgetown pools, Kyle TX pools, Buda stonework, Dripping Springs pools, Lakeway pool construction, Westlake pools, Bee Cave stonework, Leander pool builders, Liberty Hill pools, Marble Falls stonework, Bastrop pools, Elgin pool construction, Manor pools, Del Valle stonework, Sunset Valley pools, Rollingwood pool builders, West Lake Hills pools, Barton Hills stonework, Zilker pools, South Austin pool construction, North Austin pools, East Austin stonework, pool builders near me Austin, stonework contractors Austin, luxury pools Austin TX, custom pools Round Rock, stone patios Cedar Park, outdoor kitchens Georgetown, fire pits Pflugerville, BBQ islands Kyle TX, pool decks Buda, swimming pool Dripping Springs, hardscaping Lakeway, landscape design Westlake, backyard renovation Bee Cave, outdoor living Leander, stone fireplaces Liberty Hill, pool installation Marble Falls, paver driveways Bastrop, stone veneer Elgin, outdoor entertainment Manor, pool renovation Del Valle, luxury stonework Sunset Valley, custom pools Rollingwood, premium pools West Lake Hills, stone craftsmanship Barton Hills, pool construction Zilker, outdoor spaces South Austin, swimming pools North Austin, stonework East Austin',
  authors: [{ name: 'Golden Boy Stonework' }],
  creator: 'Golden Boy Stonework',
  publisher: 'Golden Boy Stonework',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  icons: {
    icon: '/logos/favicon.png',
    shortcut: '/logos/favicon.png',
    apple: '/logos/logobg.png',
  },
  openGraph: {
    title: 'Golden Boy Stonework - Premier Pool Builders & Stone Craftsmen in Texas',
    description: 'Transform your backyard into a luxury oasis. Custom pools, elegant stonework, outdoor kitchens, and fire pits. Serving Austin, San Antonio, Houston, and all Texas cities. Licensed, insured, and trusted by thousands of homeowners.',
    url: 'https://goldenboyonework.com',
    siteName: 'Golden Boy Stonework',
    images: [
      {
        url: '/logos/logobg.png',
        width: 1200,
        height: 630,
        alt: 'Golden Boy Stonework - Premium Pool Construction & Stone Craftsmanship',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Boy Stonework - Texas Premier Pool Builders & Stone Experts',
    description: 'Custom pools, luxury stonework, outdoor kitchens & fire pits. Serving Austin, San Antonio, Houston & all Texas. Licensed & insured. Free estimates.',
    images: ['/logos/logobg.png'],
    creator: '@GoldenBoyStonework',
    site: '@GoldenBoyStonework',
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
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
