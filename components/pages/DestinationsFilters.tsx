'use client'

import { useState } from 'react'
import { Filter, X, Search, MapPin, Star, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const filterCategories = [
  { id: 'all', name: 'All Categories', count: 45 },
  { id: 'natural', name: 'Natural Sites', count: 18 },
  { id: 'cultural', name: 'Cultural Heritage', count: 12 },
  { id: 'wildlife', name: 'Wildlife', count: 8 },
  { id: 'adventure', name: 'Adventure', count: 7 }
]

const filterDuration = [
  { id: 'all', name: 'Any Duration' },
  { id: 'half-day', name: 'Half Day' },
  { id: '1-day', name: '1 Day' },
  { id: '2-3-days', name: '2-3 Days' },
  { id: 'week', name: '1 Week' },
  { id: 'extended', name: 'Extended Stay' }
]

const filterBudget = [
  { id: 'all', name: 'Any Budget' },
  { id: 'free', name: 'Free' },
  { id: 'budget', name: 'Budget (Under ₹5,000)' },
  { id: 'mid-range', name: 'Mid-range (₹5,000-15,000)' },
  { id: 'luxury', name: 'Luxury (₹15,000+)' }
]

const filterRating = [
  { id: 'all', name: 'Any Rating' },
  { id: '4.5+', name: '4.5+ Stars' },
  { id: '4.0+', name: '4.0+ Stars' },
  { id: '3.5+', name: '3.5+ Stars' }
]

const filterDistance = [
  { id: 'all', name: 'Any Distance' },
  { id: 'within-50', name: 'Within 50 km' },
  { id: 'within-100', name: 'Within 100 km' },
  { id: 'within-200', name: 'Within 200 km' }
]

export function DestinationsFilters() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    duration: 'all',
    budget: 'all',
    rating: 'all',
    distance: 'all'
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
      duration: 'all',
      budget: 'all',
      rating: 'all',
      distance: 'all'
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
            placeholder="Search destinations..."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-neutral-50 rounded-lg">
          {/* Duration Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Duration
            </label>
            <select
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {filterDuration.map((duration) => (
                <option key={duration.id} value={duration.id}>
                  {duration.name}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <DollarSign className="inline h-4 w-4 mr-1" />
              Budget
            </label>
            <select
              value={filters.budget}
              onChange={(e) => handleFilterChange('budget', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {filterBudget.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
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

          {/* Distance Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Distance
            </label>
            <select
              value={filters.distance}
              onChange={(e) => handleFilterChange('distance', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {filterDistance.map((distance) => (
                <option key={distance.id} value={distance.id}>
                  {distance.name}
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
                  case 'duration':
                    return filterDuration.find(d => d.id === value)?.name
                  case 'budget':
                    return filterBudget.find(b => b.id === value)?.name
                  case 'rating':
                    return filterRating.find(r => r.id === value)?.name
                  case 'distance':
                    return filterDistance.find(d => d.id === value)?.name
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
