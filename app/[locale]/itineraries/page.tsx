import { ItineraryBuilder } from '@/components/pages/ItineraryBuilder'
import { SavedItineraries } from '@/components/pages/SavedItineraries'

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="container-custom py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Plan Your <span className="text-gradient">Perfect Trip</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Create personalized itineraries for your Jharkhand adventure. 
            Build, save, and share your dream trip with our easy-to-use trip planner.
          </p>
        </div>

        {/* Itinerary Builder */}
        <ItineraryBuilder />

        {/* Saved Itineraries */}
        <SavedItineraries />
      </div>
    </div>
  )
}
