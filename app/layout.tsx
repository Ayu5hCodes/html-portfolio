import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayush Portfolio',
  description: 'Created with v0',
  creator: 'Ayush Gade',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
