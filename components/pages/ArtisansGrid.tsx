'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Phone, Mail, Heart, MessageCircle, Award, Users, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const artisans = [
  {
    id: 1,
    name: 'Rajesh Soren',
    craft: 'Wood Carving',
    location: 'Ranchi',
    rating: 4.9,
    reviews: 47,
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Tribal Masks', 'Decorative Items', 'Furniture'],
    description: 'Master craftsman specializing in traditional tribal wood carvings with modern designs.',
    isVerified: true,
    isOnline: true,
    priceRange: '₹500 - ₹5,000',
    responseTime: 'Within 2 hours',
    languages: ['Hindi', 'English', 'Santhali']
  },
  {
    id: 2,
    name: 'Priya Devi',
    craft: 'Handloom Weaving',
    location: 'Hazaribagh',
    rating: 4.8,
    reviews: 32,
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Sarees', 'Shawls', 'Home Textiles'],
    description: 'Expert weaver creating beautiful handloom textiles using traditional techniques.',
    isVerified: true,
    isOnline: false,
    priceRange: '₹800 - ₹8,000',
    responseTime: 'Within 4 hours',
    languages: ['Hindi', 'English']
  },
  {
    id: 3,
    name: 'Amit Kumar',
    craft: 'Metal Work',
    location: 'Jamshedpur',
    rating: 4.7,
    reviews: 28,
    experience: '8+ years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Jewelry', 'Sculptures', 'Utensils'],
    description: 'Skilled metalworker creating intricate jewelry and decorative items.',
    isVerified: false,
    isOnline: true,
    priceRange: '₹300 - ₹3,000',
    responseTime: 'Within 1 hour',
    languages: ['Hindi', 'English', 'Bengali']
  },
  {
    id: 4,
    name: 'Sunita Oraon',
    craft: 'Pottery',
    location: 'Gumla',
    rating: 4.6,
    reviews: 41,
    experience: '20+ years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Traditional Pots', 'Decorative Items', 'Cooking Utensils'],
    description: 'Traditional potter preserving ancient techniques and creating functional art.',
    isVerified: true,
    isOnline: false,
    priceRange: '₹200 - ₹2,500',
    responseTime: 'Within 6 hours',
    languages: ['Hindi', 'Kurukh']
  },
  {
    id: 5,
    name: 'Vikram Singh',
    craft: 'Bamboo Craft',
    location: 'Dumka',
    rating: 4.5,
    reviews: 35,
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Baskets', 'Furniture', 'Decorative Items'],
    description: 'Expert in sustainable bamboo crafts and eco-friendly home decor.',
    isVerified: true,
    isOnline: true,
    priceRange: '₹400 - ₹4,000',
    responseTime: 'Within 3 hours',
    languages: ['Hindi', 'English', 'Santhali']
  },
  {
    id: 6,
    name: 'Meera Devi',
    craft: 'Textile Embroidery',
    location: 'Deoghar',
    rating: 4.8,
    reviews: 29,
    experience: '18+ years',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Traditional Embroidery', 'Custom Designs', 'Wedding Attire'],
    description: 'Master of traditional embroidery techniques with contemporary designs.',
    isVerified: true,
    isOnline: false,
    priceRange: '₹1,000 - ₹10,000',
    responseTime: 'Within 5 hours',
    languages: ['Hindi', 'English']
  }
]

const craftCategories = [
  { id: 'all', name: 'All Crafts', count: 24 },
  { id: 'wood', name: 'Wood Carving', count: 6 },
  { id: 'textile', name: 'Handloom & Textiles', count: 8 },
  { id: 'metal', name: 'Metal Work', count: 4 },
  { id: 'pottery', name: 'Pottery', count: 3 },
  { id: 'bamboo', name: 'Bamboo Craft', count: 2 },
  { id: 'jewelry', name: 'Jewelry', count: 1 }
]

export function ArtisansGrid() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'price' | 'name'>('rating')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const filteredArtisans = selectedCategory === 'all' 
    ? artisans 
    : artisans.filter(artisan => artisan.craft.toLowerCase().includes(selectedCategory))

  const sortedArtisans = [...filteredArtisans].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'experience':
        return parseInt(b.experience) - parseInt(a.experience)
      case 'price':
        return parseInt(a.priceRange.split(' - ')[0].replace('₹', '').replace(',', '')) - 
               parseInt(b.priceRange.split(' - ')[0].replace('₹', '').replace(',', ''))
      default:
        return b.rating - a.rating
    }
  })

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-neutral-600">
            {filteredArtisans.length} artisans found
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
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="rating">Highest Rated</option>
            <option value="experience">Most Experienced</option>
            <option value="price">Price: Low to High</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>

      {/* Artisans Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          : 'space-y-6'
      }>
        {sortedArtisans.map((artisan, index) => (
          <div 
            key={artisan.id}
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
                src={artisan.image}
                alt={artisan.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Verification Badge */}
              {artisan.isVerified && (
                <div className="absolute top-4 left-4">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Award className="h-3 w-3" />
                    <span>Verified</span>
                  </div>
                </div>
              )}

              {/* Online Status */}
              <div className="absolute top-4 right-4">
                <div className={`w-3 h-3 rounded-full ${
                  artisan.isOnline ? 'bg-green-400' : 'bg-neutral-400'
                }`} />
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(artisan.id)}
                className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <Heart 
                  className={`h-4 w-4 ${
                    favorites.includes(artisan.id) 
                      ? 'text-red-500 fill-current' 
                      : 'text-neutral-400'
                  }`} 
                />
              </button>

              {/* Rating */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{artisan.rating}</span>
                <span className="text-xs text-neutral-500">({artisan.reviews})</span>
              </div>
            </div>

            {/* Content */}
            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {artisan.name}
                </h3>
              </div>
              
              <p className="text-primary-600 font-medium mb-2">{artisan.craft}</p>
              
              <div className="flex items-center space-x-1 text-sm text-neutral-500 mb-3">
                <MapPin className="h-4 w-4" />
                <span>{artisan.location}</span>
                <span>•</span>
                <span>{artisan.experience}</span>
              </div>

              <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                {artisan.description}
              </p>

              {/* Specialties */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-neutral-700 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-1">
                  {artisan.specialties.slice(0, 2).map((specialty) => (
                    <span 
                      key={specialty}
                      className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                  {artisan.specialties.length > 2 && (
                    <span className="text-xs text-neutral-500">
                      +{artisan.specialties.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Price and Response Time */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-1 text-neutral-500">
                  <DollarSign className="h-4 w-4" />
                  <span>{artisan.priceRange}</span>
                </div>
                <div className="flex items-center space-x-1 text-neutral-500">
                  <Clock className="h-4 w-4" />
                  <span>{artisan.responseTime}</span>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-4">
                <div className="text-xs text-neutral-500 mb-1">Languages:</div>
                <div className="flex flex-wrap gap-1">
                  {artisan.languages.map((language) => (
                    <span 
                      key={language}
                      className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <MessageCircle className="mr-1 h-3 w-3" />
                  Contact
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline">
                  <Mail className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Artisans
        </Button>
      </div>
    </div>
  )
}
