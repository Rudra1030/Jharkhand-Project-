'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, Users, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const benefits = [
  {
    icon: MapPin,
    title: 'Exclusive Destinations',
    description: 'Discover hidden gems and off-the-beaten-path locations'
  },
  {
    icon: Calendar,
    title: 'Early Access',
    description: 'Get first access to new itineraries and special offers'
  },
  {
    icon: Users,
    title: 'Community Updates',
    description: 'Connect with fellow travelers and share experiences'
  }
]

export function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to Our Community!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Thank you for subscribing! You'll receive our latest updates, 
              exclusive offers, and travel inspiration straight to your inbox.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-white/90"
              onClick={() => setIsSubscribed(false)}
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Stay Connected with{' '}
                <span className="text-beige-50">Jharkhand</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get the latest travel tips, exclusive offers, and inspiring stories 
                delivered directly to your inbox. Join thousands of travelers who 
                are already exploring the beauty of Jharkhand.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <benefit.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-white/80 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-sm text-white/80">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Weekly</div>
                  <div className="text-sm text-white/80">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-white/80">Free</div>
                </div>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Join Our Newsletter
                </h3>
                <p className="text-white/80">
                  Get exclusive content and travel inspiration
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-primary-600 hover:bg-white/90 font-semibold py-3 group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      <span>Subscribe Now</span>
                    </div>
                  )}
                </Button>
              </form>

              <p className="text-xs text-white/60 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
