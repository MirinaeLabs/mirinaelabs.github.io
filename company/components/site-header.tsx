"use client";

import { useEffect, useRef } from "react";
import { Arrow, BrandMark } from "./icons";
import { companyCopy, companyPath, type Locale, type CompanyPage } from "../lib/site-content";

export function SiteHeader({ home = true, locale = "ko", page = "home" }: { home?: boolean; locale?: Locale; page?: CompanyPage }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const copy = companyCopy[locale];
  const otherLocale = locale === "ko" ? "en" : "ko";
  const homePath = companyPath(locale);
  const navHref = (hash: string) => `${home ? "" : homePath}${hash}`;

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (menu.current?.open && !menu.current.contains(event.target as Node)) menu.current.open = false;
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return <header className="site-header"><div className="shell flex h-20 items-center justify-between gap-4">
    <a className="brand flex items-center gap-2.5" href={homePath} aria-label={copy.homeAria}><BrandMark /><span className="brand-wordmark">mirinae<span className="brand-light">labs</span></span></a>
    <div className="header-actions flex items-center gap-4">
      <nav className="desktop-nav flex items-center gap-8" aria-label={copy.nav.mainAria}>
        <a href={navHref("#about")}>{copy.nav.about}</a><a href={navHref("#products")}>{copy.nav.apps}</a><a className="nav-contact inline-flex items-center gap-2" href={navHref("#contact")}>{copy.nav.contact} <Arrow diagonal /></a>
      </nav>
      <a className="language-toggle" href={companyPath(otherLocale, page)} hrefLang={otherLocale} lang={otherLocale} rel="alternate" aria-label={otherLocale === "en" ? "View in English" : "한국어로 보기"} title={otherLocale === "en" ? "English" : "한국어"} onClick={event => {
        if (window.location.hash) event.currentTarget.href = `${companyPath(otherLocale, page)}${window.location.hash}`;
      }}>{otherLocale === "en" ? "EN" : "KO"}</a>
      <details className="mobile-menu" ref={menu}>
        <summary aria-label={copy.nav.mainAria}><span /><span /></summary>
        <nav aria-label={copy.nav.mobileAria} onClick={event => { if ((event.target as Element).closest("a") && menu.current) menu.current.open = false; }}>
          <a href={navHref("#about")}>{copy.nav.about}</a><a href={navHref("#products")}>{copy.nav.apps}</a><a href={navHref("#contact")}>{copy.nav.contact} <Arrow diagonal /></a>
        </nav>
      </details>
    </div>
  </div></header>;
}
