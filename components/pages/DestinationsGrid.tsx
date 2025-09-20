'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Heart, ArrowRight, Filter } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const destinations = [
  {
    id: 1,
    name: 'Netarhat',
    category: 'Hill Station',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 124,
    duration: '2-3 days',
    groupSize: '2-6 people',
    price: '₹8,500',
    distance: '120 km from Ranchi',
    description: 'Known as the "Queen of Chotanagpur", Netarhat offers breathtaking sunrise views and cool climate.',
    highlights: ['Sunrise Point', 'Mughal Garden', 'Pine Forest', 'Local Tribes'],
    isPopular: true,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Betalghat Waterfall',
    category: 'Waterfall',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 89,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹3,200',
    distance: '85 km from Ranchi',
    description: 'A magnificent waterfall cascading through rocky terrain, perfect for nature lovers.',
    highlights: ['Waterfall View', 'Rock Climbing', 'Nature Photography', 'Picnic Spot'],
    isPopular: false,
    isFavorite: true
  },
  {
    id: 3,
    name: 'Hazaribagh National Park',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 156,
    duration: '2-4 days',
    groupSize: '2-8 people',
    price: '₹12,000',
    distance: '95 km from Ranchi',
    description: 'Home to diverse wildlife including tigers, leopards, and over 200 bird species.',
    highlights: ['Safari Rides', 'Bird Watching', 'Nature Trails', 'Wildlife Photography'],
    isPopular: true,
    isFavorite: false
  },
  {
    id: 4,
    name: 'Jagannath Temple',
    category: 'Temple',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 203,
    duration: 'Half day',
    groupSize: '1-10 people',
    price: 'Free',
    distance: 'In Ranchi',
    description: 'Ancient temple with beautiful architecture and spiritual significance.',
    highlights: ['Temple Architecture', 'Spiritual Experience', 'Local Markets', 'Cultural Heritage'],
    isPopular: false,
    isFavorite: false
  },
  {
    id: 5,
    name: 'Dassam Falls',
    category: 'Waterfall',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 78,
    duration: 'Half day',
    groupSize: '1-6 people',
    price: '₹1,500',
    distance: '40 km from Ranchi',
    description: 'Beautiful waterfall perfect for picnics and family outings.',
    highlights: ['Family Picnic', 'Water Activities', 'Scenic Views', 'Easy Access'],
    isPopular: false,
    isFavorite: false
  },
  {
    id: 6,
    name: 'Palamau Tiger Reserve',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 92,
    duration: '3-5 days',
    groupSize: '2-6 people',
    price: '₹15,000',
    distance: '180 km from Ranchi',
    description: 'One of the oldest tiger reserves in India with rich biodiversity.',
    highlights: ['Tiger Spotting', 'Jungle Safari', 'Bird Watching', 'Nature Photography'],
    isPopular: true,
    isFavorite: false
  },
  {
    id: 7,
    name: 'Patratu Valley',
    category: 'Valley',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviews: 67,
    duration: '1-2 days',
    groupSize: '2-8 people',
    price: '₹4,500',
    distance: '60 km from Ranchi',
    description: 'Scenic valley with lush greenery and peaceful atmosphere.',
    highlights: ['Valley Views', 'Nature Walks', 'Photography', 'Peaceful Retreat'],
    isPopular: false,
    isFavorite: false
  },
  {
    id: 8,
    name: 'Deoghar',
    category: 'Temple City',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 189,
    duration: '2-3 days',
    groupSize: '1-15 people',
    price: '₹6,000',
    distance: '250 km from Ranchi',
    description: 'Famous pilgrimage destination with ancient temples and spiritual significance.',
    highlights: ['Baba Baidyanath Temple', 'Spiritual Journey', 'Temple Architecture', 'Religious Tourism'],
    isPopular: true,
    isFavorite: false
  }
]

export function DestinationsGrid() {
  const [favorites, setFavorites] = useState<number[]>(
    destinations.filter(d => d.isFavorite).map(d => d.id)
  )
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const sortedDestinations = [...destinations].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'price':
        return a.price === 'Free' ? -1 : b.price === 'Free' ? 1 : 
               parseInt(a.price.replace(/[₹,]/g, '')) - parseInt(b.price.replace(/[₹,]/g, ''))
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return b.isPopular ? 1 : -1
    }
  })

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-neutral-600">
            {destinations.length} destinations found
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <div className="w-4 h-4 flex flex-col space-y-0.5">
                <div className="w-full h-1 bg-current rounded-sm" />
                <div className="w-full h-1 bg-current rounded-sm" />
                <div className="w-full h-1 bg-current rounded-sm" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price">Price: Low to High</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>

      {/* Destinations Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          : 'space-y-6'
      }>
        {sortedDestinations.map((destination, index) => (
          <div 
            key={destination.id}
            className={`card-hover group animate-fade-in ${
              viewMode === 'list' ? 'flex' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${
              viewMode === 'grid' 
                ? 'h-64' 
                : 'w-48 h-32 flex-shrink-0'
            }`}>
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Popular Badge */}
              {destination.isPopular && (
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {destination.category}
                </span>
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(destination.id)}
                className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <Heart 
                  className={`h-4 w-4 ${
                    favorites.includes(destination.id) 
                      ? 'text-red-500 fill-current' 
                      : 'text-neutral-400'
                  }`} 
                />
              </button>

              {/* Rating */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{destination.rating}</span>
                <span className="text-xs text-neutral-500">({destination.reviews})</span>
              </div>
            </div>

            {/* Content */}
            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                {destination.name}
              </h3>
              <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                {destination.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1 mb-4">
                {destination.highlights.slice(0, 2).map((highlight) => (
                  <span 
                    key={highlight}
                    className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
                {destination.highlights.length > 2 && (
                  <span className="text-xs text-neutral-500">
                    +{destination.highlights.length - 2} more
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{destination.groupSize}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{destination.distance}</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary-600">{destination.price}</span>
                  {destination.price !== 'Free' && <span className="text-sm text-neutral-500">/person</span>}
                </div>
                <Link href={`/destinations/${destination.id}`}>
                  <Button size="sm" className="group">
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Destinations
        </Button>
      </div>
    </div>
  )
}
