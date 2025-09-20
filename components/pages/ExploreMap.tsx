'use client'

import { useState, useEffect } from 'react'
import { MapPin, Navigation, Layers, Filter, Search, ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const mapDestinations = [
  {
    id: 1,
    name: 'Netarhat',
    type: 'Hill Station',
    coordinates: { lat: 23.5, lng: 84.2 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    distance: '120 km from Ranchi',
    description: 'Queen of Chotanagpur with breathtaking sunrise views',
    category: 'natural',
    isPopular: true
  },
  {
    id: 2,
    name: 'Betalghat Waterfall',
    type: 'Waterfall',
    coordinates: { lat: 24.1, lng: 85.3 },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    distance: '85 km from Ranchi',
    description: 'Magnificent waterfall cascading through rocky terrain',
    category: 'natural',
    isPopular: false
  },
  {
    id: 3,
    name: 'Hazaribagh National Park',
    type: 'Wildlife Sanctuary',
    coordinates: { lat: 23.9, lng: 85.4 },
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.7,
    distance: '95 km from Ranchi',
    description: 'Home to diverse wildlife including tigers and leopards',
    category: 'wildlife',
    isPopular: true
  },
  {
    id: 4,
    name: 'Jagannath Temple',
    type: 'Temple',
    coordinates: { lat: 23.3, lng: 85.3 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.5,
    distance: 'In Ranchi',
    description: 'Ancient temple with beautiful architecture',
    category: 'cultural',
    isPopular: false
  },
  {
    id: 5,
    name: 'Dassam Falls',
    type: 'Waterfall',
    coordinates: { lat: 23.4, lng: 85.5 },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.4,
    distance: '40 km from Ranchi',
    description: 'Beautiful waterfall perfect for picnics',
    category: 'natural',
    isPopular: false
  },
  {
    id: 6,
    name: 'Palamau Tiger Reserve',
    type: 'Wildlife Reserve',
    coordinates: { lat: 24.0, lng: 84.0 },
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    distance: '180 km from Ranchi',
    description: 'One of the oldest tiger reserves in India',
    category: 'wildlife',
    isPopular: true
  }
]

const mapCategories = [
  { id: 'all', name: 'All', count: 45, color: 'bg-primary-500' },
  { id: 'natural', name: 'Natural', count: 18, color: 'bg-green-500' },
  { id: 'cultural', name: 'Cultural', count: 12, color: 'bg-orange-500' },
  { id: 'wildlife', name: 'Wildlife', count: 8, color: 'bg-yellow-500' },
  { id: 'adventure', name: 'Adventure', count: 7, color: 'bg-red-500' }
]

export function ExploreMap() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDestination, setSelectedDestination] = useState<typeof mapDestinations[0] | null>(null)
  const [mapView, setMapView] = useState<'satellite' | 'terrain'>('terrain')

  const filteredDestinations = selectedCategory === 'all' 
    ? mapDestinations 
    : mapDestinations.filter(dest => dest.category === selectedCategory)

  return (
    <div className="card h-[600px] relative overflow-hidden">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-20 w-20 text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-neutral-700 mb-2">Interactive Map</h3>
          <p className="text-neutral-500 mb-4">Map integration coming soon</p>
          <div className="text-sm text-neutral-400">
            {filteredDestinations.length} locations found
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant={mapView === 'terrain' ? 'default' : 'outline'}
              onClick={() => setMapView('terrain')}
            >
              Terrain
            </Button>
            <Button
              size="sm"
              variant={mapView === 'satellite' ? 'default' : 'outline'}
              onClick={() => setMapView('satellite')}
            >
              Satellite
            </Button>
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-lg">
          <div className="flex flex-col space-y-1">
            <Button size="sm" variant="outline" className="p-2">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" className="p-2">
              <ZoomOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex flex-wrap gap-2">
            {mapCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Destination Markers (Simulated) */}
      <div className="absolute inset-0 pointer-events-none">
        {filteredDestinations.map((destination, index) => (
          <div
            key={destination.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${20 + (index * 15) % 60}%`,
              top: `${30 + (index * 20) % 40}%`,
            }}
          >
            <button
              onClick={() => setSelectedDestination(destination)}
              className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 ${
                destination.isPopular 
                  ? 'bg-secondary-500' 
                  : 'bg-primary-500'
              }`}
            >
              <MapPin className="h-4 w-4 text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Selected Destination Popup */}
      {selectedDestination && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white rounded-lg shadow-xl p-4 max-w-sm w-80">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-lg text-neutral-900">
                {selectedDestination.name}
              </h3>
              <button
                onClick={() => setSelectedDestination(null)}
                className="text-neutral-400 hover:text-neutral-600"
              >
                ×
              </button>
            </div>
            
            <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-sm text-neutral-600 mb-3">
              {selectedDestination.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-neutral-500 mb-3">
              <div className="flex items-center space-x-1">
                <span>★</span>
                <span>{selectedDestination.rating}</span>
              </div>
              <span>{selectedDestination.distance}</span>
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1">
                View Details
              </Button>
              <Button size="sm" variant="outline">
                <Navigation className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
