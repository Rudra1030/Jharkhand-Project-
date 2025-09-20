import { MapPin, Users, Star, Award } from 'lucide-react'

const stats = [
  {
    icon: MapPin,
    number: '50+',
    label: 'Destinations',
    description: 'Curated locations across Jharkhand'
  },
  {
    icon: Users,
    number: '10,000+',
    label: 'Happy Travelers',
    description: 'Visitors who experienced Jharkhand'
  },
  {
    icon: Star,
    number: '4.8',
    label: 'Average Rating',
    description: 'Based on traveler reviews'
  },
  {
    icon: Award,
    number: '15+',
    label: 'Awards Won',
    description: 'Recognition for excellence'
  }
]

export function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-beige-50">Impact</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to promoting Jharkhand tourism 
            and supporting local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-white/80 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
