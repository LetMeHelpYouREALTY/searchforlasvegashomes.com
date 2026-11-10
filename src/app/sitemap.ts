import { MetadataRoute } from "next";
import { FEATURED_LISTING, FEATURED_LISTING_PATH } from "@/components/sections/FeaturedListing";
import { SITE_URL } from "@/config/site";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
};

/** Only www canonical, indexable routes. */
const pages: Entry[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/search", priority: 0.9, changeFrequency: "daily" },
  { path: "/market-reports", priority: 0.8, changeFrequency: "weekly" },
  { path: "/neighborhood-analysis", priority: 0.8, changeFrequency: "weekly" },
  { path: "/investment-calculator", priority: 0.7, changeFrequency: "monthly" },
  { path: "/price-trends", priority: 0.8, changeFrequency: "weekly" },
  { path: "/market-forecast", priority: 0.8, changeFrequency: "weekly" },
  { path: "/home-value-analyzer", priority: 0.7, changeFrequency: "monthly" },
  { path: "/california-comparison", priority: 0.7, changeFrequency: "monthly" },
  { path: "/school-ratings-map", priority: 0.7, changeFrequency: "monthly" },
  { path: "/appreciation-tracker", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/blog/weekly-market-insights",
    priority: 0.7,
    changeFrequency: "weekly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  if (FEATURED_LISTING.active) {
    entries.push({
      url: `${SITE_URL}${FEATURED_LISTING_PATH}`,
      lastModified: new Date(FEATURED_LISTING.updatedDate),
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  return entries;
}
