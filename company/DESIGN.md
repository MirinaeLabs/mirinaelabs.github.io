# MirinaeLabs company homepage

Scope: the Next.js company app in `company/`. AuroraViewer's Astro pages keep their own design system.

## Direction

A quiet software studio, expressed through the existing eight-spoke MirinaeLabs symbol, generous space, real product imagery, and translucent material inspired by Apple Music. The original symbol becomes a glass object; the AuroraViewer preview is a real, usable route into the product.

The user explicitly requested Next.js, Tailwind, minimalism, glassmorphism, generous whitespace, and responsive grids. These requirements take precedence over generic rules in the reference guides.

## Applied guides

- [Impeccable](https://github.com/pbakaus/impeccable): hierarchy, intentional materials, visible content before animation, responsive composition, keyboard focus, and rendered verification. The mechanical detector returned no findings on the completed source.
- [Taste](https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill): short headlines, one clear action, true product imagery, a subject-specific visual motif, varied section geometry, and browser review. The `uneven-photographs` direction was drawn with seed `476310725`; its uneven visual emphasis informed the composition. Its dark hero, serif face, and slate palette were superseded by the user's Apple Music reference and the Korean company content.

The references guide craft; their full interactive installation and art-direction interview workflows are not installed into this repository. The company purpose, content, routes, and evidence come from the existing site and the user's explicit brief.

## Tokens

| Role | Value |
| --- | --- |
| Canvas | `#faf9f6` |
| Secondary surface | `#f1f0ec` |
| Ink | `#27272b` |
| Secondary text | `#5e5c63` |
| Action / focus | `#c83f4c` / `#b63340` |
| Glass | White at 64%, 24px backdrop blur |
| Typeface | Self-hosted Pretendard Variable, SIL Open Font License |
| Display | 39–72px, weight 650, line height 1.22–1.24 |
| Section heading | 26–48px, weight 610, line height 1.3–1.35 |
| Body | 15–17px; 13px minimum for secondary UI |
| Container | 1200px maximum; 20 / 32 / 48px minimum side margins |
| Grid | 12 columns on desktop; composed stacks on mobile |
| Panels / controls | 24px radius panels; pill actions and desktop segmented controls |
| Motion | One 1.5s glass-object arrival; 180–300ms control feedback |

All content is visible without animation. Reduced motion disables travel and smooth scrolling. A solid material fallback supports browsers without backdrop filtering. Screenshots retain their intrinsic 1164:709 ratio and use lossless WebP.

## Deliberate exceptions to Taste's default meter

- Glass, material gradients, and soft shadows belong to the explicitly requested visual direction. The solid primary action has no shadow or gradient.
- The real product gallery shows one screenshot at a time, with four keyboard-accessible views, rather than inserting four decorative photographs to meet an image-count threshold.
- No stock footage, autoplay carousel, or repeated scroll entrances: the user's requested minimal company page takes priority over a motion-count threshold.
- The warm neutral canvas and contextual font sizes support Korean readability. They are not a claim of literal conformance to every Taste house-style metric.

## Content and evidence

Company copy, contact address, privacy notice, product routes, and GitHub destination come from the previous company site. No customer logos, metrics, endorsements, pricing, or company history were invented.

Screenshots are existing native AuroraViewer captures in `public/assets/screenshots/`, encoded losslessly for the company app. Product claims are limited to viewing, thumbnail browsing, ratings/tags, comparison, and color/pixel inspection, verified against sibling `../AuroraViewer` main commit `7f39b71` and `doc/01-feature-map.md`. The source repository has unrelated local changes; this task does not modify it.

The interactive preview in `components/product-showcase.tsx` is the main demonstration. `app/page.tsx` owns company content; `globals.css` owns shared tokens and component material rules. Keep copy and functional UI readable before adding decoration.

## Verification (2026-10-18)

- Production build, company TypeScript check, Astro check, and whitespace check passed. The integrated export contains 41 HTML files with 1,576 valid internal references.
- Chromium checked widths 320, 390, 640, 768, 1024, 1280, 1440, and 1920px: no horizontal overflow, missing visible images, headings over two lines, or text under 13px. Desktop, tablet, phone, open-menu, and selected-preview screenshots were inspected directly.
- Tested all four screenshot controls, ArrowLeft/ArrowRight wrapping, Home/End, mobile menu selection, outside click, Escape with focus return, reduced motion, and a JavaScript-disabled fallback. No runtime exceptions, console errors, or failed resource requests were found in that pass.
- Company privacy, exported 404, product home, Korean/English manuals, and support routes resolve in the integrated static preview.
- Lossless WebP reduces screenshot bytes by about 38%. All visible pixel values and alpha values match the original PNG captures. RGB values of fully transparent pixels may differ, as permitted by WebP's encoder.
- Impeccable's final source detector returned an empty findings list. Taste's final 1440/768/390px browser meter reports no failures with the deliberate material/image/motion exceptions above. Its remaining warnings concern the warm canvas, contextual type-size count, and secondary copy contrast (6.3:1); those treatments are retained for the requested visual direction. These checks are an implementation review, not an external design award or formal accessibility certification.
