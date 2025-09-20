import { ArtisansGrid } from '@/components/pages/ArtisansGrid'
import { ArtisansFilters } from '@/components/pages/ArtisansFilters'

export default function ArtisansPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="container-custom py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Meet Our <span className="text-gradient">Local Artisans</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover the talented craftspeople who keep Jharkhand's traditional arts alive. 
            Connect directly with artisans, learn their techniques, and support local communities.
          </p>
        </div>

        {/* Filters */}
        <ArtisansFilters />

        {/* Artisans Grid */}
        <ArtisansGrid />
      </div>
    </div>
  )
}
