import { Hero } from '@/components/sections/Hero'
import { FeaturedDestinations } from '@/components/sections/FeaturedDestinations'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Optimized loading components
const LoadingSkeleton = ({ className = "h-96" }: { className?: string }) => (
  <div className={`bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 animate-pulse rounded-lg ${className}`}>
    <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
  </div>
)

// Lazy load heavy components with better loading states
const InteractiveMap = dynamic(() => import('@/components/sections/InteractiveMap').then(mod => ({ default: mod.InteractiveMap })), {
  loading: () => <LoadingSkeleton className="h-96" />,
  ssr: false
})

const HowToPlan = dynamic(() => import('@/components/sections/HowToPlan').then(mod => ({ default: mod.HowToPlan })), {
  loading: () => <LoadingSkeleton className="h-64" />
})

const LocalArtisans = dynamic(() => import('@/components/sections/LocalArtisans').then(mod => ({ default: mod.LocalArtisans })), {
  loading: () => <LoadingSkeleton className="h-80" />
})

const ReviewsTestimonials = dynamic(() => import('@/components/sections/ReviewsTestimonials').then(mod => ({ default: mod.ReviewsTestimonials })), {
  loading: () => <LoadingSkeleton className="h-96" />
})

const LatestStories = dynamic(() => import('@/components/sections/LatestStories').then(mod => ({ default: mod.LatestStories })), {
  loading: () => <LoadingSkeleton className="h-80" />
})

const NewsletterCTA = dynamic(() => import('@/components/sections/NewsletterCTA').then(mod => ({ default: mod.NewsletterCTA })), {
  loading: () => <LoadingSkeleton className="h-32" />
})

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedDestinations />
      
      {/* Wrap heavy components in Suspense for better loading */}
      <Suspense fallback={<LoadingSkeleton className="h-96" />}>
        <InteractiveMap />
      </Suspense>
      
      <Suspense fallback={<LoadingSkeleton className="h-64" />}>
        <HowToPlan />
      </Suspense>
      
      <Suspense fallback={<LoadingSkeleton className="h-80" />}>
        <LocalArtisans />
      </Suspense>
      
      <Suspense fallback={<LoadingSkeleton className="h-96" />}>
        <ReviewsTestimonials />
      </Suspense>
      
      <Suspense fallback={<LoadingSkeleton className="h-80" />}>
        <LatestStories />
      </Suspense>
      
      <Suspense fallback={<LoadingSkeleton className="h-32" />}>
        <NewsletterCTA />
      </Suspense>
    </div>
  )
}
