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
  { id: "lineage", labelKey: "nav_lineage", defaultLabel: "Lineage", href: "#lineage", isActive: false, isDisabled: false },
  { id: "service", labelKey: "nav_service", defaultLabel: "Service", href: "#service", isActive: false, isDisabled: false },
  { id: "institutions", labelKey: "nav_institutions", defaultLabel: "Institutions", href: "#institutions", isActive: false, isDisabled: false },
  { id: "haveli", labelKey: "nav_haveli", defaultLabel: "Haveli", href: "#haveli-group", isActive: false, isDisabled: false },
  { id: "moments", labelKey: "nav_moments", defaultLabel: "Moments", href: "#moments", isActive: false, isDisabled: false },
  { id: "philosophy", labelKey: "nav_philosophy", defaultLabel: "Philosophy", href: "#philosophy", isActive: false, isDisabled: false },
  { id: "contact", labelKey: "nav_contact", defaultLabel: "Contact", href: "#contact", isActive: false, isDisabled: false }
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
