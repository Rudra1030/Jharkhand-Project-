import { ExploreMap } from '@/components/pages/ExploreMap'
import { SearchFilters } from '@/components/pages/SearchFilters'
import { DestinationsList } from '@/components/pages/DestinationsList'

export default function ExplorePage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="container-custom py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Explore <span className="text-gradient">Jharkhand</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover the hidden gems and popular destinations across Jharkhand. 
            Use our interactive map and filters to find your perfect adventure.
          </p>
        </div>

        {/* Search and Filters */}
        <SearchFilters />

        {/* Map and Destinations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <ExploreMap />
          </div>
          <div className="lg:col-span-1">
            <DestinationsList />
          </div>
        </div>
      </div>
    </div>
  )
}
