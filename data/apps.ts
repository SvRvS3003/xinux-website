export type App = {
  name: string;
  description: string;
  href: string;
  icon: string;
  verified?: boolean;
};

export const apps: App[] = [
  {
    name: "Xeonitte",
    description: "Xinux uchun maxsus ishlab chiqilgan ilova",
    href: "https://git.oss.uzinfocom.uz/xinux/xeonitte",
    icon: "/apps/xeonitte.svg",
    verified: true,
  },
  {
    name: "Software Center",
    description: "Dasturlarni o'rnatish va boshqarish markazi",
    href: "https://git.oss.uzinfocom.uz/xinux/software-center",
    icon: "/apps/software-center.svg",
    verified: true,
  },
  {
    name: "Module Manager",
    description: "NixOS modullarini boshqarish vositasi",
    href: "https://git.oss.uzinfocom.uz/xinux/module-manager",
    icon: "/apps/module-manager.svg",
    verified: true,
  },
  {
    name: "E-IMZO Manager",
    description: "Elektron raqamli imzo bilan ishlash dasturi",
    href: "https://git.oss.uzinfocom.uz/xinux/e-imzo-manager",
    icon: "/apps/e-imzo-manager.svg",
    verified: true,
  },
];
