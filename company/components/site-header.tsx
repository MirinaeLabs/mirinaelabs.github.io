"use client";

import { useEffect, useRef } from "react";
import { Arrow, BrandMark } from "./icons";

export function SiteHeader({ home = true }: { home?: boolean }) {
  const menu = useRef<HTMLDetailsElement>(null);

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

  return (
    <header className="site-header">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <a className="brand flex items-center gap-2.5" href="/" aria-label="MirinaeLabs 홈">
          <BrandMark />
          <span>mirinae<span className="brand-light">labs</span></span>
        </a>
        <nav className="desktop-nav flex items-center gap-8" aria-label="주요 메뉴">
          <a href={home ? "#about" : "/#about"}>미리내랩스</a>
          <a href={home ? "#products" : "/#products"}>앱</a>
          <a className="nav-contact inline-flex items-center gap-2" href={home ? "#contact" : "/#contact"}>문의하기 <Arrow diagonal /></a>
        </nav>
        <details className="mobile-menu" ref={menu}>
          <summary aria-label="주요 메뉴"><span /><span /></summary>
          <nav aria-label="모바일 메뉴" onClick={(event) => {
            if ((event.target as Element).closest("a") && menu.current) menu.current.open = false;
          }}>
            <a href={home ? "#about" : "/#about"}>미리내랩스</a>
            <a href={home ? "#products" : "/#products"}>앱</a>
            <a href={home ? "#contact" : "/#contact"}>문의하기 <Arrow diagonal /></a>
          </nav>
        </details>
      </div>
    </header>
  );
}
