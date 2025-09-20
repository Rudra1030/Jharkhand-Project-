'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, Heart, Share2, Tag } from 'lucide-react'
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

const blogPosts = [
  {
    id: 1,
    title: 'Discovering the Hidden Waterfalls of Jharkhand',
    excerpt: 'A journey through the lesser-known cascades that showcase the raw beauty of nature in its purest form.',
    content: 'Jharkhand is home to some of the most spectacular waterfalls in India, many of which remain hidden from the typical tourist trail...',
    author: 'Priya Sharma',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    publishDate: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Nature',
    tags: ['Waterfalls', 'Adventure', 'Photography'],
    likes: 124,
    isLiked: false,
    isFeatured: true
  },
  {
    id: 2,
    title: 'Tribal Art and Culture: A Living Heritage',
    excerpt: 'Exploring the rich traditions and artistic expressions of Jharkhand\'s indigenous communities.',
    content: 'The tribal communities of Jharkhand have preserved their unique cultural heritage for centuries...',
    author: 'Rajesh Kumar',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    publishDate: '2024-03-12',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Culture',
    tags: ['Tribal Culture', 'Art', 'Heritage'],
    likes: 89,
    isLiked: true,
    isFeatured: false
  },
  {
    id: 3,
    title: 'Wildlife Photography in Hazaribagh National Park',
    excerpt: 'Tips and techniques for capturing the incredible wildlife that calls Jharkhand home.',
    content: 'Hazaribagh National Park offers photographers a unique opportunity to capture India\'s diverse wildlife...',
    author: 'Amit Singh',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    publishDate: '2024-03-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Wildlife',
    tags: ['Photography', 'Wildlife', 'Safari'],
    likes: 156,
    isLiked: false,
    isFeatured: false
  },
  {
    id: 4,
    title: 'Sustainable Tourism: Preserving Jharkhand\'s Natural Beauty',
    excerpt: 'How responsible travel practices help protect the environment and support local communities.',
    content: 'Sustainable tourism is not just a trend; it\'s a necessity for preserving the natural beauty of places like Jharkhand...',
    author: 'Dr. Sunita Devi',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    publishDate: '2024-03-08',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Sustainability',
    tags: ['Eco-tourism', 'Conservation', 'Community'],
    likes: 203,
    isLiked: true,
    isFeatured: false
  }
]

const categories = [
  { id: 'all', name: 'All Stories', count: 24 },
  { id: 'nature', name: 'Nature', count: 8 },
  { id: 'culture', name: 'Culture', count: 6 },
  { id: 'wildlife', name: 'Wildlife', count: 5 },
  { id: 'sustainability', name: 'Sustainability', count: 5 }
]

export function LatestStories() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [likedPosts, setLikedPosts] = useState<number[]>(
    blogPosts.filter(post => post.isLiked).map(post => post.id)
  )

  const toggleLike = (id: number) => {
    setLikedPosts(prev => 
      prev.includes(id) 
        ? prev.filter(postId => postId !== id)
        : [...prev, id]
    )
  }

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory)

  const featuredPost = filteredPosts.find(post => post.isFeatured) || filteredPosts[0]
  const regularPosts = filteredPosts.filter(post => !post.isFeatured)

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Latest <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Dive into inspiring travel stories, cultural insights, and expert tips 
            from our community of travelers and local experts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="card-hover group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Story
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full flex items-center space-x-1"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredPost.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleLike(featuredPost.id)}
                        className="flex items-center space-x-1 text-sm text-neutral-500 hover:text-red-500 transition-colors"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            likedPosts.includes(featuredPost.id) 
                              ? 'text-red-500 fill-current' 
                              : ''
                          }`} 
                        />
                        <span>{featuredPost.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-sm text-neutral-500 hover:text-primary-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, index) => (
            <article 
              key={post.id}
              className="card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleLike(post.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      likedPosts.includes(post.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-neutral-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-neutral-500">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center space-x-1 text-sm text-neutral-500 hover:text-red-500 transition-colors"
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          likedPosts.includes(post.id) 
                            ? 'text-red-500 fill-current' 
                            : ''
                        }`} 
                      />
                      <span>{post.likes}</span>
                    </button>
                    <button className="text-sm text-neutral-500 hover:text-primary-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button size="sm" variant="outline" className="group">
                      Read
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="group">
              View All Stories
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
