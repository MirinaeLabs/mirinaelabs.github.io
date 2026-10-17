import Image from "next/image";
import { Arrow, BrandMark } from "../components/icons";
import { ProductShowcase } from "../components/product-showcase";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero shell grid items-center lg:grid-cols-12" aria-labelledby="hero-title">
          <div className="hero-copy lg:col-span-6">
            <h1 id="hero-title">일상에 스며드는<br />소프트웨어.</h1>
            <p className="hero-description">매일 쓰는 도구가 조금 더 편해질 수 있도록.<br className="desktop-break" /> 작은 불편에서 출발해, 오래 쓰고 싶은 도구를 만듭니다.</p>
            <a className="button button-primary inline-flex items-center justify-center gap-5" href="#products">우리가 만드는 제품 <Arrow /></a>
          </div>
          <div className="hero-visual lg:col-span-6">
            <div className="sculpture-scene" aria-hidden="true">
              <div className="scene-disc" />
              <div className="glass-sculpture"><i /><i /><i /><i /><div className="sculpture-core" /></div>
              <div className="scene-reflection" />
            </div>
            <a className="hero-product glass flex items-center gap-3.5" href="/auroraviewer/">
              <Image src="/assets/auroraviewer-icon.png" width={52} height={52} alt="" priority />
              <span><strong>AuroraViewer</strong><span>이미지를 보는 새로운 일상</span></span>
              <span className="hero-product-arrow"><Arrow diagonal /></span>
            </a>
          </div>
          <div className="hero-foot lg:col-span-12 flex items-center justify-between gap-4">
            <p>작은 발견이, 더 나은 일상으로.</p>
            <a href="#products" aria-label="아래 제품 소개로 이동"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a>
          </div>
        </section>

        <section id="products" className="products-section section-space" aria-labelledby="products-title">
          <div className="shell">
            <div className="section-heading grid gap-6 md:grid-cols-12 md:items-end">
              <h2 id="products-title" className="md:col-span-7">좋은 도구 하나가<br />바꾸는 작은 일상.</h2>
              <p className="md:col-span-5 md:justify-self-end">이미지를 보고, 고르고, 정리하는 일.<br />AuroraViewer와 함께 시작해 보세요.</p>
            </div>
            <ProductShowcase />
          </div>
        </section>

        <section id="about" className="about-section shell section-space" aria-labelledby="about-title">
          <div className="about-intro grid gap-8 lg:grid-cols-12">
            <h2 id="about-title" className="lg:col-span-7">기술보다 먼저,<br />쓰는 사람을 생각합니다.</h2>
            <div className="about-copy lg:col-span-5"><p>좋은 소프트웨어는 복잡한 일을 단순하게 만든다고 믿습니다. 무엇을 더 넣을지보다, 어떻게 하면 더 자연스럽게 쓸 수 있을지 고민합니다.</p><p>자주 마주치는 문제를 발견하고, 직접 만들고, 다듬는 일. 미리내랩스가 제품을 만들어가는 방식입니다.</p></div>
          </div>
          <div className="principles-grid grid gap-5 md:grid-cols-12">
            <article className="principle-main md:col-span-7">
              <div className="principle-art" aria-hidden="true"><BrandMark /><span /><span /><span /></div>
              <div><h3>작은 불편에서 시작합니다.</h3><p>매일 반복하는 일 속에 아이디어가 있습니다.<br />우리도 쓰고 싶은 도구를 직접 만듭니다.</p></div>
            </article>
            <article className="principle-detail md:col-span-5">
              <div className="detail-art" aria-hidden="true"><div className="detail-glass"><svg width="60" height="60" viewBox="0 0 64 64" fill="none"><path d="m18 33 9 9 20-21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div><span /></div>
              <div><h3>쓰면서, 더 좋아지도록.</h3><p>꼭 필요한 기능을 세심하게 다듬고,<br />작은 개선을 꾸준히 쌓아갑니다.</p></div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section shell" aria-labelledby="contact-title">
          <div className="contact-inner grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6"><h2 id="contact-title">다음 이야기를<br />함께 만들어가요.</h2><p>제품에 대한 의견도, 새로운 협업 제안도 좋습니다.</p></div>
            <div className="contact-action lg:col-span-6 lg:justify-self-end"><a href="mailto:contact@mirinaelabs.com" className="contact-email inline-flex items-center gap-4">contact@mirinaelabs.com <Arrow diagonal /></a><span>여러분의 이야기를 기다립니다.</span></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
