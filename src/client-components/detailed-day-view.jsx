"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Sun,
    Sunset,
    Moon,
    MapPin,
    Calendar,
    Clock,
    X,
    Star,
} from "lucide-react"

function DetailedDayView({ day, onClose }) {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [])
    const timeSlots = [
        {
            key: "morning",
            icon: Sun,
            color: "from-yellow-400 to-orange-500",
            bgColor: "bg-yellow-50",
            iconColor: "text-yellow-600",
        },
        {
            key: "afternoon",
            icon: Sunset,
            color: "from-orange-400 to-red-500",
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600",
        },
        {
            key: "evening",
            icon: Moon,
            color: "from-purple-400 to-indigo-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600",
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={day.image || "/placeholder.svg"}
                        alt={day.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Header Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center mb-4">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 mr-4">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-white/80 text-sm font-medium">
                                    Day {day.day}
                                </span>
                                <h1 className="text-3xl font-bold">{day.title}</h1>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-white">
                                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                                {day.rating}
                            </Badge>
                            <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-white">
                                {day.difficulty}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Timeline Content */}
                <div className="p-6 max-h-[calc(90vh-16rem)] overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                        <Clock className="w-6 h-6 mr-3 text-blue-500" />
                        Daily Timeline
                    </h2>

                    <div className="relative">
                        {/* Vertical Dotted Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-400 to-purple-400 opacity-30" />
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300" />

                        <div className="space-y-8">
                            {timeSlots.map((slot, index) => {
                                const schedule = day.detailedSchedule[slot.key]
                                const IconComponent = slot.icon

                                return (
                                    <motion.div
                                        key={slot.key}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="relative flex items-start space-x-6"
                                    >
                                        {/* Timeline Pin */}
                                        <div
                                            className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${slot.color} flex items-center justify-center shadow-lg`}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />

                                            {/* Map Pin */}
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                                                <MapPin className="w-3 h-3 text-white" />
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1">
                                            <Card
                                                className={`${slot.bgColor} border-0 shadow-md hover:shadow-lg transition-all duration-300`}
                                            >
                                                <CardContent className="p-6">
                                                    <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                                                        {/* Text Content */}
                                                        <div className="flex-1 mb-4 md:mb-0">
                                                            <div className="flex items-center mb-3">
                                                                <Badge
                                                                    variant="outline"
                                                                    className={`${slot.iconColor} border-current mr-3`}
                                                                >
                                                                    {schedule.time}
                                                                </Badge>
                                                                <h3 className="text-xl font-bold text-gray-800">
                                                                    {schedule.activity}
                                                                </h3>
                                                            </div>

                                                            <div className="flex items-center mb-3 text-gray-600">
                                                                <MapPin className="w-4 h-4 mr-2" />
                                                                <span className="font-medium">
                                                                    {schedule.location}
                                                                </span>
                                                            </div>

                                                            <p className="text-gray-700 leading-relaxed">
                                                                {schedule.description}
                                                            </p>
                                                        </div>

                                                        {/* Image */}
                                                        <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                                                            <img
                                                                src={schedule.image || "/placeholder.svg"}
                                                                alt={schedule.activity}
                                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Pro Tip Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-3 flex-shrink-0">
                                <span className="text-lg">💡</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Pro Tip</h4>
                                <p className="text-gray-700 leading-relaxed">{day.tips}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default DetailedDayView
