import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Services - From Excavation to Finishing | Texas Pool & Pavers',
  description: 'Explore our full range of services: custom pools, paving, hardscaping, BBQ islands, fire pits, full construction, and more. Quality craftsmanship for your Texas home.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}