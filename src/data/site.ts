export interface NavItem {
  id: string;
  labelKey: string;
  defaultLabel: string;
  href: string;
  isActive: boolean;
  isDisabled: boolean;
}

export const navItems: NavItem[] = [
  { id: "home", labelKey: "nav_home", defaultLabel: "Home", href: "#home", isActive: true, isDisabled: false },
  { id: "about", labelKey: "nav_lineage", defaultLabel: "About", href: "#about", isActive: false, isDisabled: true },
  { id: "legacy", labelKey: "nav_lineage", defaultLabel: "Legacy", href: "#legacy", isActive: false, isDisabled: true },
  { id: "service", labelKey: "nav_service", defaultLabel: "Service", href: "#service", isActive: false, isDisabled: true },
  { id: "institutions", labelKey: "nav_institutions", defaultLabel: "Institutions", href: "#institutions", isActive: false, isDisabled: true },
  { id: "gallery", labelKey: "nav_moments", defaultLabel: "Gallery", href: "#gallery", isActive: false, isDisabled: true },
  { id: "blogs", labelKey: "nav_moments", defaultLabel: "Blogs", href: "#blogs", isActive: false, isDisabled: true },
  { id: "rewards", labelKey: "nav_philosophy", defaultLabel: "Rewards", href: "#rewards", isActive: false, isDisabled: true }
];

export const siteConfig = {
  name: "Shri Fatehsinh Mohansinh Chauhan",
  tagline: "Silvassa · Dadra & Nagar Haveli",
  title: "Fatehsinh ji Chauhan | A Life of Service · Silvassa",
  description: "Official personal branding archive and public service record of Shri Fatehsinh Mohansinh Chauhan — civic leader, institution builder, and patriarch in Silvassa, Dadra & Nagar Haveli.",
  socials: {
    x: "https://x.com/fatehsinhc",
    facebook: "https://facebook.com/fatehsinhc",
    externalPortal: "https://haveligroup.biz"
  },
  secretariat: {
    address: "“Haveli”, Swaminarayan Marg, Silvassa – 396230, UT of Dadra & Nagar Haveli",
    phones: ["0260-2641500", "+91 9824142500"],
    email: "haveli.group@gmail.com"
  }
};
