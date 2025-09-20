'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Navigation, Filter, Layers, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const mapCategories = [
  { id: 'all', name: 'All', count: 45, color: 'bg-primary-500' },
  { id: 'natural', name: 'Natural Sites', count: 18, color: 'bg-green-500' },
  { id: 'cultural', name: 'Cultural Heritage', count: 12, color: 'bg-orange-500' },
  { id: 'wildlife', name: 'Wildlife', count: 8, color: 'bg-yellow-500' },
  { id: 'adventure', name: 'Adventure', count: 7, color: 'bg-red-500' }
]

const featuredLocations = [
  {
    id: 1,
    name: 'Netarhat',
    type: 'Hill Station',
    category: 'natural',
    coordinates: { lat: 23.5, lng: 84.2 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    distance: '120 km from Ranchi',
    description: 'Queen of Chotanagpur with breathtaking sunrise views'
  },
  {
    id: 2,
    name: 'Betalghat Waterfall',
    type: 'Waterfall',
    category: 'natural',
    coordinates: { lat: 24.1, lng: 85.3 },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    distance: '85 km from Ranchi',
    description: 'Magnificent waterfall cascading through rocky terrain'
  },
  {
    id: 3,
    name: 'Hazaribagh National Park',
    type: 'Wildlife Sanctuary',
    category: 'wildlife',
    coordinates: { lat: 23.9, lng: 85.4 },
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.7,
    distance: '95 km from Ranchi',
    description: 'Home to diverse wildlife including tigers and leopards'
  },
  {
    id: 4,
    name: 'Jagannath Temple',
    type: 'Temple',
    category: 'cultural',
    coordinates: { lat: 23.3, lng: 85.3 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.5,
    distance: 'In Ranchi',
    description: 'Ancient temple with beautiful architecture and spiritual significance'
  }
]

export function InteractiveMap() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const filteredLocations = selectedCategory === 'all' 
    ? featuredLocations 
    : featuredLocations.filter(location => location.category === selectedCategory)

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Explore on the <span className="text-gradient">Map</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover Jharkhand's treasures through our interactive map. 
            Find destinations, plan routes, and explore the rich diversity of our state.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Controls */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {mapCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary-50 text-primary-700 border border-primary-200'
                          : 'hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm text-neutral-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
                <Button className="w-full" variant="outline">
                  <Layers className="mr-2 h-4 w-4" />
                  Satellite View
                </Button>
                <Button className="w-full" variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Map and Locations */}
          <div className="lg:col-span-2">
            {/* Map Placeholder */}
            <div className="card h-96 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-700 mb-2">Interactive Map</h3>
                  <p className="text-neutral-500">Map integration coming soon</p>
                  <p className="text-sm text-neutral-400 mt-2">
                    {filteredLocations.length} locations found
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Locations */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Featured Locations ({filteredLocations.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLocations.map((location) => (
                  <Link
                    key={location.id}
                    href={`/destinations/${location.id}`}
                    className="card-hover group"
                  >
                    <div className="flex">
                      <div className="w-24 h-24 relative flex-shrink-0">
                        <img
                          src={location.image}
                          alt={location.name}
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                            {location.name}
                          </h4>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-neutral-600">{location.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-600 mb-2">{location.type}</p>
                        <p className="text-xs text-neutral-500 mb-2">{location.distance}</p>
                        <p className="text-xs text-neutral-600 line-clamp-2">
                          {location.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/explore">
            <Button size="lg" className="group">
              Explore Full Map
              <MapPin className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
