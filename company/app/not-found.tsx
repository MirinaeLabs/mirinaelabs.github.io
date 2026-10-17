import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Arrow } from "../components/icons";

export default function NotFound() {
  return <><SiteHeader home={false} /><main id="main" className="not-found shell"><p>404</p><h1>페이지를 찾지 못했어요.</h1><p>주소를 확인하거나 홈페이지에서 다시 시작해 주세요.</p><a href="/" className="button button-primary inline-flex items-center gap-4">홈으로 돌아가기 <Arrow /></a></main><SiteFooter /></>;
}
