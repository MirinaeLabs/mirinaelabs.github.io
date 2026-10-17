import { Arrow, BrandMark } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top flex flex-wrap items-center justify-between gap-6">
        <a href="/" className="brand flex items-center gap-2.5" aria-label="MirinaeLabs 홈"><BrandMark /><span>mirinae<span className="brand-light">labs</span></span></a>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3" aria-label="하단 메뉴">
          <a href="/privacy/">개인정보 안내</a>
          <a href="/auroraviewer/support/">제품 지원</a>
          <a href="https://github.com/MirinaeLabs" className="inline-flex items-center gap-1.5">GitHub <Arrow diagonal width={15} height={15} /></a>
        </nav>
      </div>
      <div className="footer-bottom flex flex-wrap items-center justify-between gap-3"><span>© 2026 MirinaeLabs</span><span>작은 발견이, 더 나은 일상으로.</span></div>
    </footer>
  );
}
