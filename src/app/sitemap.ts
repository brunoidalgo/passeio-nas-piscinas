import type { MetadataRoute } from "next";
import { photos, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = site.url.replace(/\/$/, "");
  return [
    {
      url,
      changeFrequency: "monthly",
      priority: 1,
      // Sitemap de imagens: ajuda as fotos a aparecerem no Google Imagens
      images: photos.map((p) => `${url}${p.src}`),
    },
  ];
}
