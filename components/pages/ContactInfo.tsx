import { MapPin, Phone, Mail, Clock, MessageCircle, Globe, Award } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    details: [
      'Jharkhand Tourism Board',
      '123 Tourism Complex',
      'Ranchi, Jharkhand 834001',
      'India'
    ]
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: [
      '+91 123 456 7890 (General)',
      '+91 123 456 7891 (Bookings)',
      '+91 123 456 7892 (Emergency)'
    ]
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    details: [
      'info@jharkhandtourism.com',
      'bookings@jharkhandtourism.com',
      'support@jharkhandtourism.com'
    ]
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 4:00 PM',
      'Sunday: Closed',
      'Emergency: 24/7 Available'
    ]
  }
]

const quickLinks = [
  { title: 'Trip Planning Guide', href: '/planning' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Travel Tips', href: '/tips' },
  { title: 'Safety Guidelines', href: '/safety' },
  { title: 'Group Bookings', href: '/groups' },
  { title: 'Corporate Tours', href: '/corporate' }
]

const socialMedia = [
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'YouTube', href: '#', icon: '📺' },
  { name: 'WhatsApp', href: '#', icon: '💬' }
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          Contact Information
        </h2>
        
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-neutral-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="card p-8">
        <h3 className="text-xl font-bold text-neutral-900 mb-4">
          Quick Links
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center space-x-2 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200 group"
            >
              <MessageCircle className="h-4 w-4 text-primary-500 group-hover:text-primary-600" />
              <span className="text-sm text-neutral-700 group-hover:text-primary-600">
                {link.title}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="card p-8">
        <h3 className="text-xl font-bold text-neutral-900 mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors duration-200 group"
              aria-label={social.name}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="card p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="flex items-center space-x-3 mb-4">
          <Award className="h-6 w-6 text-primary-600" />
          <h3 className="text-xl font-bold text-neutral-900">
            Awards & Recognition
          </h3>
        </div>
        <div className="space-y-2 text-sm text-neutral-600">
          <p>🏆 Best Eco-Tourism Destination 2023</p>
          <p>🌟 Excellence in Cultural Tourism</p>
          <p>🌱 Sustainable Tourism Award</p>
          <p>👥 Best Community Engagement</p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="card p-8 border-l-4 border-red-500 bg-red-50">
        <h3 className="text-lg font-bold text-red-800 mb-2">
          Emergency Contact
        </h3>
        <p className="text-sm text-red-700 mb-3">
          For urgent assistance during your trip:
        </p>
        <div className="space-y-1 text-sm text-red-600">
          <p>📞 Emergency Hotline: +91 123 456 7892</p>
          <p>📧 Emergency Email: emergency@jharkhandtourism.com</p>
          <p>🕐 Available 24/7</p>
        </div>
      </div>
    </div>
  )
}
