import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../globals.css'
import { Providers } from '../providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'

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

interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ErrorBoundary>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                }}
              />
            </ErrorBoundary>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
