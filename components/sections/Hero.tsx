'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, Calendar, Users, ArrowRight, Play } from 'lucide-react'
import { SearchBar } from '@/components/ui/SearchBar'
import { Button } from '@/components/ui/Button'

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Jharkhand forest landscape',
    title: 'Pristine Natural Beauty'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Tribal cultural heritage',
    title: 'Rich Cultural Heritage'
  },
  {
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Adventure activities in Jharkhand',
    title: 'Thrilling Adventures'
  }
]

const quickStats = [
  { number: '50+', label: 'Natural Sites' },
  { number: '25+', label: 'Tribal Villages' },
  { number: '15+', label: 'Wildlife Sanctuaries' },
  { number: '100+', label: 'Local Artisans' }
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Hero Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern opacity-10" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Discover Jharkhand</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Explore the{' '}
            <span className="text-gradient">Heart of India</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in pristine natural beauty, rich tribal culture, 
            and authentic experiences that will leave you spellbound.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar 
              placeholder="Where would you like to explore in Jharkhand?"
              className="w-full"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button size="lg" className="group">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
