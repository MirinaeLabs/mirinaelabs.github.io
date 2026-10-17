# MirinaeLabs company homepage

Scope: the Next.js company app in `company/`. The AuroraViewer Astro site keeps its own visual system.

## Direction

A company introduction about useful tools and enjoyable experiences. The company story and making principles precede the compact app directory. The hero carries the MirinaeLabs identity, without a product advertisement or screenshot gallery.

Preserve the user's minimal Next.js + Tailwind direction: generous space, responsive grids, and the existing translucent eight-spoke brand sculpture inspired by Apple Music. The first action introduces the company. Product capabilities and screenshots belong on the product site.

Only publicly released apps appear in the directory. Names, descriptions, icons, compatibility targets, release dates, and other details of apps in development are not published. Broader company language may describe convenience, curiosity, interests, and enjoyment without announcing a particular project.

## Applied references

- [Impeccable](https://github.com/pbakaus/impeccable): deliberate hierarchy, precise material treatment, visible content before animation, keyboard access, and rendered verification.
- [Taste](https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill): short headings, one clear first-screen action, subject-specific geometry, varied section composition, and browser review.

The user's explicit glass and whitespace direction takes priority over generic bans on gradients, blur, and sparse imagery. The guides are craft references; their installation and interactive direction-selection workflows are not part of this repository.

## Tokens and composition

| Role | Value |
| --- | --- |
| Canvas | `#faf9f6` |
| Secondary surface | `#f1f0ec` |
| Ink | `#27272b` |
| Secondary text | `#5e5c63` |
| Action / focus | `#c83f4c` / `#b63340` |
| Typeface | Self-hosted Pretendard Variable, SIL Open Font License |
| Display | 39–72px, weight 650, line height 1.22–1.24 |
| Section heading | 26–48px, weight 610, line height 1.3–1.35 |
| Body | 15–17px; 13px minimum for secondary UI |
| Container | 1200px maximum; 20 / 32 / 48px minimum side margins |
| Grid | 12 columns on desktop; independent mobile stacks |
| Main panels | 24px corner radius |
| Motion | One 1.5s brand sculpture arrival; brief control feedback |

All content is visible without animation. Reduced motion disables travel and smooth scrolling. A solid material fallback supports browsers without backdrop filtering. The app directory has one concise AuroraViewer entry; no gallery, comparison tabs, download prompt, or product card in the hero.

`app/page.tsx` owns company copy; `globals.css` owns tokens and material rules. Header and footer remain shared components. Refresh the self-hosted social-preview image when hero copy or imagery changes.

## Links and support

Public company and product pages have no GitHub links. Company navigation leads to company introduction, apps, and contact. Product support and privacy questions use the existing company email. The product footer's MirinaeLabs name links to `https://mirinaelabs.com/` in both languages and on manual pages.

`src/data/product.ts` centralizes `COMPANY_URL`, `SUPPORT_EMAIL`, and `SUPPORT_URL`. Support, privacy, and troubleshooting copy must stay aligned with that email channel. Preserve product and manual routes, and regenerate the legacy `auroraviewer/` static output when those sources change.

Company HTML retains `Cache-Control: no-transform` to prevent CDN email rewriting from changing the server-rendered markup before React hydrates.

## Evidence and verification

AuroraViewer's short description is grounded in sibling `../AuroraViewer/README.md` and `doc/01-feature-map.md` at main commit `7f39b71`. No new product capabilities, testimonials, performance claims, or company statistics were added. The privacy-policy update changes the support channel, not app data-processing behavior.

The company revision was rendered at 320, 390, 640, 768, 1024, 1280, 1440, and 1920px. Headings stay within two lines and there is no horizontal overflow. Mobile menu navigation, Escape, focus return, and reduced motion were checked. Product pages in both languages retain working company-home and email support links. The integrated and legacy exports were checked for GitHub links and unreleased-app content.

The previous full-screen product gallery and its four company-only WebP assets were removed. The product website retains its original screenshots and full feature documentation.
