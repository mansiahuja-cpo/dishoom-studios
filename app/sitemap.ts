import type { MetadataRoute } from "next";
import { reader } from "@/lib/keystatic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dishoomstudio.com";

  const projects = await reader.collections.projects.all();
  const insights = await reader.collections.insights.all();

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${baseUrl}/work/${p.slug}`,
      lastModified: new Date(),
    })),
    ...insights.map((a) => ({
      url: `${baseUrl}/insights/${a.slug}`,
      lastModified: new Date(),
    })),
  ];
}
