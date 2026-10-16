# MirinaeLabs company & AuroraViewer website

MirinaeLabs 회사 홈페이지와 기존 AuroraViewer 제품 소개·한영 사용 설명서입니다. GitHub Actions가 정적 파일을 빌드하고 Cloudflare Pages 무료 플랜에 배포합니다.

**개설 순서와 DNS·메일 설정:** [홈페이지·이메일 개설 안내](docs/launch-guide.ko.md)

## Company website

```sh
npm ci
npm run validate:company
npm run preview:company
```

미리보기: `http://127.0.0.1:4322/`. `.github/workflows/deploy-company.yml`이 `main`의 사이트 변경 시 Node.js 22로 `npm run validate:company`를 실행하고 `dist/`를 Cloudflare Pages 프로젝트 `mirinaelabs`에 배포합니다. GitHub repository secret `CLOUDFLARE_API_TOKEN`과 repository variable `CLOUDFLARE_ACCOUNT_ID`를 설정해야 동작합니다. 토큰은 해당 Cloudflare 계정의 Pages 편집 권한으로 제한합니다. `.github/workflows/validate-company.yml`은 PR 검사용이며 유료 저장 공간을 사용하지 않도록 빌드 아티팩트는 업로드하지 않습니다.

회사 페이지는 `company/`에서 수정합니다. `build:company`는 이 파일들을 `dist/`에 복사하고, Astro 제품 사이트를 `dist/auroraviewer/`에 새로 생성합니다. 기존 GitHub Pages용 `auroraviewer/` 폴더는 수정하지 않습니다. 회사 사이트 배포 시 제품 canonical은 `mirinaelabs.com`을 사용합니다.

회사 소개는 초안이며 메일 주소는 개설 준비 중으로 표시합니다. 실제 이메일 송수신 확인 후 안내서에 따라 문의 링크를 활성화합니다. Cloudflare·Zoho 가입 및 DNS 연결이 끝나기 전에는 서비스 개설이 완료된 것이 아닙니다.

## Source of truth

Product claims, supported formats, shortcuts, limitations, and privacy descriptions must be checked against the latest `main` branch of the sibling `../AuroraViewer` repository before they are changed. A compact verification ledger lives in [`codex/auroraviewer-product-facts.md`](codex/auroraviewer-product-facts.md).

## AuroraViewer local development

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
