---
name: auroraviewer-site-design
description: Design, rebuild, or refine the AuroraViewer product website and documentation experience in mirinaelabs.github.io. Use for homepage, feature pages, manual navigation, responsive layout, visual system, accessibility, SEO, GitHub Pages architecture, and production frontend implementation for AuroraViewer.
---

# AuroraViewer website design and implementation

## Preserve deployment constraints

AuroraViewer is published below `https://mirinaelabs.github.io/auroraviewer/` on GitHub Pages.

- Preserve working routes for `/auroraviewer/`, `/auroraviewer/support/`, and `/auroraviewer/privacy/`; the latter two may be referenced by App Store metadata.
- Produce static output that works without a server runtime.
- Make asset, canonical, navigation, and social-preview paths safe for the `/auroraviewer/` base path.
- Preserve `.nojekyll` behavior when the generated output requires it.
- Do not replace privacy or support meaning with marketing content.

## Ground all product claims

Use `auroraviewer-product-docs` before creating or changing feature claims. Use `auroraviewer-manual` for instructional content.

Treat files under AuroraViewer `Marketing/` and the current website as visual/content references only. A redesign should not inherit stale product claims merely because they exist in an older page.

## Choose an appropriate frontend architecture

Prefer the simplest maintainable static architecture that supports the requested experience.

- For a multi-page product site plus a growing manual, prefer a static site generator such as Astro when introducing a build system is acceptable.
- For a very small no-build site, plain semantic HTML/CSS/JavaScript is acceptable.
- Do not add React, a client-side router, state libraries, or heavy UI frameworks unless an interactive requirement justifies them.
- Centralize navigation, product facts, repeated feature data, SEO metadata, and localized content rather than duplicating them page by page.
- Keep JavaScript optional for reading core product and manual content.

## Visual direction

Create a polished macOS-native product site rather than a generic SaaS landing page.

- Use spacious hierarchy, precise typography, strong screenshots, subtle translucency, and restrained Aurora-inspired light/color effects.
- Let real AuroraViewer UI and image content carry the product story.
- Support light and dark appearance when it improves the experience, respecting `prefers-color-scheme` and `prefers-reduced-motion`.
- Use animation sparingly and only when it improves orientation or product understanding.
- Avoid excessive gradients, glowing cards, fake glass panels, decorative dashboards, or visual effects that compete with screenshots.
- Never generate fake AuroraViewer UI. Product screenshots must come from the actual app or verified repository assets.

## Information architecture

Use this as the default starting point, adjusting when evidence supports a better structure:

- Home: positioning, core workflow, major differentiators, screenshots, supported-input overview, Mac App Store CTA.
- Features: grouped capabilities with deeper explanations and links into the manual.
- Manual: task-oriented documentation with persistent navigation, search if justified, and strong cross-linking.
- Support: contact/help routes and troubleshooting entry points.
- Privacy: stable privacy-policy route and readable legal content.

Do not overload the homepage with the complete feature inventory. Use progressive disclosure from concise benefits to feature pages to detailed manual topics.

## Accessibility and content quality

- Use semantic landmarks and a logical heading hierarchy.
- Ensure all controls work by keyboard and have visible focus states.
- Meet WCAG AA contrast for normal text and interactive states.
- Give informative images useful alt text; decorative images should not create noise for assistive technology.
- Respect reduced-motion preferences.
- Keep tap targets usable on mobile and layouts robust from narrow phones through large desktops.
- Do not fabricate testimonials, review scores, awards, download counts, benchmarks, or compatibility promises.

## SEO and discoverability

Provide unique titles and descriptions, canonical URLs, Open Graph metadata, favicon/app-icon integration, and appropriate structured data for the software product when the facts are verified. Make manual pages indexable and linkable with stable URLs.

## Production quality gate

Before finishing:

1. Build the production site successfully from a clean install when a build system exists.
2. Test the `/auroraviewer/` base path rather than only localhost root paths.
3. Check every internal link, App Store CTA, support link, and privacy link.
4. Inspect desktop and mobile layouts in a real browser.
5. Check console errors, missing assets, overflow, focus states, reduced motion, and basic accessibility.
6. Compare all product claims touched by the redesign against current AuroraViewer source.
7. Keep the replacement deployable without requiring manual edits to generated files.
