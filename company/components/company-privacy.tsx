import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Arrow } from "./icons";
import { companyCopy, companyPath, type Locale } from "../lib/site-content";

export function CompanyPrivacy({ locale }: { locale: Locale }) {
  const copy = companyCopy[locale].privacy;
  return <><SiteHeader locale={locale} home={false} page="privacy" /><main id="main" className="legal shell"><a className="text-link inline-flex items-center gap-2" href={companyPath(locale)}>{copy.back} <Arrow /></a><h1>{copy.title}</h1><p>{copy.intro}</p><h2>{copy.usageTitle}</h2><p>{copy.usageBefore}<a href="https://www.cloudflare.com/privacypolicy/">{copy.provider}</a>{copy.usageAfter}</p><h2>{copy.externalTitle}</h2><p>{copy.externalBefore}<a href={copy.productPolicyPath}>{copy.productPolicy}</a>{copy.externalAfter}</p></main><SiteFooter locale={locale} /></>;
}
