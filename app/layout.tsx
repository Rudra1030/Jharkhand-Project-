import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: 'Jharkhand Tourism - Discover Nature, Culture & Heritage',
  description: 'Explore Jharkhand\'s pristine natural beauty, rich tribal culture, and authentic experiences. Plan your eco-tourism journey with local artisans and sustainable homestays.',
  keywords: 'Jharkhand tourism, eco-tourism, tribal culture, natural sites, homestays, local artisans, sustainable tourism',
  authors: [{ name: 'Jharkhand Tourism Board' }],
  openGraph: {
    title: 'Jharkhand Tourism - Discover Nature, Culture & Heritage',
    description: 'Explore Jharkhand\'s pristine natural beauty, rich tribal culture, and authentic experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jharkhand Tourism - Discover Nature, Culture & Heritage',
    description: 'Explore Jharkhand\'s pristine natural beauty, rich tribal culture, and authentic experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
