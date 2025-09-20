'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  Users, 
  MapPin, 
  FileText, 
  Settings, 
  Eye, 
  Edit, 
  Trash2, 
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Calendar,
  DollarSign,
  TrendingUp,
  UserCheck,
  Globe,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const stats = [
  { title: 'Total Visitors', value: '12,450', change: '+12%', icon: Users, color: 'text-blue-600' },
  { title: 'Bookings', value: '1,234', change: '+8%', icon: Calendar, color: 'text-green-600' },
  { title: 'Revenue', value: '₹2.4M', change: '+15%', icon: DollarSign, color: 'text-purple-600' },
  { title: 'Destinations', value: '45', change: '+3', icon: MapPin, color: 'text-orange-600' }
]

const recentBookings = [
  { id: 'BK001', name: 'Priya Sharma', package: 'Nature Trail', date: '2024-03-15', status: 'Confirmed', amount: '₹15,000' },
  { id: 'BK002', name: 'Rajesh Kumar', package: 'Cultural Heritage', date: '2024-03-14', status: 'Pending', amount: '₹22,000' },
  { id: 'BK003', name: 'Amit Singh', package: 'Adventure Expedition', date: '2024-03-13', status: 'Confirmed', amount: '₹18,500' },
  { id: 'BK004', name: 'Sunita Devi', package: 'Custom Tour', date: '2024-03-12', status: 'Cancelled', amount: '₹25,000' }
]

const recentPosts = [
  { id: 'P001', title: 'Hidden Waterfalls of Jharkhand', author: 'Priya Sharma', date: '2024-03-15', views: 1250, status: 'Published' },
  { id: 'P002', title: 'Tribal Art and Culture', author: 'Rajesh Kumar', date: '2024-03-12', views: 980, status: 'Published' },
  { id: 'P003', title: 'Wildlife Photography Guide', author: 'Amit Singh', date: '2024-03-10', views: 1450, status: 'Draft' }
]

const recentArtisans = [
  { id: 'A001', name: 'Rajesh Soren', craft: 'Wood Carving', location: 'Ranchi', status: 'Verified', joined: '2024-02-15' },
  { id: 'A002', name: 'Priya Devi', craft: 'Handloom Weaving', location: 'Hazaribagh', status: 'Pending', joined: '2024-03-01' },
  { id: 'A003', name: 'Amit Kumar', craft: 'Metal Work', location: 'Jamshedpur', status: 'Verified', joined: '2024-01-20' }
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'bookings', name: 'Bookings', icon: Calendar },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'artisans', name: 'Artisans', icon: Users },
    { id: 'destinations', name: 'Destinations', icon: MapPin },
    { id: 'settings', name: 'Settings', icon: Settings }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Admin Dashboard</h1>
          <p className="text-neutral-600">Manage your Jharkhand tourism platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-neutral-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    <p className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-neutral-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Bookings */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">Recent Bookings</h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-3">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div>
                      <p className="font-medium text-neutral-900">{booking.name}</p>
                      <p className="text-sm text-neutral-600">{booking.package}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-neutral-900">{booking.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">Recent Posts</h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div>
                      <p className="font-medium text-neutral-900">{post.title}</p>
                      <p className="text-sm text-neutral-600">by {post.author}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">{post.views} views</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bookings Tab */}
      {activeTab === 'bookings' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">All Bookings</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Booking ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Package</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-neutral-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">{booking.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">{booking.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{booking.package}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{booking.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">{booking.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-neutral-600 hover:text-neutral-900">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Content Tab */}
      {activeTab === 'content' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">Content Management</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Post
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-neutral-900 line-clamp-2">{post.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-4">by {post.author}</p>
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <span>{post.views} views</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-1 h-3 w-3" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="mr-1 h-3 w-3" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Artisans Tab */}
      {activeTab === 'artisans' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">Artisan Management</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Artisan
            </Button>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Craft</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Joined</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {recentArtisans.map((artisan) => (
                    <tr key={artisan.id} className="hover:bg-neutral-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">{artisan.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{artisan.craft}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{artisan.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          artisan.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {artisan.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{artisan.joined}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-neutral-600 hover:text-neutral-900">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <UserCheck className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Destinations Tab */}
      {activeTab === 'destinations' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">Destination Management</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Destination
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Netarhat', category: 'Hill Station', status: 'Active', visitors: 1250 },
              { name: 'Betalghat', category: 'Waterfall', status: 'Active', visitors: 890 },
              { name: 'Hazaribagh', category: 'Wildlife', status: 'Active', visitors: 1560 },
              { name: 'Deoghar', category: 'Temple', status: 'Active', visitors: 2100 }
            ].map((destination, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-neutral-900">{destination.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                    {destination.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-4">{destination.category}</p>
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <span>{destination.visitors} visitors</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-1 h-3 w-3" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="mr-1 h-3 w-3" />
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-neutral-900">Settings</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">General Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Site Name</label>
                  <input
                    type="text"
                    defaultValue="Jharkhand Tourism"
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Site Description</label>
                  <textarea
                    rows={3}
                    defaultValue="Discover the pristine beauty of Jharkhand through sustainable eco-tourism"
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Contact Email</label>
                  <input
                    type="email"
                    defaultValue="info@jharkhandtourism.com"
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">SEO Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Meta Title</label>
                  <input
                    type="text"
                    defaultValue="Jharkhand Tourism - Discover Nature, Culture & Heritage"
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Meta Description</label>
                  <textarea
                    rows={3}
                    defaultValue="Explore Jharkhand's pristine natural beauty, rich tribal culture, and authentic experiences"
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Keywords</label>
                  <input
                    type="text"
                    defaultValue="Jharkhand tourism, eco-tourism, tribal culture, natural sites"
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      )}
    </div>
  )
}
