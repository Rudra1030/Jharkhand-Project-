import { CheckCircle, Clock, Shield, Headphones, Star, Users, MapPin, Calendar } from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle,
    title: 'Verified Bookings',
    description: 'All our partners are verified and trusted for quality service'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Your payment information is protected with bank-level security'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our team is available round the clock to assist you'
  },
  {
    icon: Star,
    title: 'Best Price Guarantee',
    description: 'We offer the best rates with no hidden charges'
  }
]

const popularPackages = [
  {
    name: 'Jharkhand Nature Trail',
    duration: '5 Days',
    price: '₹15,000',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    highlights: ['Netarhat Hill Station', 'Betalghat Waterfall', 'Wildlife Safari']
  },
  {
    name: 'Cultural Heritage Tour',
    duration: '7 Days',
    price: '₹22,000',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    highlights: ['Deoghar Temples', 'Artisan Workshops', 'Cultural Performances']
  },
  {
    name: 'Adventure Expedition',
    duration: '4 Days',
    price: '₹18,500',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    highlights: ['Rock Climbing', 'Trekking', 'Wildlife Safari', 'Camping']
  }
]

const bookingSteps = [
  {
    step: 1,
    title: 'Choose Your Package',
    description: 'Select from our curated tour packages or create a custom itinerary',
    icon: Calendar
  },
  {
    step: 2,
    title: 'Fill Booking Form',
    description: 'Provide your details, travel dates, and special requirements',
    icon: Users
  },
  {
    step: 3,
    title: 'Review & Confirm',
    description: 'Review your booking details and confirm your reservation',
    icon: CheckCircle
  },
  {
    step: 4,
    title: 'Start Your Journey',
    description: 'Receive confirmation and begin your Jharkhand adventure',
    icon: MapPin
  }
]

export function BookingInfo() {
  return (
    <div className="space-y-8">
      {/* Why Book With Us */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Why Book With Us?</h2>
        
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-neutral-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">How It Works</h2>
        
        <div className="space-y-6">
          {bookingSteps.map((step, index) => (
            <div key={step.step} className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 mb-1">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Packages */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Popular Packages</h2>
        
        <div className="space-y-4">
          {popularPackages.map((pkg, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900">{pkg.name}</h3>
                <p className="text-sm text-neutral-600">{pkg.duration}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-neutral-600">{pkg.rating}</span>
                    <span className="text-xs text-neutral-500">({pkg.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-primary-600">{pkg.price}</div>
                <div className="text-xs text-neutral-500">per person</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="card p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Need Help?</h2>
        <p className="text-neutral-600 mb-6">
          Our travel experts are here to help you plan the perfect Jharkhand experience. 
          Contact us for personalized assistance.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-primary-600" />
            <div>
              <div className="font-medium text-neutral-900">Booking Hours</div>
              <div className="text-sm text-neutral-600">Mon-Fri: 9AM-6PM | Sat: 9AM-4PM</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Headphones className="h-5 w-5 text-primary-600" />
            <div>
              <div className="font-medium text-neutral-900">24/7 Support</div>
              <div className="text-sm text-neutral-600">+91 123 456 7890</div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Important Information</h2>
        
        <div className="space-y-4 text-sm text-neutral-600">
          <div>
            <h3 className="font-semibold text-neutral-900 mb-2">Cancellation Policy</h3>
            <p>Free cancellation up to 7 days before travel. 50% refund for cancellations 3-7 days before travel. No refund for cancellations within 3 days.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-neutral-900 mb-2">Payment Terms</h3>
            <p>20% advance payment required to confirm booking. Balance payment due 7 days before travel date.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-neutral-900 mb-2">Weather Policy</h3>
            <p>In case of extreme weather conditions, we reserve the right to modify or cancel activities for safety reasons.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-neutral-900 mb-2">Health & Safety</h3>
            <p>All participants must follow safety guidelines. Travel insurance is recommended but not mandatory.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
