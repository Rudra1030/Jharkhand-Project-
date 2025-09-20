import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Heart, Share2, Tag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Helper function to format dates consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: 'Discovering the Hidden Waterfalls of Jharkhand',
    excerpt: 'A journey through the lesser-known cascades that showcase the raw beauty of nature in its purest form.',
    content: `Jharkhand is home to some of the most spectacular waterfalls in India, many of which remain hidden from the typical tourist trail. These natural wonders offer not just breathtaking views but also a chance to connect with nature in its most pristine form.

## The Hidden Gems

### Lodh Falls - The Highest Waterfall
Lodh Falls, standing at an impressive 469 feet, is the highest waterfall in Jharkhand. Located in the Latehar district, this magnificent cascade is surrounded by dense forests and offers an adventurous trek to reach its base. The journey through the forest is as rewarding as the destination itself, with opportunities to spot various bird species and wildlife.

### Dassam Falls - Nature's Swimming Pool
Dassam Falls, also known as Dassam Ghagh, is a 144-foot waterfall that creates natural pools perfect for swimming. The surrounding area is ideal for picnics and family outings. The waterfall is most spectacular during the monsoon season when the water flow is at its peak.

### Jonha Falls - The Gautamdhara
Jonha Falls, locally known as Gautamdhara, is a beautiful waterfall surrounded by dense forests. The area is considered sacred by locals and offers a peaceful retreat for those seeking spiritual solace along with natural beauty.

## Best Time to Visit

The best time to visit these waterfalls is during the monsoon season (July to September) when the water flow is at its peak. However, each season offers a unique experience:

- **Monsoon (July-September)**: Maximum water flow, dramatic views
- **Winter (October-February)**: Clear skies, comfortable weather
- **Summer (March-June)**: Less crowded, good for photography

## Photography Tips

1. **Golden Hour**: Early morning and late afternoon provide the best lighting
2. **Wide Angle Lens**: Capture the full scale of the waterfalls
3. **Long Exposure**: Create silky water effects with slower shutter speeds
4. **Safety First**: Always prioritize safety over the perfect shot

## Conservation Efforts

Many of these waterfalls are located in ecologically sensitive areas. Visitors are encouraged to:
- Follow designated trails
- Avoid littering
- Respect local wildlife
- Support local conservation efforts

These hidden waterfalls represent the untamed beauty of Jharkhand and offer experiences that go beyond typical tourist destinations. Each visit is a journey of discovery, connecting you with nature's most powerful and beautiful forces.`,
    author: 'Priya Sharma',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    publishDate: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Nature',
    tags: ['Waterfalls', 'Adventure', 'Photography', 'Nature'],
    likes: 124,
    isLiked: false,
    isFeatured: true
  },
  {
    id: 2,
    title: 'Tribal Art and Culture: A Living Heritage',
    excerpt: 'Exploring the rich traditions and artistic expressions of Jharkhand\'s indigenous communities.',
    content: `The tribal communities of Jharkhand have preserved their unique cultural heritage for centuries, creating a vibrant tapestry of art, music, dance, and traditions that continue to thrive in the modern world.

## The Artistic Legacy

### Traditional Paintings
The tribal art of Jharkhand is characterized by its bold colors, geometric patterns, and deep connection to nature. These paintings often depict scenes from daily life, religious ceremonies, and the natural world that surrounds these communities.

### Handicrafts and Textiles
From intricate bamboo work to beautiful textiles, the tribal communities of Jharkhand are master craftspeople. Each piece tells a story and represents generations of skill and tradition.

### Music and Dance
The traditional music and dance forms of Jharkhand are deeply rooted in the community's connection to nature and their spiritual beliefs. These performances are not just entertainment but a way of preserving and passing down cultural knowledge.

## Preserving the Heritage

Efforts are being made to preserve and promote tribal art and culture through:
- Cultural centers and museums
- Artisan cooperatives
- Educational programs
- Tourism initiatives

## Supporting Local Artisans

When visiting Jharkhand, consider supporting local artisans by purchasing authentic handicrafts. This not only helps preserve traditional skills but also provides economic support to these communities.

The tribal art and culture of Jharkhand represent a living heritage that continues to evolve while maintaining its deep roots in tradition. It's a testament to the resilience and creativity of these communities and their commitment to preserving their unique identity.`,
    author: 'Rajesh Kumar',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    publishDate: '2024-02-28',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Culture',
    tags: ['Tribal Art', 'Culture', 'Heritage', 'Handicrafts'],
    likes: 89,
    isLiked: false,
    isFeatured: false
  }
  // Add more blog posts as needed
]

interface BlogPageProps {
  params: {
    id: string
    locale: string
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link href={`/${params.locale}/blog`}>
            <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary-500 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-neutral-200 max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="card p-8 md:p-12">
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-neutral-200">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-neutral-900">{post.author}</div>
                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-4">
                        {paragraph.split('\n').filter(item => item.startsWith('- ')).map((item, itemIndex) => (
                          <li key={itemIndex} className="text-neutral-700">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    )
                  } else if (paragraph.startsWith('1. ')) {
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                        {paragraph.split('\n').filter(item => /^\d+\. /.test(item)).map((item, itemIndex) => (
                          <li key={itemIndex} className="text-neutral-700">
                            {item.replace(/^\d+\. /, '')}
                          </li>
                        ))}
                      </ol>
                    )
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    )
                  }
                  return null
                })}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-neutral-200">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-neutral-600 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>{post.likes} likes</span>
                  </button>
                  <button className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Posts */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Related Posts</h3>
              <div className="space-y-4">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/${params.locale}/blog/${relatedPost.id}`} className="block group">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-neutral-500 mt-1">
                          <span>{formatDate(relatedPost.publishDate)}</span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="card p-6 bg-primary-50">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Stay Updated</h3>
              <p className="text-neutral-600 mb-4">
                Get the latest travel tips and destination guides delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button className="w-full">
                  Subscribe
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
