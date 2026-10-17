import type { Metadata } from "next";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { Arrow } from "../../components/icons";

export const metadata: Metadata = { title: "개인정보 안내", description: "MirinaeLabs 회사 홈페이지의 개인정보 관련 안내입니다.", alternates: { canonical: "/privacy/" }, openGraph: { title: "개인정보 안내 — MirinaeLabs", url: "/privacy/" } };

export default function PrivacyPage() {
  return <><SiteHeader home={false} /><main id="main" className="legal shell"><a className="text-link inline-flex items-center gap-2" href="/">홈으로 <Arrow /></a><h1>개인정보 안내</h1><p>이 안내는 MirinaeLabs 회사 홈페이지에 적용됩니다.</p><h2>홈페이지 이용</h2><p>이 홈페이지에는 회원가입, 문의 입력 양식, 자체 방문 분석 도구 또는 광고 스크립트를 넣지 않았습니다. 사이트 제공 과정에서 호스팅 업체가 처리하는 정보는 <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare 개인정보 처리방침</a>에서 확인할 수 있습니다.</p><h2>제품과 외부 서비스</h2><p>AuroraViewer의 개인정보 관련 내용은 <a href="/auroraviewer/privacy/">제품 개인정보 안내</a>를 참고해 주세요. GitHub 등 외부 링크로 이동하면 해당 서비스의 개인정보 처리방침이 적용됩니다.</p></main><SiteFooter /></>;
}
