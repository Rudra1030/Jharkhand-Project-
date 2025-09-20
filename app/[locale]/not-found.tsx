import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-neutral-300 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-neutral-500">
            <Link href="/destinations" className="hover:text-neutral-700 transition-colors">
              Explore Destinations
            </Link>
            {' • '}
            <Link href="/artisans" className="hover:text-neutral-700 transition-colors">
              Meet Artisans
            </Link>
            {' • '}
            <Link href="/contact" className="hover:text-neutral-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
