'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Users, DollarSign, Edit3, Trash2, Share2, Download, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const savedItineraries = [
  {
    id: '1',
    title: 'Jharkhand Nature Trail',
    description: 'A 5-day journey through Jharkhand\'s most beautiful natural sites',
    duration: 5,
    cost: 15000,
    travelers: 2,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    destinations: ['Netarhat', 'Betalghat', 'Hazaribagh'],
    createdDate: '2024-03-15',
    isPublic: true,
    views: 124,
    likes: 23
  },
  {
    id: '2',
    title: 'Cultural Heritage Tour',
    description: 'Explore Jharkhand\'s rich tribal culture and ancient temples',
    duration: 7,
    cost: 22000,
    travelers: 4,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    destinations: ['Deoghar', 'Jagannath Temple', 'Tribal Villages'],
    createdDate: '2024-03-10',
    isPublic: false,
    views: 0,
    likes: 0
  },
  {
    id: '3',
    title: 'Adventure Expedition',
    description: 'Thrilling activities and wildlife encounters in Jharkhand',
    duration: 4,
    cost: 18500,
    travelers: 6,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    destinations: ['Palamau Tiger Reserve', 'Rock Climbing', 'Camping'],
    createdDate: '2024-03-08',
    isPublic: true,
    views: 89,
    likes: 15
  }
]

export function SavedItineraries() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'cost' | 'rating'>('date')

  const sortedItineraries = [...savedItineraries].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title)
      case 'cost':
        return a.cost - b.cost
      case 'rating':
        return b.rating - a.rating
      default:
        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    }
  })

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this itinerary?')) {
      // TODO: Implement delete functionality
      console.log('Deleting itinerary:', id)
    }
  }

  const handleShare = (id: string) => {
    // TODO: Implement share functionality
    console.log('Sharing itinerary:', id)
  }

  const handleExport = (id: string) => {
    // TODO: Implement export functionality
    console.log('Exporting itinerary:', id)
  }

  return (
    <div className="card p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Saved Itineraries</h2>
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
            <option value="cost">Sort by Cost</option>
            <option value="rating">Sort by Rating</option>
          </select>
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
      </div>

      {sortedItineraries.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 mx-auto mb-4 text-neutral-300" />
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">No Saved Itineraries</h3>
          <p className="text-neutral-600 mb-6">Create your first itinerary to get started</p>
          <Button>Create New Itinerary</Button>
        </div>
      ) : (
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {sortedItineraries.map((itinerary) => (
            <div 
              key={itinerary.id}
              className={`card-hover group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'grid' 
                  ? 'h-48' 
                  : 'w-48 h-32 flex-shrink-0'
              }`}>
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Public/Private Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    itinerary.isPublic 
                      ? 'bg-green-500 text-white' 
                      : 'bg-neutral-500 text-white'
                  }`}>
                    {itinerary.isPublic ? 'Public' : 'Private'}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{itinerary.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {itinerary.title}
                </h3>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {itinerary.description}
                </p>

                {/* Destinations */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {itinerary.destinations.slice(0, 3).map((destination) => (
                    <span 
                      key={destination}
                      className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                    >
                      {destination}
                    </span>
                  ))}
                  {itinerary.destinations.length > 3 && (
                    <span className="text-xs text-neutral-500">
                      +{itinerary.destinations.length - 3} more
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-neutral-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{itinerary.duration} days</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{itinerary.travelers} people</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span>₹{itinerary.cost.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{new Date(itinerary.createdDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Stats for Public Itineraries */}
                {itinerary.isPublic && (
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{itinerary.views} views</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>❤️</span>
                        <span>{itinerary.likes} likes</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit3 className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => handleShare(itinerary.id)}
                      className="p-2 text-neutral-400 hover:text-primary-600 transition-colors"
                      title="Share"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleExport(itinerary.id)}
                      className="p-2 text-neutral-400 hover:text-primary-600 transition-colors"
                      title="Export"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(itinerary.id)}
                      className="p-2 text-neutral-400 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
