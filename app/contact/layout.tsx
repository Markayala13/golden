import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote | Texas Pool & Pavers',
  description: 'Ready to start your project? Contact Texas Pool & Pavers today for a free, no-obligation quote on our pool and hardscaping services. Call us or fill out our form!',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}