# Codex goal — recapture AuroraViewer screenshots without Codex overlay

`$auroraviewer-marketing-screenshots`를 반드시 사용해 현재 사이트의 최신 AuroraViewer 스크린샷을 다시 캡처해.

## 목표

현재 `viewer / thumbnail / compare / color` ko/en 스크린샷에 왼쪽 위 보라색 Codex Computer Use 관찰/제어 표시가 들어가 있고, 둥근 macOS 창 네 모서리 바깥에 흰색 틈/매트가 보인다. 둘 다 AuroraViewer UI가 아니므로 최종 공개 자산에서 제거한다.

이미지를 후처리하거나 보라색/흰색 부분만 지우지 마라. **같은 AuroraViewer 상태를 깨끗한 native window capture로 다시 촬영**한다.

## 현재 이미지/구도 유지

직전 작업에서 `~/Sample`을 조사해 선택한 이미지와 Viewer/Library/Compare/Color Inspector의 구성은 가능하면 유지한다. 처음부터 이미지 선정을 다시 할 필요는 없다.

다만 현재 선택을 정확히 재현할 수 없거나 더 자연스러운 상태 조정이 필요한 경우에만 최소한으로 다시 선택해.

한국어/영어는 같은 이미지와 동등한 UI 상태를 유지한다.

## 가장 중요한 캡처 규칙

Computer Use는 AuroraViewer를 조작하고 상태를 눈으로 확인하는 데만 사용한다.

**Computer Use가 제공하는 observation screenshot/appshot/frame을 최종 사이트 이미지로 사용하지 마라.**

최종 이미지는 다음처럼 AuroraViewer 창 자체를 직접 캡처한다.

1. AuroraViewer 상태를 완성하고 로딩/메뉴/툴팁을 모두 정리한다.
2. 실제 AuroraViewer window id를 native macOS/CoreGraphics/Accessibility 도구로 찾는다.
3. 해당 window buffer만 캡처한다.
4. 가능하면 native screenshot helper를 사용하고, shell fallback은 `screencapture -x -o -l <window-id> <output.png>`를 우선 사용한다. `-o`로 window shadow를 제외하고 PNG alpha를 유지한다.
5. 최종 캡처는 PNG 그대로 유지한다. 둥근 창 바깥 투명 픽셀을 JPEG로 변환해 흰색으로 flatten하지 마라.
6. 파일 크기 최적화가 꼭 필요하면 alpha를 유지하는 WebP만 검토하고, transparency가 실제로 보존되는지 확인한다.
7. Computer Use 관찰 표시가 계속 영향을 주면 상태 구성 후 Computer Use observation을 종료/해제하고 shell 기반 window capture를 실행한다.

전체 화면 또는 임의 rectangle 캡처를 최종 자산으로 사용하지 마라.

## 모서리 QA

macOS 창의 둥근 모서리는 유지하되, 창 바깥 픽셀은 투명해야 한다.

- 네 모서리를 확대해서 opaque white/black wedge, halo, matte가 없는지 확인한다.
- 흰색 틈을 숨기려고 AuroraViewer chrome 내부까지 crop하지 마라.
- CSS 배경색으로 흰색 틈을 위장하지 마라.
- 사이트 light/dark appearance 모두에서 투명 모서리가 자연스럽게 배경과 이어지는지 확인한다.

## Codex 표시 QA

특히 **왼쪽 위를 확대해서** 다음이 하나라도 있으면 실패 처리하고 다시 촬영한다.

- 보라색/자주색 Codex viewing/controlling 표시
- Computer Use 표시
- Screen Recording/observation banner
- Codex UI
- 데스크톱/Stage Manager/다른 앱 UI

AuroraViewer 고유 title/chrome은 임의로 잘라내지 않는다. crop으로 택을 숨기는 방식도 금지한다.

## 사이트 반영

기존 `.jpg` 8장은 필요하면 `.png`로 교체한다.

- `public/assets/screenshots/`의 viewer/thumbnail/compare/color ko/en 자산 갱신
- `src/data/product.ts`의 파일 확장자도 실제 자산에 맞춰 수정
- 빌드 산출물 갱신
- 실제 이미지 크기에 맞춰 HTML width/height metadata 수정
- CSS에서 transparent corner 뒤에 강제 white background를 두지 않는다

마지막에 production build와 site check를 실행하고 Home/Features의 light/dark, desktop/mobile에서 모든 새 스크린샷의 네 모서리와 Codex 표시 유무를 확인한다.

완료 보고에는 capture 방식, 최종 이미지 format/크기, ko/en 8장 모두 Codex 표시와 흰 모서리 매트가 없음을 확인한 결과만 간결하게 남겨.