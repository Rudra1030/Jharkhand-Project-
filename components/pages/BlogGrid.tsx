'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, Heart, Share2, Tag, Eye, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/Button'

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
    tags: ['Waterfalls', 'Adventure', 'Photography', 'Nature'],
    likes: 124,
    views: 1250,
    isLiked: false,
    isFeatured: false,
    isPublished: true
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
    tags: ['Tribal Culture', 'Art', 'Heritage', 'Traditions'],
    likes: 89,
    views: 980,
    isLiked: true,
    isFeatured: false,
    isPublished: true
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
    tags: ['Photography', 'Wildlife', 'Safari', 'Nature'],
    likes: 156,
    views: 1450,
    isLiked: false,
    isFeatured: false,
    isPublished: true
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
    tags: ['Eco-tourism', 'Conservation', 'Community', 'Environment'],
    likes: 203,
    views: 2100,
    isLiked: true,
    isFeatured: false,
    isPublished: true
  },
  {
    id: 5,
    title: 'Local Cuisine: A Taste of Jharkhand',
    excerpt: 'Exploring the unique flavors and traditional dishes that define Jharkhand\'s culinary heritage.',
    content: 'Jharkhand\'s cuisine is a reflection of its rich cultural diversity and natural abundance...',
    author: 'Maria Rodriguez',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    publishDate: '2024-03-05',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Food',
    tags: ['Cuisine', 'Food', 'Culture', 'Local'],
    likes: 78,
    views: 650,
    isLiked: false,
    isFeatured: false,
    isPublished: true
  },
  {
    id: 6,
    title: 'Adventure Sports in Jharkhand: Thrills and Spills',
    excerpt: 'From rock climbing to trekking, discover the adrenaline-pumping activities Jharkhand has to offer.',
    content: 'Jharkhand\'s diverse terrain makes it a perfect destination for adventure enthusiasts...',
    author: 'David Wilson',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    publishDate: '2024-03-02',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Adventure',
    tags: ['Adventure', 'Sports', 'Trekking', 'Rock Climbing'],
    likes: 92,
    views: 890,
    isLiked: false,
    isFeatured: false,
    isPublished: true
  }
]

const categories = [
  { id: 'all', name: 'All Stories', count: 24 },
  { id: 'nature', name: 'Nature', count: 8 },
  { id: 'culture', name: 'Culture', count: 6 },
  { id: 'wildlife', name: 'Wildlife', count: 5 },
  { id: 'sustainability', name: 'Sustainability', count: 3 },
  { id: 'food', name: 'Food', count: 2 }
]

export function BlogGrid() {
  const [likedPosts, setLikedPosts] = useState<number[]>(
    blogPosts.filter(post => post.isLiked).map(post => post.id)
  )
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'date' | 'popularity' | 'title'>('date')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

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

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title)
      case 'popularity':
        return b.views - a.views
      default:
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    }
  })

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-neutral-600">
            {filteredPosts.length} stories found
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <div className="w-4 h-4 flex flex-col space-y-0.5">
                <div className="w-full h-1 bg-current rounded-sm" />
                <div className="w-full h-1 bg-current rounded-sm" />
                <div className="w-full h-1 bg-current rounded-sm" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="date">Latest First</option>
            <option value="popularity">Most Popular</option>
            <option value="title">Title A-Z</option>
          </select>
        </div>
      </div>

      {/* Blog Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          : 'space-y-6'
      }>
        {sortedPosts.map((post, index) => (
          <article 
            key={post.id}
            className={`card-hover group animate-fade-in ${
              viewMode === 'list' ? 'flex' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${
              viewMode === 'grid' 
                ? 'h-48' 
                : 'w-48 h-32 flex-shrink-0'
            }`}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Read Time */}
              <div className="absolute top-4 right-4">
                <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                  {post.readTime}
                </span>
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleLike(post.id)}
                className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
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
            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-neutral-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full flex items-center space-x-1"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-xs text-neutral-500">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Meta Info */}
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

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Heart 
                      className={`h-3 w-3 ${
                        likedPosts.includes(post.id) 
                          ? 'text-red-500 fill-current' 
                          : ''
                      }`} 
                    />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{post.views}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <Link href={`/blog/${post.id}`}>
                  <Button size="sm" className="group">
                    <BookOpen className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
                    Read More
                  </Button>
                </Link>
                <div className="flex space-x-2">
                  <button className="p-2 text-neutral-400 hover:text-primary-600 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Stories
        </Button>
      </div>
    </div>
  )
}
