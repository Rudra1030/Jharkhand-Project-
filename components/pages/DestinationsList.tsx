'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const destinations = [
  {
    id: 1,
    name: 'Netarhat',
    category: 'Hill Station',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    reviews: 124,
    duration: '2-3 days',
    groupSize: '2-6 people',
    price: '₹8,500',
    distance: '120 km from Ranchi',
    description: 'Known as the "Queen of Chotanagpur", Netarhat offers breathtaking sunrise views.',
    isPopular: true,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Betalghat Waterfall',
    category: 'Waterfall',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    reviews: 89,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹3,200',
    distance: '85 km from Ranchi',
    description: 'A magnificent waterfall cascading through rocky terrain.',
    isPopular: false,
    isFavorite: true
  },
  {
    id: 3,
    name: 'Hazaribagh National Park',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.7,
    reviews: 156,
    duration: '2-4 days',
    groupSize: '2-8 people',
    price: '₹12,000',
    distance: '95 km from Ranchi',
    description: 'Home to diverse wildlife including tigers and leopards.',
    isPopular: true,
    isFavorite: false
  },
  {
    id: 4,
    name: 'Jagannath Temple',
    category: 'Temple',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.5,
    reviews: 203,
    duration: 'Half day',
    groupSize: '1-10 people',
    price: 'Free',
    distance: 'In Ranchi',
    description: 'Ancient temple with beautiful architecture.',
    isPopular: false,
    isFavorite: false
  },
  {
    id: 5,
    name: 'Dassam Falls',
    category: 'Waterfall',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.4,
    reviews: 78,
    duration: 'Half day',
    groupSize: '1-6 people',
    price: '₹1,500',
    distance: '40 km from Ranchi',
    description: 'Beautiful waterfall perfect for picnics.',
    isPopular: false,
    isFavorite: false
  },
  {
    id: 6,
    name: 'Palamau Tiger Reserve',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    reviews: 92,
    duration: '3-5 days',
    groupSize: '2-6 people',
    price: '₹15,000',
    distance: '180 km from Ranchi',
    description: 'One of the oldest tiger reserves in India.',
    isPopular: true,
    isFavorite: false
  }
]

export function DestinationsList() {
  const [favorites, setFavorites] = useState<number[]>(
    destinations.filter(d => d.isFavorite).map(d => d.id)
  )

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-neutral-900">
          Nearby Destinations
        </h3>
        <span className="text-sm text-neutral-500">
          {destinations.length} found
        </span>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto scrollbar-hide">
        {destinations.map((destination, index) => (
          <div 
            key={destination.id}
            className="card-hover group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex">
              {/* Image */}
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                />
                {destination.isPopular && (
                  <div className="absolute top-1 left-1">
                    <span className="bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {destination.name}
                    </h4>
                    <p className="text-sm text-primary-600 font-medium">{destination.category}</p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(destination.id)}
                    className="p-1 hover:bg-neutral-100 rounded"
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        favorites.includes(destination.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-neutral-400'
                      }`} 
                    />
                  </button>
                </div>

                <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                  {destination.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span>{destination.rating}</span>
                    <span>({destination.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{destination.distance}</span>
                  </div>
                </div>

                {/* Duration and Group Size */}
                <div className="flex items-center space-x-4 text-xs text-neutral-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{destination.groupSize}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-semibold text-primary-600">{destination.price}</span>
                    {destination.price !== 'Free' && <span className="text-neutral-500">/person</span>}
                  </div>
                  <Link href={`/destinations/${destination.id}`}>
                    <Button size="sm" variant="outline" className="group">
                      View
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-4">
        <Button variant="outline" size="sm">
          Load More Destinations
        </Button>
      </div>
    </div>
  )
}
