# AuroraViewer product fact ledger

Verified against `../AuroraViewer` `main` at `fe3319f` on 2026-09-04. Product copy should be rechecked whenever the app source changes.

| Claim | Status | Primary source |
| --- | --- | --- |
| Version 1.6.3 (build 10), macOS 14.0+ | Verified | `App/Info.plist` |
| Sandboxed, user-selected read/write access, app-scoped bookmarks | Verified | `App/AuroraViewer.entitlements` |
| Input extensions and ZIP/RAR/7z scanning | Verified, decoding is conditional | `Sources/AuroraViewer/Services/FileSystem/ImageFileScanner.swift` |
| PNG/JPEG/TIFF/HEIC/WebP converted export | Verified | `Sources/AuroraViewer/Models/Viewer/ViewerStateModels.swift` |
| Default keyboard shortcuts | Verified | `Sources/AuroraViewer/Models/ViewerSettings/ViewerSettings.swift` |
| Ratings, Pick/Reject, Finder tags, compare, duplicate review, EXIF tools, sessions | Verified | `doc/01-feature-map.md`, then related implementation named in `doc/04`–`doc/08` |
| Archive limits: 20,000 entries, 256 MB/item, 1 GB total, three password attempts | Verified | Archive constants and extraction code referenced by `doc/03-input-library-security.md` |
| No payment gate; all current features are free | Verified | `Sources/AuroraViewer/Views/Settings/SupportSettingsView.swift`; no StoreKit integration in current source |
| No app analytics, advertising SDK, or developer file-upload path | Verified for current source | Package dependencies, entitlements, and source-wide networking/analytics audit |

## Conditional wording retained

- A recognized extension does not guarantee decoding. File contents plus macOS ImageIO and Quick Look support determine the result; AI/EPS can also use optional Ghostscript support.
- Ratings and Pick/Reject are local app state. Finder tags and explicitly requested EXIF/file operations can change files.
- Duplicate detection groups candidates for review and never promises that visually related files are identical.
- Converted export of an animated image writes the selected rendered frame, not a complete animation.

## Removed stale claims

- The old website's donation or “Developer Tip” language does not match the current source and was removed.
- A Mac App Store build cannot change the default image app automatically; the manual uses Finder’s **Get Info → Open with → Change All** workflow.
