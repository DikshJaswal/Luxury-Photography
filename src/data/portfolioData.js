const portfolioData = [
  // Mountains
  {
    id: 1,
    category: "mountains",
    title: "Snowy Romance",
    location: "Manali, Himachal Pradesh",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401667/gallery-02.jpg_girpir.jpg",
    height: "h-[620px]",
  },
  {
    id: 2,
    category: "mountains",
    title: "Above The Clouds",
    location: "Shimla",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401670/gallery-01.jpg_ggaslz.jpg",
    height: "h-[460px]",
  },
  {
    id: 3,
    category: "mountains",
    title: "Golden Peaks",
    location: "Kashmir",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401690/gallery-03.jpg_yxlewc.jpg",
    height: "h-[540px]",
  },

  // Waterfalls
  {
    id: 4,
    category: "waterfalls",
    title: "Nature's Symphony",
    location: "Jog Falls",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401692/gallery-04.jpg_tpgeq9.jpg",
    height: "h-[500px]",
  },
  {
    id: 5,
    category: "waterfalls",
    title: "Misty Love",
    location: "Athirappilly",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401704/gallery-08.jpg_tmegpy.jpg",
    height: "h-[660px]",
  },
  {
    id: 6,
    category: "waterfalls",
    title: "Hidden Paradise",
    location: "Meghalaya",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401704/gallery-07.jpg_sqgyej.jpg",
    height: "h-[420px]",
  },

  // River Side
  {
    id: 7,
    category: "river-side",
    title: "Flow Together",
    location: "Rishikesh",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401704/gallery-09.jpg_qicwil.jpg",
    height: "h-[620px]",
  },
  {
    id: 8,
    category: "river-side",
    title: "Peaceful Reflections",
    location: "Ganga",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401705/gallery-11.jpg_dpz0yc.jpg",
    height: "h-[470px]",
  },
  {
    id: 9,
    category: "river-side",
    title: "River Breeze",
    location: "Tehri",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401705/gallery-12.jpg_fe6df9.jpg",
    height: "h-[560px]",
  },

  // Luxury Resorts
  {
    id: 10,
    category: "luxury-resorts",
    title: "Royal Escape",
    location: "Udaipur",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401710/gallery-06.jpg_newjkz.jpg",
    height: "h-[520px]",
  },
  {
    id: 11,
    category: "luxury-resorts",
    title: "Luxury Moments",
    location: "Goa",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401706/gallery-10.jpg_zqgznq.jpg"
  },
  {
    id: 12,
    category: "luxury-resorts",
    title: "Grand Celebration",
    location: "Jaipur",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401710/gallery-05.jpg_rp38km.jpg",
    height: "h-[440px]",
  },

  // Forest
  {
    id: 13,
    category: "forest",
    title: "Into The Woods",
    location: "Coorg",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401710/gallery-14.jpg_n0qqlt.jpg",
    height: "h-[650px]",
  },
  {
    id: 14,
    category: "forest",
    title: "Green Dreams",
    location: "Ooty",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401713/gallery-15.jpg_qyhusk.jpg",
    height: "h-[430px]",
  },
  {
    id: 15,
    category: "forest",
    title: "Nature's Embrace",
    location: "Munnar",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401716/gallery-16.jpg_a3a93s.jpg",
    height: "h-[560px]",
  },

  // Sunrise
  {
    id: 16,
    category: "sunrise-shoots",
    title: "Morning Bliss",
    location: "Nainital",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401725/gallery-21.jpg_epsgtc.jpg",
    height: "h-[480px]",
  },
  {
    id: 17,
    category: "sunrise-shoots",
    title: "Golden Beginning",
    location: "Shimla",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401720/gallery-19.jpg_nr5y7b.jpg",
    height: "h-[620px]",
  },
  {
    id: 18,
    category: "sunrise-shoots",
    title: "First Light",
    location: "Mussoorie",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401726/gallery-22.jpg_sqgumb.jpg",
    height: "h-[500px]",
  },

  // Sunset
  {
    id: 19,
    category: "sunset-shoots",
    title: "Golden Hour",
    location: "Goa",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401729/gallery-23.jpg_hoeom1.jpg",
    height: "h-[640px]",
  },
  {
    id: 20,
    category: "sunset-shoots",
    title: "Evening Glow",
    location: "Jaisalmer",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401731/gallery-24.jpg_akmvit.jpg",
    height: "h-[420px]",
  },
  {
    id: 21,
    category: "sunset-shoots",
    title: "Romantic Dusk",
    location: "Udaipur",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401745/gallery-26.jpg_j3i9sg.jpg",
    height: "h-[570px]",
  },

  // Drone
  {
    id: 22,
    category: "drone",
    title: "Above Everything",
    location: "Manali",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401745/gallery-28.jpg_q3getz.jpg",
    height: "h-[500px]",
  },
  {
    id: 23,
    category: "drone",
    title: "Sky Perspective",
    location: "Goa",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401748/gallery-27.jpg_niwgsu.jpg",
    height: "h-[660px]",
  },
  {
    id: 24,
    category: "drone",
    title: "Epic Landscapes",
    location: "Kashmir",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401746/gallery-25.jpg_g97xkw.jpg",
    height: "h-[450px]",
  },

  // Cinematic Films
  {
    id: 25,
    category: "cinematic-films",
    title: "A Timeless Story",
    location: "Udaipur",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401729/gallery-23.jpg_hoeom1.jpg",
    height: "h-[640px]",
  },
  {
    id: 26,
    category: "cinematic-films",
    title: "Love In Motion",
    location: "Shimla",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401708/gallery-13.jpg_nxgdzs.jpg",
    height: "h-[470px]",
  },
  {
    id: 27,
    category: "cinematic-films",
    title: "Forever Begins",
    location: "Goa",
    image:
      "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401723/gallery-20.jpg_zxepkd.jpg",
    height: "h-[580px]",
  },
];

export default portfolioData;