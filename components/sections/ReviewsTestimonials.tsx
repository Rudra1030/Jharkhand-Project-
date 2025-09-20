'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Helper function to ensure consistent date formatting
const formatDate = (dateString: string) => {
  // Since we're using simple month/year strings, return them as-is
  // This prevents any locale-based formatting differences
  return dateString
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    text: 'Jharkhand exceeded all my expectations! The natural beauty is breathtaking, and the local people are incredibly warm and welcoming. The tribal culture experience was truly authentic.',
    trip: 'Nature & Culture Tour',
    duration: '7 days'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Mumbai, India',
    rating: 5,
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    text: 'As a photographer, Jharkhand offered me endless opportunities. From the misty hills of Netarhat to the vibrant tribal festivals, every moment was picture-perfect.',
    trip: 'Photography Expedition',
    duration: '5 days'
  },
  {
    id: 3,
    name: 'Emily Chen',
    location: 'Singapore',
    rating: 4,
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    text: 'The wildlife safari in Hazaribagh was incredible! We spotted tigers, leopards, and so many birds. The guides were knowledgeable and the accommodations were comfortable.',
    trip: 'Wildlife Safari',
    duration: '4 days'
  },
  {
    id: 4,
    name: 'Amit Singh',
    location: 'Delhi, India',
    rating: 5,
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    text: 'The local artisans are incredibly talented. I bought beautiful handcrafted items and even learned some traditional techniques. A truly enriching experience!',
    trip: 'Artisan Workshop',
    duration: '3 days'
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    date: 'November 2023',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    text: 'Jharkhand is a hidden gem! The waterfalls, the tribal villages, the food - everything was amazing. I felt like I discovered something truly special.',
    trip: 'Cultural Immersion',
    duration: '10 days'
  },
  {
    id: 6,
    name: 'David Wilson',
    location: 'London, UK',
    rating: 4,
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    text: 'The adventure activities were thrilling! Rock climbing, trekking, and camping under the stars. Perfect for adventure enthusiasts like me.',
    trip: 'Adventure Expedition',
    duration: '6 days'
  }
]

const stats = [
  { number: '4.8', label: 'Average Rating', icon: Star },
  { number: '1,200+', label: 'Happy Travelers', icon: MapPin },
  { number: '95%', label: 'Would Recommend', icon: Quote },
  { number: '50+', label: 'Destinations', icon: Calendar }
]

export function ReviewsTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Memoize current testimonial to prevent unnecessary re-renders
  const currentTestimonial = useMemo(() => testimonials[currentIndex], [currentIndex])

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextTestimonial])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            What Our <span className="text-gradient">Travelers Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from real travelers who have experienced 
            the magic of Jharkhand and created unforgettable memories.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            {/* Quote Icon */}
            <div className="text-center mb-8">
              <Quote className="h-12 w-12 text-primary-200 mx-auto" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6 italic">
                "{currentTestimonial.text}"
              </p>
              
              {/* Trip Details */}
              <div className="flex items-center justify-center space-x-4 text-sm text-neutral-500 mb-6">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{currentTestimonial.trip}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{currentTestimonial.duration}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < currentTestimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-neutral-900">{currentTestimonial.name}</div>
                  <div className="text-sm text-neutral-500">{currentTestimonial.location}</div>
                  <div className="text-xs text-neutral-400">{formatDate(currentTestimonial.date)}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-neutral-600" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary-500' : 'bg-neutral-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-neutral-600" />
              </button>
            </div>
          </div>
        </div>

        {/* All Reviews Link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Read All Reviews
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
