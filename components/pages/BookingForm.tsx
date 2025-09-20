'use client'

import { useState } from 'react'
import { Calendar, Users, MapPin, Clock, DollarSign, Send, CheckCircle, User, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const tourPackages = [
  {
    id: 'nature-trail',
    name: 'Jharkhand Nature Trail',
    duration: '5 Days',
    price: 15000,
    groupSize: '2-6 people',
    description: 'Explore pristine natural beauty and tribal culture',
    highlights: ['Netarhat Hill Station', 'Betalghat Waterfall', 'Hazaribagh Wildlife', 'Tribal Villages']
  },
  {
    id: 'cultural-heritage',
    name: 'Cultural Heritage Tour',
    duration: '7 Days',
    price: 22000,
    groupSize: '2-8 people',
    description: 'Immerse in rich tribal culture and ancient traditions',
    highlights: ['Deoghar Temples', 'Artisan Workshops', 'Cultural Performances', 'Local Markets']
  },
  {
    id: 'adventure-expedition',
    name: 'Adventure Expedition',
    duration: '4 Days',
    price: 18500,
    groupSize: '2-6 people',
    description: 'Thrilling activities and wildlife encounters',
    highlights: ['Rock Climbing', 'Trekking', 'Wildlife Safari', 'Camping']
  },
  {
    id: 'custom-tour',
    name: 'Custom Tour',
    duration: 'Flexible',
    price: 0,
    groupSize: 'Any size',
    description: 'Tailored experience based on your preferences',
    highlights: ['Personalized Itinerary', 'Private Guide', 'Flexible Schedule', 'Custom Activities']
  }
]

const accommodationTypes = [
  { id: 'homestay', name: 'Homestay', price: 2000, description: 'Authentic local experience' },
  { id: 'resort', name: 'Eco Resort', price: 5000, description: 'Luxury in nature' },
  { id: 'hotel', name: 'Hotel', price: 3000, description: 'Comfortable city stay' },
  { id: 'camping', name: 'Camping', price: 1500, description: 'Under the stars' }
]

export function BookingForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    
    // Trip Details
    selectedPackage: '',
    accommodationType: '',
    travelDates: {
      start: '',
      end: ''
    },
    groupSize: 2,
    specialRequirements: '',
    
    // Additional Services
    airportPickup: false,
    guide: false,
    photography: false,
    transportation: false,
    
    // Contact Preferences
    preferredContact: 'email',
    newsletter: true
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNestedInputChange = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const calculateTotalPrice = () => {
    let total = 0
    
    if (formData.selectedPackage && formData.selectedPackage !== 'custom-tour') {
      const selectedPackage = tourPackages.find(pkg => pkg.id === formData.selectedPackage)
      if (selectedPackage) {
        total += selectedPackage.price
      }
    }
    
    if (formData.accommodationType) {
      const accommodation = accommodationTypes.find(acc => acc.id === formData.accommodationType)
      if (accommodation) {
        const days = formData.travelDates.start && formData.travelDates.end 
          ? Math.ceil((new Date(formData.travelDates.end).getTime() - new Date(formData.travelDates.start).getTime()) / (1000 * 60 * 60 * 24))
          : 1
        total += accommodation.price * days * formData.groupSize
      }
    }
    
    // Additional services
    if (formData.airportPickup) total += 2000
    if (formData.guide) total += 3000
    if (formData.photography) total += 5000
    if (formData.transportation) total += 4000
    
    return total
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          Booking Request Submitted!
        </h2>
        <p className="text-neutral-600 mb-6">
          Thank you for your interest in Jharkhand tourism. We'll review your request 
          and get back to you within 24 hours with a detailed itinerary and pricing.
        </p>
        <div className="space-y-2 text-sm text-neutral-500">
          <p>Booking Reference: #JH2024001</p>
          <p>Confirmation email sent to: {formData.email}</p>
        </div>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6"
        >
          Make Another Booking
        </Button>
      </div>
    )
  }

  return (
    <div className="card p-8">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Booking Form</h2>
      
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep 
                ? 'bg-primary-500 text-white' 
                : 'bg-neutral-200 text-neutral-500'
            }`}>
              {step}
            </div>
            {step < 4 && (
              <div className={`w-16 h-1 mx-2 ${
                step < currentStep ? 'bg-primary-500' : 'bg-neutral-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Nationality *
              </label>
              <input
                type="text"
                value={formData.nationality}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
                required
                className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Step 2: Trip Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Trip Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Select Tour Package *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => handleInputChange('selectedPackage', pkg.id)}
                    className={`p-4 text-left rounded-lg border transition-colors ${
                      formData.selectedPackage === pkg.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    <h4 className="font-semibold text-neutral-900">{pkg.name}</h4>
                    <p className="text-sm text-neutral-600 mb-2">{pkg.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-600 font-medium">
                        {pkg.price === 0 ? 'Custom Pricing' : `₹${pkg.price.toLocaleString()}`}
                      </span>
                      <span className="text-neutral-500">{pkg.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Start Date *
                </label>
                <input
                  type="date"
                  value={formData.travelDates.start}
                  onChange={(e) => handleNestedInputChange('travelDates', 'start', e.target.value)}
                  required
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  End Date *
                </label>
                <input
                  type="date"
                  value={formData.travelDates.end}
                  onChange={(e) => handleNestedInputChange('travelDates', 'end', e.target.value)}
                  required
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Group Size *
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={formData.groupSize}
                  onChange={(e) => handleInputChange('groupSize', parseInt(e.target.value))}
                  required
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Accommodation Type
                </label>
                <select
                  value={formData.accommodationType}
                  onChange={(e) => handleInputChange('accommodationType', e.target.value)}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select accommodation</option>
                  {accommodationTypes.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.name} - ₹{acc.price}/night - {acc.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Special Requirements
              </label>
              <textarea
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                rows={3}
                className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Any dietary restrictions, accessibility needs, or special requests..."
              />
            </div>
          </div>
        )}

        {/* Step 3: Additional Services */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Additional Services</h3>
            
            <div className="space-y-4">
              {[
                { id: 'airportPickup', name: 'Airport Pickup', price: 2000, description: 'Comfortable transfer from airport' },
                { id: 'guide', name: 'Professional Guide', price: 3000, description: 'Experienced local guide for the entire trip' },
                { id: 'photography', name: 'Photography Service', price: 5000, description: 'Professional photographer to capture your memories' },
                { id: 'transportation', name: 'Transportation', price: 4000, description: 'Private vehicle for all transfers' }
              ].map((service) => (
                <label key={service.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData[service.id as keyof typeof formData] as boolean}
                      onChange={(e) => handleInputChange(service.id, e.target.checked)}
                      className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                    />
                    <div>
                      <div className="font-medium text-neutral-900">{service.name}</div>
                      <div className="text-sm text-neutral-600">{service.description}</div>
                    </div>
                  </div>
                  <div className="text-primary-600 font-medium">₹{service.price.toLocaleString()}</div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Review & Submit */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Review Your Booking</h3>
            
            <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Personal Information</h4>
                <p className="text-sm text-neutral-600">
                  {formData.firstName} {formData.lastName}<br />
                  {formData.email} | {formData.phone}<br />
                  {formData.nationality}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Trip Details</h4>
                <p className="text-sm text-neutral-600">
                  Package: {tourPackages.find(pkg => pkg.id === formData.selectedPackage)?.name}<br />
                  Dates: {formData.travelDates.start} to {formData.travelDates.end}<br />
                  Group Size: {formData.groupSize} people<br />
                  Accommodation: {accommodationTypes.find(acc => acc.id === formData.accommodationType)?.name || 'Not selected'}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Additional Services</h4>
                <p className="text-sm text-neutral-600">
                  {Object.entries(formData).filter(([key, value]) => 
                    ['airportPickup', 'guide', 'photography', 'transportation'].includes(key) && value
                  ).map(([key]) => {
                    const service = [
                      { id: 'airportPickup', name: 'Airport Pickup', price: 2000 },
                      { id: 'guide', name: 'Professional Guide', price: 3000 },
                      { id: 'photography', name: 'Photography Service', price: 5000 },
                      { id: 'transportation', name: 'Transportation', price: 4000 }
                    ].find(s => s.id === key)
                    return service ? `${service.name} - ₹${service.price.toLocaleString()}` : ''
                  }).join('\n') || 'None selected'}
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-neutral-900">Total Estimated Cost:</span>
                  <span className="text-2xl font-bold text-primary-600">₹{calculateTotalPrice().toLocaleString()}</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  * Final pricing may vary based on availability and seasonal rates
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          {currentStep < 4 ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="group"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Submit Booking Request</span>
                </div>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
