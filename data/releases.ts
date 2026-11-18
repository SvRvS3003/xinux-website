export type Release = {
  version: string;
  codename: string;
  date: string;
  href: string;
  image?: string;
  description?: string;
  featured?: boolean;
};

export type ScheduleEntry = {
  version: string;
  type: string;
  date: string;
  notes?: string;
};

export const releases: Release[] = [
  {
    version: "25.05",
    codename: "Sharaf",
    date: "Aprel/May 2025",
    href: "/releases/25.05",
    image: "/release/25.05/sharaf.svg",
  },
  {
    version: "25.11",
    codename: "Jadid",
    date: "Noyabr 2025",
    href: "/releases/25.11",
    image: "/release/25.11/jadid.svg",
  },
  {
    version: "26.05",
    codename: "Mahalla",
    date: "May 2026",
    href: "/releases/26.05",
    image: "/release/26.05/mahalla.jpg",
    featured: true,
  },
];

export const schedule: ScheduleEntry[] = [
  { version: "25.05 (Sharaf)", type: "stable", date: "Aprel/May", notes: "orzklv" },
  { version: "25.11 (Jadid)", type: "stable", date: "Noyabr", notes: "bahrom04" },
  { version: "26.05 (Mahalla)", type: "unstable", date: "Noyabr–May", notes: "bahrom04" },
  { version: "26.05 (Mahalla)", type: "stable", date: "May–Sentyabr", notes: "let-rec" },
];
