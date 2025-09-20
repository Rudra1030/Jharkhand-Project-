'use client'

import { useState } from 'react'
import { Search, Filter, MapPin, Calendar, Users, DollarSign, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const searchFilters = {
  categories: [
    { id: 'all', name: 'All Categories', count: 45 },
    { id: 'natural', name: 'Natural Sites', count: 18 },
    { id: 'cultural', name: 'Cultural Heritage', count: 12 },
    { id: 'wildlife', name: 'Wildlife', count: 8 },
    { id: 'adventure', name: 'Adventure', count: 7 }
  ],
  duration: [
    { id: 'all', name: 'Any Duration' },
    { id: '1-day', name: '1 Day' },
    { id: '2-3-days', name: '2-3 Days' },
    { id: 'week', name: '1 Week' },
    { id: 'extended', name: 'Extended Stay' }
  ],
  budget: [
    { id: 'all', name: 'Any Budget' },
    { id: 'budget', name: 'Budget (Under ₹5,000)' },
    { id: 'mid-range', name: 'Mid-range (₹5,000-15,000)' },
    { id: 'luxury', name: 'Luxury (₹15,000+)' }
  ],
  rating: [
    { id: 'all', name: 'Any Rating' },
    { id: '4.5+', name: '4.5+ Stars' },
    { id: '4.0+', name: '4.0+ Stars' },
    { id: '3.5+', name: '3.5+ Stars' }
  ]
}

export function SearchFilters() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'all',
    duration: 'all',
    budget: 'all',
    rating: 'all'
  })
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({
      category: 'all',
      duration: 'all',
      budget: 'all',
      rating: 'all'
    })
    setSearchQuery('')
  }

  const activeFiltersCount = Object.values(selectedFilters).filter(value => value !== 'all').length

  return (
    <div className="card p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search destinations, activities, or experiences..."
            className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {searchFilters.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterChange('category', category.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
              selectedFilters.category === category.id
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
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
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
            className="text-sm text-neutral-500 hover:text-neutral-700"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-neutral-50 rounded-lg">
          {/* Duration Filter */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Duration
            </label>
            <select
              value={selectedFilters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {searchFilters.duration.map((duration) => (
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
              value={selectedFilters.budget}
              onChange={(e) => handleFilterChange('budget', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {searchFilters.budget.map((budget) => (
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
              value={selectedFilters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {searchFilters.rating.map((rating) => (
                <option key={rating.id} value={rating.id}>
                  {rating.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Search Results Summary */}
      <div className="flex items-center justify-between text-sm text-neutral-600">
        <span>Showing 24 destinations</span>
        <div className="flex items-center space-x-4">
          <span>Sort by:</span>
          <select className="border border-neutral-300 rounded px-2 py-1 text-sm">
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Distance</option>
            <option>Price</option>
          </select>
        </div>
      </div>
    </div>
  )
}
