export interface TimelineItem {
  id: string;
  era: '1980s' | '1990s' | '2000s';
  yearText: string;
  category: 'apex' | 'panchayat';
  roleText: string;
  bodyText: string;
  descText: string;
  image: string;
  caption: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "1985-dan-udyog",
    era: "1980s",
    yearText: "1985 – 1986",
    category: "apex",
    roleText: "Former President",
    bodyText: "Dan Udyog Sahakari Sangh Ltd.",
    descText: "Spearheaded cooperative industrial initiatives and rural employment generation across Dadra & Nagar Haveli.",
    image: "/images/FMC/scan0002.jpg",
    caption: "Early leadership & cooperative mobilization in Silvassa"
  },
  {
    id: "1986-varishtha",
    era: "1980s",
    yearText: "1986 – 1989",
    category: "apex",
    roleText: "Former President",
    bodyText: "Varishtha Panchayat (Apex Elected Council of D&NH)",
    descText: "Presided over the apex representative council of Dadra & Nagar Haveli until its constitutional dissolution, enacting key civic ordinances.",
    image: "/images/FMC/scan0004.jpg",
    caption: "Felicitated by citizens upon election as Varishtha Panchayat President"
  },
  {
    id: "1986-home-minister",
    era: "1980s",
    yearText: "1986 – 1993",
    category: "apex",
    roleText: "Former Member",
    bodyText: "Union Home Minister's Advisory Committee",
    descText: "Represented the Union Territory at the highest national level in New Delhi, safeguarding local administrative autonomy and tribal land rights.",
    image: "/images/FMC/Visit of Union FInance MinisterMOS 25.10.1987.jpg",
    caption: "Dignitary visit & high-level review of UT administration (25.10.1987)"
  },
  {
    id: "1989-counselor",
    era: "1990s",
    yearText: "1989 – 1993",
    category: "apex",
    roleText: "Counselor to the Governor & Member, Pradesh Council",
    bodyText: "Administration of Dadra & Nagar Haveli",
    descText: "Took oath on 2nd August 1989 before His Excellency Shri Khurshed Alam Khan, Governor of Goa & Administrator of D&NH (Highest post in Pradesh Council).",
    image: "/images/FMC/Oath as Member of Pradesh Council and Counsellor to the Administrator.jpg",
    caption: "Oath taking ceremony before His Excellency Shri Khurshed Alam Khan (02.08.1989)"
  },
  {
    id: "1995-district-panchayat",
    era: "1990s",
    yearText: "1995 – 2000",
    category: "panchayat",
    roleText: "President, D&NH Vikas Party & Leader of Opposition",
    bodyText: "District Panchayat, Dadra & Nagar Haveli",
    descText: "Championed transparent rural governance, farmer welfare schemes, and irrigation projects across the district's villages.",
    image: "/images/FMC/scan0015.jpg",
    caption: "Grassroots public meeting and regional coordination with senior leaders"
  },
  {
    id: "2000-jdu-state-president",
    era: "2000s",
    yearText: "2000 – 2013",
    category: "apex",
    roleText: "Former State President",
    bodyText: "Janata Dal (United), Dadra & Nagar Haveli",
    descText: "Led the state party organization for over a decade, working closely with veteran national leaders on developmental infrastructure.",
    image: "/images/FMC/scan0020.jpg",
    caption: "With veteran national leader Shri George Fernandes during Silvassa visit"
  },
  {
    id: "2011-smc-leader",
    era: "2000s",
    yearText: "2011 – 2016",
    category: "panchayat",
    roleText: "Leader of Opposition",
    bodyText: "Silvassa Municipal Council (SMC)",
    descText: "Formulated master-planning suggestions for municipal infrastructure, drainage, clean drinking water, and road networks in urban Silvassa.",
    image: "/images/FMC/scan0021.jpg",
    caption: "Civic leadership & cooperative consultation with senior leaders"
  },
  {
    id: "2013-bjp-joining",
    era: "2000s",
    yearText: "2013",
    category: "apex",
    roleText: "Senior State Leader Induction",
    bodyText: "Bharatiya Janata Party (BJP)",
    descText: "Inducted into the BJP on 26 October 2013 alongside fellow civic leaders in a national ceremony presided over by then BJP National President Shri Rajnath Singh.",
    image: "/images/Event Images with PM/Scan516.jpg",
    caption: "With Shri Narendra Modi on stage during major public address in D&NH"
  },
  {
    id: "2016-smc-standing",
    era: "2000s",
    yearText: "2016 – 2020",
    category: "panchayat",
    roleText: "Member, Standing Committee",
    bodyText: "Silvassa Municipal Council",
    descText: "Guided budgetary allocations, public amenities, and civic modernization initiatives for the capital territory.",
    image: "/images/40.jpg",
    caption: "Presiding at Spectrum academic and civic convocation with Governor Koshyari"
  }
];
