# Codex goal — add AuroraViewer manual screenshots

`$auroraviewer-manual-screenshots`, `$auroraviewer-marketing-screenshots`, `$auroraviewer-site-design`, `$auroraviewer-product-docs`를 사용해 현재 텍스트 중심 AuroraViewer 사용 설명서를 **실제 최신 UI 스크린샷이 함께 있는 시각적 매뉴얼**로 완성해.

## 전제

먼저 한국어 카피 교정 작업이 반영된 현재 branch를 기준으로 진행해. 설명 문구를 다시 마케팅식으로 쓰지 말고, 확정된 절차를 가장 잘 보여주는 화면을 촬영하는 데 집중해.

## 구조

현재 `src/data/manual.ts`의 `ManualSection`에는 이미지 구조가 없다. `ManualMedia`와 선택적 `media` 필드를 추가하고 `ManualArticle.astro`에서 접근성 있는 `<figure>`/caption으로 렌더링하도록 확장해.

미디어는 optional이어야 하고 ko/en UI가 다른 경우 각각 별도 asset을 지정할 수 있어야 한다. alt는 화면에서 무엇을 확인해야 하는지 설명하고 caption은 사용자가 주목할 부분을 짧게 알려줘.

## 이미지 수와 선택

모든 섹션에 억지로 이미지를 넣지 마. 기본은 설명서 topic당 1장, 실제로 다른 상태가 꼭 필요한 경우만 2장까지 고려해. `references/capture-plan.md`를 기준으로 판단해.

특히 다음은 우선순위가 높다.

- 시작하기: 전체 Viewer와 주요 영역
- 이미지/폴더/압축 열기: 로드된 소스 그룹
- 탐색: sidebar/thumbnail과 현재 선택
- 보기/확대: zoom/minimap 등
- 검색·정렬·필터: 실제 결과가 좁혀진 상태
- 평가·태그: 별점/Pick/Reject/Finder 태그
- 비교: 의미 있는 관련 이미지 pair의 Compare mode
- 색상·메타데이터: Color Inspector, 필요하면 EXIF/histogram 두 번째 상태
- 중복 이미지: 실제 그룹화 결과
- 내보내기: export/crop/resize/metadata UI
- 설정·세션: Settings의 대표 페이지

단축키 표나 순수 설명 중심 문제 해결 페이지는 이미지가 도움이 되지 않으면 텍스트 그대로 두어.

## 캡처

최신 `../AuroraViewer` 또는 `$AURORAVIEWER_SOURCE` main을 DEBUG 빌드해서 실제 앱을 사용해. 기본 이미지 풀은 `~/Sample`이며 기능을 가장 잘 설명하는 이미지를 네가 시각적으로 골라.

마케팅 캡처와 같은 이미지를 재사용해도 되지만 학습 목적에 더 적합한 이미지/상태가 있으면 새로 선택해.

Computer Use는 상태 구성과 확인에만 사용하고 최종 자산은 native target-window PNG로 직접 캡처해. 가능하면 `screencapture -x -o -l <window-id>`처럼 shadow를 제외하고 alpha를 유지해.

다음은 최종 자산에 절대 포함하지 마:

- Codex/Computer Use 보라색 표시
- white corner matte
- desktop/Stage Manager/다른 앱
- menu/tooltip/loading 같은 transient UI
- 공개하기 부적절한 개인 이미지

필요한 대화상자나 Settings는 해당 창 자체를 캡처해. 비율을 왜곡하거나 UI를 fake/crop해서 만들지 마.

## 저장과 디자인

`public/assets/manual/` 아래에 의미 있는 파일명으로 저장해. 예: `compare-ko.png`, `compare-en.png`.

스크린샷은 설명하는 절차 바로 옆에 배치하고, 본문보다 지나치게 크게 만들지 마. desktop/mobile에서 실제 컨트롤을 알아볼 수 있을 정도의 폭을 유지해. 원본 bitmap에 화살표/번호를 굽지 말고 필요하면 caption 또는 안정적인 HTML/CSS callout만 사용해.

## 검증

각 스크린샷마다:

- 최신 앱 UI와 본문 설명이 일치하는지
- 한국어/영어가 동등한 상태인지
- 정상 크기에서 설명할 부분을 식별할 수 있는지
- overlay/흰 모서리/사생활 정보가 없는지
- mobile overflow가 없는지

확인해.

마지막에 production build와 site check를 실행하고, 시작하기/비교/색상검사/내보내기 등 대표 manual 페이지를 desktop/mobile에서 직접 확인해 필요한 spacing을 수정해.

완료 시 스크린샷을 넣은 topic, 의도적으로 텍스트만 유지한 topic, asset 수/크기, 사용한 AuroraViewer revision, capture 방식, QA 결과만 간결하게 보고하고 commit해.
