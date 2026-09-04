---
name: auroraviewer-marketing-screenshots
description: Create or refresh authentic AuroraViewer website screenshots from the current macOS app using real local sample images. Use when Codex needs to inspect ~/Sample or another approved image pool, autonomously select images that best demonstrate Viewer, Library/Thumbnail, Compare, or Color Inspector workflows, drive AuroraViewer into representative UI states, capture the real app without fabricating UI, and update the website assets while preserving image aspect ratios.
---

# AuroraViewer Marketing Screenshots

Create product screenshots from the real current AuroraViewer build. Treat the sample directory as a casting pool, not as a fixed ordered list.

## Non-negotiable rules

- Use the real AuroraViewer UI. Never generate, composite, redraw, retouch, or fake application UI with image generation.
- Never stretch a capture. Preserve its native aspect ratio from app window through website rendering.
- Do not modify source images in the sample pool.
- Do not publish private or identifying content. Reject candidates containing readable personal documents, account data, private messages, IDs, license plates, intimate/private scenes, or other clearly sensitive material. Avoid recognizable private-person portraits unless the asset is clearly intended for public use.
- Do not select by filename alone. Inspect the imagery visually.
- Prefer a coherent product story over individually flashy pictures. The four screenshot roles should feel like one curated set.
- If no suitable public-safe candidate exists for a role, report that role rather than forcing a bad choice.

## Locate inputs

1. Locate AuroraViewer source in this order: `$AURORAVIEWER_SOURCE`, `../AuroraViewer`, then a nearby workspace checkout.
2. Prefer AuroraViewer `main` or the exact revision requested by the user.
3. Default sample pool to `~/Sample`. Verify it exists before continuing.
4. Read `references/selection-rubric.md` before choosing images.

## Build and launch

- Build a current DEBUG AuroraViewer locally. Do not use an old installed App Store binary for marketing captures.
- Existing DEBUG automation accepts a launch input through `AURORA_AUTOMATION_OPEN_FILE` or a command-line file/folder argument. Prefer it when filesystem access works.
- AuroraViewer is sandboxed in release configuration. If direct automated folder access is denied, prefer one of these, in order:
  1. Use Codex Computer Use / accessibility automation to select `~/Sample` in the real Open panel, granting normal user-selected access.
  2. For a local screenshot-only DEBUG build, use a non-signing/non-sandboxed local build configuration or command-line override without changing release/App Store behavior.
- Do not weaken production entitlements or commit a release sandbox change just to capture screenshots.
- Disable or avoid session restoration/onboarding state that obscures the intended capture.

## Inspect and cast images

Before opening final states, survey enough of `~/Sample` to understand its visual range.

- Enumerate supported image candidates recursively and gather basic metadata such as dimensions, orientation, extension, and file size.
- Create temporary thumbnails/contact sheets when the pool is large. Use macOS Quick Look/ImageIO-compatible tools when useful so formats beyond basic JPEG/PNG can participate.
- Inspect the contact sheets or thumbnail batches visually.
- Build a shortlist for each role rather than accepting the first plausible file.
- Prefer different but visually compatible images across roles unless using the same image creates a clearer feature story.
- For Compare, actively look for two images with useful visual relationship: same/similar subject, burst/variant, near-duplicate composition, or otherwise meaningful differences. Avoid arbitrary unrelated pairs.

Record the selected source paths in a temporary working note while capturing, but do not publish absolute local paths to the website.

## Capture roles

Create localized Korean and English captures when the website maintains both asset sets. Use the same chosen imagery and equivalent UI state across locales when practical.

### Viewer / hero

- Goal: communicate AuroraViewer immediately and make the product itself look desirable.
- Choose one visually strong, broadly appealing image with clear composition and enough tonal/color detail to make the viewer canvas attractive.
- Show useful AuroraViewer chrome/state, not a sterile image-only crop. Prefer the library/sidebar, rating controls, filename/zoom context, or minimap when they support the current website story without clutter.
- Avoid an image whose subject competes with or obscures the UI.

### Library / thumbnail

- Goal: communicate fast review of a sizeable collection.
- Choose a scroll position/selection where many thumbnails together look varied but coherent.
- Prefer a mix of orientations, colors, and subjects with no obviously private material.
- Select a representative active image that still looks good in the main viewer area.

### Compare

- Goal: make the value of comparison obvious without explanation.
- Choose a related pair (or the number of slots the current design intentionally shows) where differences are visible and composition aligns well across slots.
- Prefer candidates where synchronized zoom/pan is visually credible.
- Avoid pairing unrelated random images merely to fill slots.

### Color Inspector

- Goal: make pixel/color inspection visually self-explanatory.
- Choose an image with distinct hue regions, gradients, edges, texture, and useful local contrast.
- Place the inspector/loupe over a region where the sampled color and magnified pixels are clearly legible.

## Drive the UI

Prefer deterministic controls over fragile mouse coordinates.

1. Use existing DEBUG automation hooks for launch/fullscreen/zoom where helpful.
2. Use AuroraViewer's current keyboard shortcuts for mode changes when possible.
3. Use Codex Computer Use or macOS accessibility automation for state that requires visible UI interaction, such as selecting a thumbnail, assigning compare slots, positioning a color sample, changing app language, or arranging a window.
4. If a repeated state is too fragile, a narrowly scoped DEBUG-only AuroraViewer automation hook may be added in the AuroraViewer repository, but it must not alter release behavior and must be justified in the final report.

Stabilize the window before capture: loading complete, no menus/dialogs/tooltips, intended controls visible, cursor not obscuring important content unless the inspector requires it.

## Capture

- Prefer the installed `$screenshot` skill for native app/window capture when available.
- Otherwise use Codex Computer Use capture or macOS `screencapture`/window capture tooling.
- Capture the AuroraViewer window, not an arbitrary desktop rectangle, whenever possible.
- Keep a consistent window geometry/aspect ratio across the set. If the existing website expects 1800×1096, prefer arranging the app window to that aspect ratio (or a 2× Retina equivalent) instead of stretching afterward.
- Downsample proportionally if needed; never resize width and height independently.
- Preserve sufficient resolution for Retina/high-density displays.

## Review captures before publishing

Inspect every output image visually and reject/retry when any of these occur:

- distorted aspect ratio or wrong window geometry
- loading/progress state, transient dialog, menu, tooltip, or accidental hover
- private/sensitive content
- UI labels clipped or unreadable
- selected image is weak for the intended role
- Compare pair does not communicate comparison
- Color Inspector points to an uninteresting region
- Korean and English captures materially disagree beyond localization
- the set feels visually inconsistent

Do not stop at the first technically valid screenshot. Choose the strongest final capture for each role.

## Publish to the website

- Replace only the intended files under the site's screenshot asset directory.
- Keep `viewer`, `thumbnail/library`, `compare`, and `color/inspect` filename conventions unless there is a strong reason to migrate them.
- Read actual pixel dimensions of final assets and ensure HTML width/height metadata matches them.
- Website CSS must keep `height: auto` and must not crop application UI with `object-fit: cover`.
- Rebuild the Astro site and run its existing site checks.
- Visually inspect Home and Features at desktop and mobile widths after asset replacement.

## Final report

Report concisely:

- AuroraViewer revision/build used
- number of `~/Sample` candidates surveyed
- why each selected image/pair suited its role
- capture method and any DEBUG-only automation added
- final output pixel dimensions
- website build/QA result
- any role that could not be safely or convincingly captured
