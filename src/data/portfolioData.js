const portfolioData = [
  // Mountains
  {
    id: 1,
    category: "mountains",
    title: "Snowy Romance",
    location: "Manali, Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    height: "h-[620px]",
  },
  {
    id: 2,
    category: "mountains",
    title: "Above The Clouds",
    location: "Shimla",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    height: "h-[460px]",
  },
  {
    id: 3,
    category: "mountains",
    title: "Golden Peaks",
    location: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    height: "h-[540px]",
  },

  // Waterfalls
  {
    id: 4,
    category: "waterfalls",
    title: "Nature's Symphony",
    location: "Jog Falls",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    height: "h-[500px]",
  },
  {
    id: 5,
    category: "waterfalls",
    title: "Misty Love",
    location: "Athirappilly",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    height: "h-[660px]",
  },
  {
    id: 6,
    category: "waterfalls",
    title: "Hidden Paradise",
    location: "Meghalaya",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80",
    height: "h-[420px]",
  },

  // River Side
  {
    id: 7,
    category: "river-side",
    title: "Flow Together",
    location: "Rishikesh",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
    height: "h-[620px]",
  },
  {
    id: 8,
    category: "river-side",
    title: "Peaceful Reflections",
    location: "Ganga",
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1400&q=80",
    height: "h-[470px]",
  },
  {
    id: 9,
    category: "river-side",
    title: "River Breeze",
    location: "Tehri",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    height: "h-[560px]",
  },

  // Luxury Resorts
  {
    id: 10,
    category: "luxury-resorts",
    title: "Royal Escape",
    location: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    height: "h-[520px]",
  },
  {
    id: 11,
    category: "luxury-resorts",
    title: "Luxury Moments",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    height: "h-[640px]",
  },
  {
    id: 12,
    category: "luxury-resorts",
    title: "Grand Celebration",
    location: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    height: "h-[440px]",
  },

  // Forest
  {
    id: 13,
    category: "forest",
    title: "Into The Woods",
    location: "Coorg",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    height: "h-[650px]",
  },
  {
    id: 14,
    category: "forest",
    title: "Green Dreams",
    location: "Ooty",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    height: "h-[430px]",
  },
  {
    id: 15,
    category: "forest",
    title: "Nature's Embrace",
    location: "Munnar",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    height: "h-[560px]",
  },

  // Sunrise
  {
    id: 16,
    category: "sunrise-shoots",
    title: "Morning Bliss",
    location: "Nainital",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80",
    height: "h-[480px]",
  },
  {
    id: 17,
    category: "sunrise-shoots",
    title: "Golden Beginning",
    location: "Shimla",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80",
    height: "h-[620px]",
  },
  {
    id: 18,
    category: "sunrise-shoots",
    title: "First Light",
    location: "Mussoorie",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    height: "h-[500px]",
  },

  // Sunset
  {
    id: 19,
    category: "sunset-shoots",
    title: "Golden Hour",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    height: "h-[640px]",
  },
  {
    id: 20,
    category: "sunset-shoots",
    title: "Evening Glow",
    location: "Jaisalmer",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80",
    height: "h-[420px]",
  },
  {
    id: 21,
    category: "sunset-shoots",
    title: "Romantic Dusk",
    location: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80",
    height: "h-[570px]",
  },

  // Drone
  {
    id: 22,
    category: "drone",
    title: "Above Everything",
    location: "Manali",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80",
    height: "h-[500px]",
  },
  {
    id: 23,
    category: "drone",
    title: "Sky Perspective",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
    height: "h-[660px]",
  },
  {
    id: 24,
    category: "drone",
    title: "Epic Landscapes",
    location: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    height: "h-[450px]",
  },

  // Cinematic Films
  {
    id: 25,
    category: "cinematic-films",
    title: "A Timeless Story",
    location: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
    height: "h-[640px]",
  },
  {
    id: 26,
    category: "cinematic-films",
    title: "Love In Motion",
    location: "Shimla",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80",
    height: "h-[470px]",
  },
  {
    id: 27,
    category: "cinematic-films",
    title: "Forever Begins",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80",
    height: "h-[580px]",
  },
];

export default portfolioData;