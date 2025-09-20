'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Clock, Users, ArrowRight, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const featuredDestinations = [
  // Natural Sites
  {
    id: 1,
    name: 'Netarhat',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 124,
    duration: '2-3 days',
    groupSize: '2-6 people',
    price: '₹8,500',
    description: 'Known as the "Queen of Chotanagpur", Netarhat offers breathtaking sunrise views and cool climate.',
    highlights: ['Sunrise Point', 'Mughal Garden', 'Pine Forest', 'Local Tribes'],
    isFavorite: false
  },
  {
    id: 2,
    name: 'Betalghat Waterfall',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 89,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹3,200',
    description: 'A magnificent waterfall cascading through rocky terrain, perfect for nature lovers and photographers.',
    highlights: ['Waterfall View', 'Rock Climbing', 'Nature Photography', 'Picnic Spot'],
    isFavorite: true
  },
  {
    id: 3,
    name: 'Dassam Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 156,
    duration: '1 day',
    groupSize: '1-6 people',
    price: '₹2,800',
    description: 'A spectacular 144-foot waterfall surrounded by lush greenery and natural pools.',
    highlights: ['Waterfall View', 'Natural Pools', 'Swimming', 'Nature Walk'],
    isFavorite: false
  },
  {
    id: 4,
    name: 'Jonha Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 98,
    duration: '1 day',
    groupSize: '1-5 people',
    price: '₹2,500',
    description: 'Also known as Gautamdhara, this beautiful waterfall is surrounded by dense forests.',
    highlights: ['Waterfall View', 'Forest Trail', 'Photography', 'Peaceful Environment'],
    isFavorite: false
  },
  {
    id: 5,
    name: 'Hundru Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 112,
    duration: '1 day',
    groupSize: '1-6 people',
    price: '₹3,000',
    description: 'One of the most popular waterfalls in Jharkhand, cascading from a height of 320 feet.',
    highlights: ['Waterfall View', 'Adventure Sports', 'Nature Photography', 'Picnic'],
    isFavorite: false
  },
  {
    id: 6,
    name: 'Panchghagh Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 76,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹2,200',
    description: 'Five streams cascading down rocky cliffs creating a mesmerizing natural spectacle.',
    highlights: ['Five Streams', 'Rocky Cliffs', 'Nature Walk', 'Photography'],
    isFavorite: false
  },
  {
    id: 7,
    name: 'Lodh Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 134,
    duration: '1-2 days',
    groupSize: '1-5 people',
    price: '₹3,500',
    description: 'The highest waterfall in Jharkhand, plunging from a height of 469 feet.',
    highlights: ['Highest Waterfall', 'Adventure Trek', 'Nature Photography', 'Camping'],
    isFavorite: false
  },
  {
    id: 8,
    name: 'Parasnath Hills',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 189,
    duration: '2-3 days',
    groupSize: '2-8 people',
    price: '₹6,500',
    description: 'Sacred hills with ancient temples and panoramic views of the surrounding landscape.',
    highlights: ['Sacred Temples', 'Panoramic Views', 'Trekking', 'Spiritual Experience'],
    isFavorite: false
  },
  {
    id: 9,
    name: 'Rajrappa Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 167,
    duration: '1 day',
    groupSize: '1-6 people',
    price: '₹2,800',
    description: 'A beautiful waterfall with a temple dedicated to Goddess Chhinnamasta.',
    highlights: ['Sacred Temple', 'Waterfall View', 'Religious Significance', 'Nature Walk'],
    isFavorite: false
  },
  {
    id: 10,
    name: 'Sita Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviews: 89,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹2,000',
    description: 'A serene waterfall surrounded by dense forests, perfect for a peaceful retreat.',
    highlights: ['Serene Environment', 'Forest Trail', 'Photography', 'Peaceful Retreat'],
    isFavorite: false
  },
  {
    id: 11,
    name: 'Usri Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 95,
    duration: '1 day',
    groupSize: '1-5 people',
    price: '₹2,300',
    description: 'A picturesque waterfall with natural pools, ideal for swimming and relaxation.',
    highlights: ['Natural Pools', 'Swimming', 'Relaxation', 'Nature Photography'],
    isFavorite: false
  },
  {
    id: 12,
    name: 'Mirchaiya Falls',
    category: 'Natural Sites',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    reviews: 67,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹1,800',
    description: 'A hidden gem waterfall surrounded by lush greenery and wildlife.',
    highlights: ['Hidden Gem', 'Wildlife Spotting', 'Nature Walk', 'Photography'],
    isFavorite: false
  },

  // Cultural Heritage
  {
    id: 13,
    name: 'Ranchi',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 203,
    duration: '3-5 days',
    groupSize: '1-10 people',
    price: '₹6,500',
    description: 'The capital city blending modern amenities with rich cultural heritage and natural beauty.',
    highlights: ['Rock Garden', 'Jagannath Temple', 'Birsa Zoological Park', 'Local Markets'],
    isFavorite: false
  },
  {
    id: 14,
    name: 'Jamshedpur',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 178,
    duration: '2-4 days',
    groupSize: '1-8 people',
    price: '₹5,800',
    description: 'The steel city with beautiful parks, temples, and industrial heritage.',
    highlights: ['Jubilee Park', 'Tata Steel Museum', 'Dimna Lake', 'Bhimbandh Wildlife Sanctuary'],
    isFavorite: false
  },
  {
    id: 15,
    name: 'Deoghar',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 234,
    duration: '2-3 days',
    groupSize: '2-10 people',
    price: '₹4,500',
    description: 'A sacred city known for the famous Baidyanath Temple and spiritual significance.',
    highlights: ['Baidyanath Temple', 'Shivganga', 'Nandan Pahar', 'Spiritual Experience'],
    isFavorite: false
  },
  {
    id: 16,
    name: 'Bokaro',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviews: 145,
    duration: '2-3 days',
    groupSize: '1-6 people',
    price: '₹4,200',
    description: 'A planned city with modern infrastructure and cultural attractions.',
    highlights: ['City Park', 'Jagannath Temple', 'Bokaro Steel Plant', 'Local Culture'],
    isFavorite: false
  },
  {
    id: 17,
    name: 'Dhanbad',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    reviews: 156,
    duration: '2-3 days',
    groupSize: '1-6 people',
    price: '₹3,800',
    description: 'Known as the coal capital of India with rich mining heritage and cultural sites.',
    highlights: ['Coal Heritage', 'Maithon Dam', 'Panchet Dam', 'Local Markets'],
    isFavorite: false
  },
  {
    id: 18,
    name: 'Hazaribagh',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 167,
    duration: '2-4 days',
    groupSize: '1-8 people',
    price: '₹5,200',
    description: 'A historic city with ancient temples, lakes, and cultural heritage.',
    highlights: ['Ancient Temples', 'Hazaribagh Lake', 'Canary Hill', 'Cultural Heritage'],
    isFavorite: false
  },
  {
    id: 19,
    name: 'Giridih',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviews: 123,
    duration: '2-3 days',
    groupSize: '1-6 people',
    price: '₹3,500',
    description: 'A city known for its religious significance and natural beauty.',
    highlights: ['Religious Sites', 'Natural Beauty', 'Local Culture', 'Temples'],
    isFavorite: false
  },
  {
    id: 20,
    name: 'Koderma',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.1,
    reviews: 98,
    duration: '1-2 days',
    groupSize: '1-4 people',
    price: '₹2,800',
    description: 'Known for mica mining and historical significance.',
    highlights: ['Mica Heritage', 'Historical Sites', 'Local Culture', 'Mining History'],
    isFavorite: false
  },
  {
    id: 21,
    name: 'Chatra',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    reviews: 87,
    duration: '1-2 days',
    groupSize: '1-5 people',
    price: '₹2,500',
    description: 'A district with rich cultural heritage and natural attractions.',
    highlights: ['Cultural Heritage', 'Natural Attractions', 'Local Traditions', 'Historical Sites'],
    isFavorite: false
  },
  {
    id: 22,
    name: 'Palamu',
    category: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.0,
    reviews: 76,
    duration: '2-3 days',
    groupSize: '1-6 people',
    price: '₹3,200',
    description: 'Known for its historical forts and cultural significance.',
    highlights: ['Historical Forts', 'Cultural Significance', 'Local Heritage', 'Traditional Arts'],
    isFavorite: false
  },

  // Wildlife
  {
    id: 23,
    name: 'Hazaribagh National Park',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 156,
    duration: '2-4 days',
    groupSize: '2-8 people',
    price: '₹12,000',
    description: 'Home to diverse wildlife including tigers, leopards, and over 200 bird species.',
    highlights: ['Safari Rides', 'Bird Watching', 'Nature Trails', 'Wildlife Photography'],
    isFavorite: false
  },
  {
    id: 24,
    name: 'Betla National Park',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 189,
    duration: '3-5 days',
    groupSize: '2-10 people',
    price: '₹15,000',
    description: 'One of the first national parks in India, home to tigers, elephants, and diverse flora.',
    highlights: ['Tiger Spotting', 'Elephant Safari', 'Jungle Stay', 'Nature Photography'],
    isFavorite: false
  },
  {
    id: 25,
    name: 'Dalma Wildlife Sanctuary',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 134,
    duration: '1-2 days',
    groupSize: '1-6 people',
    price: '₹4,500',
    description: 'A sanctuary known for its elephant population and scenic beauty.',
    highlights: ['Elephant Spotting', 'Nature Trails', 'Scenic Beauty', 'Wildlife Photography'],
    isFavorite: false
  },
  {
    id: 26,
    name: 'Palamau Tiger Reserve',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 167,
    duration: '2-4 days',
    groupSize: '2-8 people',
    price: '₹10,500',
    description: 'A tiger reserve with rich biodiversity and ancient forts.',
    highlights: ['Tiger Reserve', 'Ancient Forts', 'Biodiversity', 'Jungle Safari'],
    isFavorite: false
  },
  {
    id: 27,
    name: 'Topchanchi Wildlife Sanctuary',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviews: 98,
    duration: '1-2 days',
    groupSize: '1-5 people',
    price: '₹3,200',
    description: 'A small but diverse sanctuary with various bird species and wildlife.',
    highlights: ['Bird Watching', 'Wildlife Spotting', 'Nature Walk', 'Photography'],
    isFavorite: false
  },
  {
    id: 28,
    name: 'Mahuadanr Wolf Sanctuary',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 112,
    duration: '1-2 days',
    groupSize: '1-6 people',
    price: '₹3,800',
    description: 'The only wolf sanctuary in India, home to the endangered Indian wolf.',
    highlights: ['Wolf Spotting', 'Endangered Species', 'Nature Conservation', 'Wildlife Photography'],
    isFavorite: false
  },
  {
    id: 29,
    name: 'Birsa Zoological Park',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    reviews: 145,
    duration: '1 day',
    groupSize: '1-8 people',
    price: '₹1,500',
    description: 'A well-maintained zoo with various animal species and educational programs.',
    highlights: ['Animal Encounters', 'Educational Programs', 'Family Friendly', 'Conservation'],
    isFavorite: false
  },
  {
    id: 30,
    name: 'Bhimbandh Wildlife Sanctuary',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 123,
    duration: '2-3 days',
    groupSize: '1-6 people',
    price: '₹5,500',
    description: 'A sanctuary known for its hot springs and diverse wildlife.',
    highlights: ['Hot Springs', 'Wildlife Spotting', 'Nature Trails', 'Relaxation'],
    isFavorite: false
  },

  // Adventure
  {
    id: 31,
    name: 'Patratu Valley',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 178,
    duration: '2-3 days',
    groupSize: '2-8 people',
    price: '₹7,500',
    description: 'A picturesque valley perfect for adventure activities and nature lovers.',
    highlights: ['Rock Climbing', 'Trekking', 'Camping', 'Nature Photography'],
    isFavorite: false
  },
  {
    id: 32,
    name: 'McCluskieganj',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 134,
    duration: '2-3 days',
    groupSize: '2-6 people',
    price: '₹6,200',
    description: 'A hill station with colonial heritage and adventure opportunities.',
    highlights: ['Colonial Heritage', 'Trekking', 'Nature Walk', 'Historical Sites'],
    isFavorite: false
  },
  {
    id: 33,
    name: 'Tata Steel Adventure Foundation',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 189,
    duration: '1-3 days',
    groupSize: '2-12 people',
    price: '₹8,500',
    description: 'A premier adventure destination with various outdoor activities.',
    highlights: ['Rock Climbing', 'Rappelling', 'Trekking', 'Adventure Sports'],
    isFavorite: false
  },
  {
    id: 34,
    name: 'Dimna Lake',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 156,
    duration: '1-2 days',
    groupSize: '1-8 people',
    price: '₹4,200',
    description: 'A beautiful lake surrounded by hills, perfect for water sports and adventure.',
    highlights: ['Water Sports', 'Boating', 'Fishing', 'Nature Photography'],
    isFavorite: false
  },
  {
    id: 35,
    name: 'Ghatshila',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviews: 112,
    duration: '2-3 days',
    groupSize: '2-6 people',
    price: '₹5,800',
    description: 'A scenic town with waterfalls and adventure opportunities.',
    highlights: ['Waterfall Trekking', 'Nature Photography', 'Local Culture', 'Adventure Sports'],
    isFavorite: false
  },
  {
    id: 36,
    name: 'Maithon Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 145,
    duration: '1-2 days',
    groupSize: '1-6 people',
    price: '₹3,500',
    description: 'A large dam with water sports and adventure activities.',
    highlights: ['Water Sports', 'Boating', 'Fishing', 'Dam Tour'],
    isFavorite: false
  },
  {
    id: 37,
    name: 'Panchet Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    reviews: 98,
    duration: '1-2 days',
    groupSize: '1-5 people',
    price: '₹3,200',
    description: 'Another beautiful dam with recreational activities and scenic views.',
    highlights: ['Scenic Views', 'Water Activities', 'Photography', 'Relaxation'],
    isFavorite: false
  },
  {
    id: 38,
    name: 'Tilaiya Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.1,
    reviews: 87,
    duration: '1-2 days',
    groupSize: '1-5 people',
    price: '₹2,800',
    description: 'A peaceful dam with water sports and nature activities.',
    highlights: ['Water Sports', 'Nature Activities', 'Peaceful Environment', 'Photography'],
    isFavorite: false
  },
  {
    id: 39,
    name: 'Konar Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.0,
    reviews: 76,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹2,500',
    description: 'A small but beautiful dam with recreational facilities.',
    highlights: ['Recreational Facilities', 'Water Activities', 'Nature Walk', 'Picnic'],
    isFavorite: false
  },
  {
    id: 40,
    name: 'Kanke Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviews: 123,
    duration: '1 day',
    groupSize: '1-6 people',
    price: '₹2,200',
    description: 'A popular picnic spot with water activities and scenic beauty.',
    highlights: ['Picnic Spot', 'Water Activities', 'Scenic Beauty', 'Family Friendly'],
    isFavorite: false
  },
  {
    id: 41,
    name: 'Getalsud Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    reviews: 95,
    duration: '1 day',
    groupSize: '1-5 people',
    price: '₹2,000',
    description: 'A serene dam with fishing and boating opportunities.',
    highlights: ['Fishing', 'Boating', 'Serene Environment', 'Nature Photography'],
    isFavorite: false
  },
  {
    id: 42,
    name: 'Chandil Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.1,
    reviews: 89,
    duration: '1-2 days',
    groupSize: '1-6 people',
    price: '₹3,000',
    description: 'A beautiful dam with water sports and adventure activities.',
    highlights: ['Water Sports', 'Adventure Activities', 'Scenic Views', 'Nature Walk'],
    isFavorite: false
  },
  {
    id: 43,
    name: 'Icha Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.0,
    reviews: 78,
    duration: '1 day',
    groupSize: '1-4 people',
    price: '₹2,300',
    description: 'A peaceful dam with recreational activities and natural beauty.',
    highlights: ['Recreational Activities', 'Natural Beauty', 'Peaceful Environment', 'Photography'],
    isFavorite: false
  },
  {
    id: 44,
    name: 'Khandoli Dam',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    reviews: 102,
    duration: '1-2 days',
    groupSize: '1-6 people',
    price: '₹2,800',
    description: 'A popular destination for water sports and adventure activities.',
    highlights: ['Water Sports', 'Adventure Activities', 'Nature Photography', 'Boating'],
    isFavorite: false
  },
  {
    id: 45,
    name: 'Mandar Hills',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 134,
    duration: '2-3 days',
    groupSize: '2-8 people',
    price: '₹5,500',
    description: 'Sacred hills with trekking opportunities and spiritual significance.',
    highlights: ['Trekking', 'Spiritual Significance', 'Sacred Temples', 'Nature Photography'],
    isFavorite: false
  }
]

export function FeaturedDestinations() {
  const [favorites, setFavorites] = useState<number[]>(
    featuredDestinations.filter(d => d.isFavorite).map(d => d.id)
  )
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Natural Sites', 'Cultural Heritage', 'Wildlife', 'Adventure']
  
  const filteredDestinations = selectedCategory === 'All' 
    ? featuredDestinations 
    : featuredDestinations.filter(d => d.category === selectedCategory)

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Featured <span className="text-gradient">Destinations</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the most captivating places in Jharkhand, from pristine hill stations 
            to magnificent waterfalls and rich wildlife sanctuaries.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredDestinations.map((destination, index) => (
            <div 
              key={destination.id}
              className="card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {destination.category}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      favorites.includes(destination.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-neutral-400'
                    }`} 
                  />
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                  <span className="text-xs text-neutral-500">({destination.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight) => (
                    <span 
                      key={highlight}
                      className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                  {destination.highlights.length > 2 && (
                    <span className="text-xs text-neutral-500">
                      +{destination.highlights.length - 2} more
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{destination.groupSize}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">{destination.price}</span>
                    <span className="text-sm text-neutral-500">/person</span>
                  </div>
                  <Button size="sm" className="group">
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/destinations">
            <Button variant="outline" size="lg" className="group">
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
