export const COMPANY = {
  name: "LUXE",
  subName: "Photography",
  tagline: "India's Luxury Pre Wedding Storytelling Studio",

  whatsapp: "919999999999",

  email: "hello@luxephotography.com",

  phone: "+91 99999 99999",

  address: "Shimla, Himachal Pradesh",

  instagram: "https://instagram.com/luxepreweddings",
  youtube: "https://youtube.com/@luxepreweddings",
  facebook: "https://facebook.com/luxepreweddings",
  pinterest: "https://pinterest.com/luxepreweddings",
};

export const DEMO_MEDIA = {
  heroVideo:
    "https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4",
  heroPoster:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=80",
};

export const PAGE_HERO_MEDIA = {
  home: {
    video:
      "https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=80",
  },
  about: {
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80",
  },
  blog: {
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2200&q=80",
  },
  faqs: {
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    poster:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=2200&q=80",
  },
  locations: {
    video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
    poster:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=80",
  },
  packages: {
    video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    poster:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=80",
  },
  portfolio: {
    video:
      "https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=175&oauth2_token_id=57447761",
    poster:
      "https://images.pexels.com/videos/1448735/free-video-1448735.jpg?fit=crop&w=1200&h=630&auto=compress&cs=tinysrgb",
  },
  contact: {
    video: "https://cdn.coverr.co/videos/coverr-a-wedding-shoot-1563531588345?download=1080p",
    poster:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-mountains": {
    video: "https://media.w3.org/2010/05/video/movie_300.mp4",
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-waterfalls": {
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-river-side": {
    video: "https://www.w3schools.com/html/movie.mp4",
    poster:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-luxury-resorts": {
    video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    poster:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-forest": {
    video: "https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4",
    poster:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-sunrise-shoots": {
    video: "https://media.w3.org/2010/05/bunny/trailer.mp4",
    poster:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-sunset-shoots": {
    video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    poster:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-drone": {
    video: "https://media.w3.org/2010/05/video/movie_300.mp4",
    poster:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2200&q=80",
  },
  "portfolio-cinematic-films": {
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2200&q=80",
  },
};

export const getHeroMedia = (key = "home") => PAGE_HERO_MEDIA[key] ?? PAGE_HERO_MEDIA.home;

export const buildWhatsAppLink = (message) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
