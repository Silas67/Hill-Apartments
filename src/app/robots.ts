import type { MetadataRoute } from "next";
import { siteUrl } from "@/components/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Account pages hold nothing useful to a crawler.
      disallow: ["/login", "/signup", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
