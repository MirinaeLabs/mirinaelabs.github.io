import type { SVGProps } from "react";

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
        <path d="M20 5v9m0 12v9M5 20h9m12 0h9M9.4 9.4l6.4 6.4m8.4 8.4 6.4 6.4M9.4 30.6l6.4-6.4m8.4-8.4 6.4-6.4" />
      </g>
    </svg>
  );
}
