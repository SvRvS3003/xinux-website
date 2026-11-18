import type { MetadataRoute } from "next";
import type { PageMapItem } from "nextra";
import { getPageMap } from "nextra/page-map";

export const dynamic = "force-static";

const SITE = "https://xinux.uz";

function routes(items: PageMapItem[]): string[] {
  return items.flatMap((item) => {
    if ("data" in item) return [];
    if ("children" in item) return routes(item.children);
    return typeof item.route === "string" ? [item.route] : [];
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  return [...new Set(routes(await getPageMap()))].map((route) => ({
    url: `${SITE}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
