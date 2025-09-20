import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              About <span className="text-gradient">Jharkhand Tourism</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              We are passionate about showcasing the incredible beauty, rich culture, 
              and authentic experiences that Jharkhand has to offer. Our mission is 
              to connect travelers with the heart of India through sustainable and 
              responsible tourism.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-neutral-700">Promoting sustainable eco-tourism</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-neutral-700">Supporting local communities and artisans</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-neutral-700">Preserving cultural heritage and traditions</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Jharkhand landscape"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-500 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
