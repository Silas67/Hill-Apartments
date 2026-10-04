import type { MetadataRoute } from "next";
import { siteUrl } from "@/components/constants";
import { getPublishedProperties } from "@/lib/data/properties";
import { getPublishedPosts } from "@/lib/data/blog";

// Rebuild hourly so new listings and articles reach the sitemap without a redeploy.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    { path: "", priority: 1 },
    { path: "/properties", priority: 0.9 },
    { path: "/services", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/blog", priority: 0.6 },
  ];

  const pages = routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const [posts, properties] = await Promise.all([
    getPublishedPosts(),
    getPublishedProperties(),
  ]);

  const articles = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const listings = properties.map((p) => ({
    url: `${siteUrl}/properties/${p.id}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...articles, ...listings];
}
