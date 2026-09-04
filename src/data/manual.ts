import type { Locale } from "./product";

type LocalizedText = Record<Locale, string>;

export interface ManualMedia {
  src: LocalizedText;
  alt: LocalizedText;
  caption?: LocalizedText;
  width: number;
  height: number;
  kind?: "window" | "detail";
}

export interface ManualSection {
  heading: LocalizedText;
  intro?: LocalizedText;
  steps?: LocalizedText[];
  bullets?: LocalizedText[];
  note?: LocalizedText;
  warning?: LocalizedText;
  media?: ManualMedia | ManualMedia[];
  shortcuts?: Array<{
    action: LocalizedText;
    key: string;
    detail?: LocalizedText;
  }>;
}

export interface ManualTopic {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  purpose: LocalizedText;
  sections: ManualSection[];
  related: string[];
}

const l = (ko: string, en: string): LocalizedText => ({ ko, en });

const media = (
  name: string,
  width: number,
  height: number,
  altKo: string,
  altEn: string,
  captionKo: string,
  captionEn: string,
  kind: ManualMedia["kind"] = "window"
): ManualMedia => ({
  src: l(`${name}-ko.png`, `${name}-en.png`),
  alt: l(altKo, altEn),
  caption: l(captionKo, captionEn),
  width,
  height,
  kind
});

export const manualTopics: ManualTopic[] = [
  {
    slug: "getting-started",
    title: l("시작하기", "Getting started"),
    summary: l("AuroraViewer를 설치하고 첫 라이브러리를 열어 기본 사용법을 익힙니다.", "Install AuroraViewer, open your first library, and learn the basic review flow."),
    purpose: l("AuroraViewer에서는 이미지를 한 장씩 보거나 여러 폴더와 압축 파일을 한꺼번에 검토할 수 있습니다. 첫 라이브러리를 열고 이미지 이동, 확대, 평가 순서로 시작해 보세요.", "AuroraViewer is both a focused image viewer and a review tool that combines folders and archives into one working library. Start by building a library, navigating it, then adding review decisions."),
    sections: [
      {
        heading: l("첫 라이브러리 열기", "Open your first library"),
        steps: [
          l("Mac App Store에서 AuroraViewer를 설치하고 실행합니다.", "Install AuroraViewer from the Mac App Store and launch it."),
          l("파일 메뉴에서 ‘파일 또는 폴더 추가…’를 선택하거나 ⌘O를 누릅니다.", "Choose File > Open, or press Command-O."),
          l("이미지, 폴더 또는 ZIP·RAR·7z 압축 파일을 하나 이상 선택합니다.", "Select one or more images, folders, or ZIP, RAR, or 7z archives."),
          l("썸네일 바에서 그룹과 썸네일을 확인한 뒤 첫 이미지를 선택합니다.", "Review the source groups and thumbnails in the sidebar, then select an image.")
        ],
        note: l("처음 여는 폴더에는 macOS 파일 접근 승인이 필요할 수 있습니다. AuroraViewer는 사용자가 승인한 위치에만 접근합니다.", "macOS may ask you to approve access to a folder the first time you open it. AuroraViewer only accesses locations you approve.")
      },
      {
        heading: l("기본 검토 흐름", "A simple review flow"),
        steps: [
          l("←와 →로 이전·다음 이미지로 이동합니다.", "Use Left Arrow and Right Arrow to move between images."),
          l("+와 −로 확대·축소하고, ⌘0으로 창 크기에 맞추기와 원본 크기로 보기를 전환합니다.", "Zoom with Plus and Minus, and press Command-0 to switch between fit and original size."),
          l("0~5 숫자 키로 별점을 매기거나 P로 선택, X로 제외를 표시합니다.", "Record a 0–5 star rating, or mark Pick with P and Reject with X."),
          l("검토를 마친 이미지는 Finder 태그로 정리하거나 비교하고 내보낼 수 있습니다.", "Continue with Finder tags, Compare mode, or export for the images you want to keep working with.")
        ]
      },
      {
        heading: l("화면의 주요 영역", "Know the main areas"),
        media: media(
          "getting-started",
          1164,
          709,
          "AuroraViewer의 썸네일 바, 이미지 화면, 상단 평가 도구와 하단 슬라이더가 보이는 기본 뷰어 창",
          "The main AuroraViewer window showing the sidebar, image canvas, top rating controls, and bottom navigation bar",
          "기본 뷰어 화면에서 라이브러리와 현재 이미지, 평가 도구, 탐색 위치를 함께 확인할 수 있습니다.",
          "The main viewer keeps the library, current image, review controls, and navigation position in one window."
        ),
        bullets: [
          l("썸네일 바: 가져온 위치별 그룹과 검색·정렬·필터, 여러 이미지 선택을 관리합니다.", "Sidebar: manage input sources, search, sorting, filters, and multiple selection."),
          l("이미지 화면: 현재 이미지, 두 장 보기 또는 비교 화면을 표시합니다.", "Canvas: displays the current image, a two-page spread, or Compare slots."),
          l("상단 도구: 별점, 선택/제외, Finder 태그와 보기 상태를 바꿉니다.", "Top controls: manage ratings, Pick/Reject, Finder tags, and view state."),
          l("하단 슬라이더와 정보 창: 이미지 이동, 배율, 파일 정보, 미니맵과 히스토그램을 보여 줍니다.", "Bottom slider and overlays: help with navigation, zoom, file information, the minimap, and histogram.")
        ]
      }
    ],
    related: ["open-and-import", "browse-and-navigate", "shortcuts"]
  },
  {
    slug: "open-and-import",
    title: l("이미지·폴더·압축 열기", "Open images, folders, and archives"),
    summary: l("이미지, 폴더, 압축 파일을 여는 방법과 처리 조건을 확인합니다.", "Understand the available input paths and how folders and archives are handled."),
    purpose: l("직접 고른 이미지뿐 아니라 폴더와 하위 폴더, 압축 파일 안의 이미지도 같은 라이브러리에서 볼 수 있습니다. 가져온 위치별로 묶여 서로 다른 폴더의 이미지도 함께 검토하기 쉽습니다.", "You can review selected images, folder trees, and images inside archives in the same library. Source groups preserve where each set came from."),
    sections: [
      {
        heading: l("현재 뷰어에 추가하기", "Add sources to the current viewer"),
        media: media(
          "open-import",
          1164,
          709,
          "서로 다른 두 폴더가 그룹으로 펼쳐지고 각 이미지의 썸네일이 표시된 AuroraViewer",
          "AuroraViewer with two source folders expanded into groups and their image thumbnails visible",
          "이미지와 폴더를 추가하면 가져온 위치별로 묶여 한 라이브러리에서 계속 살펴볼 수 있습니다.",
          "Added images and folders remain grouped by source so you can browse them as one library."
        ),
        steps: [
          l("파일 메뉴에서 ‘파일 또는 폴더 추가…’를 선택하거나 ⌘O를 누릅니다.", "Choose the add/open command from the File menu, or press Command-O."),
          l("여러 이미지, 폴더, 압축 파일을 함께 선택합니다.", "Select multiple images, folders, and archives together."),
          l("파일을 모두 불러오면 썸네일 바에서 각 그룹을 펼쳐 이미지를 확인합니다.", "When scanning finishes, expand the source groups in the sidebar to review the results."),
          l("더 열 파일이 있으면 같은 명령을 다시 사용하거나 창으로 드래그 앤 드롭합니다.", "Repeat the command or drag more sources into the window when you need to add input.")
        ],
        note: l("Finder에서 AuroraViewer로 연 파일을 새 뷰어에 열지 현재 뷰어에 추가할지는 설정에서 바꿀 수 있습니다.", "In Settings, you can choose whether files opened from Finder use a new viewer or the current viewer.")
      },
      {
        heading: l("폴더와 압축 파일이 정리되는 방식", "How folders and archives become groups"),
        bullets: [
          l("폴더를 열면 하위 폴더까지 살펴보고, 지원하는 이미지를 위치별 그룹으로 정리합니다.", "Folders are scanned recursively, and supported images are arranged into source groups by path."),
          l("ZIP, RAR, 7z에서는 지원하는 이미지만 안전한 임시 폴더나 캐시에 풀어 엽니다.", "ZIP, RAR, and 7z archives extract only supported image entries to a protected temporary or cache location."),
          l("압축 파일 안의 또 다른 압축 파일은 현재 다시 열지 않습니다.", "Archives nested inside another archive are not opened recursively."),
          l("숨김 항목은 제외하고 이름순으로 정리하며, 같은 파일을 중복으로 추가하지 않습니다.", "Hidden items are skipped, names use natural sorting, and duplicate URLs are removed.")
        ]
      },
      {
        heading: l("열 수 있는 파일 형식", "Supported input and conditions"),
        intro: l("일반 이미지와 주요 카메라 RAW, 그래픽·문서 형식을 열 수 있습니다.", "The scanner recognizes common images, major camera RAW formats, and vector or document formats."),
        bullets: [
          l("일반·고효율: BMP, JPEG, GIF, PNG, WebP, TIFF, HEIC, HEIF, AVIF, APNG", "Common and high-efficiency: BMP, JPEG, GIF, PNG, WebP, TIFF, HEIC, HEIF, AVIF, APNG"),
          l("그래픽: SVG, PSD, DDS, JPEG 2000, TGA, PBM, PGM, PPM", "Professional and graphics: SVG, PSD, DDS, JPEG 2000, TGA, PBM, PGM, PPM"),
          l("RAW: DNG, CR2, CR3, CRW, NEF, NRW, ORF, RW2, PEF, ARW, SR2, RAF", "RAW: DNG, CR2, CR3, CRW, NEF, NRW, ORF, RW2, PEF, ARW, SR2, RAF"),
          l("문서·벡터: AI, EPS, EPSF, PDF", "Documents and vectors: AI, EPS, EPSF, PDF")
        ],
        note: l("지원 목록에 있는 확장자라도 파일 자체의 형식과 macOS ImageIO·Quick Look, 선택적으로 설치한 Ghostscript 지원에 따라 열리지 않을 수 있습니다.", "A recognized extension does not guarantee a successful decode. Results depend on file contents, macOS ImageIO and Quick Look, and optionally installed Ghostscript support.")
      },
      {
        heading: l("암호 압축과 안전 제한", "Password-protected archives and safety limits"),
        bullets: [
          l("암호 입력은 최대 3회까지 다시 시도할 수 있습니다.", "You can retry an archive password up to three times."),
          l("압축 파일 하나에서 최대 20,000개 항목, 이미지 한 장당 256MB, 전체 1GB까지 풀 수 있습니다.", "A single archive is limited to 20,000 entries, 256 MB per image, and 1 GB total extraction."),
          l("안전하지 않은 저장 경로가 포함된 항목은 열지 않습니다.", "Absolute paths and paths that escape the destination are rejected."),
          l("암호가 걸린 압축 파일에서 임시로 꺼낸 파일은 일반 캐시 설정과 관계없이 앱을 종료할 때 정리됩니다.", "Files extracted from a password-protected archive are cleaned up on exit regardless of the general cache preference.")
        ]
      }
    ],
    related: ["getting-started", "sidebar-search-filter", "troubleshooting"]
  },
  {
    slug: "browse-and-navigate",
    title: l("탐색과 이동", "Browse and navigate"),
    summary: l("키보드와 하단 슬라이더, 썸네일 바를 이용해 라이브러리를 빠르게 이동합니다.", "Move quickly through a library with the keyboard, slider, and sidebar."),
    purpose: l("이미지가 많아도 현재 보고 있는 파일과 목록 위치를 가능한 한 유지합니다. 키보드와 하단 슬라이더, 썸네일 바를 이용해 가까운 이미지부터 멀리 떨어진 이미지까지 빠르게 이동하세요.", "In a large library, staying oriented while moving to the next candidate matters. AuroraViewer preserves selection and scroll position where possible, even after the list changes."),
    sections: [
      {
        heading: l("이전·다음 이미지로 이동", "Move to the previous or next image"),
        media: media(
          "browse-and-navigate",
          1164,
          709,
          "AuroraViewer 썸네일 모드에서 여러 이미지를 격자로 살펴보는 화면",
          "AuroraViewer Thumbnail mode displaying an image library as a browsable grid",
          "썸네일 모드에서는 많은 이미지를 한눈에 훑고 원하는 항목으로 바로 이동할 수 있습니다.",
          "Thumbnail mode helps you scan a large library and jump directly to a candidate."
        ),
        steps: [
          l("이미지 화면을 클릭한 뒤 ← 또는 →를 누릅니다.", "With the canvas active, press Left Arrow or Right Arrow."),
          l("멀리 이동하려면 하단 슬라이더의 손잡이를 끌거나 원하는 눈금을 선택합니다.", "To move farther, drag the bottom slider or select a point on it."),
          l("특정 이미지로 가려면 썸네일 바의 목록이나 썸네일을 선택합니다.", "To jump to a specific item, select its row or thumbnail in the sidebar."),
          l("휠 이동을 선호하면 설정의 마우스 입력에서 휠 탐색과 보조 키를 조정합니다.", "If you prefer wheel navigation, adjust wheel navigation and its modifier in Mouse Input settings.")
        ]
      },
      {
        heading: l("여러 항목 선택", "Select multiple items"),
        bullets: [
          l("Command-클릭으로 개별 항목을 더하거나 뺍니다.", "Command-click to add or remove individual items."),
          l("Shift-클릭으로 기준 항목과 클릭한 항목 사이 범위를 선택합니다.", "Shift-click to select a range from the anchor item."),
          l("선택한 여러 이미지는 비교하거나 별점·태그를 한꺼번에 적용하고, 이동·복사하거나 중복을 찾을 때 사용할 수 있습니다.", "Multiple selection can feed Compare mode, batch ratings and tags, move or copy, and duplicate scanning."),
          l("파일을 이동하거나 복사하기 전에 선택한 이미지 수를 다시 확인합니다.", "Review the selected count and scope before a file operation.")
        ]
      },
      {
        heading: l("그룹으로 목록 나누기", "Stay oriented with groups"),
        bullets: [
          l("가져온 위치마다 썸네일 바에 그룹이 만들어지며, 각 그룹을 접거나 펼칠 수 있습니다.", "Each input source appears as a collapsible sidebar group."),
          l("폴더별 그룹과 모든 항목을 합친 단일 목록 사이를 바꿀 수 있습니다.", "You can switch between folder groups and one combined list."),
          l("그룹 순서를 위아래로 옮기거나 목록에서 그룹을 제거할 수 있습니다.", "You can reorder groups or remove a group from the library."),
          l("그룹 제거는 원본 파일을 삭제하지 않습니다.", "Removing a group does not delete the original files.")
        ]
      },
      {
        heading: l("슬라이드쇼로 순서대로 보기", "Review in sequence with a slideshow"),
        steps: [
          l("이동 메뉴에서 슬라이드쇼를 시작합니다.", "Start the slideshow from the Go menu."),
          l("필요하면 일시정지하거나 다시 재생합니다.", "Pause and resume as needed."),
          l("설정에서 1–30초 간격과 끝에서 반복할지 정합니다.", "In Settings, choose a 1–30 second interval and whether to loop at the end."),
          l("수동 검토로 돌아가려면 슬라이드쇼를 중지합니다.", "Stop the slideshow to return to manual review.")
        ]
      }
    ],
    related: ["sidebar-search-filter", "view-and-zoom", "rate-tag-organize"]
  },
  {
    slug: "view-and-zoom",
    title: l("확대·이동·보기 모드", "Zoom, pan, and viewing modes"),
    summary: l("창 크기에 맞추기, 원본 크기로 보기, 회전과 화면 정보 도구를 사용합니다.", "Use fit, original size, rotation, and supporting overlays."),
    purpose: l("사진 전체를 볼 때와 픽셀 단위로 살펴볼 때는 알맞은 배율이 다릅니다. 보기 크기를 바꾸고 포인터를 중심으로 확대하거나 이미지를 움직여 세부를 확인하세요.", "A composition overview and a pixel-level inspection need different zoom levels. Switch viewing modes, then use pointer-centered zoom and pan for detail."),
    sections: [
      {
        heading: l("배율 모드 선택", "Choose a zoom mode"),
        media: media(
          "view-zoom",
          1164,
          709,
          "AuroraViewer에서 오로라 사진을 200퍼센트로 확대하고 미니맵으로 현재 영역을 확인하는 화면",
          "AuroraViewer showing an aurora photo at 200 percent with the current viewport indicated in the minimap",
          "200%로 확대하면 세부 픽셀을 보면서 미니맵으로 전체 이미지 안의 현재 위치도 확인할 수 있습니다.",
          "At 200%, the minimap keeps the current viewport in context while you inspect fine detail."
        ),
        bullets: [
          l("‘창 크기에 맞추기’: 이미지 전체가 현재 화면 안에 들어오도록 표시합니다.", "Fit to Window: fits the full image within the current canvas."),
          l("‘원본 크기로 보기 (100%)’: 원본 이미지를 100% 배율로 표시합니다.", "Original Size: uses the default 1:1 relationship between source pixels and screen points."),
          l("‘200%로 보기’: 픽셀을 더 크게 살펴볼 수 있도록 200% 배율로 표시합니다.", "200%: a fixed zoom level for closer pixel inspection."),
          l("‘비율 유지’: 다음 이미지로 이동해도 현재 배율을 유지합니다.", "Preserve Scale: keeps the current display scale when you change images.")
        ],
        shortcuts: [
          { action: l("창 맞춤/원본 크기 전환", "Toggle fit/original"), key: "⌘0" },
          { action: l("창 크기에 맞추기", "Fit to Window"), key: "⌥1" },
          { action: l("원본 크기로 보기", "Original Size"), key: "⌥2" },
          { action: l("비율 유지", "Preserve Scale"), key: "⌥3" },
          { action: l("200%", "200%"), key: "⌘⌥2" }
        ]
      },
      {
        heading: l("확대·이동·회전", "Zoom, pan, and rotate"),
        steps: [
          l("+ 또는 −를 눌러 단계적으로 확대·축소합니다.", "Press Plus or Minus to zoom in steps."),
          l("포인터가 있는 곳을 중심으로 확대하려면 휠 확대 동작을 사용합니다. 기본 입력은 Command-휠입니다.", "Use the configured wheel zoom to zoom around the pointer. The default is Command-wheel."),
          l("확대된 이미지를 드래그하거나 미니맵을 이용해 이동합니다.", "Drag the enlarged image or use the minimap to pan."),
          l("⌘[ 또는 ⌘]로 90도 회전하고 Space를 눌러 ‘뷰 초기화’를 실행합니다.", "Rotate 90 degrees with Command-[ or Command-], and press Space to reset zoom, pan, and rotation.")
        ]
      },
      {
        heading: l("전체 화면과 클린 뷰", "Full screen and Clean View"),
        bullets: [
          l("⌘Return을 누르면 전체 화면으로 전환하거나 원래 창으로 돌아옵니다.", "Command-Return toggles full screen."),
          l("⌥Space를 누르면 ‘클린 뷰 모드’로 전환되어 조작 패널과 화면 정보가 최소화됩니다.", "Option-Space toggles Clean View, minimizing controls and overlays."),
          l("썸네일 바, 하단 슬라이더, 미니맵, 히스토그램, EXIF 오버레이는 각각 켜고 끌 수 있습니다.", "The sidebar, bottom slider, minimap, histogram, and EXIF overlay can each be toggled."),
          l("자동 숨김을 켜면 포인터를 가까이 가져갔을 때만 필요한 조작 도구가 나타납니다.", "Auto-hide can reveal controls only while you interact with them.")
        ]
      },
      {
        heading: l("픽셀과 색을 정확히 보기", "Inspect pixels and color"),
        bullets: [
          l("안티에일리어싱은 끄기, 균형, 고품질, 최고품질 중 선택할 수 있습니다.", "Antialiasing offers Off, Balanced, High, and Maximum quality."),
          l("픽셀 그리드는 픽셀 하나가 충분히 크게 보일 때 경계를 표시합니다.", "The pixel grid appears when each source pixel is large enough on screen."),
          l("‘투명 영역 배경’은 시스템, 흰색, 회색, 검정, 체커보드 등에서 선택합니다.", "For transparent images, choose System, white, gray, black, or checkerboard backgrounds."),
          l("큰 이미지는 빠른 미리보기를 먼저 보여 준 뒤, 조작을 멈추면 화면에 필요한 부분을 더 선명하게 표시합니다.", "Large images show a viewport-sized preview first, then progressively refine detail after interaction settles.")
        ]
      }
    ],
    related: ["browse-and-navigate", "inspect-color-metadata", "compare-and-pages"]
  },
  {
    slug: "sidebar-search-filter",
    title: l("썸네일 바·검색·정렬·필터", "Sidebar, search, sort, and filters"),
    summary: l("이미지가 많은 라이브러리에서 원하는 항목만 찾고 한꺼번에 처리합니다.", "Narrow a large library and define the scope for batch actions."),
    purpose: l("검색·필터로 추린 이미지에는 별점과 태그를 한꺼번에 적용하거나 중복 검사를 실행할 수 있습니다. 작업을 시작하기 전에 결과 수를 확인하세요.", "Search and filter results affect more than the visible list: they can also define the scope of batch ratings and duplicate scans. Narrow the list, then confirm its count."),
    sections: [
      {
        heading: l("파일명과 확장자로 검색", "Search by file name or extension"),
        media: media(
          "sidebar-search-filter",
          1164,
          709,
          "AuroraViewer 검색 필드에 검색어를 입력해 40개 이미지 중 겨울 사진 2개만 표시한 화면",
          "AuroraViewer with winter entered in the search field, narrowing a 40-image library to two winter photos",
          "검색 결과 수와 남은 썸네일을 확인한 뒤 필터를 더 적용하거나 이미지를 한꺼번에 처리할 수 있습니다.",
          "Confirm the result count and remaining thumbnails before using filters or batch actions."
        ),
        steps: [
          l("⌘F를 눌러 검색 필드로 이동합니다.", "Press Command-F to focus the search field."),
          l("파일명 일부 또는 확장자를 입력합니다. 대소문자는 구분하지 않습니다.", "Enter part of a file name or an extension. Search is case-insensitive."),
          l("검색 결과를 선택하거나 추가 필터를 적용합니다.", "Select from the results or apply more filters."),
          l("전체 목록으로 돌아가려면 검색어를 지웁니다.", "Clear the query to return to the full list.")
        ]
      },
      {
        heading: l("정렬 기준 선택", "Choose a sort order"),
        bullets: [
          l("파일명, 수정일, 촬영일, 파일 크기, 확장자, 별점, 해상도로 정렬할 수 있습니다.", "Sort by file name, modified date, capture date, file size, extension, rating, or resolution."),
          l("모든 기준은 오름차순과 내림차순을 지원합니다.", "Every criterion supports ascending and descending order."),
          l("촬영일이 없으면 수정일을 대신 사용합니다.", "Modified date is used when capture date is unavailable."),
          l("해상도는 방향을 보정한 픽셀 면적을 기준으로 합니다.", "Resolution sorting uses orientation-corrected pixel area.")
        ]
      },
      {
        heading: l("필터 조합", "Combine filters"),
        bullets: [
          l("별점: 선택한 별점 집합에 해당하는 이미지만 표시합니다.", "Rating: show only images with selected ratings."),
          l("선택 상태: 선택, 제외, 미지정 상태를 조합합니다.", "Selection status: combine Pick, Reject, and Unmarked."),
          l("확장자와 Finder 태그: 라이브러리에서 실제 발견된 값으로 좁힙니다.", "Extension and Finder tag: narrow using values actually present in the library."),
          l("애니메이션만: 프레임이 여러 개인 GIF, WebP, APNG 등만 표시합니다.", "Animated only: narrow to multi-frame GIF, WebP, APNG, and similar items.")
        ]
      },
      {
        heading: l("검색·필터 결과에 한꺼번에 적용", "Apply an action to filtered results"),
        steps: [
          l("검색·정렬·필터를 적용하고 결과 개수를 확인합니다.", "Apply search, sorting, and filters, then confirm the result count."),
          l("별점이나 Finder 태그를 적용할 때 ‘현재 필터 결과’를 선택합니다.", "Choose the current filtered results as the scope for a rating or Finder tag action."),
          l("바뀔 이미지 수와 내용을 확인한 뒤 실행합니다.", "Review the intended change, then run it."),
          l("잘못 적용했다면 ‘마지막 작업 실행 취소’를 사용합니다.", "If the action was wrong, use Undo Last Aurora Operation.")
        ],
        warning: l("검색·필터 결과 전체를 파일 이동·복사나 중복 검사에 사용할 수도 있습니다. 실행하기 전에 대상 이미지 수를 한 번 더 확인하세요.", "Filtered results can also define a broad scope for move, copy, or duplicate scans. Check the scope again before a file-system operation.")
      }
    ],
    related: ["browse-and-navigate", "rate-tag-organize", "duplicates"]
  },
  {
    slug: "compare-and-pages",
    title: l("비교와 두 장 보기", "Compare and two-page viewing"),
    summary: l("이미지를 2~4분할로 비교하거나 이어지는 두 페이지를 함께 봅니다.", "Compare two to four candidates, or read two adjacent pages as a spread."),
    purpose: l("비교 모드는 라이브러리에서 고른 이미지를 나란히 놓고 차이를 찾을 때 사용합니다. 두 장 보기는 앞뒤로 이어지는 파일을 두 페이지씩 볼 때 알맞습니다.", "Compare mode finds differences between arbitrary candidates. Two-page viewing reads adjacent items in library order. Choose the mode that matches the task."),
    sections: [
      {
        heading: l("선택한 이미지를 비교하기", "Compare selected images"),
        media: media(
          "compare-and-pages",
          1164,
          709,
          "AuroraViewer 비교 모드에서 겨울 사진 두 장을 나란히 놓고 같은 배율과 위치로 비교하는 화면",
          "AuroraViewer Compare mode showing two winter photos side by side with synchronized zoom and pan",
          "비교 모드에서는 같은 창에 놓은 이미지의 차이와 현재 선택한 이미지, 확대·이동 동기화 상태를 함께 확인할 수 있습니다.",
          "Compare mode places candidates in one window so you can track the active slot, sync state, and visual differences."
        ),
        steps: [
          l("썸네일 바에서 비교할 이미지를 1~4개 선택합니다.", "Select one to four images in the sidebar."),
          l("‘비교 모드’를 켭니다. 선택한 이미지 수에 따라 2·3·4분할 화면이 정해집니다.", "Turn on Compare mode. A two-, three-, or four-slot layout is chosen for the selection."),
          l("빈 칸이 있으면 이미지 선택 메뉴나 드래그 앤 드롭으로 채웁니다.", "Fill empty slots using the slot menu or drag and drop."),
          l("이미지를 클릭해 활성화한 뒤 별점이나 태그를 적용합니다.", "Click a slot to activate it before applying ratings or tags.")
        ],
        note: l("이미지를 한 장만 선택해도 2분할로 시작하므로 비교할 이미지를 바로 추가할 수 있습니다.", "Selecting one image still opens a two-slot layout so you can add a second candidate immediately.")
      },
      {
        heading: l("확대와 이동 동기화", "Synchronize zoom and pan"),
        steps: [
          l("‘줌/팬 동기화’를 켜고 기준으로 삼을 이미지를 조작합니다.", "Enable Sync and manipulate the slot you want to use as the reference."),
          l("확대하거나 드래그하면 동기화된 이미지가 같은 배율과 위치로 움직입니다.", "Zoom or drag; synchronized slots use the same zoom and pan."),
          l("다른 부분을 따로 볼 이미지는 ‘독립’을 켭니다.", "Turn on Independent for any slot you want to inspect separately."),
          l("‘모든 비교 슬롯의 확대/이동을 초기화’를 눌러 모든 이미지를 기본 상태로 되돌립니다.", "Use Reset All Transforms to return every slot to its default state.")
        ]
      },
      {
        heading: l("두 장 보기 사용", "Use two-page viewing"),
        steps: [
          l("이미지 메뉴에서 ‘두 장 보기’를 켭니다.", "Turn on Two-Page View from the Image menu."),
          l("자료에 맞게 ‘좌,우 순서’ 또는 ‘우,좌 순서’를 선택합니다.", "Choose left-to-right or right-to-left reading order."),
          l("←와 →를 눌러 두 장씩 이동합니다.", "Move through spreads with Left Arrow and Right Arrow."),
          l("한 장씩 다시 보려면 두 장 보기를 끕니다.", "Turn off Two-Page View to return to single-image viewing.")
        ],
        note: l("두 장 보기는 만화나 스캔처럼 순서대로 이어지는 파일에 알맞습니다. 순서와 관계없이 두 이미지를 비교하려면 비교 모드를 사용하세요.", "Two-page viewing works best for sequential files such as comics or scans. Use Compare mode for arbitrary candidates.")
      }
    ],
    related: ["view-and-zoom", "rate-tag-organize", "browse-and-navigate"]
  },
  {
    slug: "rate-tag-organize",
    title: l("평가·태그·파일 정리", "Rate, tag, and organize files"),
    summary: l("별점과 선택/제외를 표시하고 Finder 태그와 실제 파일 작업을 구분해 사용합니다.", "Record ratings and Pick/Reject decisions, and distinguish Finder tags from file operations."),
    purpose: l("별점과 선택/제외 상태는 AuroraViewer에 저장되고, Finder 태그는 원본 파일에 기록되어 다른 Mac 앱에서도 보입니다. 파일 이동은 원본 위치를 바꾸므로 각 작업의 차이를 확인한 뒤 사용하세요.", "Ratings, Finder tags, and file moves have different storage and effects. Start with ratings and Pick/Reject for lightweight review, and use Finder tags when the classification should be visible to other Mac apps."),
    sections: [
      {
        heading: l("별점과 선택/제외", "Ratings and Pick/Reject"),
        media: media(
          "rate-tag-organize",
          1164,
          709,
          "AuroraViewer에서 선택한 오로라 사진에 별점 4점, 선택 상태와 파란 Finder 태그를 적용한 화면",
          "AuroraViewer with a selected aurora photo marked four stars, Pick, and a blue Finder tag",
          "현재 이미지의 별점과 선택/제외 상태, Finder 태그는 상단 도구와 썸네일 표시에서 바로 확인할 수 있습니다.",
          "Ratings, Pick or Reject, and Finder tags are visible both in the top controls and on thumbnail badges."
        ),
        steps: [
          l("현재 이미지 또는 썸네일 바의 여러 이미지를 선택합니다.", "Select the current image or multiple images in the sidebar."),
          l("0~5 숫자 키를 눌러 별점을 지정합니다.", "Press 0–5 to set a rating."),
          l("P로 선택, X로 제외 상태를 전환합니다.", "Press P for Pick or X for Reject."),
          l("필터로 원하는 이미지만 표시하거나 검색·필터 결과 전체에 같은 평가를 적용합니다.", "Use filters to narrow the results, or apply the same decision to all current filtered results.")
        ],
        note: l("별점과 선택/제외 상태는 파일 위치별로 AuroraViewer에 저장되며 원본 이미지의 메타데이터에는 기록되지 않습니다.", "Ratings and Pick/Reject are stored locally by file path in AuroraViewer. They are not written into the image metadata.")
      },
      {
        heading: l("Finder 색상 태그", "Finder color tags"),
        steps: [
          l("태그를 적용할 이미지를 선택합니다.", "Select the images you want to tag."),
          l("상단 태그 도구나 ⌃1–⌃7을 사용해 색상 태그를 전환합니다.", "Use the top tag controls or Control-1 through Control-7 to toggle color tags."),
          l("태그 필터로 같은 Finder 태그가 붙은 이미지를 다시 모읍니다.", "Use the tag filter to gather images with the same Finder tag."),
          l("모든 태그를 지우려면 대상 이미지를 확인한 뒤 ‘태그 지우기’를 사용합니다.", "When clearing tags, confirm the scope before using Clear All Tags.")
        ],
        note: l("Finder 태그는 원본 파일에 저장되므로 다른 Mac 앱에서도 보입니다. 태그를 쓸 권한이 없으면 이미지가 있는 상위 폴더를 다시 선택해 접근을 승인해야 할 수 있습니다.", "Finder tags are extended attributes on the file itself. If write permission is missing, you may need to select and approve the containing folder again.")
      },
      {
        heading: l("목록에서 삭제와 휴지통 이동 구분", "Distinguish Remove from Trash"),
        bullets: [
          l("‘선택한 이미지 목록에서 삭제’: 썸네일 바에서만 이미지를 빼며 원본 파일은 그대로 둡니다.", "Remove from List: removes the item only from the AuroraViewer library and leaves the source file intact."),
          l("‘선택한 이미지 휴지통으로 이동’: 실제 파일을 Finder 휴지통으로 옮기고 성공한 이미지를 목록에서 뺍니다.", "Delete Image: moves the file to Finder Trash and removes successful items from the library."),
          l("휴지통 작업 실행 취소는 원래 위치가 비어 있고 휴지통 항목이 남아 있을 때만 복구될 수 있습니다.", "Undoing a trash operation can succeed only while the original location is available and the trashed item still exists."),
          l("압축 안에서 연 이미지는 원본 압축 내부를 직접 이동하거나 삭제하지 않습니다.", "Images opened from an archive do not directly move or delete the original entry inside that archive.")
        ],
        warning: l("‘선택한 이미지 휴지통으로 이동’은 실제 파일을 옮깁니다. 실행 전에 선택한 이미지를 반드시 확인하세요.", "Delete Image moves real files to Trash. Always verify the selected images and scope before running it.")
      },
      {
        heading: l("이름 변경, 이동, 복사", "Rename, move, and copy"),
        bullets: [
          l("이름 변경은 원본 확장자를 보존하고, 같은 이름 충돌과 접근 권한을 확인합니다.", "Rename preserves the original extension and checks for name collisions and access."),
          l("이동이 끝나면 새 파일 위치가 라이브러리와 별점·선택/제외 기록에 반영됩니다.", "Move updates the library path and local review record for successful files."),
          l("복사하면 라이브러리의 원본은 그대로 남습니다. 복사본을 자동으로 지우는 실행 취소는 제공하지 않습니다.", "Copy keeps the original in the library and does not provide an automatic delete-the-copy undo."),
          l("‘선택한 이미지 내보내기’는 같은 이름이 있으면 번호를 붙여 기존 파일을 덮어쓰지 않습니다.", "Batch Export Originals adds a number to conflicting names instead of overwriting existing files."),
          l("‘마지막 작업 실행 취소’는 최근 작업을 최대 30개까지 기억하며 앱을 다시 실행한 뒤까지 유지된다고 보장되지 않습니다.", "Undo Last Aurora Operation keeps up to 30 in-memory actions and is not guaranteed after relaunch.")
        ]
      }
    ],
    related: ["sidebar-search-filter", "duplicates", "export-and-metadata"]
  },
  {
    slug: "inspect-color-metadata",
    title: l("색상·메타데이터·검사 도구", "Color, metadata, and inspection tools"),
    summary: l("EXIF, 히스토그램, 컬러 픽커, 미니맵과 ROI로 이미지 정보를 확인합니다.", "Inspect images with EXIF, histogram, color picker, minimap, and ROI tools."),
    purpose: l("눈으로만 판단하기 어려운 노출과 색상, 촬영 정보, 픽셀 위치를 화면에서 확인할 수 있습니다. 필요한 도구만 켜서 이미지를 넓게 보세요.", "Supporting panels expose exposure, color, capture information, and pixel positions that are hard to judge visually. Turn on only the tools you need to preserve canvas space."),
    sections: [
      {
        heading: l("EXIF와 색상 정보 보기", "View EXIF and color information"),
        steps: [
          l("Tab을 눌러 EXIF 오버레이를 켭니다.", "Press Tab to turn on the EXIF overlay."),
          l("파일명·크기·해상도와 파일에 기록된 카메라, 렌즈, 노출 정보를 확인합니다.", "Review file name, size, resolution, and available camera, lens, and exposure information."),
          l("ICC 이름, 표시 색공간, 비트 깊이, 투명도 포함 여부와 색상 관리 상태를 확인합니다.", "Check the ICC name, display color space, bit depth, alpha status, and color-management state."),
          l("파일에 기록되지 않은 항목은 표시되지 않습니다.", "Fields that are not present in the file are normally omitted.")
        ]
      },
      {
        heading: l("히스토그램과 미니맵", "Histogram and minimap"),
        bullets: [
          l("히스토그램은 RGB 분포를 64개 구간으로 보여 주며 전체·R·G·B 채널을 바꿀 수 있습니다.", "The histogram shows RGB distribution in 64 bins and can switch between combined, R, G, and B channels."),
          l("평균, 중앙값, 표준편차를 확인하고 확장 보기를 사용할 수 있습니다.", "You can inspect mean, median, and standard deviation, with an expanded view."),
          l("회전한 이미지가 화면보다 크면 미니맵이 나타나 현재 보이는 영역을 표시합니다.", "The minimap appears when rotated content is larger than the canvas and shows the current viewport."),
          l("미니맵을 클릭하거나 끌어 확대된 이미지의 다른 위치로 이동합니다.", "Click or drag the minimap to pan to another part of an enlarged image.")
        ]
      },
      {
        heading: l("컬러 픽커", "Color Picker"),
        media: media(
          "inspect-color-metadata",
          1164,
          709,
          "AuroraViewer 컬러 픽커로 그라데이션 이미지의 픽셀을 샘플링하고 HEX, RGB, HSB 값을 확인하는 화면",
          "AuroraViewer Color Picker sampling a gradient image and displaying HEX, RGB, and HSB values",
          "컬러 픽커로 고른 픽셀의 색상 값과 최근에 기록한 색상을 한 화면에서 확인할 수 있습니다.",
          "Color Picker records a real canvas pixel and keeps its values and recent samples visible together."
        ),
        steps: [
          l("⌥P 또는 도구 메뉴에서 컬러 픽커를 켭니다.", "Press Option-P or use the Tools menu to enable Color Picker."),
          l("기본 설정에서는 Option-클릭으로 포인터 아래 픽셀을 기록합니다.", "By default, Option-click records the current pixel."),
          l("HEX, RGB, HSB 값을 확인하거나 클립보드에 복사합니다.", "Read the HEX, RGB, and HSB values, or copy them to the clipboard."),
          l("최근 샘플은 최대 10개까지 표시되며, 같은 값을 연속해서 기록하면 한 번만 저장됩니다.", "Review up to 10 recent samples, with consecutive duplicates removed.")
        ],
        note: l("이미지가 회전된 상태에서는 좌표가 모호해질 수 있어 컬러 픽커가 비활성화됩니다.", "Color Picker is disabled while an image is rotated because the source coordinate would be ambiguous.")
      },
      {
        heading: l("관심 영역(ROI) 선택과 확대", "Select and zoom a region of interest"),
        steps: [
          l("기본 설정에서 Command-드래그로 검사할 사각형을 만듭니다.", "By default, Command-drag to create a rectangular region of interest."),
          l("사각형 내부를 끌어 이동하거나 모서리로 크기를 바꿉니다.", "Drag inside the rectangle to move it, or use a corner to resize it."),
          l("ROI 확대를 실행해 선택 영역을 중심으로 봅니다.", "Use Zoom to ROI to center the selected region."),
          l("현재 이미지에 지정한 ROI는 내보내기 화면의 자르기 영역에 자동으로 반영됩니다.", "The ROI for the current image is carried into the export sheet as its crop area.")
        ]
      }
    ],
    related: ["view-and-zoom", "export-and-metadata", "shortcuts"]
  },
  {
    slug: "duplicates",
    title: l("중복·유사 이미지 찾기", "Find duplicate and similar images"),
    summary: l("완전히 같거나 비슷한 이미지와 RAW+JPEG 쌍을 찾아 함께 검토합니다.", "Find and review exact duplicates, likely same images, visual matches, and RAW+JPEG pairs."),
    purpose: l("중복/유사 이미지 찾기는 파일을 자동으로 삭제하지 않습니다. 어디에서 어떤 기준으로 찾을지 정한 뒤 결과를 비교하고, 정리할 파일을 직접 선택하세요.", "Duplicate scanning gathers candidates for review; it does not delete automatically. Choose a scope and matching methods, inspect the recommended keeper and evidence, then explicitly choose any file action."),
    sections: [
      {
        heading: l("검색 시작", "Start a scan"),
        steps: [
          l("전체 라이브러리, 현재 검색·필터 결과, 썸네일 바에서 선택한 이미지 또는 특정 폴더 중 검색할 곳을 정합니다.", "Choose the whole library, current filtered results, sidebar selection, or a specific folder as the scan scope."),
          l("완전 동일, 같은 이미지 추정, 시각 유사, RAW+JPEG 쌍 중 필요한 검사 종류를 선택합니다.", "Select Exact, Likely Same Image, Visual Similarity, and/or RAW+JPEG Pair matching."),
          l("엄격, 보통, 넓게 중 민감도를 고릅니다.", "Choose Strict, Normal, or Broad sensitivity."),
          l("검색을 시작하고 진행 상태와 일부 파일에서 발생한 오류를 확인합니다.", "Start the scan and monitor progress or partial failures."),
          l("결과 그룹을 열어 각 이미지와 유지 추천 이미지를 비교합니다.", "Open each result group and compare its items and recommended keeper.")
        ]
      },
      {
        heading: l("이미지 비교 방식", "Understand the matching methods"),
        bullets: [
          l("완전 동일: 파일 내용이 완전히 같은 이미지를 찾습니다.", "Exact: uses a full-file SHA-256 hash to find byte-identical files."),
          l("같은 이미지 추정: 이미지 크기와 화면 특징을 비교해 다시 저장된 유사본을 찾습니다.", "Likely Same Image: uses pixel dimensions and a 64-bit perceptual hash to narrow likely re-encodes."),
          l("시각 유사: Apple Vision 특징 거리로 비슷한 구도와 내용을 비교합니다.", "Visual Similarity: compares Apple Vision feature distance for similar composition and content."),
          l("RAW+JPEG: 같은 폴더에서 기본 파일명이 같은 카메라 원본과 현상본을 짝지어 봅니다.", "RAW+JPEG: pairs camera originals and rendered files with the same base name in the same folder.")
        ],
        note: l("‘AI 기반 유사 이미지 분류’는 설정에서 끌 수 있습니다. 민감도를 ‘넓게’로 정하면 결과가 많아져 직접 확인할 이미지도 늘어납니다.", "Vision-based classification can be disabled in Settings. Broad sensitivity returns more candidates and therefore requires more manual review.")
      },
      {
        heading: l("결과 검토와 정리", "Review and organize results"),
        media: media(
          "duplicates",
          1640,
          873,
          "AuroraViewer 중복 이미지 검토 창에서 완전히 같은 두 그룹과 유지 추천 이미지, 예상 절약 용량을 확인하는 화면",
          "AuroraViewer Review Duplicates window showing two exact-match groups, the recommended keeper, and estimated savings",
          "검색 결과에는 각 그룹의 분류 기준과 유지 추천 이미지가 표시되며, 정리할 파일은 사용자가 직접 선택합니다.",
          "Scan results explain each group and recommend a keeper, while cleanup targets remain an explicit user choice."
        ),
        bullets: [
          l("그룹 종류와 신뢰도, 이미지 수, 예상 절약 용량을 먼저 확인합니다.", "Review match type, confidence, item count, and estimated savings first."),
          l("유지 추천은 해상도와 파일 크기, RAW 여부를 바탕으로 고른 참고 정보입니다.", "The recommended keeper is guidance based on resolution, file size, and RAW status."),
          l("뷰어 또는 비교 모드에서 확대해 실제 차이를 확인합니다.", "Open the items in the viewer or Compare mode to inspect real differences."),
          l("필요하면 별점·태그를 먼저 남긴 뒤 목록 제거, 휴지통, 이동, 복사 중 원하는 작업을 선택합니다.", "Optionally add ratings or tags, then explicitly choose Remove, Trash, Move, or Copy.")
        ],
        warning: l("유지 추천은 파일 품질을 확정하는 판단이 아니며 어떤 파일도 자동으로 삭제하지 않습니다. 휴지통으로 옮기거나 이동하기 전에 원본, 편집본, RAW 파일의 관계를 직접 확인하세요.", "A recommended keeper is not an absolute quality judgment and is never deleted automatically. Verify original, edited, and RAW relationships before moving anything to Trash or another folder.")
      }
    ],
    related: ["compare-and-pages", "rate-tag-organize", "troubleshooting"]
  },
  {
    slug: "export-and-metadata",
    title: l("내보내기·자르기·\u200B메타데이터", "Export, crop, and metadata"),
    summary: l("원본 복사와 파일 형식 변환의 차이를 알아보고 자르기·크기·메타데이터를 설정합니다.", "Distinguish original-copy workflows from format conversion, then set crop, size, and metadata options."),
    purpose: l("원본을 그대로 다른 이름으로 저장하는 방법과 픽셀을 다시 처리해 다른 형식으로 내보내는 방법은 결과가 다릅니다. 원하는 결과에 맞는 방법을 먼저 선택하세요.", "Saving an original under another name and re-encoding pixels into another format produce different results. Choose the path that matches your intent."),
    sections: [
      {
        heading: l("현재 이미지를 변환해 내보내기", "Export the current image with conversion"),
        media: media(
          "export-and-metadata",
          1040,
          792,
          "AuroraViewer 내보내기 창에서 오로라 이미지 미리보기와 PNG 포맷, 품질, 자르기, 크기, 메타데이터 옵션을 확인하는 화면",
          "AuroraViewer Export window showing an aurora preview with PNG format, quality, crop, resize, and metadata options",
          "저장하기 전에 파일 형식과 자르기, 크기, EXIF·ICC 처리 방법을 한 화면에서 확인합니다.",
          "Review format, crop, size, and EXIF or ICC policy together before saving."
        ),
        steps: [
          l("파일 메뉴의 ‘내보내기’에서 ‘내보내기 시트 열기…’를 선택합니다.", "Open Export Current Image from the File menu."),
          l("PNG, JPEG, TIFF, HEIC, WebP 중 출력 형식을 선택합니다.", "Choose PNG, JPEG, TIFF, HEIC, or WebP."),
          l("손실 형식이라면 10–100% 품질을 정합니다.", "For a lossy format, choose 10–100% quality."),
          l("자르기, 크기, 메타데이터 처리 방법을 확인합니다.", "Review crop, size, and metadata policy."),
          l("저장 위치와 이름을 선택해 내보냅니다.", "Choose a destination and file name, then export.")
        ],
        note: l("선택한 형식으로 저장할 수 있는지는 현재 macOS의 ImageIO 지원에 따라 달라집니다.", "Availability of a particular output encoder depends on the ImageIO support in the current macOS version.")
      },
      {
        heading: l("자르기와 크기 변경", "Crop and resize"),
        bullets: [
          l("미리보기 위에서 영역을 그리거나 이동·크기 조절하고, X·Y·가로·세로 픽셀 값을 직접 입력할 수 있습니다.", "Draw, move, and resize the crop on the preview, or enter X, Y, width, and height in pixels."),
          l("같은 이미지에 관심 영역(ROI)을 지정했다면 자르기 영역에 자동으로 반영됩니다.", "An ROI for the same image is automatically carried into the crop area."),
          l("크기는 원본, 5–300% 비율, 명시한 가로·세로 픽셀 중 선택합니다.", "Choose original size, a 5–300% scale, or explicit width and height in pixels."),
          l("크기를 바꾸면 표시와 공유에 알맞은 8비트 sRGB로 처리됩니다. 고비트 심도나 광색역 원본을 보존하려는 용도에는 알맞지 않습니다.", "Resize uses an 8-bit sRGB path intended for display and sharing, not archival preservation of high-bit-depth or wide-gamut originals.")
        ]
      },
      {
        heading: l("메타데이터 처리 방법", "Metadata policies"),
        bullets: [
          l("메타데이터 유지: 원본의 첫 프레임에 있는 정보를 가능한 범위에서 보존합니다.", "Keep: copies the first frame's original ImageIO properties where possible."),
          l("위치 정보만 제거: 표준 GPS와 EXIF 위치 정보를 뺍니다.", "Remove Location: removes standard GPS and EXIF subject-location fields."),
          l("메타데이터 제거: 저장에 필요한 최소 정보만 남깁니다.", "Strip Metadata: starts with empty properties and writes only values required by the output."),
          l("형식을 바꿔 내보낸 이미지는 화면에서 보이는 방향으로 저장되며 방향 값은 1로 정리됩니다.", "Every converted output normalizes pixels to the visible orientation and records orientation as 1.")
        ],
        warning: l("‘위치 정보만 제거’는 알려진 표준 항목을 대상으로 합니다. 모든 제조사의 비공개 메타데이터에서 위치 정보가 완전히 사라진다고 보장하는 기능은 아닙니다.", "Remove Location targets known standard fields. It is not a forensic guarantee that no location trace remains in every manufacturer-private metadata field.")
      },
      {
        heading: l("원본 저장과 일괄 내보내기", "Save originals and batch export"),
        bullets: [
          l("‘다른 이름으로 저장…’은 현재 파일을 변환하지 않고 그대로 복사합니다.", "Save Original As copies the current file's bytes without conversion."),
          l("‘선택한 이미지 내보내기’는 선택한 이미지나 그룹, 검색·필터 결과의 원본을 대상 폴더로 복사합니다.", "Batch Export Originals copies originals from a selection, group, or filtered result to a destination folder."),
          l("같은 이름이 있으면 번호를 붙여 기존 파일을 덮어쓰지 않습니다.", "If a name already exists, a number is added instead of overwriting the file."),
          l("애니메이션을 다른 형식으로 내보내면 전체 프레임이 아니라 처음 표시된 한 장만 저장됩니다.", "Converted export of an animation saves the first displayed image as a single frame; it does not convert the whole animation.")
        ]
      },
      {
        heading: l("EXIF 편집", "Edit EXIF"),
        steps: [
          l("JPEG, TIFF 또는 HEIC 이미지 한 장을 선택합니다.", "Select one JPEG, TIFF, or HEIC image."),
          l("이미지 메뉴에서 ‘EXIF 수정’을 선택합니다.", "Open Edit EXIF from the Image menu."),
          l("설명, 작가, 저작권, 카메라·렌즈, 날짜, 노출 관련 항목을 편집합니다.", "Edit supported description, author, copyright, camera, lens, date, and exposure fields."),
          l("입력한 값의 형식을 확인하고 저장합니다. 값을 비워 저장하면 해당 항목이 삭제됩니다.", "Validate the value formats and save. An empty string removes that key."),
          l("필요하면 ‘마지막 작업 실행 취소’를 사용합니다. 편집 화면에서 바꾼 항목의 이전 값만 되돌립니다.", "If needed, use Undo Last Aurora Operation to write back the previous values exposed by the editor.")
        ],
        warning: l("EXIF 실행 취소는 원본 파일 전체를 백업해 복원하는 기능이 아닙니다. 편집한 항목의 이전 값만 되돌립니다.", "EXIF undo writes back the previous editable field values; it is not a byte-for-byte backup of the whole source file.")
      }
    ],
    related: ["inspect-color-metadata", "rate-tag-organize", "troubleshooting"]
  },
  {
    slug: "shortcuts",
    title: l("키보드 단축키", "Keyboard shortcuts"),
    summary: l("기본 단축키를 확인하고 작업 방식에 맞게 다시 지정합니다.", "Review the defaults and remap shortcuts to match your workflow."),
    purpose: l("이미지 이동과 확대, 평가는 키보드만으로 빠르게 처리할 수 있습니다. 아래는 버전 1.6.3의 기본값이며 설정에서 동작별로 바꿀 수 있습니다.", "Repeated actions such as navigation, zoom, and rating can stay on the keyboard. These are the version 1.6.3 defaults, and each action can be remapped in Settings."),
    sections: [
      {
        heading: l("자주 쓰는 기본 단축키", "Common default shortcuts"),
        shortcuts: [
          { action: l("파일 또는 폴더 추가", "Open"), key: "⌘O" },
          { action: l("이전 / 다음 이미지", "Previous / next image"), key: "← / →" },
          { action: l("창 맞춤 / 원본 크기 전환", "Toggle fit / original"), key: "⌘0" },
          { action: l("뷰 초기화", "Reset view"), key: "Space" },
          { action: l("확대 / 축소", "Zoom in / out"), key: "+ / −" },
          { action: l("200%", "200%"), key: "⌘⌥2" },
          { action: l("전체 화면", "Full screen"), key: "⌘Return" },
          { action: l("검색", "Search"), key: "⌘F" },
          { action: l("명령 검색 팔레트", "Command Palette"), key: "⌘⇧P" },
          { action: l("별점 없음 / 1~5점", "No rating / 1–5 stars"), key: "0 / 1–5" },
          { action: l("선택 / 제외", "Pick / Reject"), key: "P / X" },
          { action: l("Finder 색상 태그", "Finder color tags"), key: "⌃1–⌃7" },
          { action: l("EXIF 오버레이", "EXIF overlay"), key: "Tab" },
          { action: l("비교 모드", "Compare mode"), key: "⌥C" },
          { action: l("클린 뷰 모드", "Clean View"), key: "⌥Space" }
        ]
      },
      {
        heading: l("보기와 도구 기본값", "Viewing and tool defaults"),
        shortcuts: [
          { action: l("반시계 / 시계 방향 회전", "Rotate counterclockwise / clockwise"), key: "⌘[ / ⌘]" },
          { action: l("창 크기에 맞추기 / 원본 크기로 보기 / 비율 유지", "Fit / Original / Preserve Scale"), key: "⌥1 / ⌥2 / ⌥3" },
          { action: l("썸네일 바", "Sidebar"), key: "⌥S" },
          { action: l("썸네일 모드", "Thumbnail mode"), key: "⌥T" },
          { action: l("하단 슬라이더", "Bottom slider"), key: "⌘B" },
          { action: l("미니맵", "Minimap"), key: "⌘M" },
          { action: l("히스토그램", "Histogram"), key: "⌥F" },
          { action: l("픽셀 그리드", "Pixel grid"), key: "⌥G" },
          { action: l("컬러 픽커", "Color Picker"), key: "⌥P" },
          { action: l("안티에일리어싱", "Antialiasing"), key: "⌥A" }
        ]
      },
      {
        heading: l("단축키 다시 지정", "Remap a shortcut"),
        steps: [
          l("AuroraViewer 설정을 열고 단축키 페이지로 이동합니다.", "Open AuroraViewer Settings and go to Shortcuts."),
          l("카테고리 또는 검색으로 동작을 찾습니다.", "Find an action by category or search."),
          l("새 키와 Command, Option, Control, Shift 조합을 입력합니다.", "Record a new key and Command, Option, Control, and Shift combination."),
          l("메뉴에 새 단축키가 표시되고 이미지 화면에서 동작하는지 확인합니다.", "Confirm that the new shortcut appears in menus and works in the canvas."),
          l("문제가 있으면 해당 동작 또는 전체 단축키를 기본값으로 복원합니다.", "If needed, restore that action or all shortcuts to their defaults.")
        ],
        note: l("⌘H처럼 macOS 표준 메뉴와 충돌하는 조합은 의도대로 동작하지 않을 수 있습니다.", "Combinations that conflict with standard macOS menus, such as Command-H, may not behave as intended.")
      },
      {
        heading: l("명령 검색 팔레트", "Command Palette"),
        steps: [
          l("⌘⇧P를 눌러 명령 검색 팔레트를 엽니다.", "Press Command-Shift-P to open Command Palette."),
          l("명령 이름이나 카테고리를 입력합니다.", "Type an action name or category."),
          l("표시된 단축키를 확인하거나 Return을 눌러 첫 번째 결과를 실행합니다.", "Review the displayed shortcut, or press Return to run the first result."),
          l("Esc를 눌러 닫고 이미지 화면으로 돌아갑니다.", "Press Escape to close it and return to the canvas.")
        ]
      }
    ],
    related: ["getting-started", "view-and-zoom", "settings-sessions-windows"]
  },
  {
    slug: "settings-sessions-windows",
    title: l("설정·세션·여러 창", "Settings, sessions, and windows"),
    summary: l("보기·입력·단축키를 설정하고 열어 둔 작업과 여러 뷰어 창을 관리합니다.", "Adjust viewing, input, and shortcut preferences, then manage sessions and multiple viewers."),
    purpose: l("환경 설정은 모든 뷰어 창에 함께 적용됩니다. 세션에는 각 창에서 열어 둔 파일과 선택, 검색, 이미지 화면 상태가 저장됩니다. 이 차이를 알아 두면 이전 작업을 복원하거나 여러 창을 쓸 때 동작을 쉽게 예상할 수 있습니다.", "Settings are preferences shared across viewers. Sessions preserve each window's library, selection, search, and canvas state. Knowing the difference makes restore and multi-window behavior predictable."),
    sections: [
      {
        heading: l("설정 페이지", "Settings pages"),
        media: media(
          "settings-sessions-windows",
          1120,
          788,
          "AuroraViewer 인터페이스 설정에서 언어, 패널 불투명도, 썸네일 바, 평가 도구와 확대율 박스 표시를 조정하는 화면",
          "AuroraViewer Interface settings for language, panel opacity, thumbnail bar, rating controls, and zoom box visibility",
          "설정 왼쪽에서 항목을 고른 뒤 각 패널과 화면 정보의 표시 방식을 조정합니다.",
          "Choose a category in the Settings sidebar, then adjust panel and overlay behavior in the same window."
        ),
        bullets: [
          l("뷰어: 배율, 안티에일리어싱, 픽셀 그리드, 투명 영역 배경, 유사 이미지, 두 장 보기, 슬라이드쇼, 세션·캐시를 설정합니다.", "Viewer: configure zoom, antialiasing, pixel grid, transparency, visual similarity, two-page view, slideshow, sessions, and cache."),
          l("인터페이스: 앱 언어, 썸네일 바·평가 도구·화면 정보·타이틀 바 표시 방식을 정합니다.", "Interface: choose app language and how the sidebar, rating controls, overlays, and title bar appear."),
          l("마우스 입력: 휠 탐색·확대, 전체 화면 클릭, 컬러 샘플, ROI 드래그 조합을 바꿉니다.", "Mouse Input: remap wheel navigation and zoom, full-screen click, color sampling, and ROI drag combinations."),
          l("단축키·외부 앱·기본 앱·지원: 키 동작과 등록한 앱의 순서, Finder 연결, 도움말을 관리합니다.", "Shortcuts, External Apps, Default Apps, and Support: manage key actions, registered app order, Finder integration, and help.")
        ]
      },
      {
        heading: l("마지막 세션 복원", "Restore the last session"),
        bullets: [
          l("세션에는 가져온 위치별 그룹, 선택한 이미지, 검색·정렬·필터, 확대·이동·회전, 비교 화면 상태가 포함됩니다.", "A session includes source groups, selection, search, sorting, filters, zoom, pan, rotation, and Compare slots."),
          l("자동 복원을 켜면 Finder에서 새 파일을 열지 않고 앱을 실행했을 때 저장된 창이 바로 열립니다.", "With automatic restore enabled, saved windows reopen when the app launches without external input."),
          l("자동 복원이 꺼져 있으면 저장된 세션이 있을 때 복원 여부를 묻습니다.", "With automatic restore disabled, the app asks before restoring a saved session."),
          l("Finder에서 파일을 열어 앱을 실행하면 해당 파일을 먼저 열고 이전 세션은 복원하지 않습니다.", "Launching from a file in Finder prioritizes the new input and skips the previous session bootstrap."),
          l("사라졌거나 권한이 없는 파일은 건너뛰고 복원하지 못한 개수를 알립니다.", "Missing or inaccessible files are skipped, and the app reports how many could not be restored.")
        ]
      },
      {
        heading: l("여러 뷰어 사용", "Use multiple viewers"),
        steps: [
          l("파일 메뉴에서 빈 새 뷰어를 열거나 현재 선택·라이브러리를 새 뷰어로 보냅니다.", "Open an empty viewer from the File menu, or send the current selection or library to a new viewer."),
          l("필요하면 선택한 이미지를 각각 별도 뷰어로 엽니다.", "If needed, open selected images in separate viewers."),
          l("윈도우 메뉴에서 보이는 뷰어를 격자로 정렬하거나 위치 편집을 시작합니다.", "Use the Window menu to arrange visible viewers in a grid or start editing window positions."),
          l("배치가 마음에 들지 않으면 이전 뷰어 배치로 되돌립니다.", "Restore the previous viewer arrangement if the layout is not useful."),
          l("모든 창의 썸네일 바를 한 번에 펼치거나 접고, 고정하거나 자동으로 숨길 수 있습니다.", "You can expand, collapse, pin, or auto-hide the sidebars across all viewers at once.")
        ],
        note: l("창 격자 정렬은 화면에 보이고 최소화되지 않았으며 전체 화면이 아닌 뷰어가 2개 이상일 때 사용할 수 있습니다.", "Grid arrangement requires at least two visible viewers that are not minimized or full screen.")
      },
      {
        heading: l("캐시와 Mac에 저장되는 정보", "Cache and local state"),
        bullets: [
          l("이미지 미리보기와 압축 해제 결과, 중복 이미지 분석 결과는 필요할 때 다시 만들 수 있는 임시 데이터입니다.", "Image previews, archive extraction results, and duplicate-analysis results are rebuildable local derived data."),
          l("종료 시 일반 캐시 전체 삭제를 켜거나 설정에서 즉시 모든 캐시를 비울 수 있습니다.", "You can delete general caches on exit or clear all caches immediately from Settings."),
          l("암호 압축 임시 추출물은 일반 캐시 설정과 관계없이 항상 정리됩니다.", "Temporary extraction from password-protected archives is always cleaned up regardless of the general cache setting."),
          l("캐시를 비워도 원본 이미지 파일은 삭제되지 않습니다.", "Clearing cache does not delete original image files.")
        ]
      }
    ],
    related: ["shortcuts", "open-and-import", "troubleshooting"]
  },
  {
    slug: "troubleshooting",
    title: l("문제 해결과 제한", "Troubleshooting and limitations"),
    summary: l("파일 열기, 접근 권한, 압축 파일, 표시 속도, 내보내기 문제를 순서대로 확인합니다.", "Work through image opening, permissions, archives, rendering, and export issues."),
    purpose: l("이미지를 열 수 있는지는 파일 자체의 형식과 macOS 지원, 파일 접근 권한, 압축 파일 제한에 따라 달라질 수 있습니다. 아래 항목을 순서대로 확인해 원인을 찾아보세요.", "Most issues relate to codec support in the file, sandbox access, archive safety limits, or system services available in the current macOS version. Use the checks below to narrow the cause."),
    sections: [
      {
        heading: l("이미지가 열리지 않을 때", "When an image does not open"),
        steps: [
          l("파일 확장자가 지원하는 파일 형식에 포함되는지 확인합니다.", "Confirm that the file extension is in the supported input list."),
          l("같은 형식의 다른 파일이 열리는지 확인해 파일 자체 문제인지 구분합니다.", "Try another file of the same format to distinguish a file-specific issue."),
          l("Finder 또는 macOS 미리보기에서 해당 파일을 읽을 수 있는지 확인합니다.", "Check whether Finder or Preview in macOS can read the file."),
          l("AI·EPS 같은 문서는 포함 미리보기, Quick Look 또는 선택적 Ghostscript에 따라 결과가 달라질 수 있습니다.", "For documents such as AI or EPS, results can depend on embedded previews, Quick Look, or optional Ghostscript support."),
          l("문제가 계속되면 파일 형식과 macOS·AuroraViewer 버전을 적어 지원 페이지로 제보합니다.", "If the issue persists, report it through Support with the file type and macOS and AuroraViewer versions.")
        ]
      },
      {
        heading: l("폴더·태그·파일 작업 권한", "Folder, tag, and file-operation permissions"),
        steps: [
          l("권한 안내가 나타나면 작업 대상 파일이 들어 있는 상위 폴더를 선택합니다.", "When prompted, select the parent folder that contains the files you are working with."),
          l("Finder 태그, 이름 변경, 이동처럼 파일을 바꾸는 작업에는 이미지가 들어 있는 폴더의 쓰기 권한이 필요할 수 있습니다.", "Operations that write, such as Finder tags, rename, and move, may need broader approval than viewing."),
          l("파일이 외부에서 이동되거나 삭제되었는지 Finder에서 확인합니다.", "Use Finder to check whether the file was moved or deleted outside AuroraViewer."),
          l("복원된 세션에서 빠진 파일은 위치를 다시 열어 라이브러리에 추가합니다.", "For files skipped during session restore, open their current location and add them to the library again.")
        ]
      },
      {
        heading: l("압축 파일이 일부만 열릴 때", "When an archive opens only partially"),
        bullets: [
          l("지원 이미지가 아닌 항목은 추출하지 않습니다.", "Entries that are not supported images are not extracted."),
          l("압축 안의 압축 파일은 재귀적으로 열지 않습니다.", "An archive nested inside another archive is not opened recursively."),
          l("압축 파일이 20,000개 항목, 이미지 한 장당 256MB, 전체 1GB 제한을 넘으면 일부 파일을 열지 못할 수 있습니다.", "Items can fail when the archive exceeds 20,000 entries, 256 MB per image, or 1 GB total extraction."),
          l("암호는 3회까지 입력할 수 있습니다. 취소하거나 실패해도 열 수 있는 다른 파일은 계속 불러옵니다.", "Password entry allows up to three attempts. If you cancel or it fails, other usable input continues processing.")
        ]
      },
      {
        heading: l("표시가 느리거나 예상과 다를 때", "When display is slow or unexpected"),
        bullets: [
          l("큰 이미지는 저비용 미리보기를 먼저 표시한 뒤 화면이 안정되면 고화질과 보이는 영역 타일을 준비합니다.", "Large images show a lower-cost preview first, then prepare higher quality and visible-region tiles after the view settles."),
          l("GIF·WebP·APNG 애니메이션, 투명 이미지, 픽셀 그리드는 일반 정지 이미지와 표시 방식이 달라 속도 차이가 날 수 있습니다.", "GIF, WebP, and APNG animation, transparent images, and pixel grid use a different rendering path from static opaque images."),
          l("캐시 문제가 의심되면 설정에서 모든 캐시 비우기를 실행한 뒤 파일을 다시 엽니다.", "If cache appears stale, clear all caches in Settings and reopen the file."),
          l("macOS의 ‘동작 줄이기’를 켜면 빈 라이브러리의 Aurora 효과가 더 느리게 움직입니다.", "With Reduce Motion enabled, the empty-library Aurora effect updates less frequently by design.")
        ]
      },
      {
        heading: l("내보내기·외부 앱 문제", "Export and external-app issues"),
        bullets: [
          l("선택한 파일 형식으로 내보낼 수 있는지는 현재 macOS의 ImageIO 지원에 따라 달라집니다.", "The selected output encoder must be available through ImageIO in the current macOS version."),
          l("등록한 외부 앱이 이동되었다면 설정에서 앱을 다시 추가합니다.", "If a registered external app moved, add it again in Settings."),
          l("기본 이미지 앱은 설정의 ‘기본 앱’에서 파일 형식별로 등록합니다. 등록이 반영되지 않으면 Finder의 ‘정보 가져오기 > 다음으로 열기 > 모두 변경’을 사용합니다.", "For the Mac App Store build, change the default image app in Finder using Get Info > Open with > Change All."),
          l("애니메이션 변환 내보내기는 전체 프레임이 아니라 단일 이미지를 만드는 기능입니다.", "Converted export of an animation creates one image, not a full multi-frame export.")
        ]
      },
      {
        heading: l("문제 제보", "Report an issue"),
        bullets: [
          l("macOS 버전과 AuroraViewer 버전", "macOS version and AuroraViewer version"),
          l("문제가 발생한 형식과 파일이 폴더·압축 중 어디에서 열렸는지", "The affected format and whether it was opened from a folder or archive"),
          l("문제를 재현하는 가장 짧은 작업 순서", "The shortest steps that reproduce the issue"),
          l("개인정보를 가린 오류 메시지나 화면 캡처", "An error message or screenshot with personal information removed")
        ],
        note: l("지원 페이지의 GitHub Issues 링크에서 새 제보를 작성할 수 있습니다. 저작권 또는 개인정보가 있는 원본 이미지는 공개 이슈에 첨부하지 마세요.", "Use the GitHub Issues link on the Support page to create a report. Do not attach source images containing copyrighted or personal information to a public issue.")
      }
    ],
    related: ["open-and-import", "export-and-metadata", "settings-sessions-windows"]
  }
];

export function text(value: LocalizedText, locale: Locale) {
  return value[locale];
}

export function getManualTopic(slug: string) {
  return manualTopics.find((topic) => topic.slug === slug);
}
