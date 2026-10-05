export interface NavItem {
  id: string;
  labelKey: string;
  defaultLabel: string;
  href: string;
  isActive: boolean;
  isDisabled: boolean;
}

export const navItems: NavItem[] = [
  { id: "biography", labelKey: "nav_biography", defaultLabel: "Biography", href: "#biography", isActive: true, isDisabled: false },
  { id: "institutions", labelKey: "nav_institutions", defaultLabel: "Institutions", href: "#institutions", isActive: false, isDisabled: false },
  { id: "business", labelKey: "nav_business", defaultLabel: "Business", href: "#business", isActive: false, isDisabled: false },
  { id: "public-life", labelKey: "nav_public_life", defaultLabel: "Public Life", href: "#public-life", isActive: false, isDisabled: false },
  { id: "news", labelKey: "nav_news", defaultLabel: "News & Articles", href: "#news", isActive: false, isDisabled: false },
  { id: "blogs", labelKey: "nav_blogs", defaultLabel: "Blogs", href: "#blogs", isActive: false, isDisabled: false }
];

export const siteConfig = {
  name: "Shri Fatehsinh Mohansinh Chauhan",
  tagline: "Silvassa · Dadra & Nagar Haveli",
  title: "Fatehsinh ji Chauhan | Official Institutional Archive · Silvassa",
  description: "Official personal branding archive and public service record of Shri Fatehsinh Mohansinh Chauhan — civic leader, institution builder, and patriarch in Silvassa, Dadra & Nagar Haveli.",
  socials: {
    x: "https://x.com/fatehsinhc",
    facebook: "https://facebook.com/fatehsinhc",
    externalPortal: "https://haveligroup.biz"
  },
  secretariat: {
    address: "“Haveli”, Swaminarayan Marg, Silvassa – 396230, UT of Dadra & Nagar Haveli",
    phones: ["+91 260 2642234", "+91 98241 12345"],
    email: "office@fatehsinhchauhan.in"
  }
};
