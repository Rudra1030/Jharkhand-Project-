'use client'

import { useState } from 'react'
import { Filter, X, Search, Calendar, Tag, User, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const filterCategories = [
  { id: 'all', name: 'All Stories', count: 24 },
  { id: 'nature', name: 'Nature', count: 8 },
  { id: 'culture', name: 'Culture', count: 6 },
  { id: 'wildlife', name: 'Wildlife', count: 5 },
  { id: 'sustainability', name: 'Sustainability', count: 3 },
  { id: 'food', name: 'Food', count: 2 }
]

const filterAuthors = [
  { id: 'all', name: 'All Authors' },
  { id: 'priya-sharma', name: 'Priya Sharma' },
  { id: 'rajesh-kumar', name: 'Rajesh Kumar' },
  { id: 'amit-singh', name: 'Amit Singh' },
  { id: 'sunita-devi', name: 'Dr. Sunita Devi' },
  { id: 'maria-rodriguez', name: 'Maria Rodriguez' },
  { id: 'david-wilson', name: 'David Wilson' }
]

const filterReadTime = [
  { id: 'all', name: 'Any Length' },
  { id: 'under-5', name: 'Under 5 min' },
  { id: '5-10', name: '5-10 min' },
  { id: '10-15', name: '10-15 min' },
  { id: '15+', name: '15+ min' }
]

const filterDateRange = [
  { id: 'all', name: 'All Time' },
  { id: 'week', name: 'Past Week' },
  { id: 'month', name: 'Past Month' },
  { id: 'quarter', name: 'Past 3 Months' },
  { id: 'year', name: 'Past Year' }
]

const filterTags = [
  'Waterfalls', 'Adventure', 'Photography', 'Nature', 'Tribal Culture', 
  'Art', 'Heritage', 'Wildlife', 'Safari', 'Eco-tourism', 'Conservation',
  'Community', 'Cuisine', 'Food', 'Trekking', 'Rock Climbing'
]

export function BlogFilters() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    author: 'all',
    readTime: 'all',
    dateRange: 'all',
    tags: [] as string[]
  })
  const [searchQuery, setSearchQuery] = useState('')

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleTagToggle = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      category: 'all',
      author: 'all',
      readTime: 'all',
      dateRange: 'all',
      tags: []
    })
    setSearchQuery('')
  }

  const activeFiltersCount = Object.values(filters).filter(value => 
    Array.isArray(value) ? value.length > 0 : value !== 'all'
  ).length

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
            placeholder="Search stories, authors, or topics..."
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
        <div className="space-y-6 p-6 bg-neutral-50 rounded-lg">
          {/* Author and Read Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <User className="inline h-4 w-4 mr-1" />
                Author
              </label>
              <select
                value={filters.author}
                onChange={(e) => handleFilterChange('author', e.target.value)}
                className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {filterAuthors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Read Time
              </label>
              <select
                value={filters.readTime}
                onChange={(e) => handleFilterChange('readTime', e.target.value)}
                className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {filterReadTime.map((time) => (
                  <option key={time.id} value={time.id}>
                    {time.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Date Range
            </label>
            <div className="flex flex-wrap gap-2">
              {filterDateRange.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handleFilterChange('dateRange', range.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.dateRange === range.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              <Tag className="inline h-4 w-4 mr-1" />
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filters.tags.includes(tag)
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="mt-4 pt-4 border-t border-neutral-200">
          <div className="flex flex-wrap gap-2">
            {/* Category Filter */}
            {filters.category !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                <span>{filterCategories.find(c => c.id === filters.category)?.name}</span>
                <button
                  onClick={() => handleFilterChange('category', 'all')}
                  className="hover:text-primary-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {/* Author Filter */}
            {filters.author !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                <span>{filterAuthors.find(a => a.id === filters.author)?.name}</span>
                <button
                  onClick={() => handleFilterChange('author', 'all')}
                  className="hover:text-primary-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {/* Read Time Filter */}
            {filters.readTime !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                <span>{filterReadTime.find(t => t.id === filters.readTime)?.name}</span>
                <button
                  onClick={() => handleFilterChange('readTime', 'all')}
                  className="hover:text-primary-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {/* Date Range Filter */}
            {filters.dateRange !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                <span>{filterDateRange.find(d => d.id === filters.dateRange)?.name}</span>
                <button
                  onClick={() => handleFilterChange('dateRange', 'all')}
                  className="hover:text-primary-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {/* Tag Filters */}
            {filters.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center space-x-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
              >
                <span>{tag}</span>
                <button
                  onClick={() => handleTagToggle(tag)}
                  className="hover:text-primary-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
