"use client"

import React, { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import {
  MapPin,
  Clock,
  Camera,
  Utensils,
  Train,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowLeft,
  Star,
  Heart,
  Bookmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlurParallaxCarousel } from "./blur-parallax-carousel"
// sample data
const locations = [
  {
    id: "nagoya",
    name: "Nagoya",
    prefecture: "Aichi Prefecture",
    image: "/placeholder.svg?height=300&width=400&text=Nagoya+Skyline",
    duration: "3 Days",
    highlights: ["Nagoya Castle", "Atsuta Shrine", "Osu Shopping District", "Toyota Museum"],
    activities: {
      morning: "Visit Nagoya Castle and explore the surrounding gardens",
      afternoon: "Discover Atsuta Shrine and traditional crafts at Osu Kannon",
      evening: "Experience local cuisine in Sakae district",
    },
    transportation: "JR Tokaido Shinkansen from Tokyo (1h 40m)",
    bestTime: "Spring (March-May) for cherry blossoms",
    dailyItinerary: [
      {
        day: 1,
        title: "Historic Nagoya",
        image: "/placeholder.svg?height=400&width=600&text=Nagoya+Castle+Cherry+Blossoms",
        activities: [
          "Morning: Explore Nagoya Castle and its gardens",
          "Afternoon: Visit Tokugawa Art Museum",
          "Evening: Dinner in Sakae district",
        ],
        highlights: ["Nagoya Castle", "Tokugawa Art Museum", "Sakae nightlife"],
        tips: "Book castle tickets online to skip the queue",
        rating: 4.8,
        difficulty: "Easy",
      },
      {
        day: 2,
        title: "Spiritual Journey",
        image: "/placeholder.svg?height=400&width=600&text=Atsuta+Shrine+Traditional",
        activities: [
          "Morning: Atsuta Shrine pilgrimage",
          "Afternoon: Osu Kannon Temple and shopping",
          "Evening: Traditional kaiseki dinner",
        ],
        highlights: ["Atsuta Shrine", "Osu Shopping District", "Local cuisine"],
        tips: "Try the famous Nagoya-style chicken wings",
        rating: 4.6,
        difficulty: "Easy",
      },
      {
        day: 3,
        title: "Modern Marvels",
        image: "/placeholder.svg?height=400&width=600&text=Toyota+Museum+Technology",
        activities: [
          "Morning: Toyota Commemorative Museum",
          "Afternoon: Sky Promenade observation deck",
          "Evening: Farewell dinner at Atsuta Horaiken",
        ],
        highlights: ["Toyota Museum", "City views", "Hitsumabushi eel"],
        tips: "Reserve Horaiken in advance - it's very popular",
        rating: 4.7,
        difficulty: "Moderate",
      },
    ],
  },
  {
    id: "osaka",
    name: "Osaka",
    prefecture: "Osaka Prefecture",
    image: "/placeholder.svg?height=300&width=400&text=Osaka+Castle",
    duration: "4 Days",
    highlights: ["Osaka Castle", "Dotonbori", "Universal Studios Japan", "Kuromon Market"],
    activities: {
      morning: "Explore Osaka Castle and its museum",
      afternoon: "Shop and eat at Kuromon Ichiba Market",
      evening: "Experience the vibrant nightlife in Dotonbori",
    },
    transportation: "30 minutes from Nagoya via Kintetsu Limited Express",
    bestTime: "Autumn (September-November) for comfortable weather",
    dailyItinerary: [
      {
        day: 1,
        title: "Castle & Culture",
        image: "/placeholder.svg?height=400&width=600&text=Osaka+Castle+Sunset",
        activities: [
          "Morning: Osaka Castle and museum",
          "Afternoon: Osaka Museum of History",
          "Evening: Dotonbori food tour",
        ],
        highlights: ["Osaka Castle", "Historical exhibits", "Street food"],
        tips: "Visit castle early to avoid crowds",
        rating: 4.9,
        difficulty: "Easy",
      },
      {
        day: 2,
        title: "Universal Adventure",
        image: "/placeholder.svg?height=400&width=600&text=Universal+Studios+Wizarding+World",
        activities: ["Full day: Universal Studios Japan", "Evening: CityWalk dining and shopping"],
        highlights: ["Harry Potter World", "Nintendo World", "Themed attractions"],
        tips: "Buy Express Pass for popular rides",
        rating: 4.8,
        difficulty: "Challenging",
      },
      {
        day: 3,
        title: "Market & Temples",
        image: "/placeholder.svg?height=400&width=600&text=Kuromon+Market+Fresh+Seafood",
        activities: [
          "Morning: Kuromon Ichiba Market",
          "Afternoon: Sumiyoshi Taisha Shrine",
          "Evening: Shinsekai district exploration",
        ],
        highlights: ["Fresh seafood", "Ancient shrine", "Retro atmosphere"],
        tips: "Try the famous takoyaki and okonomiyaki",
        rating: 4.7,
        difficulty: "Easy",
      },
      {
        day: 4,
        title: "Modern Osaka",
        image: "/placeholder.svg?height=400&width=600&text=Umeda+Sky+Building+Night",
        activities: [
          "Morning: Umeda Sky Building",
          "Afternoon: Shinsaibashi shopping",
          "Evening: Rooftop bar with city views",
        ],
        highlights: ["Sky observatory", "Shopping districts", "Night views"],
        tips: "Book sunset viewing at Sky Building",
        rating: 4.6,
        difficulty: "Moderate",
      },
    ],
  },
  {
    id: "kyoto",
    name: "Kyoto",
    prefecture: "Kyoto Prefecture",
    image: "/placeholder.svg?height=300&width=400&text=Fushimi+Inari+Torii",
    duration: "5 Days",
    highlights: ["Fushimi Inari Shrine", "Kinkaku-ji Temple", "Arashiyama Bamboo Grove", "Gion District"],
    activities: {
      morning: "Visit Fushimi Inari Shrine and hike the torii trail",
      afternoon: "Explore Kinkaku-ji (Golden Pavilion) and Ryoan-ji Temple",
      evening: "Walk through historic Gion district and spot geishas",
    },
    transportation: "45 minutes from Osaka via Keihan Main Line",
    bestTime: "Spring for cherry blossoms or autumn for fall colors",
    dailyItinerary: [
      {
        day: 1,
        title: "Golden Temples",
        image: "/placeholder.svg?height=400&width=600&text=Kinkaku-ji+Golden+Reflection",
        activities: [
          "Morning: Kinkaku-ji (Golden Pavilion)",
          "Afternoon: Ryoan-ji rock garden",
          "Evening: Traditional dinner in Pontocho",
        ],
        highlights: ["Golden Pavilion", "Zen gardens", "Historic alley"],
        tips: "Visit Kinkaku-ji early for the best photos",
        rating: 4.9,
        difficulty: "Easy",
      },
      {
        day: 2,
        title: "Thousand Torii",
        image: "/placeholder.svg?height=400&width=600&text=Fushimi+Inari+Orange+Torii+Path",
        activities: [
          "Morning: Fushimi Inari shrine hike",
          "Afternoon: Sake tasting in Fushimi district",
          "Evening: Gion district geisha spotting",
        ],
        highlights: ["Torii tunnel", "Sake breweries", "Geisha culture"],
        tips: "Hike early morning for fewer crowds",
        rating: 4.8,
        difficulty: "Moderate",
      },
      {
        day: 3,
        title: "Bamboo & Monkeys",
        image: "/placeholder.svg?height=400&width=600&text=Arashiyama+Bamboo+Forest+Light",
        activities: [
          "Morning: Arashiyama Bamboo Grove",
          "Afternoon: Tenryu-ji Temple and gardens",
          "Evening: Traditional kaiseki dinner",
        ],
        highlights: ["Bamboo forest", "Temple gardens", "Fine dining"],
        tips: "Take the scenic train to Arashiyama",
        rating: 4.7,
        difficulty: "Easy",
      },
      {
        day: 4,
        title: "Eastern Temples",
        image: "/placeholder.svg?height=400&width=600&text=Kiyomizu-dera+Wooden+Temple",
        activities: [
          "Morning: Kiyomizu-dera Temple",
          "Afternoon: Sannenzaka and Ninenzaka streets",
          "Evening: Tea ceremony experience",
        ],
        highlights: ["Wooden temple", "Historic streets", "Tea culture"],
        tips: "Wear comfortable shoes for temple stairs",
        rating: 4.8,
        difficulty: "Moderate",
      },
      {
        day: 5,
        title: "Imperial Farewell",
        image: "/placeholder.svg?height=400&width=600&text=Kyoto+Imperial+Palace+Gardens",
        activities: [
          "Morning: Kyoto Imperial Palace",
          "Afternoon: Nijo Castle",
          "Evening: Farewell dinner with maiko performance",
        ],
        highlights: ["Imperial gardens", "Shogun castle", "Cultural show"],
        tips: "Book palace tour in advance",
        rating: 4.9,
        difficulty: "Easy",
      },
    ],
  },
]

export default function TravelItinerary() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleLocationSelect = location => {
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
            /* Destination Selection View */
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
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-6">
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
                      className="cursor-pointer transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:shadow-blue-200/50 bg-white/80 backdrop-blur-sm border-0 touch-manipulation"
                      onClick={() => handleLocationSelect(location)}
                    >
                      <CardContent className="p-0 sm:p-6">
                        {/* Mobile: Vertical Layout */}
                        <div className="block sm:hidden">
                          <div className="relative h-full w-full rounded-t-lg overflow-hidden">
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
                              <Badge variant="secondary" className="flex items-center bg-blue-100 text-blue-700">
                                <Clock className="w-3 h-3 mr-1" />
                                <span className="text-xs">{location.duration}</span>
                              </Badge>
                              <Badge variant="outline" className="flex items-center border-purple-200 text-purple-700">
                                <Train className="w-3 h-3 mr-1" />
                                <span className="text-xs">Transportation</span>
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {location.highlights.slice(0, 3).map((highlight, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs border-gray-200 text-gray-600">
                                  {highlight}
                                </Badge>
                              ))}
                              {location.highlights.length > 3 && (
                                <Badge variant="outline" className="text-xs border-gray-200 text-gray-600">
                                  +{location.highlights.length - 3}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Tap to explore</span>
                              <MapPin className="w-5 h-5 text-blue-500" />
                            </div>
                          </div>
                        </div>

                        {/* Desktop: Horizontal Layout */}
                        <div className="hidden sm:flex items-center space-x-6">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
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
                              <Badge variant="secondary" className="flex items-center bg-blue-100 text-blue-700">
                                <Clock className="w-3 h-3 mr-1" />
                                <span className="text-sm">{location.duration}</span>
                              </Badge>
                              <Badge variant="outline" className="flex items-center border-purple-200 text-purple-700">
                                <Train className="w-3 h-3 mr-1" />
                                <span className="text-sm">Transportation</span>
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {location.highlights.slice(0, 2).map((highlight, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs border-gray-200 text-gray-600">
                                  {highlight}
                                </Badge>
                              ))}
                              {location.highlights.length > 2 && (
                                <Badge variant="outline" className="text-xs border-gray-200 text-gray-600">
                                  +{location.highlights.length - 2}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center text-blue-500 flex-shrink-0">
                            <MapPin className="w-6 h-6" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Selected Location View */
            <motion.div
              key="selected-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Animated Header Card */}
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              >
                <Card className="relative overflow-hidden bg-transparent p-0 backdrop-blur-sm border-0 shadow-lg sm:shadow-xl">
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleBackToDestinations}
                      className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 text-white shadow-lg text-xs sm:text-sm touch-manipulation"
                    >
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Back
                    </Button>
                  </div>

                  {/* Mobile: Vertical Header */}
                  <div className="block sm:hidden">
                    <div className="relative h-full"> {/* Changed h-full to h-screen */}
                      <img
                        src={selectedLocation.image || "/placeholder.svg"}
                        alt={selectedLocation.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                          {selectedLocation.name}
                        </h1>
                        <p className="text-sm opacity-90 mb-3">
                          {selectedLocation.prefecture}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-white/20 backdrop-blur-md border-white/30 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {selectedLocation.duration}
                          </Badge>
                          <Badge variant="secondary" className="bg-white/20 backdrop-blur-md border-white/30 text-xs">
                            <Train className="w-3 h-3 mr-1" />
                            Transport
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Horizontal Header */}
                  <div className="hidden sm:block relative h-56 md:h-64">
                    <img
                      src={selectedLocation.image || "/placeholder.svg"}
                      alt={selectedLocation.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                      <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                          {selectedLocation.name}
                        </h1>
                        <p className="text-base md:text-lg opacity-90 mb-4">
                          {selectedLocation.prefecture}
                        </p>
                        <div className="flex items-center justify-center space-x-6">
                          <Badge
                            variant="secondary"
                            className="flex items-center bg-white/20 backdrop-blur-md border-white/30 text-sm"
                          >
                            <Clock className="w-4 h-4 mr-2" />
                            {selectedLocation.duration}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="flex items-center bg-white/20 backdrop-blur-md border-white/30 text-sm"
                          >
                            <Train className="w-4 h-4 mr-2" />
                            {selectedLocation.transportation.split("(")[0]}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Travel Information */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md sm:shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                      <Train className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          Transportation
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {selectedLocation.transportation}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          Best Time to Visit
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {selectedLocation.bestTime}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md sm:shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-sm sm:text-base">
                      <Utensils className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                      Must-Visit Highlights
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedLocation.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="border-gray-200 text-gray-600 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Daily Itinerary Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent flex items-center">
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-500 flex-shrink-0" />
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
