# Codex prompt — AuroraViewer website rebuild

다음 repository skill을 반드시 사용해 AuroraViewer 홈페이지를 전면 재구축해.

- `$auroraviewer-product-docs`
- `$auroraviewer-manual`
- `$auroraviewer-site-design`

## 목표

현재 `mirinaelabs.github.io/auroraviewer` 사이트를 단순 수정하는 것이 아니라, 최신 AuroraViewer를 기준으로 **제품 소개 + 상세 사용자 매뉴얼**을 갖춘 완성도 높은 공식 사이트로 다시 만든다. 기존 사이트의 디자인/구조는 제약이 아니며 필요하면 전부 교체해도 된다.

단, 아래 공개 URL은 계속 동작해야 한다.

- `/auroraviewer/`
- `/auroraviewer/support/`
- `/auroraviewer/privacy/`

지원/개인정보 페이지는 App Store에서 사용될 수 있으므로 URL과 의미를 깨뜨리지 않는다.

## 사실 확인

AuroraViewer 최신 `main`이 모든 제품 정보의 source of truth다. `$AURORAVIEWER_SOURCE`, `../AuroraViewer`, 또는 접근 가능한 GitHub 저장소를 찾아 최신 소스와 `doc/`, `README.md`를 조사해라.

기능, 지원 포맷, 압축 파일, 내보내기, 단축키, 메뉴명, 설정, macOS 요구사항, 보안/샌드박스 동작 등은 실제 구현을 확인한 뒤 작성한다. `Marketing/GitHubPages`와 기존 홈페이지는 아이디어와 실제 에셋을 얻는 참고자료일 뿐이며 오래된 기능 설명을 그대로 신뢰하지 않는다.

확인되지 않은 기능, 성능 수치, 리뷰, 다운로드 수, 호환성, 비교 우위는 만들지 않는다. AuroraViewer UI를 가짜로 그리지 말고 실제 앱 스크린샷/검증된 에셋만 사용한다.

## 사이트 구조

최소 다음 구조를 제공해라.

1. Home — 핵심 가치, 주요 워크플로, 실제 UI, 대표 기능, 지원 입력 개요, Mac App Store CTA
2. Features — 기능군별 상세 소개
3. Manual — Getting Started부터 탐색, 보기, 비교, 평가/태그, 검사, 내보내기, 단축키, 설정, 문제 해결까지 task-oriented 문서
4. Support
5. Privacy

홈페이지에 모든 기능을 나열하지 말고 Home → Features → Manual 순으로 점진적으로 상세화한다. 최소 한국어/영어를 고려하고 콘텐츠 구조는 향후 다른 언어를 쉽게 추가할 수 있게 한다.

## 구현

GitHub Pages의 `/auroraviewer/` 하위 경로에서 서버 없이 정적으로 동작해야 한다. 현재 저장소에 더 적절한 구조가 없다면 제품 사이트+다중 매뉴얼 페이지 관리에 적합한 Astro 정적 빌드를 우선 검토하되, 더 단순한 방법이 충분하다면 불필요한 프레임워크를 추가하지 않는다. React/client router/state library는 명확한 필요가 없으면 사용하지 않는다.

디자인은 일반적인 SaaS 랜딩페이지가 아니라 **macOS 네이티브 앱의 공식 제품 사이트**처럼 보여야 한다. 실제 AuroraViewer UI를 중심으로 넓은 여백, 정교한 타이포그래피, 절제된 Aurora 계열 빛/색상, 자연스러운 light/dark appearance를 사용한다. 과도한 gradient/glow/glass card 효과는 피한다.

반응형, 키보드 접근성, WCAG AA 수준 대비, `prefers-reduced-motion`, SEO title/description/canonical/Open Graph, 검증된 SoftwareApplication structured data를 고려한다.

## 검증

구현 후 중간에서 멈추지 말고 직접 검증하고 필요한 수정까지 완료해라.

- production build
- `/auroraviewer/` base path
- 모든 내부 링크와 asset
- App Store/support/privacy 링크
- 데스크톱/모바일 실제 브라우저 레이아웃
- console error와 overflow
- keyboard focus와 reduced motion
- 변경된 모든 제품 설명의 최신 AuroraViewer 소스 대조

가능한 범위에서 테스트를 실행하고 실패 원인을 해결한다. 마지막에는 구현한 구조, 주요 디자인 결정, 사실 확인에 사용한 AuroraViewer 경로, 수행한 검증, 남은 실제 불확실성만 간결하게 보고해.
