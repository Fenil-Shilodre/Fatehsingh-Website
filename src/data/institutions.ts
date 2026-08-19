export interface Institution {
  id: string;
  nameKey: string;
  defaultName: string;
  estYear: string;
  tagKey: string;
  defaultTag: string;
  affilKey: string;
  defaultAffil: string;
  point1Key: string;
  defaultPoint1: string;
  point2Key: string;
  defaultPoint2: string;
  contact: string;
  image: string;
}

export const institutionsData: Institution[] = [
  {
    id: "les",
    nameKey: "inst_les_name",
    defaultName: "Lions English School",
    estYear: "Est. 1983",
    tagKey: "inst_les_tag",
    defaultTag: "Primary & Secondary Education",
    affilKey: "inst_les_affil",
    defaultAffil: "First CBSE Affiliated School in D&NH",
    point1Key: "inst_les_point1",
    defaultPoint1: "Founded in a rented building with 15 students; today ~5,000 students from Nursery to Class XII.",
    point2Key: "inst_les_point2",
    defaultPoint2: "Equipped with Atal Tinkering Lab, AI-enabled digital learning, and expansive sports grounds.",
    contact: "Tel: 8140611108",
    image: "/images/31.jpg"
  },
  {
    id: "devkiba",
    nameKey: "inst_devkiba_name",
    defaultName: "Smt. Devkiba Mohansinhji Chauhan College",
    estYear: "Est. 2014",
    tagKey: "inst_devkiba_tag",
    defaultTag: "Higher Education & Research",
    affilKey: "inst_devkiba_affil",
    defaultAffil: "Univ of Mumbai · NAAC B+ (CGPA 2.66) · ISO Certified",
    point1Key: "inst_devkiba_point1",
    defaultPoint1: "Undergraduate, Postgraduate, and Ph.D. programs across Commerce, Science (IT, CS, Chemistry, Physics).",
    point2Key: "inst_devkiba_point2",
    defaultPoint2: "Houses Centre for Distance & Online Education (CDOE) in partnership with University of Mumbai.",
    contact: "Tel: +91 9624702500",
    image: "/images/80.jpg"
  },
  {
    id: "hilsr",
    nameKey: "inst_hilsr_name",
    defaultName: "Haveli Institute of Legal Studies & Research",
    estYear: "Est. 2017",
    tagKey: "inst_hilsr_tag",
    defaultTag: "Professional Legal Education",
    affilKey: "inst_hilsr_affil",
    defaultAffil: "Univ of Mumbai · Bar Council of India Recognized",
    point1Key: "inst_hilsr_point1",
    defaultPoint1: "3-Year LL.B., 5-Year Integrated B.A. LL.B., and specialized Diplomas in Labour and Taxation Laws.",
    point2Key: "inst_hilsr_point2",
    defaultPoint2: "Described as the 'third child of the Trust', hosting eminent jurists and Governors of India.",
    contact: "Tel: +91 7434902500",
    image: "/images/84.jpg"
  }
];
