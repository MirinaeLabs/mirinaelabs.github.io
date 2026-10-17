import { notFound } from "next/navigation";
import { CompanyHome } from "../../components/company-home";
import { CompanyPrivacy } from "../../components/company-privacy";
import { resolveCompanyRoute } from "../../lib/site-content";
import { companyMetadata } from "../../lib/site-metadata";

type Props = { params: Promise<{ segments?: string[] }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ segments: [] }, { segments: ["en"] }, { segments: ["privacy"] }, { segments: ["en", "privacy"] }];
}
export async function generateMetadata({ params }: Props) {
  const route = resolveCompanyRoute((await params).segments);
  if (!route) notFound();
  return companyMetadata(route.locale, route.page);
}
export default async function CompanyPage({ params }: Props) {
  const route = resolveCompanyRoute((await params).segments);
  if (!route) notFound();
  return route.page === "privacy" ? <CompanyPrivacy locale={route.locale} /> : <CompanyHome locale={route.locale} />;
}
