
export const locations = [
  // Updated “nagoya” entry for August 7–9
  {
    id: "nagoya",
    name: "Nagoya",
    prefecture: "Aichi Prefecture",
    image: "/nagoya.webp",
    duration: "3 Days",
    highlights: [
      "Nagoya City Tour",
      "Shirakawa‑Go Excursion",
      "Shinkansen Ride to Osaka"
    ],
    activities: {
      morning: "Fly from Philippines to Nagoya",
      afternoon: "Sightseeing around Nagoya City",
      evening: "Enjoy local cuisine in Sakae"
    },
    transportation: "Chubu Centrair → city by Meitetsu; Shinkansen to Osaka on Day 3",
    bestTime: "Any time—your trip is date‑locked",
    hotels: [
      "Richmond Hotel Nagoya Shinkansenguchi",

    ],
    dailyItinerary: [
      {
        day: 1,
        title: "Arrival & Nagoya City Tour",
        image: "/japan_arrival_airplane.webp",
        activities: [
          "Morning: Flight from Philippines → Nagoya",
          "Afternoon: Nagoya Castle & downtown sightseeing",
          "Evening: Try hitsumabushi in Sakae"
        ],
        highlights: ["Nagoya Castle", "Osu Shopping", "Local hitsumabushi"],
        tips: "Buy a Meitetsu μTicket for airport ↔ city transfer",
        rating: 4.5,
        difficulty: "Easy",
        detailedSchedule: {
          morning: {
            time: "8:00 AM",
            activity: "Arrive at Chubu Centrair",
            location: "Chubu Centrair Int’l Airport",
            description: "Land in Nagoya, pick up luggage, take the Meitetsu train into the city.",
            image: "/japan_arrival_airplane.webp"
          },
          afternoon: {
            time: "1:00 PM",
            activity: "Nagoya Castle & Osu District",
            location: "Nagoya Castle",
            description: "Explore the castle grounds, then head to Osu for street food and shops.",
            image: "/nagoya.webp"
          },
          evening: {
            time: "7:00 PM",
            activity: "Dinner in Sakae",
            location: "Sakae District",
            description: "Sample hitsumabushi (grilled eel) at a local specialty restaurant.",
            image: "/sakae_area.webp"
          }
        }
      },
      {
        day: 2,
        title: "Shirakawa‑Go Day Tour",
        image: "/shirakawa_go.webp",
        activities: [
          "Full day: Klook‑booked tour to Shirakawa‑Go",
          "Return to Nagoya in evening"
        ],
        highlights: ["Historic gasshō‑zukuri houses", "Mountain scenery"],
        tips: "Dress warmly—mountains can be cool even in summer",
        rating: 4.7,
        difficulty: "Moderate",
        detailedSchedule: {
          morning: {
            time: "7:30 AM",
            activity: "Depart for Shirakawa‑Go",
            location: "Nagoya Station",
            description: "Meet your Klook tour bus and head into the Japanese Alps.",
            image: "/bus_aeon.webp"
          },
          afternoon: {
            time: "12:00 PM",
            activity: "Explore Shirakawa‑Go",
            location: "Shirakawa‑Go Village",
            description: "Walk among UNESCO‑listed thatched‑roof houses and scenic viewpoints.",
            image: "/shirakawa_go.webp"
          },
          evening: {
            time: "6:00 PM",
            activity: "Return to Nagoya",
            location: "Nagoya Station",
            description: "Arrive back in the city; grab a casual dinner nearby.",
            image: "/bus_aeon.webp"
          }
        }
      },
      {
        day: 3,
        title: "Nagoya → Osaka by Shinkansen",
        image: "/shinkansen.webp",
        activities: [
          "Morning: Pack & check‑out",
          "Midday: Shinkansen to Osaka",
          "Afternoon: Arrive and explore Dotonbori"
        ],
        highlights: ["Shinkansen ride", "Dotonbori neon lights"],
        tips: "Buy a JR ticket in advance to secure seats",
        rating: 4.6,
        difficulty: "Easy",
        detailedSchedule: {
          morning: {
            time: "11:00 AM",
            activity: "Check‑out & luggage drop",
            location: "Nagoya Hotel",
            description: "Finish packing, store your bags at the hotel front desk.",
            image: "/richmond.webp"
          },
          afternoon: {
            time: "1:30 PM",
            activity: "Shinkansen to Osaka",
            location: "Nagoya Station → Shin‑Osaka",
            description: "Board the Tokaido Shinkansen Hikari or Kodama (≈50 min).",
            image: "/shinkansen.webp"
          },
          evening: {
            time: "4:00 PM",
            activity: "Explore Dotonbori",
            location: "Dotonbori, Osaka",
            description: "Stroll along the canal, try takoyaki and okonomiyaki under neon signs.",
            image: "/dotonbori.webp"
          }
        }
      }
    ]
  },
  {
    id: "osaka",
    name: "Osaka",
    prefecture: "Osaka Prefecture",
    image: "/osaka.webp",
    duration: "4 Days",
    highlights: [
      "Dotonbori",
      "Universal Studios Japan",
      "Umeda Sky Building",
      "teamLab Botanical Garden"
    ],
    activities: {
      morning: "Explore Dotonbori",
      afternoon: "Universal Studios Japan",
      evening: "Evening in Dotonbori"
    },
    transportation: "Shinkansen from Nagoya → Osaka Station",
    bestTime: "Anytime",
    hotels: [
      "The OneFive Osaka Namba Dotonbori"
    ],
    dailyItinerary: [
      {
        day: 1,
        title: "Dotonbori Tour",
        image: "/dotonbori.webp",
        activities: [
          "Morning: Walk along Dotonbori Canal",
          "Afternoon: Street‑food tasting (takoyaki, okonomiyaki)",
          "Evening: Neon lights photo tour"
        ],
        highlights: ["Canal walk", "Street food", "Glico Sign"],
        tips: "Bring comfortable shoes—lots of walking on uneven pavement",
        rating: 4.5,
        difficulty: "Easy",
        detailedSchedule: {
          morning: {
            time: "9:00 AM",
            activity: "Dotonbori Canal Stroll",
            location: "Dotonbori District",
            description:
              "Begin your Osaka stay with a relaxing walk along the canal under iconic neon signs.",
            image: "/dotonbori_canal.webp"
          },
          afternoon: {
            time: "1:00 PM",
            activity: "Street‑food Tasting",
            location: "Dotonbori",
            description:
              "Sample local specialties like takoyaki and okonomiyaki from bustling stalls.",
            image: "/dotonbori_food.webp"
          },
          evening: {
            time: "7:00 PM",
            activity: "Neon‑sign Photo Tour",
            location: "Dotonbori",
            description:
              "Capture the Glico Man and other neon landmarks before enjoying riverside views.",
            image: "/dotonbori.webp"
          }
        }
      },
      {
        day: 2,
        title: "Universal Studios Japan",
        image: "/universal_globe.webp",
        activities: [
          "Full day at Universal Studios Japan",
          "Evening dinner at CityWalk"
        ],
        highlights: ["Harry Potter World", "Jurassic Park ride", "Nintendo World"],
        tips: "Purchase an Express Pass to skip long lines",
        rating: 4.8,
        difficulty: "Challenging",
        detailedSchedule: {
          morning: {
            time: "8:00 AM",
            activity: "Park Opening",
            location: "Universal Studios Japan",
            description:
              "Arrive early to hit the most popular rides first (Harry Potter, Nintendo).",
            image: "/placeholder.svg?height=300&width=400&text=USJ+Morning"
          },
          afternoon: {
            time: "1:00 PM",
            activity: "Continue Rides & Shows",
            location: "Universal Studios Japan",
            description:
              "Explore themed zones, grab lunch inside the park, and watch live performances.",
            image: "/placeholder.svg?height=300&width=400&text=USJ+Afternoon"
          },
          evening: {
            time: "7:30 PM",
            activity: "CityWalk Dinner",
            location: "Universal CityWalk",
            description:
              "Unwind with shopping and dinner at CityWalk after a fun‑filled day.",
            image: "/placeholder.svg?height=300&width=400&text=CityWalk+Evening"
          }
        }
      },
      {
        day: 3,
        title: "Osaka Highlights Day Tour",
        image: "/osaka_day_pass.webp",
        activities: [
          "Morning: Umeda Sky Building & HEP FIVE Ferris Wheel",
          "Afternoon: Osaka Castle & Tombori River Cruise",
          "Evening: teamLab Botanical Garden"
        ],
        highlights: [
          "Floating Garden Observatory",
          "Ferris‑wheel skyline",
          "Castle & cruise",
          "Digital art garden"
        ],
        tips: "Buy combination tickets in advance to save time",
        rating: 4.7,
        difficulty: "Moderate",
        detailedSchedule: {
          morning: {
            time: "9:00 AM",
            activity: "Umeda Sky Building",
            location: "Umeda Sky Building",
            description:
              "Ride the ‘floating escalator’ to the observatory for 360° city views.",
            image: "/placeholder.svg?height=300&width=400&text=Sky+Building"
          },
          afternoon: {
            time: "1:00 PM",
            activity: "Osaka Castle & Cruise",
            location: "Osaka Castle → Tombori River",
            description:
              "Tour the historic castle, then enjoy a scenic river cruise along Tombori.",
            image: "/placeholder.svg?height=300&width=400&text=Castle+Cruise"
          },
          evening: {
            time: "6:30 PM",
            activity: "teamLab Botanical Garden",
            location: "Nakanoshima Park",
            description:
              "Immerse yourself in interactive digital art installations in a nighttime setting.",
            image: "/placeholder.svg?height=300&width=400&text=teamLab+Evening"
          }
        }
      },
      {
        day: 4,
        title: "Farewell & Nara Quick Stop",
        image: "/placeholder.svg?height=400&width=600&text=Nara+Park",
        activities: [
          "Morning: Check‑out & Nara Park visit",
          "Afternoon: Travel Osaka → Kyoto"
        ],
        highlights: ["Deer‑filled park", "Todai‑ji Temple", "Shinkansen ride"],
        tips: "Store luggage at station lockers for hands‑free exploring",
        rating: 4.6,
        difficulty: "Easy",
        detailedSchedule: {
          morning: {
            time: "8:00 AM",
            activity: "Hotel Check‑out & Depart",
            location: "The OneFive Osaka",
            description:
              "Settle the bill and take JR to Nara for a quick park visit.",
            image: "/placeholder.svg?height=300&width=400&text=Hotel+Check-out"
          },
          afternoon: {
            time: "11:00 AM",
            activity: "Nara Park & Todai‑ji",
            location: "Nara Park",
            description:
              "Feed friendly deer and see the giant Buddha at Todai‑ji Temple.",
            image: "/placeholder.svg?height=300&width=400&text=Nara+Park"
          },
          evening: {
            time: "2:00 PM",
            activity: "Shinkansen to Kyoto",
            location: "Shin‑Osaka → Kyoto Station",
            description:
              "Board the bullet train and arrive in Kyoto to continue your journey.",
            image: "/placeholder.svg?height=300&width=400&text=Kyoto+Arrival"
          }
        }
      }
    ]
  },
  {
    id: "kyoto",
    name: "Kyoto",
    prefecture: "Kyoto Prefecture",
    image: "/placeholder.svg?height=300&width=400&text=Fushimi+Inari+Torii",
    duration: "5 Days",
    highlights: [
      "Fushimi Inari Shrine",
      "Kinkaku-ji Temple",
      "Arashiyama Bamboo Grove",
      "Gion District"
    ],
    activities: {
      morning: "Visit Fushimi Inari Shrine and hike the torii trail",
      afternoon: "Explore Kinkaku-ji (Golden Pavilion) and Ryoan-ji Temple",
      evening: "Walk through historic Gion district and spot geishas"
    },
    transportation: "45 minutes from Osaka via Keihan Main Line",
    bestTime: "Spring for cherry blossoms or autumn for fall colors",
    hotels: [
      "Richmond Hotel Nagoya Shinkansenguchi",

    ],
    dailyItinerary: [
      {
        day: 1,
        title: "Golden Temples",
        image: "/placeholder.svg?height=400&width=600&text=Kinkaku-ji+Golden+Reflection",
        activities: [
          "Morning: Kinkaku-ji (Golden Pavilion)",
          "Afternoon: Ryoan-ji rock garden",
          "Evening: Traditional dinner in Pontocho"
        ],
        highlights: ["Golden Pavilion", "Zen gardens", "Historic alley"],
        tips: "Visit Kinkaku-ji early for the best photos",
        rating: 4.9,
        difficulty: "Easy",
        detailedSchedule: {
          morning: {
            time: "8:00 AM",
            activity: "Kinkaku-ji Golden Pavilion",
            location: "Kinkaku-ji Temple",
            description:
              "Marvel at the golden temple reflected in the mirror pond. Early morning offers the best lighting and fewer crowds.",
            image: "/placeholder.svg?height=300&width=400&text=Kinkaku-ji+Morning"
          },
          afternoon: {
            time: "1:00 PM",
            activity: "Ryoan-ji Rock Garden",
            location: "Ryoan-ji Temple",
            description:
              "Contemplate the famous zen rock garden, one of Japan's most celebrated examples of karesansui.",
            image: "/placeholder.svg?height=300&width=400&text=Ryoan-ji+Afternoon"
          },
          evening: {
            time: "6:00 PM",
            activity: "Pontocho Alley Dinner",
            location: "Pontocho Alley",
            description:
              "Dine in one of Kyoto's most atmospheric narrow alleys, lined with traditional restaurants and tea houses.",
            image: "/placeholder.svg?height=300&width=400&text=Pontocho+Evening"
          }
        }
      },
      {
        day: 2,
        title: "Thousand Torii",
        image: "/placeholder.svg?height=400&width=600&text=Fushimi+Inari+Orange+Torii+Path",
        activities: [
          "Morning: Fushimi Inari shrine hike",
          "Afternoon: Sake tasting in Fushimi district",
          "Evening: Gion district geisha spotting"
        ],
        highlights: ["Torii tunnel", "Sake breweries", "Geisha culture"],
        tips: "Hike early morning for fewer crowds",
        rating: 4.8,
        difficulty: "Moderate",
        detailedSchedule: {
          morning: {
            time: "7:00 AM",
            activity: "Fushimi Inari Hike",
            location: "Fushimi Inari Shrine",
            description:
              "Hike through thousands of vermillion torii gates up Mount Inari. The full hike takes 2-3 hours.",
            image: "/placeholder.svg?height=300&width=400&text=Fushimi+Inari+Morning"
          },
          afternoon: {
            time: "2:00 PM",
            activity: "Sake Brewery Tour",
            location: "Fushimi District",
            description:
              "Visit traditional sake breweries and learn about the brewing process while tasting premium sake.",
            image: "/placeholder.svg?height=300&width=400&text=Sake+Brewery+Afternoon"
          },
          evening: {
            time: "7:00 PM",
            activity: "Gion District Walk",
            location: "Gion District",
            description:
              "Stroll through historic streets and possibly spot geishas heading to appointments in traditional tea houses.",
            image: "/placeholder.svg?height=300&width=400&text=Gion+Evening"
          }
        }
      },
      {
        day: 3,
        title: "Bamboo & Monkeys",
        image: "/placeholder.svg?height=400&width=600&text=Arashiyama+Bamboo+Forest+Light",
        activities: [
          "Morning: Arashiyama Bamboo Grove",
          "Afternoon: Tenryu-ji Temple and gardens",
          "Evening: Traditional kaiseki dinner"
        ],
        highlights: ["Bamboo forest", "Temple gardens", "Fine dining"],
        tips: "Take the scenic train to Arashiyama",
        rating: 4.7,
        difficulty: "Easy",
        detailedSchedule: {
          morning: {
            time: "9:00 AM",
            activity: "Bamboo Grove Walk",
            location: "Arashiyama Bamboo Grove",
            description:
              "Walk through the enchanting bamboo forest where sunlight filters through towering bamboo stalks.",
            image: "/placeholder.svg?height=300&width=400&text=Bamboo+Grove+Morning"
          },
          afternoon: {
            time: "1:30 PM",
            activity: "Tenryu-ji Temple",
            location: "Tenryu-ji Temple",
            description:
              "Explore this UNESCO World Heritage site with its stunning landscape garden designed in the 14th century.",
            image: "/placeholder.svg?height=300&width=400&text=Tenryu-ji+Afternoon"
          },
          evening: {
            time: "6:30 PM",
            activity: "Kaiseki Dinner",
            location: "Traditional Restaurant",
            description:
              "Experience the pinnacle of Japanese cuisine with a multi-course kaiseki dinner featuring seasonal ingredients.",
            image: "/placeholder.svg?height=300&width=400&text=Kaiseki+Evening"
          }
        }
      },
      {
        day: 4,
        title: "Eastern Temples",
        image: "/placeholder.svg?height=400&width=600&text=Kiyomizu-dera+Wooden+Temple",
        activities: [
          "Morning: Kiyomizu-dera Temple",
          "Afternoon: Sannenzaka and Ninenzaka streets",
          "Evening: Tea ceremony experience"
        ],
        highlights: ["Wooden temple", "Historic streets", "Tea culture"],
        tips: "Wear comfortable shoes for temple stairs",
        rating: 4.8,
        difficulty: "Moderate",
        detailedSchedule: {
          morning: {
            time: "8:30 AM",
            activity: "Kiyomizu-dera Temple",
            location: "Kiyomizu-dera",
            description:
              "Visit the famous wooden temple with panoramic views of Kyoto. The main hall juts out over the hillside.",
            image: "/placeholder.svg?height=300&width=400&text=Kiyomizu-dera+Morning"
          },
          afternoon: {
            time: "1:00 PM",
            activity: "Historic Streets Walk",
            location: "Sannenzaka & Ninenzaka",
            description:
              "Stroll down these preserved historic streets lined with traditional shops, cafes, and souvenir stores.",
            image: "/placeholder.svg?height=300&width=400&text=Historic+Streets+Afternoon"
          },
          evening: {
            time: "5:00 PM",
            activity: "Tea Ceremony",
            location: "Traditional Tea House",
            description:
              "Participate in an authentic Japanese tea ceremony and learn about the philosophy behind this ancient art.",
            image: "/placeholder.svg?height=300&width=400&text=Tea+Ceremony+Evening"
          }
        }
      },
      {
        day: 5,
        title: "Imperial Farewell",
        image: "/placeholder.svg?height=400&width=600&text=Kyoto+Imperial+Palace+Gardens",
        activities: [
          "Morning: Kyoto Imperial Palace",
          "Afternoon: Nijo Castle",
          "Evening: Farewell dinner with maiko performance"
        ],
        highlights: ["Imperial gardens", "Shogun castle", "Cultural show"],
        tips: "Book palace tour in advance",
        rating: 4.9,
        difficulty: "Easy",
        detailedSchedule: {
          morning: {
            time: "9:00 AM",
            activity: "Imperial Palace Tour",
            location: "Kyoto Imperial Palace",
            description:
              "Tour the former residence of the Imperial family with its beautiful gardens and traditional architecture.",
            image: "/placeholder.svg?height=300&width=400&text=Imperial+Palace+Morning"
          },
          afternoon: {
            time: "2:00 PM",
            activity: "Nijo Castle",
            location: "Nijo Castle",
            description:
              "Explore the shogun's residence famous for its 'nightingale floors' and stunning Ninomaru Palace.",
            image: "/placeholder.svg?height=300&width=400&text=Nijo+Castle+Afternoon"
          },
          evening: {
            time: "7:00 PM",
            activity: "Maiko Performance Dinner",
            location: "Traditional Restaurant",
            description:
              "End your Kyoto journey with an elegant dinner accompanied by traditional maiko entertainment.",
            image: "/placeholder.svg?height=300&width=400&text=Maiko+Performance+Evening"
          }
        }
      }
    ]
  }
];
