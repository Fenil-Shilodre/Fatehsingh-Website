export interface SilwasaPlaceImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  category: 'hero' | 'heritage' | 'landscape' | 'aerial' | 'community';
}

export const silwasaPlaces = {
  hero: {
    id: "silvassa-vibe-hero",
    src: "/images/silvassa-vibe-bg.jpg",
    alt: "Cinematic illustration of Silvassa landscape featuring Daman Ganga river, lush forest hills, golden sunset sky, and Warli tribal heritage motifs",
    title: "Silvassa Territorial Vibe & Forest Heritage",
    location: "Capital Territory, Dadra & Nagar Haveli",
    category: "hero" as const
  },
  aerial: {
    id: "silvassa-aerial",
    src: "/images/silwasa-places/image copy 5.png",
    alt: "Aerial view of Vanganga lake garden and surrounding green canopy of Silvassa township",
    title: "Silvassa Territorial Canopy",
    location: "Capital Territory, Dadra & Nagar Haveli",
    category: "aerial" as const
  },
  heritage: {
    id: "tribal-museum",
    src: "/images/silwasa-places/image copy 2.png",
    alt: "Tribal Cultural Museum of Silvassa featuring terracotta tribal architecture and Warli motifs",
    title: "Tribal Cultural Museum",
    location: "Silvassa, Dadra & Nagar Haveli",
    category: "heritage" as const
  },
  visualBreak: {
    id: "dudhani-lake-panorama",
    src: "/images/silwasa-places/image copy 3.png",
    alt: "Panoramic view of Dudhani lake reservoir surrounded by Western Ghats green mountain ranges",
    title: "Dudhani Lake & Mountain Reservoir",
    location: "Dadra & Nagar Haveli",
    category: "landscape" as const
  },
  boatingJetty: {
    id: "lake-jetty",
    src: "/images/silwasa-places/image copy.png",
    alt: "Waterway boating jetty docked along the serene lake under open skies in Silvassa",
    title: "Territorial Waterways",
    location: "Dadra & Nagar Haveli",
    category: "community" as const
  }
};
