'use client'

import { useState } from 'react'
import { Search, Filter, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  className?: string
  placeholder?: string
}

export function SearchBar({ 
  className, 
  placeholder = "Search destinations, activities, or experiences..." 
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className={cn('relative', className)}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-neutral-100 rounded"
          >
            <Filter className="h-4 w-4 text-neutral-400" />
          </button>
        </div>
        
        {/* Quick search suggestions */}
        {searchQuery && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
            <div className="p-2">
              <div className="flex items-center space-x-2 p-2 hover:bg-neutral-50 rounded cursor-pointer">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span className="text-sm">Ranchi - Capital City</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-neutral-50 rounded cursor-pointer">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span className="text-sm">Netarhat - Hill Station</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-neutral-50 rounded cursor-pointer">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span className="text-sm">Betalghat - Waterfall</span>
              </div>
            </div>
          </div>
        )}
      </form>

      {/* Filter Panel */}
      {showFilters && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-neutral-200 z-50 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Category
              </label>
              <select className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option value="">All Categories</option>
                <option value="natural">Natural Sites</option>
                <option value="cultural">Cultural Heritage</option>
                <option value="adventure">Adventure Sports</option>
                <option value="wildlife">Wildlife</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Duration
              </label>
              <select className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option value="">Any Duration</option>
                <option value="1-day">1 Day</option>
                <option value="2-3-days">2-3 Days</option>
                <option value="week">1 Week</option>
                <option value="extended">Extended Stay</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Budget
              </label>
              <select className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option value="">Any Budget</option>
                <option value="budget">Budget (Under ₹5,000)</option>
                <option value="mid-range">Mid-range (₹5,000-15,000)</option>
                <option value="luxury">Luxury (₹15,000+)</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={() => setShowFilters(false)}
              className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-800"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowFilters(false)}
              className="btn-primary text-sm"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
