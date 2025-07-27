"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  Bookmark,
  Calendar,
} from "lucide-react"

export function BlurParallaxCarousel({ dailyItinerary }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef(null)
  const x = useMotionValue(0)
  const scale = useTransform(x, [-150, 0, 150], [0.9, 1, 0.9])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = () =>
    setCurrentIndex(prev => (prev + 1) % dailyItinerary.length)

  const prevSlide = () =>
    setCurrentIndex(
      prev => (prev - 1 + dailyItinerary.length) % dailyItinerary.length
    )

  const handleDragEnd = (event, info) => {
    const threshold = 50
    if (info.offset.x > threshold) prevSlide()
    else if (info.offset.x < -threshold) nextSlide()
  }

  const getDifficultyColor = diff => {
    switch (diff) {
      case "Easy":
        return "bg-green-500"
      case "Moderate":
        return "bg-yellow-500"
      case "Challenging":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div
      className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 z-0" />

      {/* Floating Decoratives */}
      {!isMobile && (
        <>
          <div className="absolute top-6 left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse z-10" />
          <div className="absolute bottom-12 right-12 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-xl animate-pulse delay-1000 z-10" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-lg animate-bounce z-10" />
        </>
      )}

      <motion.div
        ref={carouselRef}
        className="flex transition-all duration-700 ease-out h-full relative z-20"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, x, scale }}
        drag={isMobile ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        dragElastic={0.2}
      >
        {dailyItinerary.map((day, index) => {
          const distance = Math.abs(index - currentIndex)
          const isActive = index === currentIndex
          const isPrev =
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === dailyItinerary.length - 1)
          const isNext =
            index === currentIndex + 1 ||
            (currentIndex === dailyItinerary.length - 1 && index === 0)

          return (
            <motion.div
              key={`${day.day}-${day.title}`}
              className="min-w-full h-full relative flex items-center justify-center px-3 sm:px-6 md:px-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isActive
                  ? 1
                  : isMobile
                  ? 0.3
                  : isPrev || isNext
                  ? 0.6
                  : 0.3,
                scale: isActive
                  ? 1
                  : isMobile
                  ? 0.95
                  : isPrev || isNext
                  ? 0.85
                  : 0.7,
                rotateY: isMobile
                  ? 0
                  : isActive
                  ? 0
                  : isPrev
                  ? -10
                  : isNext
                  ? 10
                  : distance > 1
                  ? -20
                  : 20,
                filter: `blur(${
                  isMobile ? distance * 1 : distance * 1.5
                }px) brightness(${isActive ? 1 : 0.7})`,
                x: isMobile ? 0 : isActive ? 0 : isPrev ? -30 : isNext ? 30 : 0,
              }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl h-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
                {/* Main Image */}
                <img
                  src={day.image || "/placeholder.svg"}
                  alt={day.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />

                {/* Rating */}
                <motion.div
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 border border-white/30"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: isActive ? 1 : 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2 text-white">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs sm:text-sm font-semibold">
                      {day.rating}
                    </span>
                  </div>
                </motion.div>

                {/* Difficulty */}
                <motion.div
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 border border-white/30"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: isActive ? 1 : 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2 text-white">
                    <div
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getDifficultyColor(
                        day.difficulty
                      )}`}
                    />
                    <span className="text-xs sm:text-sm font-medium">
                      {day.difficulty}
                    </span>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                {!isMobile && (
                  <motion.div
                    className="absolute top-16 right-4 sm:top-20 sm:right-6 flex flex-col space-y-2 sm:space-y-3"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: isActive && isHovered ? 1 : 0,
                    }}
                    transition={{ delay: 0.5 }}
                  >
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all">
                      <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </motion.div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  {/* Day Counter */}
                  <motion.div
                    className="flex items-center mb-3 sm:mb-4"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-white/80 text-xs sm:text-sm font-medium">
                        Day
                      </span>
                      <span className="text-white text-xl sm:text-2xl font-bold ml-2">
                        {day.day}
                      </span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {day.title}
                  </motion.h3>

                  {/* Activities */}
                  <motion.div
                    className="space-y-2 sm:space-y-3 mb-4 sm:mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {day.activities
                      .slice(0, isMobile ? 1 : 2)
                      .map((activity, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start space-x-2 sm:space-x-3"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: isActive ? 1 : 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                            {activity}
                          </p>
                        </motion.div>
                      ))}
                  </motion.div>

                  {/* Highlights */}
                  <motion.div
                    className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {day.highlights
                      .slice(0, isMobile ? 2 : 3)
                      .map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 border border-white/20"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: isActive ? 1 : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{
                            delay: 0.7 + idx * 0.1,
                            type: "spring",
                          }}
                        >
                          <span className="text-white text-xs sm:text-sm font-medium">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                  </motion.div>

                  {/* Pro Tip */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: isActive ? 1 : 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                        <span className="text-xs">💡</span>
                      </div>
                      <div>
                        <p className="text-white/90 text-xs sm:text-sm font-semibold mb-1">
                          Pro Tip
                        </p>
                        <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                          {day.tips}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Nav Buttons */}
      <motion.button
        className="hidden sm:block absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg z-30 touch-manipulation"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      <motion.button
        className="hidden sm:block absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg z-30 touch-manipulation"
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      {/* Dots */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {dailyItinerary.map((_, index) => (
          <motion.button
            key={index}
            className={`relative overflow-hidden rounded-full transition-all duration-500 touch-manipulation ${
              index === currentIndex
                ? "w-8 h-2 sm:w-10 sm:h-2.5 md:w-12 md:h-3 bg-gradient-to-r from-blue-400 to-purple-400"
                : "w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white/10 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentIndex + 1) / dailyItinerary.length) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Mobile Swipe Cue */}
      {isMobile && (
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/60 text-xs flex items-center space-x-2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span>Swipe to navigate</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            →
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
