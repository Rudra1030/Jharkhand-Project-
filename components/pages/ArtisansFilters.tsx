'use client'

import { useState } from 'react'
import { Filter, X, Search, MapPin, Star, Clock, DollarSign, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const filterCategories = [
  { id: 'all', name: 'All Crafts', count: 24 },
  { id: 'wood', name: 'Wood Carving', count: 6 },
  { id: 'textile', name: 'Handloom & Textiles', count: 8 },
  { id: 'metal', name: 'Metal Work', count: 4 },
  { id: 'pottery', name: 'Pottery', count: 3 },
  { id: 'bamboo', name: 'Bamboo Craft', count: 2 },
  { id: 'jewelry', name: 'Jewelry', count: 1 }
]

const filterExperience = [
  { id: 'all', name: 'Any Experience' },
  { id: '5+', name: '5+ Years' },
  { id: '10+', name: '10+ Years' },
  { id: '15+', name: '15+ Years' },
  { id: '20+', name: '20+ Years' }
]

const filterPrice = [
  { id: 'all', name: 'Any Price' },
  { id: 'under-500', name: 'Under ₹500' },
  { id: '500-2000', name: '₹500 - ₹2,000' },
  { id: '2000-5000', name: '₹2,000 - ₹5,000' },
  { id: '5000+', name: '₹5,000+' }
]

const filterRating = [
  { id: 'all', name: 'Any Rating' },
  { id: '4.5+', name: '4.5+ Stars' },
  { id: '4.0+', name: '4.0+ Stars' },
  { id: '3.5+', name: '3.5+ Stars' }
]

const filterLocation = [
  { id: 'all', name: 'All Locations' },
  { id: 'ranchi', name: 'Ranchi' },
  { id: 'hazaribagh', name: 'Hazaribagh' },
  { id: 'jamshedpur', name: 'Jamshedpur' },
  { id: 'gumla', name: 'Gumla' },
  { id: 'dumka', name: 'Dumka' },
  { id: 'deoghar', name: 'Deoghar' }
]

const filterStatus = [
  { id: 'all', name: 'All Status' },
  { id: 'online', name: 'Online Now' },
  { id: 'verified', name: 'Verified Only' },
  { id: 'available', name: 'Available' }
]

export function ArtisansFilters() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    experience: 'all',
    price: 'all',
    rating: 'all',
    location: 'all',
    status: 'all'
  })
  const [searchQuery, setSearchQuery] = useState('')

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      category: 'all',
      experience: 'all',
      price: 'all',
      rating: 'all',
      location: 'all',
      status: 'all'
    })
    setSearchQuery('')
  }

  const activeFiltersCount = Object.values(filters).filter(value => value !== 'all').length

  return (
    <div className="card p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search artisans by name, craft, or location..."
            className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Quick Category Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {filterCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterChange('category', category.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
              filters.category === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
        >
          <Filter className="h-4 w-4" />
          <span>Advanced Filters</span>
          {activeFiltersCount > 0 && (
            <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </button>
        
        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="flex items-center space-x-1 text-sm text-neutral-500 hover:text-neutral-700"
          >
            <X className="h-4 w-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-neutral-50 rounded-lg">
          {/* Experience Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Experience
            </label>
            <select
              value={filters.experience}
              onChange={(e) => handleFilterChange('experience', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {filterExperience.map((experience) => (
                <option key={experience.id} value={experience.id}>
                  {experience.name}
                </option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <DollarSign className="inline h-4 w-4 mr-1" />
              Price Range
            </label>
            <select
              value={filters.price}
              onChange={(e) => handleFilterChange('price', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {filterPrice.map((price) => (
                <option key={price.id} value={price.id}>
                  {price.name}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <Star className="inline h-4 w-4 mr-1" />
              Rating
            </label>
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {filterRating.map((rating) => (
                <option key={rating.id} value={rating.id}>
                  {rating.name}
                </option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Location
            </label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {filterLocation.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <Award className="inline h-4 w-4 mr-1" />
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {filterStatus.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="mt-4 pt-4 border-t border-neutral-200">
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(([key, value]) => {
              if (value === 'all') return null
              
              const filterName = (() => {
                switch (key) {
                  case 'category':
                    return filterCategories.find(c => c.id === value)?.name
                  case 'experience':
                    return filterExperience.find(e => e.id === value)?.name
                  case 'price':
                    return filterPrice.find(p => p.id === value)?.name
                  case 'rating':
                    return filterRating.find(r => r.id === value)?.name
                  case 'location':
                    return filterLocation.find(l => l.id === value)?.name
                  case 'status':
                    return filterStatus.find(s => s.id === value)?.name
                  default:
                    return value
                }
              })()

              return (
                <span
                  key={key}
                  className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                >
                  <span>{filterName}</span>
                  <button
                    onClick={() => handleFilterChange(key, 'all')}
                    className="hover:text-primary-900"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
