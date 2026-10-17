import type { SVGProps } from "react";

const BRAND_MARK_PATH = "M20 5v9m0 12v9M5 20h9m12 0h9M9.4 9.4l6.4 6.4m8.4 8.4 6.4 6.4M9.4 30.6l6.4-6.4m8.4-8.4 6.4-6.4";

export function Arrow({ diagonal = false, ...props }: SVGProps<SVGSVGElement> & { diagonal?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}
    </svg>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
        <path d={BRAND_MARK_PATH} />
      </g>
    </svg>
  );
}

export function BrandSculpture() {
  return (
    <svg className="glass-sculpture" width="335" height="335" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="brand-glass-body" x1="5" y1="5" x2="33" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--sculpture-highlight)" stopOpacity=".96" />
          <stop offset=".24" stopColor="var(--sculpture-light)" stopOpacity=".78" />
          <stop offset=".6" stopColor="var(--sculpture-mid)" stopOpacity=".72" />
          <stop offset=".82" stopColor="var(--sculpture-deep)" stopOpacity=".86" />
          <stop offset="1" stopColor="var(--sculpture-light)" stopOpacity=".9" />
        </linearGradient>
        <linearGradient id="brand-glass-edge" x1="7" y1="4" x2="31" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity=".98" />
          <stop offset=".42" stopColor="var(--sculpture-light)" stopOpacity=".42" />
          <stop offset="1" stopColor="var(--sculpture-deep)" stopOpacity=".52" />
        </linearGradient>
        <linearGradient id="brand-glass-shine" x1="8" y1="5" x2="29" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity=".66" />
          <stop offset=".38" stopColor="#fff" stopOpacity="0" />
          <stop offset=".6" stopColor="#fff" stopOpacity=".12" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g strokeLinecap="round">
        <path d={BRAND_MARK_PATH} stroke="var(--sculpture-deep)" strokeWidth="4.5" strokeOpacity=".24" transform="translate(.28 .48)" />
        <path d={BRAND_MARK_PATH} stroke="url(#brand-glass-edge)" strokeWidth="4.7" />
        <path d={BRAND_MARK_PATH} stroke="url(#brand-glass-body)" strokeWidth="4.5" />
        <path d={BRAND_MARK_PATH} stroke="url(#brand-glass-shine)" strokeWidth="3.5" transform="translate(-.12 -.16)" />
      </g>
    </svg>
  );
}
