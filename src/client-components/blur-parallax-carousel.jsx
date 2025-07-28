"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import {
    ChevronLeft,
    ChevronRight,
    Camera,
    Heart,
    Bookmark,
    Calendar,
    MapPin,
    Star
} from "lucide-react"
import DetailedDayView from "./detailed-day-view"
function BlurParallaxCarousel({ dailyItinerary }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)
    const carouselRef = useRef(null)
    const x = useMotionValue(0)
    const scale = useTransform(x, [-150, 0, 150], [0.9, 1, 0.9])

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % dailyItinerary.length)

    const prevSlide = () =>
        setCurrentIndex(
            (prev) => (prev - 1 + dailyItinerary.length) % dailyItinerary.length
        )

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
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

    const handleDragEnd = (event, info) => {
        const threshold = 50
        const velocity = info.velocity.x

        if (Math.abs(velocity) > 500) {
            velocity > 0 ? prevSlide() : nextSlide()
        } else if (Math.abs(info.offset.x) > threshold) {
            info.offset.x > 0 ? prevSlide() : nextSlide()
        }
    }

    const handleImageClick = (day) => {
        setSelectedDay(day)
    }

    return (
        <>
            <div
                className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={carouselRef}
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-transparent z-0" />

                {/* Decorative Blurs */}
                {!isMobile && (
                    <>
                        <div className="absolute top-6 left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse z-10" />
                        <div className="absolute bottom-12 right-12 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-xl animate-pulse z-10" />
                        <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-lg animate-bounce z-10" />
                    </>
                )}

                <div className="flex items-center justify-center h-full relative z-20">
                    {dailyItinerary.map((day, index) => {
                        const distance = index - currentIndex
                        const absDistance = Math.abs(distance)
                        const isActive = index === currentIndex

                        // spacing
                        const xOffset = distance * (isMobile ? 100 : 300)
                        if (isMobile && absDistance > 1) return null

                        return (
                            <motion.div
                                key={index}
                                className="absolute flex items-center justify-center px-3 sm:px-6 md:px-8"
                                drag={isMobile ? "x" : false}
                                dragConstraints={{ left: -50, right: 50 }}
                                onDragEnd={handleDragEnd}
                                dragElastic={0.2}
                                dragMomentum={false}
                                whileDrag={{ scale: 0.98 }}
                                initial={{ opacity: 0, scale: 0.8, x: xOffset }}
                                animate={{
                                    opacity: isActive
                                        ? 1
                                        : isMobile
                                            ? absDistance > 0
                                                ? 0.3
                                                : 1
                                            : absDistance > 2
                                                ? 0
                                                : absDistance === 0
                                                    ? 1
                                                    : 0.6,
                                    scale: isActive
                                        ? 1
                                        : isMobile
                                            ? 0.85
                                            : absDistance === 1
                                                ? 0.85
                                                : absDistance === 2
                                                    ? 0.7
                                                    : 0.6,
                                    x: xOffset,
                                    z: isActive ? 0 : -absDistance * 100,
                                    rotateY: isMobile ? 0 : distance * 15,
                                    filter: `blur(${absDistance * (isMobile ? 1 : 1.5)}px) brightness(${isActive ? 1 : 0.7
                                        })`,
                                }}
                                transition={{
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 100,
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                    zIndex: isActive ? 10 : 10 - absDistance,
                                }}
                            >
                                <div
                                    className="relative w-full max-w-md sm:max-w-md md:max-w-2xl h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl cursor-pointer"
                                    onClick={() => handleImageClick(day)}
                                >
                                    {/* Main Image */}
                                    <img
                                        src={day.image || "/placeholder.svg"}
                                        alt={day.title}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
                                    />

                                    {/* Gradient Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />

                                    {/* Click Indicator */}
                                    {isActive && (
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30">
                                                <Camera className="w-8 h-8 text-white" />
                                            </div>
                                            <p className="text-white text-sm text-center mt-2 font-medium">
                                                Click for details
                                            </p>
                                        </div>
                                    )}

                                    {/* Rating Badge */}
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 border border-white/30">
                                        <div className="flex items-center space-x-1 sm:space-x-2 text-white">
                                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-xs sm:text-sm font-semibold">{day.rating}</span>
                                        </div>
                                    </div>

                                    {/* Difficulty Badge */}
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 border border-white/30">
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
                                    </div>

                                    {/* Floating Actions */}
                                    {!isMobile && isActive && (
                                        <div className="absolute top-16 right-4 sm:top-20 sm:right-6 flex flex-col space-y-2 sm:space-y-3 opacity-0 hover:opacity-100 transition-opacity">
                                            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all">
                                                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </button>
                                            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all">
                                                <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </button>
                                        </div>
                                    )}

                                    {/* Main Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                                        <div className="flex items-center mb-3 sm:mb-4">
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
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                                            {day.title}
                                        </h3>

                                        {isActive && (
                                            <>
                                                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                                    {day.activities.slice(0, isMobile ? 1 : 2).map((act, i) => (
                                                        <div key={i} className="flex items-start space-x-2 sm:space-x-3">
                                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-1.5 sm:mt-2" />
                                                            <p className="text-white/90 text-xs sm:text-sm">{act}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                                    {day.highlights.slice(0, isMobile ? 2 : 3).map((hl, i) => (
                                                        <div
                                                            key={i}
                                                            className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 border border-white/20"
                                                        >
                                                            <span className="text-white text-xs sm:text-sm">
                                                                {hl}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                                                    <div className="flex items-start space-x-2 sm:space-x-3">
                                                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-1.5 sm:p-2">
                                                            <span className="text-xs">💡</span>
                                                        </div>
                                                        <div>
                                                            <p className="text-white/90 text-xs sm:text-sm font-semibold mb-1">
                                                                Pro Tip
                                                            </p>
                                                            <p className="text-white/80 text-xs sm:text-sm">
                                                                {day.tips}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Next / Prev */}
                <button
                    className="hidden sm:block absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition duration-300 shadow-lg"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                    className="hidden sm:block absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition duration-300 shadow-lg"
                    onClick={nextSlide}
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                    {dailyItinerary.map((_, idx) => (
                        <button
                            key={idx}
                            className={`relative rounded-full transition duration-500 ${idx === currentIndex
                                ? "w-8 h-2 sm:w-10 sm:h-2.5 md:w-12 md:h-3 bg-gradient-to-r from-blue-400 to-purple-400"
                                : "w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/30 hover:bg-white/50"
                                }`}
                            onClick={() => setCurrentIndex(idx)}
                        >
                            {idx === currentIndex && (
                                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white/10">
                    <div
                        className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-500"
                        style={{
                            width: `${((currentIndex + 1) / dailyItinerary.length) * 100}%`,
                        }}
                    />
                </div>

                {/* Mobile Swipe Hint */}
                {isMobile && (
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/60 text-xs flex items-center space-x-2">
                        <span>
                            Day {currentIndex + 1} of {dailyItinerary.length} • Swipe to navigate
                        </span>
                        <div className="animate-pulse">→</div>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {selectedDay && (
                    <DetailedDayView
                        day={selectedDay}
                        onClose={() => setSelectedDay(null)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export default BlurParallaxCarousel
