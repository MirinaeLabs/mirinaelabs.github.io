export type Locale = "ko" | "en";

export const SITE_BASE = "/auroraviewer";
export const APP_STORE_URL = "https://apps.apple.com/app/id6766165556?mt=12";
export const ISSUE_URL = "https://github.com/MirinaeLabs/mirinaelabs.github.io/issues/new?title=AuroraViewer%20Support%20Request";

export const productFacts = {
  name: "AuroraViewer",
  version: "1.6.3",
  minimumMacOS: "14.0",
  price: "0",
  imageFormats: [
    "BMP", "JPEG", "GIF", "PNG", "WebP", "TIFF", "HEIC", "HEIF", "AVIF", "APNG",
    "SVG", "PSD", "DDS", "JPEG 2000", "TGA", "PBM", "PGM", "PPM",
    "DNG", "CR2", "CR3", "CRW", "NEF", "NRW", "ORF", "RW2", "PEF", "ARW", "SR2", "RAF",
    "AI", "EPS", "EPSF", "PDF"
  ],
  archiveFormats: ["ZIP", "RAR", "7z"],
  exportFormats: ["PNG", "JPEG", "TIFF", "HEIC", "WebP"],
  screenshots: {
    viewer: { ko: "viewer-ko.jpg", en: "viewer-en.jpg" },
    library: { ko: "thumbnail-ko.jpg", en: "thumbnail-en.jpg" },
    compare: { ko: "compare-ko.jpg", en: "compare-en.jpg" },
    inspect: { ko: "color-ko.jpg", en: "color-en.jpg" }
  }
} as const;

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English"
};

export function localizedPath(locale: Locale, path = "/") {
  const suffix = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return locale === "en" ? `${SITE_BASE}/en${suffix}` : `${SITE_BASE}${suffix}`;
}

export function screenshotPath(kind: keyof typeof productFacts.screenshots, locale: Locale) {
  return `${SITE_BASE}/assets/screenshots/${productFacts.screenshots[kind][locale]}`;
}

export const siteCopy = {
  ko: {
    nav: {
      home: "홈",
      features: "기능",
      manual: "사용 설명서",
      support: "지원",
      privacy: "개인정보"
    },
    languageLabel: "English",
    languageAria: "영어 사이트로 이동",
    appStore: "Mac App Store에서 무료로 받기",
    manual: "사용 설명서 보기",
    readMore: "자세히 알아보기",
    version: `버전 ${productFacts.version} · macOS ${productFacts.minimumMacOS} 이상`,
    conditionalFormats: "표시 가능 여부와 품질은 파일 내부 코덱과 macOS의 ImageIO·Quick Look 지원에 따라 달라질 수 있습니다.",
    footerNote: "Mac에서 이미지를 보고, 고르고, 정리하는 한 흐름.",
    legal: "© 2026 Mirinae Labs"
  },
  en: {
    nav: {
      home: "Home",
      features: "Features",
      manual: "Manual",
      support: "Support",
      privacy: "Privacy"
    },
    languageLabel: "한국어",
    languageAria: "Go to the Korean site",
    appStore: "Get it free on the Mac App Store",
    manual: "Read the manual",
    readMore: "Learn more",
    version: `Version ${productFacts.version} · Requires macOS ${productFacts.minimumMacOS} or later`,
    conditionalFormats: "Availability and rendering quality can vary with the file's codec and the ImageIO or Quick Look support available in macOS.",
    footerNote: "One flow for viewing, choosing, and organizing images on your Mac.",
    legal: "© 2026 Mirinae Labs"
  }
} as const;

// Product claims in this file are grounded in the AuroraViewer main branch:
// App/Info.plist, App/AuroraViewer.entitlements,
// Sources/AuroraViewer/Services/FileSystem/ImageFileScanner.swift,
// Sources/AuroraViewer/Models/Viewer/ViewerStateModels.swift, and doc/01-feature-map.md.
