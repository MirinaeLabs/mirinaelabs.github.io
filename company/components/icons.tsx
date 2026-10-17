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

export function ViewIcon({ kind }: { kind: "viewer" | "library" | "compare" | "inspect" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "viewer" && <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m3 16 5-5 4 4 3-3 6 6" /><circle cx="16" cy="9" r="1" /></>}
      {kind === "library" && <>{[3, 14].flatMap((x) => [3, 14].map((y) => <rect key={`${x}-${y}`} x={x} y={y} width="7" height="7" rx="1.5" />))}</>}
      {kind === "compare" && <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M12 4v16" /></>}
      {kind === "inspect" && <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3" /></>}
    </svg>
  );
}
