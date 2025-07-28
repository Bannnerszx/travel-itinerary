"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Train,
  MapPin,
  ArrowLeft,
  Camera as CameraIcon,
  Utensils,
  Bed
} from "lucide-react"
import BlurParallaxCarousel from "./blur-parallax-carousel"
import { locations } from "@/data/locations"

export default function TravelItinerary() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }

  const handleBackToDestinations = () => {
    setSelectedLocation(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Japan Travel Itinerary
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Discover the beauty of Nagoya, Osaka, and Kyoto
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!selectedLocation ? (
            <motion.div
              key="destinations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                Choose Your Destination
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className="cursor-pointer transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:shadow-blue-200/50 bg-white/80 backdrop-blur-sm border-0 p-0"
                      onClick={() => handleLocationSelect(location)}
                    >
                      <CardContent className="p-0 border-0">
                        {/* Mobile Layout */}
                        <div className="block sm:hidden">
                          <div className="relative h-64 w-full rounded-t-lg overflow-hidden">
                            <img
                              src={location.image || "/placeholder.svg"}
                              alt={location.name}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <h3 className="text-xl font-bold text-white mb-1">
                                {location.name}
                              </h3>
                              <p className="text-sm text-white/90">
                                {location.prefecture}
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge className="flex items-center bg-blue-100 text-blue-700">
                                <Clock className="w-3 h-3 mr-1" />
                                <span className="text-xs">
                                  {location.duration}
                                </span>
                              </Badge>
                              <Badge variant={'outline'} className="flex items-center border-purple-200 text-purple-700">
                                <Train className="w-3 h-3 mr-1" />
                                <span className="text-xs">
                                  Transportation
                                </span>
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {location.highlights.slice(0, 3).map((h, i) => (
                                <Badge variant={'outline'} key={i} className="text-xs border-gray-200 text-gray-600">
                                  {h}
                                </Badge>
                              ))}
                              {location.highlights.length > 3 && (
                                <Badge variant={'outline'} className="text-xs border-gray-200 text-gray-600">
                                  +{location.highlights.length - 3}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">
                                Tap to explore
                              </span>
                              <MapPin className="w-5 h-5 text-blue-500" />
                            </div>
                          </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden sm:flex items-center space-x-6">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg">
                            <img
                              src={location.image || "/placeholder.svg"}
                              alt={location.name}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1 truncate">
                              {location.name}
                            </h3>
                            <p className="text-base text-gray-600 mb-3 truncate">
                              {location.prefecture}
                            </p>
                            <div className="flex items-center space-x-4 mb-3">
                              <Badge className="flex items-center bg-blue-100 text-blue-700">
                                <Clock className="w-3 h-3 mr-1" />
                                <span className="text-sm">
                                  {location.duration}
                                </span>
                              </Badge>
                              <Badge className="flex items-center border-purple-200 text-purple-700">
                                <Train className="w-3 h-3 mr-1" />
                                <span className="text-sm">
                                  Transportation
                                </span>
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {location.highlights.slice(0, 2).map((h, i) => (
                                <Badge key={i} className="text-xs border-gray-200 text-gray-600">
                                  {h}
                                </Badge>
                              ))}
                              {location.highlights.length > 2 && (
                                <Badge className="text-xs border-gray-200 text-gray-600">
                                  +{location.highlights.length - 2}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <MapPin className="w-6 h-6 text-blue-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="selected-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              >
                <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg sm:shadow-xl p-0">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <Badge
                      as="button"
                      onClick={handleBackToDestinations}
                      className="flex items-center bg-white/20 backdrop-blur-md border-white/30 text-white text-xs sm:text-sm px-2 py-1 rounded touch-manipulation"
                    >
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Back
                    </Badge>
                  </div>

                  {/* Header Image */}
                  <div className="relative h-92">
                    <img
                      src={selectedLocation.image || "/placeholder.svg"}
                      alt={selectedLocation.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                        {selectedLocation.name}
                      </h1>
                      <p className="text-sm opacity-90 mb-2">
                        {selectedLocation.prefecture}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="flex items-center bg-white/20 backdrop-blur-md border-white/30 text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {selectedLocation.duration}
                        </Badge>
                        <Badge className="flex items-center bg-white/20 backdrop-blur-md border-white/30 text-xs">
                          <Train className="w-3 h-3 mr-1" />
                          Transport
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md sm:shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    {/* Transportation */}
                    <div className="flex items-start space-x-3 mb-4">
                      <Train className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          Transportation
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {selectedLocation.transportation}
                        </p>
                      </div>
                    </div>

                    {/* Best Time to Visit */}
                    <div className="flex items-start space-x-3 mb-4">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          Best Time to Visit
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {selectedLocation.bestTime}
                        </p>
                      </div>
                    </div>

                    {/* Recommended Hotels */}
                    <div className="flex items-start space-x-3">
                      <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          Our Hotel
                        </h4>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600">
                          {selectedLocation.hotels.map((hotel, i) => (
                            <li key={i}>{hotel}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md sm:shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base flex items-center">
                      <Utensils className="w-4 h-4 mr-2 text-red-500" />
                      Must-Visit Highlights
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedLocation.highlights.map((h, i) => (
                        <Badge variant={'outline'} key={i} className="text-xs border-gray-200 text-gray-600">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  <CameraIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-purple-500" />
                  Daily Itinerary
                </h2>
                <BlurParallaxCarousel dailyItinerary={selectedLocation.dailyItinerary} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
