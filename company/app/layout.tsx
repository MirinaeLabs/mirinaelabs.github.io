import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({ src: "../public/assets/fonts/PretendardVariable.woff2", display: "swap", variable: "--font-pretendard", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mirinaelabs.com"),
  title: { default: "MirinaeLabs — 좋아하는 순간을, 더 오래", template: "%s — MirinaeLabs" },
  description: "미리내랩스는 편리함과 즐거움을 함께 생각하며 소프트웨어를 만듭니다. 작은 불편과 호기심에서 출발해, 오래 쓰고 싶은 앱을 다듬어 갑니다.",
  alternates: { canonical: "/" },
  icons: { icon: "/assets/mirinae-symbol.svg" },
  openGraph: { type: "website", locale: "ko_KR", siteName: "MirinaeLabs", title: "MirinaeLabs — 좋아하는 순간을, 더 오래", description: "일상 속 취향과 즐거움을 위한 소프트웨어를 만듭니다.", url: "/", images: [{ url: "/assets/og-company.png", width: 1200, height: 630, alt: "MirinaeLabs — 좋아하는 순간을, 더 오래" }] },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#faf9f6", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" className={pretendard.variable}><body><a className="skip-link" href="#main">본문으로 건너뛰기</a>{children}</body></html>;
}
