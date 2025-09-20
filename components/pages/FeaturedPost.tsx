'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, Heart, Share2, Tag, Eye, BookOpen } from 'lucide-react'
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

const featuredPost = {
  id: 1,
  title: 'The Ultimate Guide to Jharkhand\'s Hidden Gems',
  excerpt: 'Discover the most breathtaking and lesser-known destinations that showcase the true beauty of Jharkhand\'s natural and cultural heritage.',
  content: 'Jharkhand, often overlooked by mainstream tourism, is a treasure trove of natural wonders, rich cultural heritage, and authentic experiences...',
  author: 'Priya Sharma',
  authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  publishDate: '2024-03-15',
  readTime: '12 min read',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  category: 'Travel Guide',
  tags: ['Travel Guide', 'Hidden Gems', 'Nature', 'Culture', 'Adventure'],
  likes: 324,
  views: 4500,
  isLiked: false,
  isFeatured: true
}

export function FeaturedPost() {
  const [isLiked, setIsLiked] = useState(featuredPost.isLiked)

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="card-hover group mb-12">
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

          {/* Stats */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-white text-sm">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{featuredPost.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{featuredPost.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
            <button
              onClick={toggleLike}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              <Heart 
                className={`h-4 w-4 ${
                  isLiked 
                    ? 'text-red-500 fill-current' 
                    : 'text-neutral-400'
                }`} 
              />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
            {featuredPost.title}
          </h2>
          
          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            {featuredPost.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {featuredPost.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full flex items-center space-x-1"
              >
                <Tag className="h-3 w-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-neutral-500">
              <div className="flex items-center space-x-2">
                <img
                  src={featuredPost.authorImage}
                  alt={featuredPost.author}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="font-medium text-neutral-900">{featuredPost.author}</div>
                  <div className="text-xs text-neutral-500">
                    {formatDate(featuredPost.publishDate)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Link href={`/blog/${featuredPost.id}`}>
              <Button size="lg" className="group">
                <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Read Full Story
              </Button>
            </Link>
            <div className="flex space-x-2">
              <button className="p-2 text-neutral-400 hover:text-primary-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
