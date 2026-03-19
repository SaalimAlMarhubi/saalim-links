export type Link = {
  title: string;
  description: string;
  href: string;
  icon: string;
  section: "connect" | "work";
  featured?: boolean;
  badge?: string;
  iconTheme: string;
};

export const links: Link[] = [
  {
    title: "LinkedIn",
    description: "Let's connect",
    href: "https://www.linkedin.com/in/saalimalmarhubi/",
    icon: "linkedin",
    section: "connect",
    iconTheme: "bg-blue-600/15 text-blue-500",
  },
  {
    title: "YouTube",
    description: "Building in public & dev vlogs",
    href: "https://youtube.com/@saalimalmarhubi",
    icon: "youtube",
    section: "connect",
    iconTheme: "bg-red-600/12 text-red-500",
  },
  {
    title: "TikTok",
    description: "Short-form dev content",
    href: "https://www.tiktok.com/@saalimalmarhubi",
    icon: "tiktok",
    section: "connect",
    iconTheme: "bg-slate-600/20 text-slate-100",
  },
  {
    title: "Instagram",
    description: "Dev life & behind the scenes",
    href: "https://www.instagram.com/saalimalmarhubi/",
    icon: "instagram",
    section: "connect",
    iconTheme: "bg-pink-600/15 text-pink-400",
  },
  {
    title: "saalimalmarhubi.com",
    description: "Portfolio & blog",
    href: "https://saalimalmarhubi.com",
    icon: "website",
    section: "work",
    iconTheme: "bg-purple-500/15 text-purple-400",
  },
  {
    title: "Sakinah",
    description: "Quran memorisation & prayer tracking app",
    href: "https://sakinah.app",
    icon: "sakinah",
    section: "work",
    featured: true,
    iconTheme: "bg-emerald-500/15 text-emerald-400",
  },
];
