export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  category: string;
  highlight: string;
}

export const awardsData: AwardItem[] = [
  {
    id: "melvin-jones",
    title: "Melvin Jones Fellow & Humanitarian Citation",
    issuer: "Lions Clubs International",
    year: "Charter & Lifetime",
    image: "/images/90.jpg",
    category: "Humanitarian Service",
    highlight: "Conferred for four decades of dedicated humanitarian welfare and civic leadership."
  },
  {
    id: "governor-citation",
    title: "Governor’s State Academic Convocation Honor",
    issuer: "Conferred by Governor of Maharashtra",
    year: "State Convocation",
    image: "/images/83.jpg",
    category: "State Felicitation",
    highlight: "Presented with state memento for pioneering higher education in Silvassa."
  },
  {
    id: "national-leadership",
    title: "National Leadership Felicitation & Stage Honor",
    issuer: "National Leadership Convention",
    year: "National Assembly",
    image: "/images/Event Images with PM/DSCN2897.JPG",
    category: "National Recognition",
    highlight: "Presented on stage during the historic Dadra & Nagar Haveli developmental assembly."
  },
  {
    id: "varishtha-felicitation",
    title: "Varishtha Panchayat Civic Felicitation",
    issuer: "Apex Representative Council of D&NH",
    year: "Apex Governance",
    image: "/images/FMC/scan0004.jpg",
    category: "Civic Honor",
    highlight: "Felicitated by citizens and civic leaders as President of the apex council."
  },
  {
    id: "legal-education",
    title: "Pioneer in Professional Legal Education Award",
    issuer: "Eminent Jurists & Bar Council Dignitaries",
    year: "Academic Milestone",
    image: "/images/40.jpg",
    category: "Educational Vision",
    highlight: "Honored for founding Haveli Institute of Legal Studies & Research in the territory."
  },
  {
    id: "community-stewardship",
    title: "Distinguished Community Stewardship Honor",
    issuer: "Akhil Bharatiya Kshatriya Mahasabha",
    year: "Lifetime Patronage",
    image: "/images/97.jpg",
    category: "Community Welfare",
    highlight: "Commended for lifelong devotion to farmer welfare, social harmony, and rural empowerment."
  }
];
