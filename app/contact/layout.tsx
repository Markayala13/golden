import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Golden Boy Stonework | Free Pool & Stonework Estimates Austin, San Antonio, Houston',
  description: 'Ready to transform your backyard? Contact Golden Boy Stonework today for a free consultation and estimate on custom pool construction, luxury stonework, outdoor kitchens, and fire pits. Serving Austin, San Antonio, Houston, and all Texas cities. Call (469) 478-6051 or (214) 478-6051. Licensed and insured.',
  keywords: 'contact pool builders Austin, get pool quote San Antonio, free pool estimate Houston, pool construction consultation Texas, stonework estimate Austin TX, outdoor kitchen quote San Antonio TX, fire pit consultation Houston TX, Golden Boy Stonework contact, pool builders phone number Austin, stonework contractors San Antonio, pool construction quote Houston, free backyard consultation Texas, pool design consultation Austin, stonework estimate San Antonio Texas, outdoor living quote Houston Texas',
  openGraph: {
    title: 'Contact Golden Boy Stonework - Free Pool & Stonework Estimates Texas',
    description: 'Transform your backyard with Golden Boy Stonework. Free consultations for custom pools, stonework, outdoor kitchens, and fire pits. Serving all Texas cities.',
    images: ['/logos/logobg.png'],
    url: 'https://goldenboytonework.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Golden Boy Stonework - Free Texas Pool & Stone Estimates',
    description: 'Free consultations for custom pools, stonework & outdoor living. Serving Austin, San Antonio, Houston & all Texas.',
    images: ['/logos/logobg.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}