import { BookingForm } from '@/components/pages/BookingForm'
import { BookingInfo } from '@/components/pages/BookingInfo'

export default function BookingsPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="container-custom py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Book Your <span className="text-gradient">Adventure</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Plan and book your perfect Jharkhand experience. Choose from our curated 
            tours, accommodations, and activities for an unforgettable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <BookingForm />
          
          {/* Booking Information */}
          <BookingInfo />
        </div>
      </div>
    </div>
  )
}
