# AuroraViewer manual screenshot capture plan

Use this as a planning rubric, not as a fixed quota. Prefer the clearest current UI state for each task.

| Manual topic | Default screenshot target | Priority | Notes |
| --- | --- | --- | --- |
| getting-started | Main Viewer with sidebar, selected image, rating controls, minimap or useful chrome | High | Helps identify major UI regions at a glance. |
| open-and-import | Loaded folder/archive groups visible in sidebar; optionally Open panel only if needed to explain selection | High | Prefer the resulting AuroraViewer state over a generic macOS file dialog. |
| browse-and-navigate | Sidebar or thumbnail mode with clear current selection and navigation context | High | Show selection and collection scale. |
| view-and-zoom | Viewer with minimap/zoom overlay or another state that demonstrates fit/original/detail viewing | High | One strong capture may be enough. |
| sidebar-search-filter | Search/filter/sort controls in use with visibly narrowed results | High | The filter effect should be visible, not only the controls. |
| rate-tag-organize | Rating/Pick/Reject/Finder tag controls with a selected image | High | Avoid private Finder metadata. |
| compare-and-pages | Compare mode with a meaningful related image pair | High | Differences should be visible without explanation. |
| inspect-color-metadata | Color Inspector over a useful pixel region; optional EXIF/histogram second state | High | Use a color-rich image. |
| duplicates | Duplicate/similar-image results with safe sample imagery | High | Show grouping/review, not an empty scan dialog. |
| export-and-metadata | Export/crop/resize/metadata UI at a representative state | High | Capture the relevant dialog/panel itself if it communicates better than the whole app. |
| settings-sessions-windows | Settings window on the most useful page; second state only if session/window UI is separate and important | Medium | Capture a target child/settings window cleanly. |
| shortcuts | Usually none | Low | The existing keyboard table is more useful than a screenshot. |
| troubleshooting | Usually none; capture only a specific permission/error dialog if the guide references one | Low | Never create fake error states just to add imagery. |

## Placement

Prefer one media block per major task section. Place the image adjacent to the instructions it illustrates. A topic may have no image, one image, or occasionally two.

## Consistency

- Keep one documentation window geometry for normal Viewer screenshots.
- Use the same theme/appearance across a locale set unless the topic itself explains appearance.
- Korean and English assets should show the same sample imagery and equivalent app state when practical.
- Reuse a marketing screenshot only if it genuinely teaches the manual task; do not reuse it merely to save work.

## Final selection test

For each proposed capture ask:

1. Does this image make the next user action easier to understand?
2. Can the relevant control/state be recognized at normal manual reading width?
3. Is this current AuroraViewer UI rather than a stale or transient state?
4. Does the text still make sense if the screenshot fails to load?
5. Is the screenshot free of private material, Codex overlays, white-corner mattes, hover artifacts, and unrelated desktop UI?

If the answer to 1 or 2 is no, omit or recapture the screenshot.