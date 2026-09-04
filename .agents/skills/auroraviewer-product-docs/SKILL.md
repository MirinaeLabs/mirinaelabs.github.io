---
name: auroraviewer-product-docs
description: Verify and extract current AuroraViewer product facts from the authoritative AuroraViewer source repository. Use whenever website, marketing, support, manual, SEO, release, or App Store-facing content makes claims about AuroraViewer features, supported image/archive formats, shortcuts, settings, macOS requirements, privacy or sandbox behavior, rendering, metadata, export, or other implementation-dependent capabilities.
---

# AuroraViewer product facts

## Resolve the authoritative source

Locate the AuroraViewer source in this order:

1. `$AURORAVIEWER_SOURCE` when it is set.
2. A sibling checkout at `../AuroraViewer`.
3. Authenticated read access to `https://github.com/MirinaeLabs/AuroraViewer` when network access is available.

If the authoritative repository cannot be read, do not invent new product claims. Restrict work to facts already verified in the website and clearly report the limitation.

## Use this evidence priority

1. Current Swift source, project configuration, entitlements, and resources.
2. `doc/` in the AuroraViewer repository.
3. The AuroraViewer root `README.md`.
4. `Marketing/` and the currently deployed website only as legacy references.

When documentation conflicts with implementation, prefer the implementation. Treat OS-, codec-, Quick Look-, ImageIO-, or optional-tool-dependent behavior as conditional rather than guaranteed.

## Verify claims before publishing

1. Identify every product claim required by the requested website or documentation change.
2. For a broad overview, inspect `README.md`, `doc/README.md`, and `doc/01-feature-map.md` before opening narrower documents.
3. Inspect implementation or configuration for facts likely to drift, especially supported formats, archive handling, menu names, shortcuts, export formats, metadata behavior, settings, minimum macOS version, sandbox/security behavior, and external-app integration.
4. Keep a compact working ledger containing the claim, confidence, and source path used to verify it.
5. When a site content model or canonical data file exists, update that source instead of duplicating feature lists across pages.
6. Run a documentation-drift pass before finishing: classify relevant existing claims as verified, stale, unsupported, or missing; correct stale and unsupported claims.

## Write product copy conservatively

- Lead with the user benefit, then explain implementation details only when they matter.
- Prefer specific, testable statements over broad marketing language.
- Do not claim "fastest", "best", "lossless", "professional-grade", or similar superlatives without explicit evidence.
- Do not promote developer-only diagnostics, debug environment variables, unfinished features, or internal architecture as user features unless explicitly requested.
- Do not fabricate screenshots, benchmark numbers, testimonials, ratings, download counts, compatibility claims, or App Store metadata.
- Use real AuroraViewer screenshots or assets when visuals are needed.
- Preserve the meaning and reachability of existing support and privacy resources unless the user explicitly requests a legal/content change.

## Deliverable quality gate

Before considering product-facing content complete, verify that each capability named on the page is supported by current AuroraViewer source, conditional capabilities are labeled accurately, duplicate facts are centralized where practical, and no legacy marketing draft has silently overridden newer implementation evidence.
