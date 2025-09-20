import { ContactForm } from '@/components/pages/ContactForm'
import { ContactInfo } from '@/components/pages/ContactInfo'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="container-custom py-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about your Jharkhand adventure? We're here to help! 
            Reach out to us for travel advice, booking assistance, or any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
