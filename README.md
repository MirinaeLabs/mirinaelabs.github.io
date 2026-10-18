# MirinaeLabs company & AuroraViewer website

MirinaeLabs 회사 홈페이지(Next.js App Router + React + Tailwind CSS)와 AuroraViewer 제품 소개·한영 사용 설명서(Astro)입니다. 두 사이트를 하나의 정적 결과물로 빌드해 기존 Cloudflare Pages 배포를 사용합니다.

운영 주소: **https://mirinaelabs.com** · 영어: **https://mirinaelabs.com/en/** · 제품: **https://mirinaelabs.com/auroraviewer/**. `www`는 기본 도메인으로 301 이동하며 경로와 쿼리를 보존합니다.

**개설 순서와 DNS·메일 설정:** [홈페이지·이메일 개설 안내](docs/launch-guide.ko.md)

## Company website

```sh
npm ci
npm run dev
```

회사 페이지 개발: `http://127.0.0.1:3000/`. 컴포넌트는 `company/components/`, 페이지는 `company/app/`, 디자인 토큰은 `company/app/globals.css`에 있습니다. 디자인 기준과 가이드 적용 범위는 [company/DESIGN.md](company/DESIGN.md)에 정리했습니다.

회사 소개와 개인정보 안내는 한국어·영어로 제공합니다. 번역 문구는 `company/lib/site-content.ts`, 검색·공유 메타데이터는 `company/lib/site-metadata.ts`에서 관리합니다. 헤더의 EN/KO 링크는 같은 페이지의 다른 언어로 이동하며, 영어 제품 페이지의 회사 링크도 영어 홈페이지로 연결합니다. 회사 배색은 은하 인디고(`#465cb3`)와 옅은 청백색(`#f6f7fc`)을 사용합니다. 기존 로고의 형태는 유지하며, 메인 유리 조형물도 로고와 같은 8개 광선과 중앙 여백으로 구성합니다. 로고와 조형물은 `company/components/icons.tsx`의 경로를 공유합니다.

제품·설명서를 포함한 전체 사이트 확인:

```sh
npm run validate:company
npm run preview:company
```

미리보기: `http://127.0.0.1:4322/`. `.github/workflows/deploy-company.yml`이 `main`의 사이트 변경 시 Node.js 22로 `npm run validate:company`를 실행하고 `dist/`를 Cloudflare Pages 프로젝트 `mirinaelabs`에 배포합니다. GitHub repository secret `CLOUDFLARE_API_TOKEN`과 repository variable `CLOUDFLARE_ACCOUNT_ID`를 설정해야 동작합니다. 토큰은 해당 Cloudflare 계정의 Pages 편집 권한으로 제한합니다. `.github/workflows/validate-company.yml`은 PR 검사용이며 유료 저장 공간을 사용하지 않도록 빌드 아티팩트는 업로드하지 않습니다.

`build:company`는 Next.js 회사 사이트를 `company/out/`으로 정적 내보내기한 뒤 `dist/`에 복사하고, Astro 제품 사이트를 `dist/auroraviewer/`에 생성합니다. `npm run build`와 `npm run validate`도 회사·제품 통합 사이트를 대상으로 합니다. 기존 GitHub Pages용 `auroraviewer/` 폴더는 수정하지 않습니다. 회사 사이트 배포 시 제품 canonical은 `mirinaelabs.com`을 사용합니다. Next.js 개발 서버에는 Astro 경로가 없으므로 제품 링크는 통합 빌드의 4322 미리보기에서 확인합니다.

회사 홈페이지는 회사 소개와 제작 철학을 먼저 보여 주고, 공개 제품은 간단한 앱 소개로 연결합니다. 개발 중인 앱의 이름·기능·아이콘은 공개하지 않습니다. 모바일 메뉴는 외부 클릭·Escape·메뉴 선택 시 닫힙니다. 메인의 유리 막대 8개는 위쪽부터 시계 방향으로 한 번씩 제자리로 슬라이드하며, 약 1.5초에 완성됩니다. CSS 애니메이션이므로 JavaScript 없이도 동작하고, `prefers-reduced-motion`에서는 완성된 조형물을 바로 표시합니다. Pretendard 폰트와 이미지를 자체 호스팅하므로 외부 폰트·이미지 요청이 없습니다. 폰트 라이선스는 `company/public/assets/fonts/OFL.txt`에 포함되어 있습니다.

회사·제품 페이지에는 GitHub 링크를 표시하지 않습니다. 제품 지원은 `src/data/product.ts`의 `SUPPORT_URL`에 정의한 회사 이메일을 사용하며, 제품 페이지 하단의 MirinaeLabs 링크는 `COMPANY_URL`에 정의한 회사 메인 페이지로 이동합니다. 지원·개인정보 안내와 한영 설명서에서도 같은 지원 경로를 유지합니다.

`company/public/_headers`의 회사 HTML 응답에는 `Cache-Control: no-transform`을 유지합니다. Cloudflare 이메일 난독화가 연락처 HTML을 바꾸면 Next.js의 초기 화면과 클라이언트 렌더링이 달라져 hydration 오류가 발생할 수 있습니다. 새 회사 HTML 경로를 추가할 때도 같은 헤더를 적용합니다. 제품 Astro 경로와 정적 에셋의 캐시 설정은 별도로 유지합니다.

회사 소개는 수정 가능한 기본안입니다. 홈페이지 공개·도메인 연결·GitHub 자동 배포를 완료했습니다. 회사 이메일 **contact@mirinaelabs.com**은 [Zoho 웹메일](https://mail.zoho.com/)에서 사용합니다. 실제 요금제는 **Mail Free**이며 MX·SPF·DKIM·DMARC DNS 설정을 완료했습니다. 무료 플랜은 최대 5명, 사용자당 5GB이고 IMAP·POP·ActiveSync는 지원하지 않습니다. 송수신 확인 기록은 개설 안내에 있습니다.

## Source of truth

Product claims, supported formats, shortcuts, limitations, and privacy descriptions must be checked against the latest `main` branch of the sibling `../AuroraViewer` repository before they are changed. A compact verification ledger lives in [`codex/auroraviewer-product-facts.md`](codex/auroraviewer-product-facts.md).

## AuroraViewer local development

```sh
npm ci
npm run dev:product
```

The local URL is `http://127.0.0.1:4321/auroraviewer/`.

## Production verification

```sh
npm run validate:product
```

This checks Astro and TypeScript, rebuilds the static output in `auroraviewer/`, then validates internal page and asset references. Commit the generated output because GitHub Pages serves that directory directly.
