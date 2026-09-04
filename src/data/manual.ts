import type { Locale } from "./product";

type LocalizedText = Record<Locale, string>;

export interface ManualSection {
  heading: LocalizedText;
  intro?: LocalizedText;
  steps?: LocalizedText[];
  bullets?: LocalizedText[];
  note?: LocalizedText;
  warning?: LocalizedText;
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

export const manualTopics: ManualTopic[] = [
  {
    slug: "getting-started",
    title: l("시작하기", "Getting started"),
    summary: l("설치 후 첫 라이브러리를 열고 기본 검토 흐름을 익힙니다.", "Install AuroraViewer, open your first library, and learn the basic review flow."),
    purpose: l("AuroraViewer는 이미지를 한 장씩 여는 뷰어이면서 여러 폴더와 압축 파일을 한 작업 목록으로 묶는 검토 도구입니다. 첫 라이브러리를 만든 뒤 이동, 확대, 평가 순서로 시작해 보세요.", "AuroraViewer is both a focused image viewer and a review tool that combines folders and archives into one working library. Start by building a library, navigating it, then adding review decisions."),
    sections: [
      {
        heading: l("첫 라이브러리 열기", "Open your first library"),
        steps: [
          l("Mac App Store에서 AuroraViewer를 설치하고 실행합니다.", "Install AuroraViewer from the Mac App Store and launch it."),
          l("파일 메뉴에서 ‘파일 열기’를 선택하거나 ⌘O를 누릅니다.", "Choose File > Open, or press Command-O."),
          l("이미지, 폴더 또는 ZIP·RAR·7z 압축 파일을 하나 이상 선택합니다.", "Select one or more images, folders, or ZIP, RAR, or 7z archives."),
          l("사이드바에서 그룹과 썸네일을 확인한 뒤 첫 이미지를 선택합니다.", "Review the source groups and thumbnails in the sidebar, then select an image.")
        ],
        note: l("처음 여는 폴더에는 macOS 파일 접근 승인이 필요할 수 있습니다. AuroraViewer는 사용자가 승인한 위치에만 접근합니다.", "macOS may ask you to approve access to a folder the first time you open it. AuroraViewer only accesses locations you approve.")
      },
      {
        heading: l("기본 검토 흐름", "A simple review flow"),
        steps: [
          l("←와 →로 이전·다음 이미지로 이동합니다.", "Use Left Arrow and Right Arrow to move between images."),
          l("+와 −로 확대·축소하고, ⌘0으로 창 맞춤과 원본 크기를 전환합니다.", "Zoom with Plus and Minus, and press Command-0 to switch between fit and original size."),
          l("0–5로 별점을 기록하거나 P로 Pick, X로 Reject를 표시합니다.", "Record a 0–5 star rating, or mark Pick with P and Reject with X."),
          l("필요한 이미지는 Finder 태그, 비교 모드 또는 내보내기로 이어갑니다.", "Continue with Finder tags, Compare mode, or export for the images you want to keep working with.")
        ]
      },
      {
        heading: l("화면의 주요 영역", "Know the main areas"),
        bullets: [
          l("사이드바: 입력 소스, 검색·정렬·필터, 다중 선택을 관리합니다.", "Sidebar: manage input sources, search, sorting, filters, and multiple selection."),
          l("캔버스: 현재 이미지, 두 장 보기 또는 비교 슬롯을 표시합니다.", "Canvas: displays the current image, a two-page spread, or Compare slots."),
          l("상단 도구: 별점, Pick/Reject, Finder 태그와 보기 상태를 다룹니다.", "Top controls: manage ratings, Pick/Reject, Finder tags, and view state."),
          l("하단 슬라이더와 오버레이: 위치 이동, 배율, 파일 정보, 미니맵과 히스토그램을 보조합니다.", "Bottom slider and overlays: help with navigation, zoom, file information, the minimap, and histogram.")
        ]
      }
    ],
    related: ["open-and-import", "browse-and-navigate", "shortcuts"]
  },
  {
    slug: "open-and-import",
    title: l("이미지·폴더·압축 열기", "Open images, folders, and archives"),
    summary: l("여러 입력 경로와 폴더·압축 파일의 처리 방식을 이해합니다.", "Understand the available input paths and how folders and archives are handled."),
    purpose: l("직접 고른 이미지뿐 아니라 폴더 트리와 압축 파일 속 이미지도 같은 라이브러리에서 볼 수 있습니다. 원본 위치별 그룹이 유지되므로 서로 다른 소스를 함께 검토하기 좋습니다.", "You can review selected images, folder trees, and images inside archives in the same library. Source groups preserve where each set came from."),
    sections: [
      {
        heading: l("현재 뷰어에 추가하기", "Add sources to the current viewer"),
        steps: [
          l("파일 메뉴에서 입력 추가 명령을 선택하거나 ⌘O를 누릅니다.", "Choose the add/open command from the File menu, or press Command-O."),
          l("여러 이미지, 폴더, 압축 파일을 함께 선택합니다.", "Select multiple images, folders, and archives together."),
          l("스캔이 끝나면 사이드바의 소스 그룹을 펼쳐 결과를 확인합니다.", "When scanning finishes, expand the source groups in the sidebar to review the results."),
          l("추가 입력이 필요하면 같은 명령이나 창으로 드래그 앤 드롭을 반복합니다.", "Repeat the command or drag more sources into the window when you need to add input.")
        ],
        note: l("Finder에서 파일을 ‘다음으로 열기’로 실행했을 때 새 뷰어를 열지 현재 뷰어에 추가할지는 설정에서 바꿀 수 있습니다.", "In Settings, you can choose whether files opened from Finder use a new viewer or the current viewer.")
      },
      {
        heading: l("폴더와 압축 파일이 그룹이 되는 방식", "How folders and archives become groups"),
        bullets: [
          l("폴더는 하위 폴더까지 재귀 탐색하며, 각 경로의 지원 이미지를 소스 그룹으로 정리합니다.", "Folders are scanned recursively, and supported images are arranged into source groups by path."),
          l("ZIP, RAR, 7z는 지원 이미지 항목만 안전한 임시 또는 캐시 위치에 추출합니다.", "ZIP, RAR, and 7z archives extract only supported image entries to a protected temporary or cache location."),
          l("압축 파일 안의 또 다른 압축 파일은 현재 다시 열지 않습니다.", "Archives nested inside another archive are not opened recursively."),
          l("숨김 항목은 제외하고 이름은 자연 정렬하며, 같은 URL은 중복으로 넣지 않습니다.", "Hidden items are skipped, names use natural sorting, and duplicate URLs are removed.")
        ]
      },
      {
        heading: l("지원 입력과 조건", "Supported input and conditions"),
        intro: l("스캔 대상에는 일반 이미지, 주요 RAW, 벡터·문서 형식이 포함됩니다.", "The scanner recognizes common images, major camera RAW formats, and vector or document formats."),
        bullets: [
          l("일반·고효율: BMP, JPEG, GIF, PNG, WebP, TIFF, HEIC, HEIF, AVIF, APNG", "Common and high-efficiency: BMP, JPEG, GIF, PNG, WebP, TIFF, HEIC, HEIF, AVIF, APNG"),
          l("전문·그래픽: SVG, PSD, DDS, JPEG 2000, TGA, PBM, PGM, PPM", "Professional and graphics: SVG, PSD, DDS, JPEG 2000, TGA, PBM, PGM, PPM"),
          l("RAW: DNG, CR2, CR3, CRW, NEF, NRW, ORF, RW2, PEF, ARW, SR2, RAF", "RAW: DNG, CR2, CR3, CRW, NEF, NRW, ORF, RW2, PEF, ARW, SR2, RAF"),
          l("문서·벡터: AI, EPS, EPSF, PDF", "Documents and vectors: AI, EPS, EPSF, PDF")
        ],
        note: l("확장자가 지원 목록에 있어도 실제 디코딩은 파일 내부 구조와 macOS ImageIO·Quick Look, 선택적으로 설치된 Ghostscript 지원에 따라 달라질 수 있습니다.", "A recognized extension does not guarantee a successful decode. Results depend on file contents, macOS ImageIO and Quick Look, and optionally installed Ghostscript support.")
      },
      {
        heading: l("암호 압축과 안전 제한", "Password-protected archives and safety limits"),
        bullets: [
          l("암호 입력은 최대 3회까지 다시 시도할 수 있습니다.", "You can retry an archive password up to three times."),
          l("한 압축에서 최대 20,000개 항목, 이미지 한 파일 256MB, 총 추출 1GB 제한을 적용합니다.", "A single archive is limited to 20,000 entries, 256 MB per image, and 1 GB total extraction."),
          l("절대 경로와 상위 폴더로 빠지는 경로는 거부합니다.", "Absolute paths and paths that escape the destination are rejected."),
          l("암호로 연 압축의 추출물은 일반 캐시 설정과 관계없이 종료 시 정리합니다.", "Files extracted from a password-protected archive are cleaned up on exit regardless of the general cache preference.")
        ]
      }
    ],
    related: ["getting-started", "sidebar-search-filter", "troubleshooting"]
  },
  {
    slug: "browse-and-navigate",
    title: l("탐색과 이동", "Browse and navigate"),
    summary: l("키보드, 슬라이더, 사이드바를 이용해 라이브러리를 빠르게 이동합니다.", "Move quickly through a library with the keyboard, slider, and sidebar."),
    purpose: l("큰 라이브러리에서는 현재 위치를 잃지 않고 다음 후보로 넘어가는 것이 중요합니다. AuroraViewer는 선택과 스크롤 위치를 유지하며 목록 변화 뒤에도 같은 파일을 가능한 한 계속 가리킵니다.", "In a large library, staying oriented while moving to the next candidate matters. AuroraViewer preserves selection and scroll position where possible, even after the list changes."),
    sections: [
      {
        heading: l("이전·다음 이미지로 이동", "Move to the previous or next image"),
        steps: [
          l("캔버스가 활성화된 상태에서 ← 또는 →를 누릅니다.", "With the canvas active, press Left Arrow or Right Arrow."),
          l("멀리 이동하려면 하단 슬라이더의 손잡이를 끌거나 원하는 눈금을 선택합니다.", "To move farther, drag the bottom slider or select a point on it."),
          l("특정 항목으로 가려면 사이드바 행이나 썸네일을 선택합니다.", "To jump to a specific item, select its row or thumbnail in the sidebar."),
          l("휠 이동을 선호하면 설정의 마우스 입력에서 휠 탐색과 보조 키를 조정합니다.", "If you prefer wheel navigation, adjust wheel navigation and its modifier in Mouse Input settings.")
        ]
      },
      {
        heading: l("여러 항목 선택", "Select multiple items"),
        bullets: [
          l("Command-클릭으로 개별 항목을 더하거나 뺍니다.", "Command-click to add or remove individual items."),
          l("Shift-클릭으로 기준 항목과 클릭한 항목 사이 범위를 선택합니다.", "Shift-click to select a range from the anchor item."),
          l("다중 선택은 비교, 평가·태그 일괄 적용, 이동·복사, 중복 검사 범위로 이어집니다.", "Multiple selection can feed Compare mode, batch ratings and tags, move or copy, and duplicate scanning."),
          l("파일 작업 전에 선택 개수와 범위를 다시 확인합니다.", "Review the selected count and scope before a file operation.")
        ]
      },
      {
        heading: l("그룹으로 방향 유지하기", "Stay oriented with groups"),
        bullets: [
          l("각 입력 소스는 사이드바 그룹으로 표시되며 접기·펼치기를 지원합니다.", "Each input source appears as a collapsible sidebar group."),
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
    summary: l("화면 맞춤, 원본 크기, 회전과 보조 오버레이를 사용합니다.", "Use fit, original size, rotation, and supporting overlays."),
    purpose: l("사진 전체 구도를 빠르게 확인할 때와 원본 픽셀을 검사할 때 필요한 배율은 다릅니다. 보기 모드를 전환하고 커서 기준 확대와 팬으로 세부를 확인하세요.", "A composition overview and a pixel-level inspection need different zoom levels. Switch viewing modes, then use pointer-centered zoom and pan for detail."),
    sections: [
      {
        heading: l("배율 모드 선택", "Choose a zoom mode"),
        bullets: [
          l("창 크기에 맞추기: 이미지 전체가 현재 캔버스 안에 들어오도록 표시합니다.", "Fit to Window: fits the full image within the current canvas."),
          l("원본 크기: 소스 픽셀과 화면 point의 기본 1:1 기준으로 봅니다.", "Original Size: uses the default 1:1 relationship between source pixels and screen points."),
          l("200%: 픽셀 구조를 더 가까이 확인하는 지정 배율입니다.", "200%: a fixed zoom level for closer pixel inspection."),
          l("비율 유지: 다음 이미지로 넘어가도 현재 표시 배율을 유지합니다.", "Preserve Scale: keeps the current display scale when you change images.")
        ],
        shortcuts: [
          { action: l("창 맞춤/원본 전환", "Toggle fit/original"), key: "⌘0" },
          { action: l("창 맞춤", "Fit to Window"), key: "⌥1" },
          { action: l("원본 크기", "Original Size"), key: "⌥2" },
          { action: l("비율 유지", "Preserve Scale"), key: "⌥3" },
          { action: l("200%", "200%"), key: "⌘⌥2" }
        ]
      },
      {
        heading: l("확대, 팬, 회전", "Zoom, pan, and rotate"),
        steps: [
          l("+ 또는 −를 눌러 단계적으로 확대·축소합니다.", "Press Plus or Minus to zoom in steps."),
          l("포인터가 있는 지점을 중심으로 확대하려면 설정된 휠 확대 동작을 사용합니다. 기본은 Command-휠입니다.", "Use the configured wheel zoom to zoom around the pointer. The default is Command-wheel."),
          l("확대된 이미지를 드래그하거나 미니맵을 이용해 이동합니다.", "Drag the enlarged image or use the minimap to pan."),
          l("⌘[ 또는 ⌘]로 90도 회전하고 Space로 배율·팬·회전을 초기화합니다.", "Rotate 90 degrees with Command-[ or Command-], and press Space to reset zoom, pan, and rotation.")
        ]
      },
      {
        heading: l("전체 화면과 클린 뷰", "Full screen and Clean View"),
        bullets: [
          l("⌘Return은 전체 화면을 전환합니다.", "Command-Return toggles full screen."),
          l("⌥Space는 클린 뷰를 전환해 조작 패널과 오버레이를 최소화합니다.", "Option-Space toggles Clean View, minimizing controls and overlays."),
          l("사이드바, 하단 슬라이더, 미니맵, 히스토그램, EXIF 오버레이는 각각 켜고 끌 수 있습니다.", "The sidebar, bottom slider, minimap, histogram, and EXIF overlay can each be toggled."),
          l("자동 숨김을 사용하면 포인터 상호작용 중에만 필요한 컨트롤을 볼 수 있습니다.", "Auto-hide can reveal controls only while you interact with them.")
        ]
      },
      {
        heading: l("픽셀과 색을 정확히 보기", "Inspect pixels and color"),
        bullets: [
          l("안티에일리어싱은 끄기, 균형, 고품질, 최고품질 중 선택할 수 있습니다.", "Antialiasing offers Off, Balanced, High, and Maximum quality."),
          l("픽셀 그리드는 픽셀 하나가 충분히 크게 보일 때 경계를 표시합니다.", "The pixel grid appears when each source pixel is large enough on screen."),
          l("투명 배경은 시스템, 흰색, 회색, 검정, 체커보드 등에서 선택합니다.", "For transparent images, choose System, white, gray, black, or checkerboard backgrounds."),
          l("큰 이미지는 먼저 화면에 맞는 미리보기를 보여 주고, 상호작용이 멈추면 필요한 세부를 단계적으로 높입니다.", "Large images show a viewport-sized preview first, then progressively refine detail after interaction settles.")
        ]
      }
    ],
    related: ["browse-and-navigate", "inspect-color-metadata", "compare-and-pages"]
  },
  {
    slug: "sidebar-search-filter",
    title: l("사이드바·검색·정렬·필터", "Sidebar, search, sort, and filters"),
    summary: l("큰 라이브러리에서 원하는 이미지 집합을 좁히고 일괄 작업 범위를 만듭니다.", "Narrow a large library and define the scope for batch actions."),
    purpose: l("검색과 필터 결과는 화면 표시뿐 아니라 평가 일괄 적용과 중복 검사 범위에도 사용됩니다. 먼저 목록을 좁힌 뒤 결과 개수를 확인하세요.", "Search and filter results affect more than the visible list: they can also define the scope of batch ratings and duplicate scans. Narrow the list, then confirm its count."),
    sections: [
      {
        heading: l("파일명과 확장자로 검색", "Search by file name or extension"),
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
          l("선택 상태: Pick, Reject, 미지정 상태를 조합합니다.", "Selection status: combine Pick, Reject, and Unmarked."),
          l("확장자와 Finder 태그: 라이브러리에서 실제 발견된 값으로 좁힙니다.", "Extension and Finder tag: narrow using values actually present in the library."),
          l("애니메이션만: 프레임이 여러 개인 GIF, WebP, APNG 등을 좁혀 봅니다.", "Animated only: narrow to multi-frame GIF, WebP, APNG, and similar items.")
        ]
      },
      {
        heading: l("필터 결과에 일괄 적용", "Apply an action to filtered results"),
        steps: [
          l("검색·정렬·필터를 적용하고 결과 개수를 확인합니다.", "Apply search, sorting, and filters, then confirm the result count."),
          l("평가 또는 Finder 태그의 적용 범위에서 현재 필터 결과를 선택합니다.", "Choose the current filtered results as the scope for a rating or Finder tag action."),
          l("변경 내용을 확인한 뒤 실행합니다.", "Review the intended change, then run it."),
          l("잘못 적용했다면 최근 Aurora 작업 실행 취소를 사용합니다.", "If the action was wrong, use Undo Last Aurora Operation.")
        ],
        warning: l("필터 결과는 파일 이동·복사나 중복 검사에도 넓은 범위로 사용될 수 있습니다. 파일 시스템 작업 전에는 선택 범위를 한 번 더 확인하세요.", "Filtered results can also define a broad scope for move, copy, or duplicate scans. Check the scope again before a file-system operation.")
      }
    ],
    related: ["browse-and-navigate", "rate-tag-organize", "duplicates"]
  },
  {
    slug: "compare-and-pages",
    title: l("비교와 두 장 보기", "Compare and two-page viewing"),
    summary: l("후보 이미지를 2–4개 비교하거나 인접한 두 페이지를 함께 봅니다.", "Compare two to four candidates, or read two adjacent pages as a spread."),
    purpose: l("비교 모드는 임의의 후보 사이 차이를 찾는 도구이고, 두 장 보기는 라이브러리 순서의 인접 페이지를 읽는 도구입니다. 목적에 맞는 모드를 선택하세요.", "Compare mode finds differences between arbitrary candidates. Two-page viewing reads adjacent items in library order. Choose the mode that matches the task."),
    sections: [
      {
        heading: l("선택한 이미지를 비교하기", "Compare selected images"),
        steps: [
          l("사이드바에서 비교할 이미지를 1–4개 선택합니다.", "Select one to four images in the sidebar."),
          l("비교 모드를 켭니다. 선택 개수에 맞춰 2·3·4슬롯 레이아웃이 정해집니다.", "Turn on Compare mode. A two-, three-, or four-slot layout is chosen for the selection."),
          l("빈 슬롯이 있으면 슬롯 메뉴나 드래그 앤 드롭으로 이미지를 넣습니다.", "Fill empty slots using the slot menu or drag and drop."),
          l("한 슬롯을 클릭해 활성화한 뒤 평가나 태그를 적용합니다.", "Click a slot to activate it before applying ratings or tags.")
        ],
        note: l("이미지를 한 장만 선택해도 2슬롯으로 시작하므로 다른 후보를 바로 추가할 수 있습니다.", "Selecting one image still opens a two-slot layout so you can add a second candidate immediately.")
      },
      {
        heading: l("확대와 이동 동기화", "Synchronize zoom and pan"),
        steps: [
          l("전체 동기화를 켜고 기준으로 삼을 슬롯을 조작합니다.", "Enable Sync and manipulate the slot you want to use as the reference."),
          l("확대하거나 드래그하면 동기화된 슬롯이 같은 zoom과 pan을 사용합니다.", "Zoom or drag; synchronized slots use the same zoom and pan."),
          l("다른 영역을 따로 볼 슬롯은 ‘독립’을 켭니다.", "Turn on Independent for any slot you want to inspect separately."),
          l("전체 변형 초기화로 모든 슬롯을 기본 상태로 되돌립니다.", "Use Reset All Transforms to return every slot to its default state.")
        ]
      },
      {
        heading: l("두 장 보기 사용", "Use two-page viewing"),
        steps: [
          l("이미지 메뉴에서 두 장 보기를 켭니다.", "Turn on Two-Page View from the Image menu."),
          l("자료에 맞게 좌→우 또는 우→좌 읽기 순서를 선택합니다.", "Choose left-to-right or right-to-left reading order."),
          l("←와 →로 spread 단위로 이동합니다.", "Move through spreads with Left Arrow and Right Arrow."),
          l("한 장씩 다시 보려면 두 장 보기를 끕니다.", "Turn off Two-Page View to return to single-image viewing.")
        ],
        note: l("두 장 보기는 만화·스캔처럼 연속된 파일에 적합합니다. 임의의 두 후보를 비교할 때는 비교 모드를 사용하세요.", "Two-page viewing works best for sequential files such as comics or scans. Use Compare mode for arbitrary candidates.")
      }
    ],
    related: ["view-and-zoom", "rate-tag-organize", "browse-and-navigate"]
  },
  {
    slug: "rate-tag-organize",
    title: l("평가·태그·파일 정리", "Rate, tag, and organize files"),
    summary: l("별점과 Pick/Reject를 기록하고 Finder 태그와 실제 파일 작업을 구분해 사용합니다.", "Record ratings and Pick/Reject decisions, and distinguish Finder tags from file operations."),
    purpose: l("평가 데이터, Finder 태그, 파일 이동은 저장 위치와 영향이 서로 다릅니다. 가벼운 검토 표시는 별점과 Pick/Reject로 시작하고, 다른 Mac 앱에서도 보일 분류는 Finder 태그를 사용하세요.", "Ratings, Finder tags, and file moves have different storage and effects. Start with ratings and Pick/Reject for lightweight review, and use Finder tags when the classification should be visible to other Mac apps."),
    sections: [
      {
        heading: l("별점과 Pick/Reject", "Ratings and Pick/Reject"),
        steps: [
          l("현재 이미지 또는 사이드바의 여러 이미지를 선택합니다.", "Select the current image or multiple images in the sidebar."),
          l("0–5를 눌러 별점을 지정합니다.", "Press 0–5 to set a rating."),
          l("P로 Pick, X로 Reject를 전환합니다.", "Press P for Pick or X for Reject."),
          l("필터에서 결과를 좁히거나 현재 필터 결과 전체에 같은 평가를 적용합니다.", "Use filters to narrow the results, or apply the same decision to all current filtered results.")
        ],
        note: l("별점과 Pick/Reject는 AuroraViewer의 로컬 설정에 경로별로 저장되며 이미지 파일 내부 메타데이터에는 기록되지 않습니다.", "Ratings and Pick/Reject are stored locally by file path in AuroraViewer. They are not written into the image metadata.")
      },
      {
        heading: l("Finder 색상 태그", "Finder color tags"),
        steps: [
          l("태그를 적용할 이미지를 선택합니다.", "Select the images you want to tag."),
          l("상단 태그 도구나 ⌃1–⌃7을 사용해 색상 태그를 전환합니다.", "Use the top tag controls or Control-1 through Control-7 to toggle color tags."),
          l("태그 필터로 같은 Finder 태그가 붙은 이미지를 다시 모읍니다.", "Use the tag filter to gather images with the same Finder tag."),
          l("모든 태그를 지울 때는 범위를 확인한 뒤 지우기 명령을 사용합니다.", "When clearing tags, confirm the scope before using Clear All Tags.")
        ],
        note: l("Finder 태그는 실제 파일의 확장 속성입니다. 쓰기 권한이 부족하면 이미지가 있는 상위 폴더를 다시 선택해 권한을 승인해야 할 수 있습니다.", "Finder tags are extended attributes on the file itself. If write permission is missing, you may need to select and approve the containing folder again.")
      },
      {
        heading: l("목록에서 제거와 휴지통 구분", "Distinguish Remove from Trash"),
        bullets: [
          l("목록에서 제거: AuroraViewer 라이브러리에서만 항목을 빼며 원본 파일은 그대로 둡니다.", "Remove from List: removes the item only from the AuroraViewer library and leaves the source file intact."),
          l("이미지 삭제: Finder 휴지통으로 파일을 옮기고 성공한 항목을 라이브러리에서 제거합니다.", "Delete Image: moves the file to Finder Trash and removes successful items from the library."),
          l("휴지통 작업 실행 취소는 원래 위치가 비어 있고 휴지통 항목이 남아 있을 때만 복구될 수 있습니다.", "Undoing a trash operation can succeed only while the original location is available and the trashed item still exists."),
          l("압축 안에서 연 이미지는 원본 압축 내부를 직접 이동하거나 삭제하지 않습니다.", "Images opened from an archive do not directly move or delete the original entry inside that archive.")
        ],
        warning: l("‘이미지 삭제’는 실제 파일을 휴지통으로 이동합니다. 실행 전에 선택한 이미지와 범위를 반드시 확인하세요.", "Delete Image moves real files to Trash. Always verify the selected images and scope before running it.")
      },
      {
        heading: l("이름 변경, 이동, 복사", "Rename, move, and copy"),
        bullets: [
          l("이름 변경은 원본 확장자를 보존하고, 같은 이름 충돌과 접근 권한을 확인합니다.", "Rename preserves the original extension and checks for name collisions and access."),
          l("이동은 성공한 파일의 라이브러리 경로와 로컬 평가 경로도 갱신합니다.", "Move updates the library path and local review record for successful files."),
          l("복사는 라이브러리의 원본을 유지하며 자동 삭제형 실행 취소를 제공하지 않습니다.", "Copy keeps the original in the library and does not provide an automatic delete-the-copy undo."),
          l("원본 일괄 내보내기는 대상 이름이 겹칠 때 번호를 붙여 기존 파일을 덮어쓰지 않습니다.", "Batch Export Originals adds a number to conflicting names instead of overwriting existing files."),
          l("최근 Aurora 작업 실행 취소는 메모리에 최대 30개를 유지하며 앱 재실행 뒤까지 보장되지 않습니다.", "Undo Last Aurora Operation keeps up to 30 in-memory actions and is not guaranteed after relaunch.")
        ]
      }
    ],
    related: ["sidebar-search-filter", "duplicates", "export-and-metadata"]
  },
  {
    slug: "inspect-color-metadata",
    title: l("색상·메타데이터·검사 도구", "Color, metadata, and inspection tools"),
    summary: l("EXIF, 히스토그램, 컬러 픽커, 미니맵과 ROI로 이미지 정보를 확인합니다.", "Inspect images with EXIF, histogram, color picker, minimap, and ROI tools."),
    purpose: l("보기만으로 판단하기 어려운 노출·색상·촬영 정보와 픽셀 위치를 보조 패널에서 확인할 수 있습니다. 필요한 도구만 켜서 캔버스 공간을 유지하세요.", "Supporting panels expose exposure, color, capture information, and pixel positions that are hard to judge visually. Turn on only the tools you need to preserve canvas space."),
    sections: [
      {
        heading: l("EXIF와 색상 정보 보기", "View EXIF and color information"),
        steps: [
          l("Tab을 눌러 EXIF 오버레이를 켭니다.", "Press Tab to turn on the EXIF overlay."),
          l("파일명·크기·해상도와 제공되는 카메라, 렌즈, 노출 정보를 확인합니다.", "Review file name, size, resolution, and available camera, lens, and exposure information."),
          l("ICC 이름, 표시 색공간, 비트 깊이, 알파 여부와 색관리 상태를 확인합니다.", "Check the ICC name, display color space, bit depth, alpha status, and color-management state."),
          l("정보가 없는 필드는 표시되지 않는 것이 정상입니다.", "Fields that are not present in the file are normally omitted.")
        ]
      },
      {
        heading: l("히스토그램과 미니맵", "Histogram and minimap"),
        bullets: [
          l("히스토그램은 RGB 분포를 64개 구간으로 보여 주며 전체·R·G·B 채널을 바꿀 수 있습니다.", "The histogram shows RGB distribution in 64 bins and can switch between combined, R, G, and B channels."),
          l("평균, 중앙값, 표준편차를 확인하고 확장 보기를 사용할 수 있습니다.", "You can inspect mean, median, and standard deviation, with an expanded view."),
          l("미니맵은 회전 후 콘텐츠가 캔버스보다 클 때 나타나며 현재 보이는 영역을 표시합니다.", "The minimap appears when rotated content is larger than the canvas and shows the current viewport."),
          l("미니맵을 클릭하거나 끌어 확대된 이미지의 다른 위치로 이동합니다.", "Click or drag the minimap to pan to another part of an enlarged image.")
        ]
      },
      {
        heading: l("컬러 픽커", "Color Picker"),
        steps: [
          l("⌥P 또는 도구 메뉴에서 컬러 픽커를 켭니다.", "Press Option-P or use the Tools menu to enable Color Picker."),
          l("기본 설정에서는 Option-클릭으로 현재 픽셀을 기록합니다.", "By default, Option-click records the current pixel."),
          l("HEX, RGB, HSB 값을 확인하거나 클립보드에 복사합니다.", "Read the HEX, RGB, and HSB values, or copy them to the clipboard."),
          l("최근 기록에서 최대 10개의 중복되지 않은 연속 샘플을 다시 확인합니다.", "Review up to 10 recent samples, with consecutive duplicates removed.")
        ],
        note: l("이미지가 회전된 상태에서는 좌표가 모호해질 수 있어 컬러 픽커가 비활성화됩니다.", "Color Picker is disabled while an image is rotated because the source coordinate would be ambiguous.")
      },
      {
        heading: l("ROI 선택과 확대", "Select and zoom a region of interest"),
        steps: [
          l("기본 설정에서 Command-드래그로 검사할 사각형을 만듭니다.", "By default, Command-drag to create a rectangular region of interest."),
          l("사각형 내부를 끌어 이동하거나 모서리로 크기를 바꿉니다.", "Drag inside the rectangle to move it, or use a corner to resize it."),
          l("ROI 확대를 실행해 선택 영역을 중심으로 봅니다.", "Use Zoom to ROI to center the selected region."),
          l("현재 이미지의 ROI는 내보내기 화면에서 자르기 영역으로 이어집니다.", "The ROI for the current image is carried into the export sheet as its crop area.")
        ]
      }
    ],
    related: ["view-and-zoom", "export-and-metadata", "shortcuts"]
  },
  {
    slug: "duplicates",
    title: l("중복·유사 이미지 찾기", "Find duplicate and similar images"),
    summary: l("완전 동일, 같은 이미지 추정, 시각 유사, RAW+JPEG 쌍을 찾아 검토합니다.", "Find and review exact duplicates, likely same images, visual matches, and RAW+JPEG pairs."),
    purpose: l("중복 검사는 자동 삭제 기능이 아니라 검토 대상을 모으는 도구입니다. 검사 범위와 기준을 정한 뒤 권장 보존본과 근거를 확인하고 실제 파일 작업은 직접 선택하세요.", "Duplicate scanning gathers candidates for review; it does not delete automatically. Choose a scope and matching methods, inspect the recommended keeper and evidence, then explicitly choose any file action."),
    sections: [
      {
        heading: l("검사 시작", "Start a scan"),
        steps: [
          l("전체 라이브러리, 현재 필터 결과, 사이드바 선택 또는 특정 폴더 중 검사 범위를 정합니다.", "Choose the whole library, current filtered results, sidebar selection, or a specific folder as the scan scope."),
          l("완전 동일, 같은 이미지 추정, 시각 유사, RAW+JPEG 쌍 중 필요한 검사 종류를 선택합니다.", "Select Exact, Likely Same Image, Visual Similarity, and/or RAW+JPEG Pair matching."),
          l("엄격, 보통, 넓게 중 민감도를 고릅니다.", "Choose Strict, Normal, or Broad sensitivity."),
          l("검사를 시작하고 진행 상태 또는 부분 실패를 확인합니다.", "Start the scan and monitor progress or partial failures."),
          l("결과 그룹을 열어 각 항목과 권장 보존본을 비교합니다.", "Open each result group and compare its items and recommended keeper.")
        ]
      },
      {
        heading: l("검사 방식 이해", "Understand the matching methods"),
        bullets: [
          l("완전 동일: 전체 파일 SHA-256으로 바이트가 같은 파일을 찾습니다.", "Exact: uses a full-file SHA-256 hash to find byte-identical files."),
          l("같은 이미지 추정: 픽셀 크기와 64비트 지각 해시로 재인코딩된 유사본을 좁힙니다.", "Likely Same Image: uses pixel dimensions and a 64-bit perceptual hash to narrow likely re-encodes."),
          l("시각 유사: Apple Vision 특징 거리로 비슷한 구도와 내용을 비교합니다.", "Visual Similarity: compares Apple Vision feature distance for similar composition and content."),
          l("RAW+JPEG: 같은 폴더에서 기본 파일명이 같은 카메라 원본과 현상본을 짝지어 봅니다.", "RAW+JPEG: pairs camera originals and rendered files with the same base name in the same folder.")
        ],
        note: l("Vision 기반 분류는 설정에서 끌 수 있습니다. 넓은 민감도는 더 많은 후보를 보여 주므로 직접 확인할 양도 늘어납니다.", "Vision-based classification can be disabled in Settings. Broad sensitivity returns more candidates and therefore requires more manual review.")
      },
      {
        heading: l("결과 검토와 정리", "Review and organize results"),
        bullets: [
          l("그룹 종류, 신뢰도, 항목 수, 예상 절약 용량을 먼저 확인합니다.", "Review match type, confidence, item count, and estimated savings first."),
          l("권장 보존본은 해상도, 파일 크기, RAW 여부에 따른 검토 보조입니다.", "The recommended keeper is guidance based on resolution, file size, and RAW status."),
          l("뷰어 또는 비교 모드에서 확대해 실제 차이를 확인합니다.", "Open the items in the viewer or Compare mode to inspect real differences."),
          l("필요하면 별점·태그를 먼저 남긴 뒤 목록 제거, 휴지통, 이동, 복사 중 원하는 작업을 선택합니다.", "Optionally add ratings or tags, then explicitly choose Remove, Trash, Move, or Copy.")
        ],
        warning: l("권장 보존본은 파일 품질을 절대적으로 판정하지 않으며 자동 삭제하지 않습니다. 휴지통이나 이동을 실행하기 전에 원본·편집본·RAW 관계를 직접 확인하세요.", "A recommended keeper is not an absolute quality judgment and is never deleted automatically. Verify original, edited, and RAW relationships before moving anything to Trash or another folder.")
      }
    ],
    related: ["compare-and-pages", "rate-tag-organize", "troubleshooting"]
  },
  {
    slug: "export-and-metadata",
    title: l("내보내기·자르기·메타데이터", "Export, crop, and metadata"),
    summary: l("원본 복사와 포맷 변환을 구분하고 자르기·크기·메타데이터 옵션을 설정합니다.", "Distinguish original-copy workflows from format conversion, then set crop, size, and metadata options."),
    purpose: l("원본을 그대로 다른 이름으로 저장하는 작업과 픽셀을 다시 인코딩하는 변환 내보내기는 결과가 다릅니다. 목적에 맞는 경로를 먼저 선택하세요.", "Saving an original under another name and re-encoding pixels into another format produce different results. Choose the path that matches your intent."),
    sections: [
      {
        heading: l("현재 이미지를 변환해 내보내기", "Export the current image with conversion"),
        steps: [
          l("파일 메뉴에서 현재 이미지 내보내기를 엽니다.", "Open Export Current Image from the File menu."),
          l("PNG, JPEG, TIFF, HEIC, WebP 중 출력 형식을 선택합니다.", "Choose PNG, JPEG, TIFF, HEIC, or WebP."),
          l("손실 형식이라면 10–100% 품질을 정합니다.", "For a lossy format, choose 10–100% quality."),
          l("자르기, 크기, 메타데이터 정책을 확인합니다.", "Review crop, size, and metadata policy."),
          l("저장 위치와 이름을 선택해 내보냅니다.", "Choose a destination and file name, then export.")
        ],
        note: l("특정 출력 인코더 제공 여부는 현재 macOS ImageIO 지원에 의존합니다.", "Availability of a particular output encoder depends on the ImageIO support in the current macOS version.")
      },
      {
        heading: l("자르기와 크기 변경", "Crop and resize"),
        bullets: [
          l("미리보기 위에서 영역을 그리거나 이동·크기 조절하고, X·Y·가로·세로 픽셀 값을 직접 입력할 수 있습니다.", "Draw, move, and resize the crop on the preview, or enter X, Y, width, and height in pixels."),
          l("캔버스에 같은 이미지의 ROI가 있으면 자르기 영역으로 자동 전달됩니다.", "An ROI for the same image is automatically carried into the crop area."),
          l("크기는 원본, 5–300% 비율, 명시한 가로·세로 픽셀 중 선택합니다.", "Choose original size, a 5–300% scale, or explicit width and height in pixels."),
          l("리사이즈는 표시·공유용 8-bit sRGB 경로이며 고비트·광색역 원본의 보존용 변환은 아닙니다.", "Resize uses an 8-bit sRGB path intended for display and sharing, not archival preservation of high-bit-depth or wide-gamut originals.")
        ]
      },
      {
        heading: l("메타데이터 정책", "Metadata policies"),
        bullets: [
          l("유지: 첫 프레임의 원래 ImageIO 속성을 가능한 범위에서 복사합니다.", "Keep: copies the first frame's original ImageIO properties where possible."),
          l("위치 정보만 제거: 표준 GPS와 EXIF subject location을 제거합니다.", "Remove Location: removes standard GPS and EXIF subject-location fields."),
          l("메타데이터 제거: 빈 속성에서 출력에 필요한 최소 값만 다시 설정합니다.", "Strip Metadata: starts with empty properties and writes only values required by the output."),
          l("모든 변환 출력은 화면 방향대로 픽셀을 정규화하고 orientation을 1로 기록합니다.", "Every converted output normalizes pixels to the visible orientation and records orientation as 1.")
        ],
        warning: l("‘위치 정보만 제거’는 알려진 표준 필드를 대상으로 하며 모든 제조사 비공개 메타데이터에서 위치 흔적이 전혀 없음을 보장하는 포렌식 도구는 아닙니다.", "Remove Location targets known standard fields. It is not a forensic guarantee that no location trace remains in every manufacturer-private metadata field.")
      },
      {
        heading: l("원본 저장과 일괄 내보내기", "Save originals and batch export"),
        bullets: [
          l("원본 다른 이름으로 저장은 현재 파일의 바이트를 변환 없이 복사합니다.", "Save Original As copies the current file's bytes without conversion."),
          l("원본 일괄 내보내기는 선택·그룹·필터 범위의 원본을 대상 폴더로 복사합니다.", "Batch Export Originals copies originals from a selection, group, or filtered result to a destination folder."),
          l("같은 이름이 있으면 번호를 붙여 기존 파일을 덮어쓰지 않습니다.", "If a name already exists, a number is added instead of overwriting the file."),
          l("애니메이션의 변환 내보내기는 전체 프레임 변환이 아니라 첫 표시 이미지를 단일 프레임으로 저장합니다.", "Converted export of an animation saves the first displayed image as a single frame; it does not convert the whole animation.")
        ]
      },
      {
        heading: l("EXIF 편집", "Edit EXIF"),
        steps: [
          l("JPEG, TIFF 또는 HEIC 이미지 한 장을 선택합니다.", "Select one JPEG, TIFF, or HEIC image."),
          l("이미지 메뉴에서 EXIF 수정을 엽니다.", "Open Edit EXIF from the Image menu."),
          l("설명, 작가, 저작권, 카메라·렌즈, 날짜, 노출 관련 지원 필드를 편집합니다.", "Edit supported description, author, copyright, camera, lens, date, and exposure fields."),
          l("값 형식을 확인하고 저장합니다. 빈 문자열은 해당 키를 제거합니다.", "Validate the value formats and save. An empty string removes that key."),
          l("필요하면 최근 Aurora 작업 실행 취소로 편집 UI에 노출된 이전 값을 되씁니다.", "If needed, use Undo Last Aurora Operation to write back the previous values exposed by the editor.")
        ],
        warning: l("EXIF 실행 취소는 원본 파일 전체의 byte 백업이 아니라 편집한 필드의 이전 값을 되쓰는 동작입니다.", "EXIF undo writes back the previous editable field values; it is not a byte-for-byte backup of the whole source file.")
      }
    ],
    related: ["inspect-color-metadata", "rate-tag-organize", "troubleshooting"]
  },
  {
    slug: "shortcuts",
    title: l("키보드 단축키", "Keyboard shortcuts"),
    summary: l("기본 단축키를 확인하고 작업 방식에 맞게 다시 지정합니다.", "Review the defaults and remap shortcuts to match your workflow."),
    purpose: l("이동, 배율, 평가처럼 반복되는 작업은 키보드만으로 이어갈 수 있습니다. 아래는 버전 1.6.3의 기본값이며 설정에서 동작별로 바꿀 수 있습니다.", "Repeated actions such as navigation, zoom, and rating can stay on the keyboard. These are the version 1.6.3 defaults, and each action can be remapped in Settings."),
    sections: [
      {
        heading: l("자주 쓰는 기본 단축키", "Common default shortcuts"),
        shortcuts: [
          { action: l("파일 열기", "Open"), key: "⌘O" },
          { action: l("이전 / 다음 이미지", "Previous / next image"), key: "← / →" },
          { action: l("창 맞춤 / 원본 전환", "Toggle fit / original"), key: "⌘0" },
          { action: l("뷰 초기화", "Reset view"), key: "Space" },
          { action: l("확대 / 축소", "Zoom in / out"), key: "+ / −" },
          { action: l("200%", "200%"), key: "⌘⌥2" },
          { action: l("전체 화면", "Full screen"), key: "⌘Return" },
          { action: l("검색", "Search"), key: "⌘F" },
          { action: l("명령 검색 팔레트", "Command Palette"), key: "⌘⇧P" },
          { action: l("별점 없음 / 1–5점", "No rating / 1–5 stars"), key: "0 / 1–5" },
          { action: l("Pick / Reject", "Pick / Reject"), key: "P / X" },
          { action: l("Finder 색상 태그", "Finder color tags"), key: "⌃1–⌃7" },
          { action: l("EXIF 오버레이", "EXIF overlay"), key: "Tab" },
          { action: l("비교 모드", "Compare mode"), key: "⌥C" },
          { action: l("클린 뷰", "Clean View"), key: "⌥Space" }
        ]
      },
      {
        heading: l("보기와 도구 기본값", "Viewing and tool defaults"),
        shortcuts: [
          { action: l("반시계 / 시계 방향 회전", "Rotate counterclockwise / clockwise"), key: "⌘[ / ⌘]" },
          { action: l("창 맞춤 / 원본 / 비율 유지", "Fit / Original / Preserve Scale"), key: "⌥1 / ⌥2 / ⌥3" },
          { action: l("사이드바", "Sidebar"), key: "⌥S" },
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
          l("새 키와 Command, Option, Control, Shift 조합을 기록합니다.", "Record a new key and Command, Option, Control, and Shift combination."),
          l("메뉴 표시와 캔버스 입력에서 새 단축키가 동작하는지 확인합니다.", "Confirm that the new shortcut appears in menus and works in the canvas."),
          l("문제가 있으면 해당 동작 또는 전체 단축키를 기본값으로 복원합니다.", "If needed, restore that action or all shortcuts to their defaults.")
        ],
        note: l("⌘H처럼 macOS 표준 메뉴와 충돌하는 조합은 의도대로 동작하지 않을 수 있습니다.", "Combinations that conflict with standard macOS menus, such as Command-H, may not behave as intended.")
      },
      {
        heading: l("명령 검색 팔레트", "Command Palette"),
        steps: [
          l("⌘⇧P를 눌러 명령 검색 팔레트를 엽니다.", "Press Command-Shift-P to open Command Palette."),
          l("명령 이름이나 카테고리를 입력합니다.", "Type an action name or category."),
          l("표시된 단축키를 확인하거나 Enter로 첫 결과를 실행합니다.", "Review the displayed shortcut, or press Return to run the first result."),
          l("Escape로 닫고 캔버스로 돌아갑니다.", "Press Escape to close it and return to the canvas.")
        ]
      }
    ],
    related: ["getting-started", "view-and-zoom", "settings-sessions-windows"]
  },
  {
    slug: "settings-sessions-windows",
    title: l("설정·세션·여러 창", "Settings, sessions, and windows"),
    summary: l("보기·입력·단축키 설정을 조정하고 작업 상태와 여러 뷰어를 관리합니다.", "Adjust viewing, input, and shortcut preferences, then manage sessions and multiple viewers."),
    purpose: l("설정은 모든 뷰어에 적용되는 선호값이고, 세션은 각 창의 라이브러리와 선택·검색·캔버스 상태입니다. 두 범위를 구분하면 복원과 여러 창 작업을 예측하기 쉽습니다.", "Settings are preferences shared across viewers. Sessions preserve each window's library, selection, search, and canvas state. Knowing the difference makes restore and multi-window behavior predictable."),
    sections: [
      {
        heading: l("설정 페이지", "Settings pages"),
        bullets: [
          l("뷰어: 배율, 안티에일리어싱, 픽셀 그리드, 투명 배경, 유사 이미지, 두 장 보기, 슬라이드쇼, 세션·캐시를 설정합니다.", "Viewer: configure zoom, antialiasing, pixel grid, transparency, visual similarity, two-page view, slideshow, sessions, and cache."),
          l("인터페이스: 앱 언어, 사이드바·평가 도구·오버레이·타이틀 바 표시 방식을 정합니다.", "Interface: choose app language and how the sidebar, rating controls, overlays, and title bar appear."),
          l("마우스 입력: 휠 탐색·확대, 전체 화면 클릭, 컬러 샘플, ROI 드래그 조합을 바꿉니다.", "Mouse Input: remap wheel navigation and zoom, full-screen click, color sampling, and ROI drag combinations."),
          l("단축키·외부 앱·기본 앱·지원: 키 동작, 등록 앱 순서, Finder 연결과 도움말을 관리합니다.", "Shortcuts, External Apps, Default Apps, and Support: manage key actions, registered app order, Finder integration, and help.")
        ]
      },
      {
        heading: l("마지막 세션 복원", "Restore the last session"),
        bullets: [
          l("세션에는 소스 그룹, 선택, 검색·정렬·필터, zoom·pan·회전, 비교 슬롯 상태가 포함됩니다.", "A session includes source groups, selection, search, sorting, filters, zoom, pan, rotation, and Compare slots."),
          l("자동 복원을 켜면 외부 입력 없이 실행할 때 저장된 창을 바로 복원합니다.", "With automatic restore enabled, saved windows reopen when the app launches without external input."),
          l("자동 복원이 꺼져 있으면 저장된 세션이 있을 때 복원 여부를 묻습니다.", "With automatic restore disabled, the app asks before restoring a saved session."),
          l("Finder에서 파일을 열어 앱을 실행하면 새 입력을 우선하고 이전 세션 bootstrap을 건너뜁니다.", "Launching from a file in Finder prioritizes the new input and skips the previous session bootstrap."),
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
          l("모든 창의 사이드바를 한 번에 펼치기, 접기, 고정 또는 자동 숨김으로 맞출 수 있습니다.", "You can expand, collapse, pin, or auto-hide the sidebars across all viewers at once.")
        ],
        note: l("창 격자 정렬은 보이는 비최소화·비전체화면 뷰어가 2개 이상일 때 사용합니다.", "Grid arrangement requires at least two visible viewers that are not minimized or full screen.")
      },
      {
        heading: l("캐시와 로컬 상태", "Cache and local state"),
        bullets: [
          l("일반 이미지 미리보기, 압축 해제 결과, 중복 분석 결과는 다시 만들 수 있는 로컬 파생 데이터입니다.", "Image previews, archive extraction results, and duplicate-analysis results are rebuildable local derived data."),
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
    summary: l("열기, 권한, 압축, 렌더링, 내보내기 문제를 순서대로 점검합니다.", "Work through image opening, permissions, archives, rendering, and export issues."),
    purpose: l("대부분의 문제는 파일 자체의 코덱 지원, 샌드박스 권한, 압축 제한 또는 현재 macOS에서 제공하는 시스템 서비스와 관련됩니다. 아래 순서로 범위를 좁혀 보세요.", "Most issues relate to codec support in the file, sandbox access, archive safety limits, or system services available in the current macOS version. Use the checks below to narrow the cause."),
    sections: [
      {
        heading: l("이미지가 열리지 않을 때", "When an image does not open"),
        steps: [
          l("파일 확장자가 지원 입력 목록에 있는지 확인합니다.", "Confirm that the file extension is in the supported input list."),
          l("같은 형식의 다른 파일이 열리는지 확인해 파일 자체 문제인지 구분합니다.", "Try another file of the same format to distinguish a file-specific issue."),
          l("Finder 또는 macOS 미리보기에서 해당 파일을 읽을 수 있는지 확인합니다.", "Check whether Finder or Preview in macOS can read the file."),
          l("AI·EPS 같은 문서는 포함 미리보기, Quick Look 또는 선택적 Ghostscript에 따라 결과가 달라질 수 있습니다.", "For documents such as AI or EPS, results can depend on embedded previews, Quick Look, or optional Ghostscript support."),
          l("문제가 계속되면 파일 종류와 macOS·AuroraViewer 버전을 포함해 지원 페이지로 제보합니다.", "If the issue persists, report it through Support with the file type and macOS and AuroraViewer versions.")
        ]
      },
      {
        heading: l("폴더·태그·파일 작업 권한", "Folder, tag, and file-operation permissions"),
        steps: [
          l("권한 안내가 나타나면 작업 대상 파일이 들어 있는 상위 폴더를 선택합니다.", "When prompted, select the parent folder that contains the files you are working with."),
          l("Finder 태그, 이름 변경, 이동처럼 쓰기가 필요한 작업에는 읽기보다 넓은 승인이 필요할 수 있습니다.", "Operations that write, such as Finder tags, rename, and move, may need broader approval than viewing."),
          l("파일이 외부에서 이동되거나 삭제되었는지 Finder에서 확인합니다.", "Use Finder to check whether the file was moved or deleted outside AuroraViewer."),
          l("복원된 세션에서 빠진 파일은 위치를 다시 열어 라이브러리에 추가합니다.", "For files skipped during session restore, open their current location and add them to the library again.")
        ]
      },
      {
        heading: l("압축 파일이 일부만 열릴 때", "When an archive opens only partially"),
        bullets: [
          l("지원 이미지가 아닌 항목은 추출하지 않습니다.", "Entries that are not supported images are not extracted."),
          l("압축 안의 압축 파일은 재귀적으로 열지 않습니다.", "An archive nested inside another archive is not opened recursively."),
          l("20,000개 엔트리, 이미지당 256MB, 총 1GB 안전 제한을 넘는 항목은 실패할 수 있습니다.", "Items can fail when the archive exceeds 20,000 entries, 256 MB per image, or 1 GB total extraction."),
          l("암호 입력은 3회까지이며, 취소하거나 실패하면 가능한 다른 입력은 계속 처리됩니다.", "Password entry allows up to three attempts. If you cancel or it fails, other usable input continues processing.")
        ]
      },
      {
        heading: l("표시가 느리거나 예상과 다를 때", "When display is slow or unexpected"),
        bullets: [
          l("큰 이미지는 저비용 미리보기를 먼저 표시한 뒤 화면이 안정되면 고화질과 보이는 영역 타일을 준비합니다.", "Large images show a lower-cost preview first, then prepare higher quality and visible-region tiles after the view settles."),
          l("GIF·WebP·APNG 애니메이션, 투명 이미지, 픽셀 그리드는 정적 불투명 이미지와 다른 렌더링 경로를 사용합니다.", "GIF, WebP, and APNG animation, transparent images, and pixel grid use a different rendering path from static opaque images."),
          l("캐시 문제가 의심되면 설정에서 모든 캐시 비우기를 실행한 뒤 파일을 다시 엽니다.", "If cache appears stale, clear all caches in Settings and reopen the file."),
          l("Reduce Motion을 사용하면 빈 라이브러리의 Aurora 효과 갱신률이 낮아지는 것이 정상입니다.", "With Reduce Motion enabled, the empty-library Aurora effect updates less frequently by design.")
        ]
      },
      {
        heading: l("내보내기·외부 앱 문제", "Export and external-app issues"),
        bullets: [
          l("출력 형식 인코더는 현재 macOS ImageIO가 제공해야 합니다.", "The selected output encoder must be available through ImageIO in the current macOS version."),
          l("등록한 외부 앱이 이동되었다면 설정에서 앱을 다시 추가합니다.", "If a registered external app moved, add it again in Settings."),
          l("Mac App Store 배포판에서 기본 이미지 앱을 바꾸려면 Finder의 ‘정보 가져오기 > 다음으로 열기 > 모두 변경’을 사용합니다.", "For the Mac App Store build, change the default image app in Finder using Get Info > Open with > Change All."),
          l("애니메이션 변환 내보내기는 전체 프레임이 아니라 단일 이미지를 만드는 기능입니다.", "Converted export of an animation creates one image, not a full multi-frame export.")
        ]
      },
      {
        heading: l("문제 제보", "Report an issue"),
        bullets: [
          l("macOS 버전과 AuroraViewer 버전", "macOS version and AuroraViewer version"),
          l("문제가 발생한 형식과 파일이 폴더·압축 중 어디에서 열렸는지", "The affected format and whether it was opened from a folder or archive"),
          l("문제를 다시 일으킬 수 있는 최소 단계", "The shortest steps that reproduce the issue"),
          l("개인정보를 제거한 오류 메시지나 화면 캡처", "An error message or screenshot with personal information removed")
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
