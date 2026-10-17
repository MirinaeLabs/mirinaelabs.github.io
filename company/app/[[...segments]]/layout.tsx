import type { Viewport } from "next";
import localFont from "next/font/local";
import { companyCopy, resolveCompanyRoute } from "../../lib/site-content";
import "../globals.css";

const pretendard = localFont({ src: "../../public/assets/fonts/PretendardVariable.woff2", display: "swap", variable: "--font-pretendard", weight: "100 900" });
export const viewport: Viewport = { themeColor: "#faf9f6", colorScheme: "light" };

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ segments?: string[] }> }>) {
  const route = resolveCompanyRoute((await params).segments);
  const locale = route?.locale ?? "ko";
  return <html lang={locale} className={pretendard.variable}><body><a className="skip-link" href="#main">{companyCopy[locale].skip}</a>{children}</body></html>;
}
