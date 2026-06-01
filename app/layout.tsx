import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Frame House LLC | Photo Booth Rental — Great Lakes Bay Region',
  description:
    'Premium open-air photo booth rental for weddings, corporate events, and celebrations across the Great Lakes Bay Region, Michigan.',
  openGraph: {
    title: 'The Frame House LLC',
    description: 'Premium photo booth rental — Great Lakes Bay Region, Michigan',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
