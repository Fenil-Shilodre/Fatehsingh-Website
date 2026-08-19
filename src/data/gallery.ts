export interface GalleryItem {
  id: string;
  image: string;
  defaultTitle: string;
  defaultCaption: string;
  category: string;
  year: string;
}

export const dignitaryGalleryData: GalleryItem[] = [
  {
    id: "pm-modi-dignitary",
    image: "/images/Event Images with PM/Scan514.jpg",
    defaultTitle: "With Hon'ble Shri Narendra Modi",
    defaultCaption: "Warm exchange and memorandum submission on developmental priorities for Dadra & Nagar Haveli.",
    category: "National Leadership",
    year: "Historic Exchange"
  },
  {
    id: "governor-koshyari",
    image: "/images/83.jpg",
    defaultTitle: "With Governor Bhagat Singh Koshyari",
    defaultCaption: "Welcoming the Governor of Maharashtra at the Lions Educational Campus convocation.",
    category: "Academic & State",
    year: "Campus Convocation"
  },
  {
    id: "george-fernandes",
    image: "/images/FMC/scan0020.jpg",
    defaultTitle: "With Shri George Fernandes",
    defaultCaption: "High-level consultation on tribal welfare, labor rights, and territorial self-governance.",
    category: "National Statesmanship",
    year: "Civic Dialogue"
  },
  {
    id: "oath-1989",
    image: "/images/FMC/Oath as Member of Pradesh Council and Counsellor to the Administrator.jpg",
    defaultTitle: "Oath as Counselor to Administrator (1989)",
    defaultCaption: "Historic inauguration of Pradesh Council by Administrator Shri Khurshed Alam Khan (2nd August 1989).",
    category: "Apex Governance",
    year: "1989"
  },
  {
    id: "sharad-yadav",
    image: "/images/FMC/scan0021.jpg",
    defaultTitle: "With Shri Sharad Yadav",
    defaultCaption: "Dialogue on rural cooperative movement and farmer empowerment policies.",
    category: "Cooperative Leadership",
    year: "National Gathering"
  },
  {
    id: "shankersinh-vaghela",
    image: "/images/FMC/scan0015.jpg",
    defaultTitle: "With Shri Shankersinh Vaghela",
    defaultCaption: "Regional tour and consultation on infrastructure linkages across Gujarat and D&NH border.",
    category: "Regional Coordination",
    year: "Civic Tour"
  }
];
