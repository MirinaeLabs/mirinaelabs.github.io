---
name: auroraviewer-manual-screenshots
description: Add task-oriented screenshots to the AuroraViewer user manual by extending the manual data model, driving the current macOS app into representative states, capturing clean native-window PNGs, and placing only useful screenshots near the instructions they clarify. Use when Codex needs to make the AuroraViewer manual visual, capture current UI for documentation, add manual media fields/components, or refresh outdated manual screenshots.
---

# AuroraViewer Manual Screenshots

Turn the current text-only manual into a visual guide without turning every step into a screenshot gallery.

## Principles

- Use the real current AuroraViewer UI only. Never fabricate, redraw, or generate app UI.
- A screenshot must answer a user question faster than text alone. Do not add decorative screenshots.
- Default to 1 useful screenshot per manual topic; use a second only when another state materially improves understanding.
- Some topics should remain text/table-first. Shortcuts and troubleshooting do not need screenshots unless a specific UI state truly helps.
- Keep screenshots clean and reusable. Prefer captions and web-native callouts over permanently drawing arrows/text into the bitmap.
- Preserve actual window proportions and PNG alpha. Never stretch or crop away controls required for the instruction.
- Never publish Codex/Computer Use badges, observation overlays, desktop chrome, unrelated apps, menus, tooltips, loading indicators, or private material.

## Read first

Before implementation:

1. Read `src/data/manual.ts`, `src/components/ManualArticle.astro`, and the manual styles.
2. Read `references/capture-plan.md`.
3. Locate current AuroraViewer source via `$AURORAVIEWER_SOURCE`, `../AuroraViewer`, or a nearby checkout.
4. Verify actual Korean/English UI terms and shortcuts against current source/localization.
5. Reuse `$auroraviewer-marketing-screenshots` capture rules when available, especially native-window PNG capture and overlay rejection.

## Extend the manual model

Add a small media model rather than embedding arbitrary HTML in manual data. A reasonable shape is:

```ts
interface ManualMedia {
  src: Record<Locale, string>;
  alt: LocalizedText;
  caption?: LocalizedText;
  kind?: "window" | "detail";
}

interface ManualSection {
  // existing fields...
  media?: ManualMedia | ManualMedia[];
}
```

Adapt names to the existing codebase if a cleaner equivalent fits better.

Requirements:

- Media is optional.
- Korean and English assets may differ when visible UI is localized.
- Alt text describes the useful UI, not marketing prose.
- Captions tell the user what to notice.
- Keep layout responsive and readable in light/dark appearance.
- Do not allow screenshots to dominate long-form reading width unnecessarily.

## Decide what to capture

Map screenshots to instructional moments, not merely topic titles.

Prefer captures for:

- overall UI orientation / getting started
- opening folders/archives and seeing resulting groups
- sidebar or thumbnail navigation
- zoom/minimap/view controls
- search/sort/filter controls
- rating, Pick/Reject, Finder tags
- Compare mode and slot layout
- Color Inspector / EXIF / histogram where useful
- duplicate/similar-image result UI
- export/crop/resize/metadata controls
- Settings/session/window controls

Usually skip screenshots for:

- shortcut reference tables
- purely conceptual safety notes
- troubleshooting text unless a concrete dialog/state is important

Do not force exactly the same count for every topic.

## Choose sample imagery

Use `~/Sample` as the default image pool unless the user specifies another source.

- Reuse the marketing screenshot image set when it is suitable.
- Choose different images when a manual task requires a clearer demonstration.
- Inspect candidates visually, not by filename alone.
- Prefer public-safe, non-identifying content.
- For Compare, use a meaningfully related pair.
- For Color Inspector, choose rich color/edges/texture.
- For Library/thumbnail/search examples, pick a collection state where the relevant control and selection are easy to understand.

## Drive AuroraViewer

Prefer deterministic controls:

1. DEBUG automation hooks for launch/input/fullscreen/zoom where useful.
2. Current keyboard shortcuts for modes/actions.
3. Computer Use or macOS Accessibility only for visible UI manipulation that cannot be prepared deterministically.
4. If necessary, add narrowly scoped DEBUG-only automation hooks to AuroraViewer, but never change release behavior just for documentation.

Arrange a consistent documentation window geometry unless a dialog or settings window requires a different size.

## Capture cleanly

Computer Use is for setup/inspection only. Final assets must come from native target-window capture.

- Find the actual AuroraViewer/window ID.
- Prefer PNG with transparency.
- Prefer a shadow-free target-window capture such as `screencapture -x -o -l <window-id> output.png` when appropriate.
- If capturing a child dialog/settings window, capture the intended window rather than the whole desktop.
- Inspect all four corners and top-left for white mattes, Codex badges, or unrelated overlays.
- Keep actual pixel dimensions and update HTML metadata if explicit dimensions are used.

## Asset organization

Store manual captures separately from marketing assets, for example:

```text
public/assets/manual/
  getting-started-ko.png
  getting-started-en.png
  compare-ko.png
  compare-en.png
  ...
```

Choose stable semantic names. Do not publish temporary contact sheets or local absolute paths.

## Presentation

- Place each screenshot immediately before or after the section it clarifies.
- Use a concise caption.
- Use a neutral frame/background that works with PNG alpha and both site appearances.
- Avoid giant full-width images when a smaller readable width communicates the task better.
- If a detail view is more useful, create a proportional derivative crop only when it does not remove context needed to understand where the control lives.
- Do not bake arrows or labels into the original capture unless absolutely necessary. Prefer CSS/HTML callouts only when they remain stable across responsive layouts and localized assets.

## QA

For every manual topic:

- verify the screenshot shows the current UI described by the text
- verify UI terminology matches the prose
- verify the screenshot is useful at normal desktop reading size
- verify mobile rendering does not overflow or make text illegible
- verify Korean/English screenshots match equivalent states when both exist
- reject outdated UI, accidental hover states, badges, white-corner mattes, or inconsistent geometry

Then run production build and existing site checks, and visually inspect several representative manual pages on desktop and mobile.

## Final report

Report concisely:

- topics that received screenshots and why
- topics intentionally left text-only
- AuroraViewer revision used
- capture method
- final asset count and dimensions
- any DEBUG-only automation added
- build/site-check result
- any UI state that could not be captured reliably
