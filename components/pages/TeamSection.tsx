import Image from 'next/image'
import { Linkedin, Mail, Twitter } from 'lucide-react'

const teamMembers = [
  {
    name: 'Priya Sharma',
    role: 'Director of Tourism',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Passionate about sustainable tourism with 15+ years of experience in promoting Jharkhand\'s natural beauty.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'priya@jharkhandtourism.com'
    }
  },
  {
    name: 'Rajesh Kumar',
    role: 'Cultural Heritage Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in tribal culture and traditions, dedicated to preserving Jharkhand\'s rich heritage.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'rajesh@jharkhandtourism.com'
    }
  },
  {
    name: 'Dr. Sunita Devi',
    role: 'Eco-Tourism Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Environmental scientist focused on sustainable tourism practices and wildlife conservation.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sunita@jharkhandtourism.com'
    }
  },
  {
    name: 'Amit Singh',
    role: 'Community Relations Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Bridges the gap between tourists and local communities, ensuring mutual benefit and respect.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'amit@jharkhandtourism.com'
    }
  }
]

export function TeamSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of professionals is committed to making your 
            Jharkhand experience unforgettable while supporting local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="card p-6 text-center group hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-primary-600 font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="p-2 bg-neutral-100 rounded-full hover:bg-primary-100 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-neutral-600 hover:text-primary-600" />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-2 bg-neutral-100 rounded-full hover:bg-primary-100 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4 text-neutral-600 hover:text-primary-600" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="p-2 bg-neutral-100 rounded-full hover:bg-primary-100 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4 text-neutral-600 hover:text-primary-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-neutral-600 mb-6">
              Are you passionate about tourism and want to make a difference? 
              We're always looking for dedicated individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/careers"
                className="btn-primary"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="btn-outline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
