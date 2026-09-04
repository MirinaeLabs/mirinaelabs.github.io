---
name: auroraviewer-manual
description: Create, restructure, or update end-user AuroraViewer manuals, help pages, tutorials, keyboard-shortcut references, troubleshooting guidance, and feature instructions. Use whenever work explains how to operate AuroraViewer or must keep user documentation synchronized with the current app UI and behavior.
---

# AuroraViewer manual authoring

## Ground the manual first

Use `auroraviewer-product-docs` or perform the same source-verification workflow before writing instructions. Do not infer UI labels, shortcuts, supported formats, or behavior from memory.

Prefer exact user-visible names from the current app source and localization resources. If a menu item, setting, or shortcut cannot be verified, omit it or mark it for verification rather than guessing.

## Organize by user task

Use a task-oriented information architecture. Prefer these top-level areas when relevant:

- Getting Started
- Opening Images, Folders, and Archives
- Browsing and Navigation
- Zoom, Pan, Rotation, and Viewing Modes
- Sidebar, Search, Sort, and Filters
- Compare and Two-Page Viewing
- Rating, Pick/Reject, and Finder Tags
- Color, Metadata, Histogram, and Inspection Tools
- Duplicate and Similar Image Tools
- Export, Resize, Crop, and Metadata Options
- External Apps and Finder Integration
- Keyboard Shortcuts
- Settings, Sessions, and Window Management
- Troubleshooting and Limitations

Change the structure when the product supports a clearer task flow; do not force empty sections.

## Write each task page

For substantial features, use this sequence:

1. State what the feature is useful for in one short paragraph.
2. Give the shortest reliable procedure as numbered steps.
3. Add verified shortcuts or alternative entry points when useful.
4. State important limitations, destructive actions, sandbox/permission implications, or format-dependent behavior.
5. Link to closely related manual topics rather than repeating the same explanation.

Keep instructions concise and action-oriented. Put conceptual or implementation background after the procedure, not before it.

## Keep the manual user-facing

- Do not expose Swift type names, internal services, caches, debug flags, implementation file paths, or architecture unless writing developer documentation was explicitly requested.
- Do not turn the manual into marketing copy.
- Do not fabricate UI screenshots. Use current screenshots captured from the app or existing verified assets.
- Do not describe destructive file operations casually; state clearly when a command moves, renames, replaces, or deletes files.
- Mention environment-dependent behavior only where it affects what the user can do.
- Keep examples realistic and platform-native for macOS.

## Handle localization cleanly

Keep the content model localization-ready. Avoid embedding duplicated Korean/English prose directly in layout components when the site has or is gaining a content layer.

When multiple locales are in scope, keep page structure, feature coverage, links, and screenshots semantically aligned across locales. Do not machine-fill missing product terminology without checking the app's localization resources.

## Manual quality gate

Before finishing:

- Verify user-visible names and shortcuts against current source.
- Check that instructions still work in the order written.
- Check internal links and navigation.
- Check keyboard-only navigation and readable heading hierarchy on the rendered site.
- Search for duplicated or contradictory instructions.
- Run a product-documentation drift check for every feature touched by the change.
