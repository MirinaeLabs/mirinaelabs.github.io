import { BrandMark } from "./icons";
import { companyCopy, companyPath, type Locale } from "../lib/site-content";

export function SiteFooter({ locale = "ko" }: { locale?: Locale }) {
  const copy = companyCopy[locale];
  return <footer className="site-footer shell">
    <div className="footer-top flex flex-wrap items-center justify-between gap-6">
      <a href={companyPath(locale)} className="brand flex items-center gap-2.5" aria-label={copy.homeAria}><BrandMark /><span className="brand-wordmark">mirinae<span className="brand-light">labs</span></span></a>
      <nav className="flex flex-wrap items-center gap-x-7 gap-y-3" aria-label={copy.nav.footerAria}><a href={companyPath(locale, "privacy")}>{copy.footer.privacy}</a><a href={`${companyPath(locale)}#contact`}>{copy.nav.contact}</a></nav>
    </div>
    <div className="footer-bottom flex flex-wrap items-center justify-between gap-3"><span>© 2026 MirinaeLabs</span><span>{copy.footer.note}</span></div>
  </footer>;
}
