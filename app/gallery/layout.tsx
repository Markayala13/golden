import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pool Construction & Stonework Gallery | Golden Boy Stonework Texas Projects',
  description: 'Explore our stunning portfolio of completed pool construction and stonework projects across Austin, San Antonio, Houston, and Texas. Custom pools, elegant stone patios, outdoor kitchens, fire pits, and luxury outdoor living spaces. See why homeowners trust Golden Boy Stonework for their dream backyards.',
  keywords: 'pool construction gallery Austin, stonework portfolio San Antonio, custom pool photos Houston, outdoor living gallery Texas, completed pool projects Austin TX, stone patio gallery San Antonio TX, BBQ island photos Houston TX, fire pit gallery Texas, pool construction before after Austin, luxury pool gallery San Antonio, outdoor kitchen photos Houston, backyard transformation Texas, pool design gallery Austin TX, stonework photos San Antonio Texas, hardscaping gallery Houston Texas',
  openGraph: {
    title: 'Pool Construction & Stonework Gallery - Golden Boy Stonework Texas',
    description: 'Stunning portfolio of custom pools, elegant stonework, and luxury outdoor living spaces across Texas. See our completed projects and get inspired.',
    images: ['/img/done/1(26).jpg'],
    url: 'https://goldenboytonework.com/gallery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Boy Stonework Gallery - Texas Pool & Stone Projects',
    description: 'Browse our portfolio of stunning pools, stonework & outdoor living spaces across Texas.',
    images: ['/img/done/1(26).jpg'],
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}