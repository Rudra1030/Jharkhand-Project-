'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Phone, Mail, Heart, MessageCircle, Award, Users } from 'lucide-react'
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
    isOnline: true
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
    isOnline: false
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
    isOnline: true
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
    isOnline: false
  }
]

const craftCategories = [
  { id: 'all', name: 'All Crafts', count: 24 },
  { id: 'wood', name: 'Wood Carving', count: 6 },
  { id: 'textile', name: 'Handloom', count: 8 },
  { id: 'metal', name: 'Metal Work', count: 4 },
  { id: 'pottery', name: 'Pottery', count: 6 }
]

export function LocalArtisans() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

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

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Meet Our <span className="text-gradient">Local Artisans</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover the talented craftspeople who keep Jharkhand's traditional arts alive. 
            Connect directly with artisans, learn their techniques, and support local communities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {craftCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredArtisans.map((artisan, index) => (
            <div 
              key={artisan.id}
              className="card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {artisan.name}
                  </h3>
                </div>
                
                <p className="text-sm text-primary-600 font-medium mb-2">{artisan.craft}</p>
                
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-neutral-600">Registered Artisans</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-neutral-600">Craft Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-neutral-600">Products Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.8</div>
            <div className="text-neutral-600">Average Rating</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Support Local Artisans
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Help preserve traditional crafts and support local communities by connecting 
              with our talented artisans. Book workshops, purchase authentic products, or simply learn their stories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="group">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Browse All Artisans
              </Button>
              <Button variant="outline" size="lg">
                Become an Artisan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
