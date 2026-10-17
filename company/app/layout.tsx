import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({ src: "../public/assets/fonts/PretendardVariable.woff2", display: "swap", variable: "--font-pretendard", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mirinaelabs.com"),
  title: { default: "MirinaeLabs — 일상에 스며드는 소프트웨어", template: "%s — MirinaeLabs" },
  description: "매일 쓰는 도구가 조금 더 편해질 수 있도록. 미리내랩스는 일상 속 작은 불편에서 출발합니다. Mac 이미지 뷰어 AuroraViewer를 만나보세요.",
  alternates: { canonical: "/" },
  icons: { icon: "/assets/mirinae-symbol.svg" },
  openGraph: { type: "website", locale: "ko_KR", siteName: "MirinaeLabs", title: "MirinaeLabs — 일상에 스며드는 소프트웨어", description: "작은 불편에서 출발해, 매일 쓰고 싶은 도구를 만듭니다.", url: "/", images: [{ url: "/assets/og-company.png", width: 1200, height: 630, alt: "MirinaeLabs — 일상에 스며드는 소프트웨어" }] },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#faf9f6", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" className={pretendard.variable}><body><a className="skip-link" href="#main">본문으로 건너뛰기</a>{children}</body></html>;
}
