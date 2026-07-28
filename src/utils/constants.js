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

export const buildWhatsAppLink = (message) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
