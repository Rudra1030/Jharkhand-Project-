import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Globe,
  Heart
} from 'lucide-react'

const footerLinks = {
  explore: [
    { name: 'Natural Sites', href: '/destinations?category=natural' },
    { name: 'Cultural Heritage', href: '/destinations?category=cultural' },
    { name: 'Adventure Sports', href: '/destinations?category=adventure' },
    { name: 'Wildlife Sanctuaries', href: '/destinations?category=wildlife' },
  ],
  plan: [
    { name: 'Trip Planner', href: '/itineraries' },
    { name: 'Local Guides', href: '/guides' },
    { name: 'Accommodation', href: '/accommodation' },
    { name: 'Transportation', href: '/transport' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Safety Guidelines', href: '/safety' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  connect: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Careers', href: '/careers' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Logo className="h-8 w-8" />
              <span className="text-2xl font-bold">Jharkhand Tourism</span>
            </Link>
            <p className="text-neutral-300 mb-6 max-w-md">
              Discover the pristine beauty of Jharkhand through sustainable eco-tourism. 
              Experience authentic tribal culture, breathtaking natural landscapes, and 
              unforgettable adventures.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan Your Trip */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Plan Your Trip</h3>
            <ul className="space-y-3">
              {footerLinks.plan.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary-400" />
              <div>
                <p className="text-sm text-neutral-400">Office Address</p>
                <p className="text-white">Ranchi, Jharkhand, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary-400" />
              <div>
                <p className="text-sm text-neutral-400">Phone</p>
                <p className="text-white">+91 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary-400" />
              <div>
                <p className="text-sm text-neutral-400">Email</p>
                <p className="text-white">info@jharkhandtourism.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <p>&copy; 2024 Jharkhand Tourism Board. All rights reserved.</p>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/cookies" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-neutral-500 flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for Jharkhand</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
