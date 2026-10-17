"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { Arrow, ViewIcon } from "./icons";

const views = [
  { id: "viewer", label: "이미지 보기", shortLabel: "보기", file: "viewer-ko", title: "한 장에 온전히 집중하세요.", description: "폴더 속 이미지를 넘겨 보며, 마음에 드는 한 장을 찾아보세요.", alt: "AuroraViewer에서 사이드바 이미지 목록과 선택한 오로라 사진을 함께 보는 실제 화면" },
  { id: "library", label: "썸네일 탐색", shortLabel: "썸네일", file: "thumbnail-ko", title: "여러 장을 한눈에 살펴보세요.", description: "썸네일로 이미지를 훑어보고, 별점과 태그로 정리하세요.", alt: "AuroraViewer 썸네일 모드에서 여러 사진을 한눈에 살펴보는 실제 화면" },
  { id: "compare", label: "나란히 비교", shortLabel: "비교", file: "compare-ko", title: "작은 차이까지 놓치지 않도록.", description: "이미지를 나란히 놓고 확대하며, 원하는 한 장을 골라보세요.", alt: "AuroraViewer 비교 모드에서 두 이미지를 나란히 놓고 보는 실제 화면" },
  { id: "inspect", label: "색상 검사", shortLabel: "색상 검사", file: "color-ko", title: "색을 조금 더 자세히.", description: "이미지의 색상과 픽셀 정보를 직접 확인하세요.", alt: "AuroraViewer 색상 검사 도구로 이미지의 색상 정보를 확인하는 실제 화면" },
] as const;

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % views.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + views.length) % views.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = views.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <div className="showcase">
      <noscript><style>{`.view-tabs { display: none; }`}</style></noscript>
      <div className="showcase-toolbar flex flex-wrap items-center justify-between gap-6">
        <div className="product-identity flex items-center gap-3.5">
          <Image src="/assets/auroraviewer-icon.png" width={52} height={52} alt="" />
          <div><h3>AuroraViewer</h3><p>Mac을 위한 이미지 뷰어</p></div>
        </div>
        <a href="/auroraviewer/" className="text-link inline-flex items-center gap-2">제품 알아보기 <Arrow diagonal /></a>
      </div>

      <div className="showcase-stage">
        <div className="view-tabs" role="tablist" aria-label="AuroraViewer 기능 미리보기">
          {views.map((view, index) => (
            <button key={view.id} type="button" role="tab" id={`tab-${view.id}`} aria-selected={active === index} aria-controls={`panel-${view.id}`} tabIndex={active === index ? 0 : -1} ref={(node) => { buttons.current[index] = node; }} onClick={() => setActive(index)} onKeyDown={(event) => handleKeyDown(event, index)}>
              <ViewIcon kind={view.id} /><span className="tab-label">{view.label}</span><span className="tab-short-label">{view.shortLabel}</span>
            </button>
          ))}
        </div>
        {views.map((view, index) => (
          <div key={view.id} role="tabpanel" id={`panel-${view.id}`} aria-labelledby={`tab-${view.id}`} hidden={active !== index} tabIndex={0} className="view-panel">
            <div className="app-screenshot">
              <Image src={`/assets/screenshots/${view.file}.webp`} width={1164} height={709} alt={view.alt} sizes="(max-width: 767px) calc(100vw - 56px), (max-width: 1199px) 86vw, 1040px" />
            </div>
            <div className="view-caption"><p>{view.title}</p><span>{view.description}</span></div>
          </div>
        ))}
      </div>
      <div className="showcase-bottom flex flex-wrap items-center justify-between gap-4">
        <span>실제 AuroraViewer 화면입니다.</span>
        <a className="text-link inline-flex items-center gap-2" href="/auroraviewer/manual/">사용 설명서 <Arrow /></a>
      </div>
    </div>
  );
}
