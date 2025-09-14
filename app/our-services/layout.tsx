import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Pool Construction & Stonework Services | Golden Boy Stonework Texas',
  description: 'Expert pool builders and stone craftsmen serving Austin, San Antonio, Houston and all Texas cities. Custom pools, luxury stonework, outdoor kitchens, fire pits, BBQ islands, covered patios. Licensed, insured, and trusted by thousands. Free estimates.',
  keywords: 'pool construction Austin, stonework San Antonio, outdoor kitchen Houston, custom pools Texas, BBQ islands Austin TX, fire pits San Antonio TX, covered patios Houston TX, pool builders Austin Texas, stone patios San Antonio Texas, hardscaping Houston Texas, retaining walls Austin TX, pool decks San Antonio TX, luxury pools Houston Texas, outdoor living Texas, pool contractors Austin, stone veneer San Antonio, paver driveways Houston, landscape design Austin TX, backyard remodeling San Antonio, swimming pool installation Houston Texas, pool renovation Austin, outdoor entertainment San Antonio, custom stonework Houston, pool design Austin TX, Texas pool builders, Austin pool company, San Antonio stonework contractors, Houston outdoor living specialists',
  openGraph: {
    title: 'Premium Pool Construction & Stonework Services - Golden Boy Stonework Texas',
    description: 'Transform your backyard with custom pools, elegant stonework, and luxury outdoor living spaces. Expert craftsmanship serving Austin, San Antonio, Houston, and all Texas cities.',
    images: ['/img/1(1).jpg'],
    url: 'https://goldenboytonework.com/our-services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Boy Stonework - Premium Pool & Stone Services in Texas',
    description: 'Custom pools, luxury stonework, outdoor kitchens & fire pits. Serving Austin, San Antonio, Houston & all Texas.',
    images: ['/img/1(1).jpg'],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}