# AuroraViewer website

Official product site and user manual for AuroraViewer, built as a static Astro site for GitHub Pages.

## Source of truth

Product claims, supported formats, shortcuts, limitations, and privacy descriptions must be checked against the latest `main` branch of the sibling `../AuroraViewer` repository before they are changed. A compact verification ledger lives in [`codex/auroraviewer-product-facts.md`](codex/auroraviewer-product-facts.md).

## Local development

```sh
npm ci
npm run dev
```

The local URL is `http://127.0.0.1:4321/auroraviewer/`.

## Production verification

```sh
npm run validate
```

This checks Astro and TypeScript, rebuilds the static output in `auroraviewer/`, then validates internal page and asset references. Commit the generated output because GitHub Pages serves that directory directly.
