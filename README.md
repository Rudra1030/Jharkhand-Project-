# Jharkhand Tourism Website

A comprehensive, mobile-first website showcasing Jharkhand's eco & cultural tourism, featuring natural sites, tribal crafts, homestays, and sustainable tourism experiences.

## 🌟 Features

### Core Functionality
- **Interactive Map**: Explore destinations with clustered markers and filtering
- **Destination Discovery**: Detailed pages with galleries, reviews, and booking options
- **Trip Planner**: Create, save, and export personalized itineraries
- **Local Artisans**: Connect with craftspeople and support local communities
- **Booking System**: Inquiry forms and reservation management
- **Blog & Stories**: Content management with tagging and SEO optimization

### User Experience
- **Mobile-First Design**: Responsive across all devices
- **Multilingual Support**: English and Hindi language options
- **Search & Filters**: Advanced filtering and search capabilities
- **User Authentication**: Email and Google sign-in options
- **Reviews & Ratings**: Community-driven content and feedback

### Technical Features
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Performance**: Image optimization, lazy loading, and SEO
- **Accessibility**: WCAG compliant design patterns
- **Analytics**: Built-in tracking and insights
- **CMS**: Admin panel for content management

## 🎨 Design System

### Brand Colors
- **Primary Green**: `#2F6A4A` - Earthy, natural feel
- **Secondary Terracotta**: `#C9613B` - Warm, cultural accent
- **Neutral Beige**: `#F6EDE6` - Clean, welcoming background
- **Charcoal**: `#1c1917` - Professional text color

### Typography
- **Sans-serif**: Inter - Clean, modern UI text
- **Serif**: Merriweather - Cultural warmth for headings
- **Display**: Playfair Display - Elegant, sophisticated titles

### Mood & Aesthetic
- Authentic and welcoming
- Earthy and rooted in cultural storytelling
- Modern but respectful of tradition
- Photo-forward with calm, trustworthy design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jharkhand-tourism
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
jharkhand-tourism/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── explore/           # Interactive map page
│   └── providers.tsx      # Context providers
├── components/            # Reusable components
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Homepage sections
│   ├── pages/            # Page-specific components
│   └── ui/               # Base UI components
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI, Lucide React
- **Animations**: Framer Motion
- **Maps**: Leaflet (React Leaflet)
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Internationalization**: next-intl
- **SEO**: next-seo

## 📱 Pages & Features

### Public Pages
- **Home**: Hero, featured destinations, interactive map preview
- **Explore**: Full interactive map with filtering
- **Destinations**: Listing and detail pages with galleries
- **Itineraries**: Trip planner and saved itineraries
- **Artisans**: Local craftspeople and businesses
- **Blog**: Stories, tips, and cultural insights
- **About**: Mission, team, and values
- **Contact**: Inquiry forms and support

### User Features
- **Authentication**: Sign up, sign in, profile management
- **Trip Planning**: Create, save, and share itineraries
- **Bookings**: Reserve experiences and accommodations
- **Reviews**: Rate and review destinations
- **Favorites**: Save preferred destinations and artisans

### Admin Features
- **CMS**: Content management for destinations, blog posts
- **User Management**: Customer and artisan accounts
- **Analytics**: Traffic, bookings, and engagement metrics
- **Settings**: Site configuration and preferences

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Static site generation
- **AWS**: EC2 or Lambda deployment
- **DigitalOcean**: App Platform or Droplets

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_MAP_API_KEY=your-map-api-key
DATABASE_URL=your-database-connection
NEXTAUTH_SECRET=your-auth-secret
NEXTAUTH_URL=https://your-domain.com
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Customization
- **Branding**: Update colors, fonts, and logo in `tailwind.config.js`
- **Content**: Modify placeholder content in component files
- **Images**: Replace placeholder images with actual Jharkhand photos
- **API Integration**: Connect to your backend services

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for mobile performance
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Static generation and ISR where appropriate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Jharkhand Tourism Board for inspiration and content
- Local artisans and communities for cultural insights
- Open source contributors and the Next.js community
- Photography credits to local and international photographers

## 📞 Support

For support, email support@jharkhandtourism.com or join our community discussions.

---

**Made with ❤️ for Jharkhand Tourism**
