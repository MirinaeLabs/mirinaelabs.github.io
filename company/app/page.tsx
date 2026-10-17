import Image from "next/image";
import { Arrow } from "../components/icons";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero shell grid items-center lg:grid-cols-12" aria-labelledby="hero-title">
          <div className="hero-copy lg:col-span-6">
            <h1 id="hero-title">좋아하는 순간을,<br />더 오래.</h1>
            <p className="hero-description">일상 속 작은 불편을 덜고, 좋아하는 일에 더 집중할 수 있도록.<br className="desktop-break" /> 미리내랩스는 편리함과 즐거움을 함께 생각하며 소프트웨어를 만듭니다.</p>
            <a className="button button-primary inline-flex items-center justify-center gap-5" href="#about">미리내랩스 소개 <Arrow /></a>
          </div>
          <div className="hero-visual lg:col-span-6">
            <div className="sculpture-scene" aria-hidden="true">
              <div className="scene-disc" />
              <div className="glass-sculpture"><i /><i /><i /><i /><div className="sculpture-core" /></div>
              <div className="scene-reflection" />
            </div>
            <p className="studio-signature">관심에서 시작해,<br />오래 쓰고 싶은 경험으로.</p>
          </div>
          <div className="hero-foot lg:col-span-12 flex items-center justify-between gap-4">
            <p>편리함과 즐거움이, 일상에 자연스럽게.</p>
            <a href="#about" aria-label="아래 회사 소개로 이동"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a>
          </div>
        </section>

        <section id="about" className="about-section shell section-space" aria-labelledby="about-title">
          <div className="about-intro grid items-start gap-8 lg:grid-cols-12">
            <h2 id="about-title" className="lg:col-span-7">도구를 넘어,<br />즐거운 경험으로.</h2>
            <div className="about-copy lg:col-span-5"><p>편리해서 자주 찾는 도구, 반가워서 다시 켜는 앱. 우리는 두 경험 모두에 관심이 있습니다.</p><p>일상에서 느낀 작은 불편과 오래 품어온 호기심에서 출발합니다. 직접 만들고 쓰며, 자연스럽게 손이 가는 소프트웨어를 다듬어 갑니다.</p></div>
          </div>
          <div className="studio-values grid gap-10 md:grid-cols-2">
            <article><h3>필요한 만큼, 단순하게.</h3><p>기능을 더하기 전에 쓰는 순간을 생각합니다.<br />익히는 시간보다 즐기는 시간이 길어지도록.</p></article>
            <article><h3>오래 좋아할 수 있도록.</h3><p>잠깐의 새로움에 머무르지 않도록.<br />작은 개선을 쌓아, 다시 찾고 싶은 앱을 만듭니다.</p></article>
          </div>
        </section>

        <section id="products" className="products-section section-space" aria-labelledby="products-title">
          <div className="shell">
            <div className="section-heading"><h2 id="products-title">미리내랩스의 앱</h2></div>
            <div className="app-list">
              <article className="app-entry" aria-labelledby="auroraviewer-title">
                <Image src="/assets/auroraviewer-icon.png" width={64} height={64} alt="" />
                <div className="app-entry-copy"><div className="app-title-row"><h3 id="auroraviewer-title">AuroraViewer</h3><span className="app-status">사용 가능</span></div><p>Mac에서 이미지를 살펴보고 정리하는 뷰어입니다.</p><span className="app-platform">macOS</span></div>
                <a className="text-link inline-flex items-center gap-2" href="/auroraviewer/" aria-label="AuroraViewer 제품 소개">제품 소개 <Arrow diagonal /></a>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section shell section-space" aria-labelledby="contact-title">
          <div className="contact-inner grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6"><h2 id="contact-title">여러분의 관심도<br />들려주세요.</h2><p>앱에 대한 의견부터 새로운 협업 이야기까지.</p></div>
            <div className="contact-action lg:col-span-6 lg:justify-self-end"><a href="mailto:contact@mirinaelabs.com" className="contact-email inline-flex items-center gap-4">contact@mirinaelabs.com <Arrow diagonal /></a><span>여러분의 이야기를 기다립니다.</span></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
