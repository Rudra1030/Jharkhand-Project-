'use client'

import { useState } from 'react'
import { Calendar, MapPin, Users, Download, Share2, Heart, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const planningSteps = [
  {
    step: 1,
    title: 'Choose Your Destination',
    description: 'Browse our curated destinations and select places that match your interests and travel style.',
    icon: MapPin,
    color: 'text-primary-500',
    bgColor: 'bg-primary-50'
  },
  {
    step: 2,
    title: 'Plan Your Itinerary',
    description: 'Use our trip planner to create a personalized itinerary with activities, accommodations, and transportation.',
    icon: Calendar,
    color: 'text-secondary-500',
    bgColor: 'bg-secondary-50'
  },
  {
    step: 3,
    title: 'Book Experiences',
    description: 'Reserve guided tours, homestays, and local experiences directly through our platform.',
    icon: Users,
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  }
]

const sampleItineraries = [
  {
    id: 1,
    title: 'Jharkhand Nature Trail',
    duration: '5 Days',
    difficulty: 'Easy',
    rating: 4.8,
    price: '₹15,000',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['Netarhat Hill Station', 'Betalghat Waterfall', 'Hazaribagh Wildlife', 'Local Tribal Villages'],
    isPopular: true
  },
  {
    id: 2,
    title: 'Cultural Heritage Tour',
    duration: '7 Days',
    difficulty: 'Medium',
    rating: 4.6,
    price: '₹22,000',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['Ancient Temples', 'Tribal Museums', 'Artisan Workshops', 'Cultural Performances'],
    isPopular: false
  },
  {
    id: 3,
    title: 'Adventure Expedition',
    duration: '4 Days',
    difficulty: 'Hard',
    rating: 4.9,
    price: '₹18,500',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    highlights: ['Rock Climbing', 'Trekking', 'Wildlife Safari', 'Camping'],
    isPopular: true
  }
]

export function HowToPlan() {
  const [activeStep, setActiveStep] = useState(1)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            How to <span className="text-gradient">Plan Your Trip</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Follow our simple 3-step process to create the perfect Jharkhand adventure 
            tailored to your preferences and interests.
          </p>
        </div>

        {/* Planning Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {planningSteps.map((step, index) => (
            <div 
              key={step.step}
              className={`text-center p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeStep === step.step 
                  ? 'bg-white shadow-lg border-2 border-primary-200' 
                  : 'bg-neutral-50 hover:bg-white hover:shadow-md'
              }`}
              onClick={() => setActiveStep(step.step)}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${step.bgColor} flex items-center justify-center`}>
                <step.icon className={`h-8 w-8 ${step.color}`} />
              </div>
              <div className="text-4xl font-bold text-neutral-300 mb-4">{step.step}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Sample Itineraries */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Popular Itineraries
            </h3>
            <p className="text-lg text-neutral-600">
              Get inspired by our curated travel plans or create your own
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleItineraries.map((itinerary, index) => (
              <div 
                key={itinerary.id}
                className="card-hover group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={itinerary.image}
                    alt={itinerary.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Popular Badge */}
                  {itinerary.isPopular && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(itinerary.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        favorites.includes(itinerary.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-neutral-400'
                      }`} 
                    />
                  </button>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{itinerary.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {itinerary.title}
                  </h4>
                  
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        itinerary.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        itinerary.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {itinerary.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-neutral-700 mb-2">Highlights:</h5>
                    <div className="flex flex-wrap gap-1">
                      {itinerary.highlights.slice(0, 2).map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                      {itinerary.highlights.length > 2 && (
                        <span className="text-xs text-neutral-500">
                          +{itinerary.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">{itinerary.price}</span>
                      <span className="text-sm text-neutral-500">/person</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Share2 className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Ready to Start Planning?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Create your personalized itinerary or choose from our curated travel plans. 
              Start your Jharkhand adventure today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="group">
                Create My Itinerary
                <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Browse All Itineraries
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
