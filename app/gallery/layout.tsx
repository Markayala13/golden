import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Gallery | Texas Pool & Pavers',
  description: 'Browse our gallery of completed projects. See our quality work in custom pools, pavers, patios, and outdoor living spaces across Texas.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}