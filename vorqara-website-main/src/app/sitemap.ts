import type { MetadataRoute } from "next";
const base = "https://vorqara.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/products`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/endpoint`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/ecosystem`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/solutions`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/security`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/partners`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/resources`, changeFrequency: "weekly", priority: 0.65 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
