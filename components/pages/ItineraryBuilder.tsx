'use client'

import { useState, useEffect } from 'react'
import { Plus, Calendar, MapPin, Clock, Users, DollarSign, Save, Download, Share2, Trash2, Edit3 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ItineraryDay {
  id: string
  date: string
  activities: Activity[]
}

interface Activity {
  id: string
  name: string
  type: 'destination' | 'activity' | 'accommodation' | 'meal' | 'transport'
  duration: number // in hours
  cost: number
  location: string
  description: string
  time: string
}

const sampleActivities = [
  {
    id: '1',
    name: 'Netarhat Hill Station',
    type: 'destination' as const,
    duration: 4,
    cost: 2000,
    location: 'Netarhat',
    description: 'Visit the Queen of Chotanagpur with breathtaking sunrise views',
    time: '06:00'
  },
  {
    id: '2',
    name: 'Betalghat Waterfall',
    type: 'destination' as const,
    duration: 3,
    cost: 1500,
    location: 'Betalghat',
    description: 'Magnificent waterfall perfect for photography',
    time: '10:00'
  },
  {
    id: '3',
    name: 'Local Tribal Village Visit',
    type: 'activity' as const,
    duration: 2,
    cost: 800,
    location: 'Tribal Village',
    description: 'Experience authentic tribal culture and traditions',
    time: '14:00'
  },
  {
    id: '4',
    name: 'Traditional Lunch',
    type: 'meal' as const,
    duration: 1,
    cost: 500,
    location: 'Local Restaurant',
    description: 'Authentic Jharkhand cuisine',
    time: '12:00'
  }
]

export function ItineraryBuilder() {
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([])
  const [selectedDay, setSelectedDay] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [tripDetails, setTripDetails] = useState({
    title: '',
    duration: 3,
    budget: 10000,
    travelers: 2
  })

  const addDay = () => {
    const newDay: ItineraryDay = {
      id: Date.now().toString(),
      date: new Date(Date.now() + itinerary.length * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      activities: []
    }
    setItinerary([...itinerary, newDay])
  }

  const addActivity = (activity: Activity) => {
    const newItinerary = [...itinerary]
    newItinerary[selectedDay].activities.push(activity)
    setItinerary(newItinerary)
    setShowAddActivity(false)
  }

  const removeActivity = (dayIndex: number, activityId: string) => {
    const newItinerary = [...itinerary]
    newItinerary[dayIndex].activities = newItinerary[dayIndex].activities.filter(
      activity => activity.id !== activityId
    )
    setItinerary(newItinerary)
  }

  const calculateTotalCost = () => {
    return itinerary.reduce((total, day) => {
      return total + day.activities.reduce((dayTotal, activity) => dayTotal + activity.cost, 0)
    }, 0)
  }

  const calculateTotalDuration = () => {
    return itinerary.reduce((total, day) => {
      return total + day.activities.reduce((dayTotal, activity) => dayTotal + activity.duration, 0)
    }, 0)
  }

  const exportItinerary = () => {
    const data = {
      title: tripDetails.title || 'My Jharkhand Itinerary',
      details: tripDetails,
      itinerary,
      totalCost: calculateTotalCost(),
      totalDuration: calculateTotalDuration()
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'jharkhand-itinerary.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const saveItinerary = () => {
    // TODO: Implement save to database
    console.log('Saving itinerary:', { tripDetails, itinerary })
    alert('Itinerary saved successfully!')
  }

  return (
    <div className="card p-8 mb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Trip Planner</h2>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={saveItinerary}>
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" onClick={exportItinerary}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Trip Details */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Trip Title</label>
          <input
            type="text"
            value={tripDetails.title}
            onChange={(e) => setTripDetails({...tripDetails, title: e.target.value})}
            placeholder="My Jharkhand Adventure"
            className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Duration (Days)</label>
          <input
            type="number"
            value={tripDetails.duration}
            onChange={(e) => setTripDetails({...tripDetails, duration: parseInt(e.target.value)})}
            className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Budget (₹)</label>
          <input
            type="number"
            value={tripDetails.budget}
            onChange={(e) => setTripDetails({...tripDetails, budget: parseInt(e.target.value)})}
            className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Travelers</label>
          <input
            type="number"
            value={tripDetails.travelers}
            onChange={(e) => setTripDetails({...tripDetails, travelers: parseInt(e.target.value)})}
            className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Trip Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-neutral-50 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">{itinerary.length}</div>
          <div className="text-sm text-neutral-600">Days Planned</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">₹{calculateTotalCost().toLocaleString()}</div>
          <div className="text-sm text-neutral-600">Total Cost</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">{calculateTotalDuration()}h</div>
          <div className="text-sm text-neutral-600">Total Duration</div>
        </div>
      </div>

      {/* Days Navigation */}
      <div className="flex items-center space-x-4 mb-6 overflow-x-auto">
        {itinerary.map((day, index) => (
          <button
            key={day.id}
            onClick={() => setSelectedDay(index)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedDay === index
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            Day {index + 1}
          </button>
        ))}
        <button
          onClick={addDay}
          className="flex-shrink-0 px-4 py-2 border-2 border-dashed border-neutral-300 rounded-lg text-neutral-500 hover:border-primary-500 hover:text-primary-500 transition-colors"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Day
        </button>
      </div>

      {/* Selected Day Activities */}
      {itinerary.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900">
              Day {selectedDay + 1} - {itinerary[selectedDay]?.date}
            </h3>
            <Button onClick={() => setShowAddActivity(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Activity
            </Button>
          </div>

          <div className="space-y-3">
            {itinerary[selectedDay]?.activities.map((activity, index) => (
              <div key={activity.id} className="card p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{activity.name}</h4>
                    <p className="text-sm text-neutral-600">{activity.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-neutral-500 mt-1">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {activity.time} ({activity.duration}h)
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-3 w-3 mr-1" />
                        ₹{activity.cost}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {activity.location}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeActivity(selectedDay, activity.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}

            {itinerary[selectedDay]?.activities.length === 0 && (
              <div className="text-center py-8 text-neutral-500">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-neutral-300" />
                <p>No activities planned for this day</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setShowAddActivity(true)}
                >
                  Add Your First Activity
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {itinerary.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 mx-auto mb-4 text-neutral-300" />
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Start Planning Your Trip</h3>
          <p className="text-neutral-600 mb-6">Add your first day to begin creating your itinerary</p>
          <Button onClick={addDay}>
            <Plus className="mr-2 h-4 w-4" />
            Add First Day
          </Button>
        </div>
      )}

      {/* Add Activity Modal */}
      {showAddActivity && (
        <AddActivityModal
          onAdd={addActivity}
          onClose={() => setShowAddActivity(false)}
          sampleActivities={sampleActivities}
        />
      )}
    </div>
  )
}

function AddActivityModal({ onAdd, onClose, sampleActivities }: {
  onAdd: (activity: Activity) => void
  onClose: () => void
  sampleActivities: Activity[]
}) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [customActivity, setCustomActivity] = useState({
    name: '',
    type: 'destination' as const,
    duration: 2,
    cost: 1000,
    location: '',
    description: '',
    time: '09:00'
  })

  const handleAdd = () => {
    if (selectedActivity) {
      onAdd(selectedActivity)
    } else {
      onAdd({
        ...customActivity,
        id: Date.now().toString()
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-neutral-900">Add Activity</h3>
            <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600">
              ×
            </button>
          </div>

          <div className="space-y-6">
            {/* Sample Activities */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Popular Activities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sampleActivities.map((activity) => (
                  <button
                    key={activity.id}
                    onClick={() => setSelectedActivity(activity)}
                    className={`p-3 text-left rounded-lg border transition-colors ${
                      selectedActivity?.id === activity.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium text-neutral-900">{activity.name}</div>
                    <div className="text-sm text-neutral-600">{activity.description}</div>
                    <div className="text-xs text-neutral-500 mt-1">
                      {activity.duration}h • ₹{activity.cost} • {activity.location}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Activity */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Or Create Custom Activity</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Activity Name</label>
                  <input
                    type="text"
                    value={customActivity.name}
                    onChange={(e) => setCustomActivity({...customActivity, name: e.target.value})}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter activity name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Type</label>
                  <select
                    value={customActivity.type}
                    onChange={(e) => setCustomActivity({...customActivity, type: e.target.value as any})}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="destination">Destination</option>
                    <option value="activity">Activity</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="meal">Meal</option>
                    <option value="transport">Transport</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Duration (hours)</label>
                  <input
                    type="number"
                    value={customActivity.duration}
                    onChange={(e) => setCustomActivity({...customActivity, duration: parseInt(e.target.value)})}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Cost (₹)</label>
                  <input
                    type="number"
                    value={customActivity.cost}
                    onChange={(e) => setCustomActivity({...customActivity, cost: parseInt(e.target.value)})}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={customActivity.location}
                    onChange={(e) => setCustomActivity({...customActivity, location: e.target.value})}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Time</label>
                  <input
                    type="time"
                    value={customActivity.time}
                    onChange={(e) => setCustomActivity({...customActivity, time: e.target.value})}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-neutral-700 mb-1">Description</label>
                <textarea
                  value={customActivity.description}
                  onChange={(e) => setCustomActivity({...customActivity, description: e.target.value})}
                  className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  placeholder="Describe the activity"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleAdd}>
              Add Activity
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
