import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeraOps - Database Optimization & Cloud Migration',
  description: 'Transform your data infrastructure with TeraOps. Expert database optimization, cloud migration, and performance engineering services.',
  keywords: 'database optimization, cloud migration, performance engineering, DevOps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}