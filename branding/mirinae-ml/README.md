# MirinaeLabs ML 로고

기존 코랄 색과 둥근 인상을 바탕으로 M의 오른쪽 기둥을 L의 가로획으로 이어 붙였습니다. 가운데 별 모양의 여백은 이전 방사형 심볼과 ‘미리내’의 이미지를 연결합니다. 기존 `mirinaelabs` 워드마크와 함께 사용합니다.

- `master.png`: 내장 ImageGen으로 생성한 투명 배경 원본. 2026-10-18 생성.
- `prompt.txt`: 실제 생성 프롬프트.
- `../../company/public/assets/brand/mirinae-mark.png`: 원본의 투명 여백을 잘라 1024px 너비로 내보낸 웹용 PNG.
- 같은 폴더의 `favicon-32.png`, `apple-touch-icon.png`: 밝은 배경 위에 여백을 두어 내보낸 브라우저 아이콘.

웹용 크기 변환은 Sharp로 수행했습니다. 원본 생성 이미지의 형태와 알파 채널을 유지하며, 히어로의 유리 질감과 그림자는 CSS 표현입니다. 헤더와 푸터는 원래 색상의 로고를 표시합니다.

저장소 루트에서 `node branding/mirinae-ml/export.mjs`를 실행하면 웹용 파일을 다시 내보낼 수 있습니다.
