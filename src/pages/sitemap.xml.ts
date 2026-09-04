import type { APIRoute } from "astro";
import { manualTopics } from "../data/manual";
import { localizedPath, type Locale } from "../data/product";

const locales: Locale[] = ["ko", "en"];
const topLevel = ["/", "features", "manual", "support", "privacy"];
const paths = locales.flatMap((locale) => [
  ...topLevel.map((path) => localizedPath(locale, path)),
  ...manualTopics.map((topic) => localizedPath(locale, `manual/${topic.slug}`))
]);

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
