# Codex goal — polish AuroraViewer Korean copy

`$auroraviewer-korean-copy`, `$auroraviewer-product-docs`, `$auroraviewer-manual`을 사용해 현재 AuroraViewer 사이트의 **한국어 전체를 자연스러운 한국 제품 문구로 다시 다듬어**.

## 목표

현재 한국어는 의미는 전달되지만 영어 번역투, 추상적인 표현, 개발자 관점 용어, 한국어 페이지에 남아 있는 영어 섹션 라벨 때문에 완성도가 떨어진다.

영어 문장을 직역해서 고치는 작업으로 접근하지 말고, 최신 AuroraViewer를 직접 사용하려는 한국 사용자에게 처음부터 한국어로 설명한다고 생각하고 다시 작성해.

## 범위

한국어로 노출되는 모든 문구를 전수 검토해.

- Home
- Features
- Manual index 및 모든 manual topic
- Support
- Privacy의 UI/안내 문구(법적 의미는 변경 금지)
- header/footer/navigation
- SEO title/description
- alt/caption
- Astro 컴포넌트에 hard-code된 eyebrow/section label

한국어 route에 `One continuous workflow`, `Library review`, `Product capabilities`, `Browse`, `Review`, `Inspect` 같은 영어가 의도 없이 노출되면 자연스러운 한국어로 바꿔.

## 기준

최신 `../AuroraViewer` 또는 `$AURORAVIEWER_SOURCE`의 `main`을 사실과 UI 명칭의 source of truth로 사용해.

실제 메뉴, 버튼, 설정 이름, 단축키를 설명할 때는 AuroraViewer의 한국어 UI/localization 문자열과 일치시켜. 다만 설명 문장 자체는 UI 문자열을 기계적으로 이어 붙이지 말고 자연스럽게 써.

다음과 같은 번역투/내부 구현 표현을 적극적으로 찾아 고쳐:

- 작업 맥락, 후보, 입력 경로, scanner, source URL, scope/state처럼 사용자가 알 필요 없는 내부 관점
- `~을 이해합니다`, `~로 이어집니다`, `~을 좁혀갑니다`, `~곁에` 같은 어색한 직역형 표현
- 문장 구조는 맞지만 한국 제품 홈페이지/매뉴얼에서 실제로 잘 쓰지 않는 표현

사용자가 할 수 있는 행동과 화면에서 보이는 결과를 먼저 말해. 짧고 명확하게 쓰되 지나친 광고 문구는 피하고 macOS 앱다운 차분하고 정확한 톤을 유지해.

영어 페이지는 사실 오류가 없는 한 수정하지 마. 한국어와 영어 문장이 같은 구조일 필요는 없다.

## 매뉴얼

매뉴얼은 마케팅 문구가 아니라 실제 사용 설명서로 다듬어.

- 절차는 `선택합니다 / 누릅니다 / 엽니다 / 확인합니다`처럼 일관된 동작형 문장 사용
- 메뉴/버튼의 실제 이름을 우선
- 불필요한 배경 설명보다 가장 짧고 확실한 실행 순서를 먼저
- 참고/주의는 짧고 구체적으로

## 검증

수정 후 한국어 페이지를 문자열 단위가 아니라 실제 문서처럼 처음부터 읽어 보며 다시 교정해.

- 한국어 route의 의도치 않은 영어 UI label 검색
- 최신 AuroraViewer 한국어 UI 용어와 대조
- 제품 의미나 기능 약속이 바뀌지 않았는지 검증
- production build 및 site check
- Home / Features / Manual 대표 페이지를 desktop/mobile로 확인하여 새 문구 때문에 이상한 줄바꿈이나 overflow가 없는지 수정

완료 시 주요 용어 결정, 대표적으로 개선한 어색한 표현 몇 개, 검증 결과만 간결하게 보고하고 commit해.
