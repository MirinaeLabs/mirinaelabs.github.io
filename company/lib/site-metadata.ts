import type { Metadata } from "next";
import { companyCopy, companyPath, type Locale, type CompanyPage } from "./site-content";

export function companyMetadata(locale: Locale, page: CompanyPage): Metadata {
  const copy = companyCopy[locale];
  const title = page === "home" ? copy.metadata.title : `${copy.privacy.title} — MirinaeLabs`;
  const description = page === "home" ? copy.metadata.description : copy.privacy.description;
  const path = companyPath(locale, page);
  return {
    metadataBase: new URL("https://mirinaelabs.com"),
    title,
    description,
    alternates: { canonical: path, languages: { ko: companyPath("ko", page), en: companyPath("en", page), "x-default": companyPath("ko", page) } },
    icons: { icon: "/assets/mirinae-symbol.svg" },
    openGraph: { type: "website", locale: locale === "en" ? "en_US" : "ko_KR", alternateLocale: locale === "en" ? "ko_KR" : "en_US", siteName: "MirinaeLabs", title, description: page === "home" ? copy.metadata.social : description, url: path, images: [{ url: locale === "en" ? "/assets/og-company-en.png" : "/assets/og-company.png", width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image" },
  };
}
