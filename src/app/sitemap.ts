import type { MetadataRoute } from "next";
import { getNotes, getProjects } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/notes", "/about"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getProjects().map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const noteRoutes = getNotes().map((note) => ({
    url: `${site.url}/notes/${note.slug}`,
    lastModified: note.data.pubDate,
  }));

  return [...staticRoutes, ...projectRoutes, ...noteRoutes];
}
