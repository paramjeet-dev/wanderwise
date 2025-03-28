import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'

const Dashboard = () => {
  const handleSearch = async (form) => {
    console.log(form)
  }

  const [searchQuery, setSearchQuery] = useState("")
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-serif text-3xl font-bold">Welcome, Traveler</h1>
        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg shadow-md text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </form>
        <div className="relative">
          <FaUserCircle 
            size={40} 
            className="text-gray-700 cursor-pointer hover:text-gray-900 transition"
            onClick={() => setShowSettings(!showSettings)}
          />
          {showSettings && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
              <ul className="text-sm text-gray-700">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Upcoming Trips</h2>
          <ul className="text-gray-700">
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Trip 1</li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Trip 2</li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Trip 3</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Upcoming Tasks</h2>
          <ul className="text-gray-700">
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Task 1</li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Task 2</li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Task 3</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Travel Plans</h2>
          <ul className="text-gray-700">
            <li className="p-2 border-b-2">Plan your itinerary</li>
            <li className="p-2 border-b-2">Discover new places</li>
            <li className="p-2">Find best travel deals</li>
          </ul>
          <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Start Journey
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full p-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">Plan a Trip</button>
            <button className="w-full p-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">Check Budget</button>
            <button className="w-full p-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">Manage Tasks</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard