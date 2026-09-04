# Codex goal — refresh AuroraViewer marketing screenshots

`$auroraviewer-marketing-screenshots`, `$auroraviewer-site-design`, `$auroraviewer-product-docs`를 사용해 현재 홈페이지의 구버전 AuroraViewer UI 스크린샷을 최신 앱의 실제 캡처로 전부 교체해.

## 목표

`../AuroraViewer` 또는 `$AURORAVIEWER_SOURCE`의 최신 `main`을 직접 DEBUG 빌드/실행하고 `~/Sample`의 이미지들을 AuroraViewer에서 열어 현재 사이트가 사용하는 다음 역할의 실제 스크린샷을 새로 만든다.

- Viewer / Home hero
- Library / Thumbnail
- Compare
- Color Inspector / Inspect

한국어와 영어 사이트가 각각 UI 지역화 이미지를 유지한다면 동일한 이미지와 동등한 앱 상태로 ko/en 세트를 만든다.

## 이미지 선택

`~/Sample`에는 이미지가 많다. 사용자에게 파일을 골라 달라고 묻지 말고 네가 직접 충분히 조사하고 시각적으로 평가해서 각 역할에 가장 적합한 이미지를 선택해.

파일명/정렬순서만으로 선택하지 마라. 필요하면 임시 thumbnail/contact sheet를 만들어 전체 분위기와 후보를 확인하고 역할별 shortlist를 만든 뒤 최종 선택해.

선택 기준은 Skill의 `references/selection-rubric.md`를 따른다. 특히:

- Hero: 첫인상이 좋고 AuroraViewer UI와 어울리는 강한 한 장
- Library: 여러 thumbnail이 함께 보일 때 다양하면서도 조화로운 구간
- Compare: 임의의 두 장이 아니라 같은/비슷한 피사체·구도·연속촬영·변형처럼 차이를 비교할 이유가 명확한 pair
- Color Inspector: 색상·gradient·edge·texture가 풍부하고 sampling 결과가 시각적으로 잘 드러나는 한 장

최종 4개 역할은 서로 다른 기능을 보여주면서 한 제품 사이트의 세트처럼 분위기가 조화로워야 한다.

공개 홈페이지에 부적절한 개인 문서, 계정 정보, 사적 메시지, 신분증, 번호판, 민감한 사생활 이미지 등은 제외해. 적절한 후보가 정말 없을 때만 해당 역할을 완료하지 못했다고 보고해.

## AuroraViewer 실행/조작

기존 DEBUG 자동화(`AURORA_AUTOMATION_OPEN_FILE`, fullscreen/zoom 등)를 우선 활용해. `~/Sample` 폴더 자체를 입력으로 사용할 수 있는지 실제로 검증해.

앱 샌드박스로 직접 경로 접근이 막히면 production entitlement를 변경하지 말고 실제 Open panel을 Computer Use/Accessibility로 조작해 정상적인 사용자 선택 권한을 주거나, screenshot 전용 unsigned/non-sandbox DEBUG 실행 방법을 사용해.

모드 전환은 현재 단축키/자동화를 우선하고 필요한 상태는 Computer Use 또는 macOS Accessibility automation으로 구성해. `$screenshot` Skill이 설치되어 있으면 native window capture에 우선 사용하고, 없으면 Computer Use/macOS window capture를 사용해.

Compare slot 배치와 Color Inspector 위치까지 최종 화면을 직접 보고 가장 설명력이 높은 상태로 조정해. 단순히 모드를 켠 직후 캡처하지 마라.

## 캡처 품질

- 실제 AuroraViewer 창만 캡처하는 것을 우선
- 네 역할의 창 geometry/aspect ratio를 일관되게 유지
- 기존 1800×1096 비율을 유지할 수 있으면 그 규격 또는 정확히 같은 비율의 Retina 원본을 사용
- resize가 필요하면 비율을 유지한 proportional downsample만 허용
- UI crop, stretch, fake UI, ImageGen 사용 금지
- loading/dialog/menu/tooltip 등 transient 상태가 없는지 확인
- 각 최종 이미지를 눈으로 다시 검토하고 더 좋은 후보/상태가 있으면 재촬영

## 사이트 반영

현재 `public/assets/screenshots/`의 viewer/thumbnail/compare/color ko/en 자산을 새 캡처로 교체하고 필요하면 실제 pixel dimensions에 맞춰 HTML width/height metadata도 갱신해. CSS는 원본 비율을 유지해야 하며 `object-fit: cover`로 앱 UI를 자르지 마라.

작업 후 Astro production build와 기존 site check를 실행하고 Home/Features의 desktop/mobile 렌더링을 실제로 검토해. 새 이미지 때문에 layout/spacing이 어색해졌다면 콘텐츠는 유지하면서 필요한 최소 visual polish도 함께 적용해.

완료 시 사용한 AuroraViewer revision, 조사한 후보 수, 역할별 선택 이유, 최종 이미지 크기, capture 방식, build/QA 결과만 간결하게 보고해.
