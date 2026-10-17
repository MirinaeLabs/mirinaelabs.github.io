import { BrandMark } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top flex flex-wrap items-center justify-between gap-6">
        <a href="/" className="brand flex items-center gap-2.5" aria-label="MirinaeLabs 홈"><BrandMark /><span>mirinae<span className="brand-light">labs</span></span></a>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3" aria-label="하단 메뉴">
          <a href="/privacy/">개인정보 안내</a>
          <a href="/#contact">문의하기</a>
        </nav>
      </div>
      <div className="footer-bottom flex flex-wrap items-center justify-between gap-3"><span>© 2026 MirinaeLabs</span><span>일상 속 취향과 즐거움을 위한 소프트웨어.</span></div>
    </footer>
  );
}
