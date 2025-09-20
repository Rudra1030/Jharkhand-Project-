import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, ArrowLeft, Heart, Share2, Calendar, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// This would typically come from a database or API
const destinations = [
  // Natural Sites
  {
    id: 1,
    name: 'Netarhat',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviews: 124,
    duration: '2-3 days',
    groupSize: '2-6 people',
    price: '₹8,500',
    description: 'Known as the "Queen of Chotanagpur", Netarhat offers breathtaking sunrise views and cool climate.',
    highlights: ['Sunrise Point', 'Mughal Garden', 'Pine Forest', 'Local Tribes'],
    isFavorite: false,
    detailedDescription: `Netarhat, often referred to as the "Queen of Chotanagpur", is a picturesque hill station located at an altitude of 3,700 feet above sea level. This charming destination offers a perfect escape from the hustle and bustle of city life with its cool climate, lush green forests, and breathtaking panoramic views.

The town is famous for its spectacular sunrise and sunset views, which can be enjoyed from various viewpoints scattered across the hills. The Mughal Garden, with its well-manicured lawns and colorful flower beds, provides a serene environment for relaxation and photography.

Netarhat is surrounded by dense pine forests that create a peaceful atmosphere and offer excellent opportunities for nature walks and bird watching. The local tribal communities add to the cultural richness of the area, and visitors can experience their traditional way of life and handicrafts.

The best time to visit Netarhat is from October to March when the weather is pleasant and the views are crystal clear. The hill station offers various accommodation options ranging from budget hotels to luxury resorts, making it accessible to all types of travelers.`,
    bestTimeToVisit: 'October to March',
    howToReach: 'By road from Ranchi (156 km), nearest railway station is Ranchi, nearest airport is Birsa Munda Airport, Ranchi',
    nearbyAttractions: ['Betla National Park', 'Hazaribagh', 'Ranchi', 'Deoghar'],
    activities: ['Sunrise/Sunset Viewing', 'Nature Walks', 'Photography', 'Tribal Culture Experience', 'Bird Watching'],
    accommodation: ['Netarhat Hill Resort', 'Pine View Hotel', 'Hill Top Guest House', 'Nature Camp'],
    contactInfo: {
      phone: '+91-XXXX-XXXXXX',
      email: 'info@netarhattourism.com',
      website: 'www.netarhattourism.com'
    }
  },
  {
    id: 2,
    name: 'Betalghat Waterfall',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    rating: 4.6,
    reviews: 89,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹3,200',
    description: 'A magnificent waterfall cascading through rocky terrain, perfect for nature lovers and photographers.',
    highlights: ['Waterfall View', 'Rock Climbing', 'Nature Photography', 'Picnic Spot'],
    isFavorite: true,
    detailedDescription: `Betalghat Waterfall is one of the most spectacular natural attractions in Jharkhand, cascading down from a height of approximately 400 feet through rugged rocky terrain. The waterfall is surrounded by dense forests and offers a mesmerizing sight as the water plunges into a natural pool below.

The area around Betalghat is rich in biodiversity, with various species of birds and butterflies making it a paradise for nature enthusiasts and photographers. The rocky cliffs surrounding the waterfall provide excellent opportunities for rock climbing and adventure activities.

The waterfall is most impressive during the monsoon season (July to September) when the water flow is at its peak. However, it remains accessible and beautiful throughout the year, with each season offering a different perspective of its natural beauty.

Visitors can enjoy a refreshing dip in the natural pool at the base of the waterfall, though caution is advised during the monsoon season when the water flow is strong. The surrounding area is perfect for picnics and nature walks, making it an ideal destination for families and adventure seekers alike.`,
    bestTimeToVisit: 'July to March',
    howToReach: 'By road from Ranchi (45 km), nearest railway station is Ranchi, nearest airport is Birsa Munda Airport, Ranchi',
    nearbyAttractions: ['Dassam Falls', 'Jonha Falls', 'Ranchi', 'Hazaribagh'],
    activities: ['Waterfall Photography', 'Rock Climbing', 'Nature Walks', 'Swimming', 'Picnic'],
    accommodation: ['Ranchi Hotels', 'Hazaribagh Hotels', 'Local Guest Houses'],
    contactInfo: {
      phone: '+91-XXXX-XXXXXX',
      email: 'info@betalghatfalls.com',
      website: 'www.betalghatfalls.com'
    }
  }
  // Add more destinations as needed
]

interface DestinationPageProps {
  params: {
    id: string
    locale: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = destinations.find(d => d.id === parseInt(params.id))

  if (!destination) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link href={`/${params.locale}/destinations`}>
            <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Destinations
            </Button>
          </Link>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary-500 px-3 py-1 rounded-full text-sm font-medium">
                {destination.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <span className="text-sm">{destination.rating}</span>
                <span className="text-sm text-neutral-300">({destination.reviews} reviews)</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {destination.name}
            </h1>
            
            <p className="text-xl text-neutral-200 max-w-2xl">
              {destination.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="card p-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Overview</h2>
              <p className="text-neutral-700 leading-relaxed text-lg">
                {destination.detailedDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="card p-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-neutral-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="card p-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                    <span className="text-neutral-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="card p-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Nearby Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.nearbyAttractions.map((attraction, index) => (
                  <Link key={index} href="#" className="flex items-center gap-3 hover:text-primary-600 transition-colors">
                    <MapPin className="h-4 w-4 text-primary-500" />
                    <span className="text-neutral-700">{attraction}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="card p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {destination.price}
                </div>
                <div className="text-neutral-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary-500" />
                  <span className="text-neutral-700">{destination.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary-500" />
                  <span className="text-neutral-700">{destination.groupSize}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary-500" />
                  <span className="text-neutral-700">Best time: {destination.bestTimeToVisit}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  Book Now
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Travel Info */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Travel Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">How to Reach</h4>
                  <p className="text-sm text-neutral-600">{destination.howToReach}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Best Time to Visit</h4>
                  <p className="text-sm text-neutral-600">{destination.bestTimeToVisit}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary-500" />
                  <span className="text-sm text-neutral-600">{destination.contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary-500" />
                  <span className="text-sm text-neutral-600">{destination.contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-neutral-600">{destination.contactInfo.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
