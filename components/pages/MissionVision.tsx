import { Target, Eye, Heart, Users } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To promote sustainable tourism in Jharkhand while preserving its natural beauty, cultural heritage, and supporting local communities.',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To make Jharkhand a premier eco-tourism destination that showcases India\'s rich tribal culture and pristine natural landscapes.',
    color: 'text-secondary-600',
    bgColor: 'bg-secondary-50'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'We believe in responsible tourism that respects local communities, protects the environment, and creates meaningful connections.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Users,
    title: 'Our Commitment',
    description: 'We are committed to providing authentic experiences while ensuring the well-being of local communities and environmental conservation.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
]

export function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Our <span className="text-gradient">Mission & Vision</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to creating meaningful travel experiences that benefit 
            both visitors and the communities they visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="card p-8 text-center group hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 ${value.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className={`h-8 w-8 ${value.color}`} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {value.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
