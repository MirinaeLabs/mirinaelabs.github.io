---
name: auroraviewer-korean-copy
description: Audit and rewrite Korean copy across the AuroraViewer website so it reads like original Korean product writing rather than translated English. Use when Codex needs to improve Korean wording, tone, terminology, headings, metadata, feature descriptions, manuals, support text, or mixed Korean/English labels while preserving verified AuroraViewer facts and actual in-app UI terminology.
---

# AuroraViewer Korean Copy

Rewrite Korean as first-party Korean product copy. Do not translate the English site sentence by sentence.

## Source of truth

Use this priority for terminology and facts:

1. Current AuroraViewer `main` implementation and visible UI/localization strings
2. AuroraViewer `doc/` and `README.md` for verified behavior
3. Existing website product facts
4. Existing Korean website copy only as material to improve
5. English website copy only for semantic intent, never as a Korean phrasing template

Do not invent capabilities, superiority claims, performance numbers, reviews, or compatibility.

## Core writing rules

- Write for a Korean Mac user, not for a developer reading implementation notes.
- Prefer short, direct, concrete sentences.
- Prefer what the user can do and what they see on screen over architectural terminology.
- Avoid literal English structures, abstract nouns, and slogans that are grammatical but unnatural in Korean.
- Remove developer-internal wording such as "scanner", "input path", "source URL", "scope", or "state" unless the user genuinely needs that concept.
- Keep official product names and established UI terms where appropriate: AuroraViewer, macOS, Finder, RAW, EXIF, Pick/Reject, PNG/JPEG, etc.
- Match actual Korean menu/control names from AuroraViewer when describing a UI operation. Do not casually rename controls for elegance.
- Use consistent spacing and notation: `2~4분할` or a single chosen house style, `0~5점`, `ZIP·RAR·7z`, `Finder 태그`.
- Prefer Korean section labels on Korean pages. English eyebrow labels may remain only when they clearly function as intentional brand vocabulary; otherwise localize them.
- Do not overuse marketing language. AuroraViewer should sound capable, calm, precise, and native to macOS.

## Rewrite patterns

Prefer concrete Korean like:

- "원본 파일 위치를 그대로 유지한 채 계속 작업할 수 있습니다" over "원본 위치와 작업 맥락을 유지합니다"
- "많은 이미지에서 원하는 것만 빠르게 골라내세요" over "빠르게 좁혀갑니다"
- "이미지를 나란히 놓고 차이를 비교하세요" over "후보를 나란히, 필요한 만큼"
- "AuroraViewer에서 열 수 있는 파일 형식" over "스캐너가 인식하는 입력 확장자"
- "별점과 Finder 태그로 바로 정리" over "평가와 Finder 태그를 원본 곁에"

These are examples, not mandatory fixed strings. Re-evaluate every sentence in context.

## Surfaces to audit

Audit all Korean-visible text, including:

- Home
- Features
- Manual index and every manual topic
- Support
- Privacy UI framing and navigation (do not change legal meaning)
- header/footer/navigation
- SEO title/description/alt/caption text
- hard-coded eyebrow/section labels inside Astro components

Search for visible hard-coded English in Korean routes. Do not assume text inside a Korean branch is localized merely because the main paragraph is Korean.

## Manual-specific style

Manual prose must be instructional rather than promotional.

- Start procedures with the shortest reliable action.
- Use verbs such as `선택합니다`, `누릅니다`, `엽니다`, `확인합니다` consistently.
- Prefer actual command names and shortcuts.
- Explain why only when it helps the user decide what to do.
- Avoid phrases such as "이해합니다", "방향을 유지합니다", "후보로 넘어갑니다" when a concrete action can be stated instead.
- Keep caution/note wording concise.

## English coexistence

Do not rewrite the English site unless a factual mismatch is discovered. Korean and English may express the same fact differently; they do not need sentence-level structural symmetry.

## Validation

Before finishing:

1. Read the Korean pages as continuous prose, not only as individual strings.
2. Search the Korean output for unintended visible English labels.
3. Compare menu/control terminology with current AuroraViewer Korean UI/localization strings.
4. Check that no rewrite changes product meaning or promises unsupported behavior.
5. Build the site and inspect key Korean pages at desktop/mobile widths for awkward line breaks after wording changes.

Report the main terminology decisions and any phrase whose correct UI name could not be verified.