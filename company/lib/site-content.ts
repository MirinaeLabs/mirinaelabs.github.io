export type Locale = "ko" | "en";
export type CompanyPage = "home" | "privacy";

export function companyPath(locale: Locale, page: CompanyPage = "home") {
  return `${locale === "en" ? "/en" : ""}${page === "privacy" ? "/privacy/" : "/"}`;
}

export function resolveCompanyRoute(segments: string[] = []): { locale: Locale; page: CompanyPage } | null {
  switch (segments.join("/")) {
    case "": return { locale: "ko", page: "home" };
    case "en": return { locale: "en", page: "home" };
    case "privacy": return { locale: "ko", page: "privacy" };
    case "en/privacy": return { locale: "en", page: "privacy" };
    default: return null;
  }
}

export const companyCopy = {
  ko: {
    metadata: { title: "MirinaeLabs — 좋아하는 순간을, 더 오래", description: "미리내랩스는 편리함과 즐거움을 함께 생각하며 소프트웨어를 만듭니다. 작은 불편과 호기심에서 출발해, 오래 쓰고 싶은 앱을 다듬어 갑니다.", social: "일상 속 취향과 즐거움을 위한 소프트웨어를 만듭니다." },
    skip: "본문으로 건너뛰기",
    homeAria: "MirinaeLabs 홈",
    nav: { about: "미리내랩스", apps: "앱", contact: "문의하기", mainAria: "주요 메뉴", mobileAria: "모바일 메뉴", footerAria: "하단 메뉴" },
    hero: { title: ["좋아하는 순간을,", "더 오래."], description: "일상 속 작은 불편을 덜고, 좋아하는 일에 더 집중할 수 있도록.", continuation: "미리내랩스는 편리함과 즐거움을 함께 생각하며 소프트웨어를 만듭니다.", action: "미리내랩스 소개", signature: ["관심에서 시작해,", "오래 쓰고 싶은 경험으로."], note: "편리함과 즐거움이, 일상에 자연스럽게.", scrollAria: "아래 회사 소개로 이동" },
    about: { title: ["도구를 넘어,", "즐거운 경험으로."], paragraphs: ["편리해서 자주 찾는 도구, 반가워서 다시 켜는 앱. 우리는 두 경험 모두에 관심이 있습니다.", "일상에서 느낀 작은 불편과 오래 품어온 호기심에서 출발합니다. 직접 만들고 쓰며, 자연스럽게 손이 가는 소프트웨어를 다듬어 갑니다."], values: [{ title: "필요한 만큼, 단순하게.", text: ["기능을 더하기 전에 쓰는 순간을 생각합니다.", "익히는 시간보다 즐기는 시간이 길어지도록."] }, { title: "오래 좋아할 수 있도록.", text: ["잠깐의 새로움에 머무르지 않도록.", "작은 개선을 쌓아, 다시 찾고 싶은 앱을 만듭니다."] }] },
    apps: { title: "미리내랩스의 앱", available: "사용 가능", description: "Mac에서 이미지를 살펴보고 정리하는 뷰어입니다.", action: "제품 소개", actionAria: "AuroraViewer 제품 소개", productPath: "/auroraviewer/" },
    contact: { title: ["여러분의 관심도", "들려주세요."], description: "앱에 대한 의견부터 새로운 협업 이야기까지.", note: "여러분의 이야기를 기다립니다." },
    footer: { privacy: "개인정보 안내", note: "일상 속 취향과 즐거움을 위한 소프트웨어." },
    privacy: { title: "개인정보 안내", description: "MirinaeLabs 회사 홈페이지의 개인정보 관련 안내입니다.", intro: "이 안내는 MirinaeLabs 회사 홈페이지에 적용됩니다.", back: "홈으로", usageTitle: "홈페이지 이용", usageBefore: "이 홈페이지에는 회원가입, 문의 입력 양식, 자체 방문 분석 도구 또는 광고 스크립트를 넣지 않았습니다. 사이트 제공 과정에서 호스팅 업체가 처리하는 정보는 ", provider: "Cloudflare 개인정보 처리방침", usageAfter: "에서 확인할 수 있습니다.", externalTitle: "제품과 외부 서비스", externalBefore: "AuroraViewer의 개인정보 관련 내용은 ", productPolicy: "제품 개인정보 안내", productPolicyPath: "/auroraviewer/privacy/", externalAfter: "를 참고해 주세요. 외부 링크로 이동하면 해당 서비스의 개인정보 처리방침이 적용됩니다." },
    notFound: { title: "페이지를 찾지 못했어요.", description: "주소를 확인하거나 홈페이지에서 다시 시작해 주세요.", action: "홈으로 돌아가기" },
  },
  en: {
    metadata: { title: "MirinaeLabs — More of what you love", description: "MirinaeLabs makes useful, enjoyable software for everyday life. We turn small frustrations and lasting curiosity into apps worth coming back to.", social: "Useful, enjoyable software for the things you care about." },
    skip: "Skip to content",
    homeAria: "MirinaeLabs home",
    nav: { about: "About", apps: "Apps", contact: "Contact", mainAria: "Main navigation", mobileAria: "Mobile navigation", footerAria: "Footer navigation" },
    hero: { title: ["More of what", "you love."], description: "Less friction. More room for the things you enjoy.", continuation: "We make useful, enjoyable software for everyday life.", action: "About MirinaeLabs", signature: ["From a spark of curiosity", "to something worth keeping."], note: "Everyday convenience, with a little more enjoyment.", scrollAria: "Scroll to the company introduction" },
    about: { title: ["Useful by design.", "A joy to use."], paragraphs: ["Tools you reach for because they help. Apps you return to because you enjoy them. We care about both.", "Small frustrations and lasting curiosity are where we begin. We build, use, and refine our software until it feels natural to pick up again."], values: [{ title: "Keep it simple.", text: ["Think about the moment, then the feature.", "Less to learn. More to enjoy."] }, { title: "Worth coming back to.", text: ["Good software lasts beyond the first impression.", "We keep improving the small details that make a difference."] }] },
    apps: { title: "Our apps", available: "Available", description: "A Mac app for viewing and organizing images.", action: "Explore the app", actionAria: "Explore AuroraViewer", productPath: "/auroraviewer/en/" },
    contact: { title: ["What’s on", "your mind?"], description: "App feedback, questions, or ideas for working together.", note: "We’d like to hear from you." },
    footer: { privacy: "Privacy", note: "Software for everyday interests and enjoyment." },
    privacy: { title: "Privacy notice", description: "How the MirinaeLabs company website handles personal information.", intro: "This notice applies to the MirinaeLabs company website.", back: "Home", usageTitle: "Using this website", usageBefore: "This website has no accounts, contact forms, first-party analytics tools, or advertising scripts. For information processed by our hosting provider when delivering the site, see the ", provider: "Cloudflare Privacy Policy", usageAfter: ".", externalTitle: "Products and external services", externalBefore: "For information about AuroraViewer, see the ", productPolicy: "product privacy policy", productPolicyPath: "/auroraviewer/en/privacy/", externalAfter: ". External services have their own privacy policies, which apply when you follow their links." },
    notFound: { title: "We couldn’t find that page.", description: "Check the address or start again from our home page.", action: "Back to home" },
  },
} as const;
