import Image from "next/image";
import { Arrow } from "./icons";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { companyCopy, type Locale } from "../lib/site-content";

export function CompanyHome({ locale }: { locale: Locale }) {
  const copy = companyCopy[locale];
  return <>
    <SiteHeader locale={locale} />
    <main id="main">
      <section className="hero shell grid items-center lg:grid-cols-12" aria-labelledby="hero-title">
        <div className="hero-copy lg:col-span-6">
          <h1 id="hero-title">{copy.hero.title[0]}<br />{copy.hero.title[1]}</h1>
          <p className="hero-description">{copy.hero.description}<br className="desktop-break" /> {copy.hero.continuation}</p>
          <a className="button button-primary inline-flex items-center justify-center gap-5" href="#about">{copy.hero.action} <Arrow /></a>
        </div>
        <div className="hero-visual lg:col-span-6">
          <div className="sculpture-scene" aria-hidden="true">
            <div className="scene-disc" />
            <div className="brand-sculpture"><img src="/assets/brand/mirinae-mark.png" width="335" height="226" alt="" /><span /></div>
            <div className="scene-reflection" />
          </div>
          <p className="studio-signature">{copy.hero.signature[0]}<br />{copy.hero.signature[1]}</p>
        </div>
        <div className="hero-foot lg:col-span-12 flex items-center justify-between gap-4">
          <p>{copy.hero.note}</p>
          <a href="#about" aria-label={copy.hero.scrollAria}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a>
        </div>
      </section>
      <section id="about" className="about-section shell section-space" aria-labelledby="about-title">
        <div className="about-intro grid items-start gap-8 lg:grid-cols-12">
          <h2 id="about-title" className="lg:col-span-7">{copy.about.title[0]}<br />{copy.about.title[1]}</h2>
          <div className="about-copy lg:col-span-5">{copy.about.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        </div>
        <div className="studio-values grid gap-10 md:grid-cols-2">{copy.about.values.map(value => <article key={value.title}><h3>{value.title}</h3><p>{value.text[0]}<br />{value.text[1]}</p></article>)}</div>
      </section>
      <section id="products" className="products-section section-space" aria-labelledby="products-title">
        <div className="shell">
          <div className="section-heading"><h2 id="products-title">{copy.apps.title}</h2></div>
          <div className="app-list"><article className="app-entry" aria-labelledby="auroraviewer-title">
            <Image src="/assets/auroraviewer-icon.png" width={64} height={64} alt="" />
            <div className="app-entry-copy"><div className="app-title-row"><h3 id="auroraviewer-title">AuroraViewer</h3><span className="app-status">{copy.apps.available}</span></div><p>{copy.apps.description}</p><span className="app-platform">macOS</span></div>
            <a className="text-link inline-flex items-center gap-2" href={copy.apps.productPath} aria-label={copy.apps.actionAria}>{copy.apps.action} <Arrow diagonal /></a>
          </article></div>
        </div>
      </section>
      <section id="contact" className="contact-section shell section-space" aria-labelledby="contact-title">
        <div className="contact-inner grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6"><h2 id="contact-title">{copy.contact.title[0]}<br />{copy.contact.title[1]}</h2><p>{copy.contact.description}</p></div>
          <div className="contact-action lg:col-span-6 lg:justify-self-end"><a href="mailto:contact@mirinaelabs.com" className="contact-email inline-flex items-center gap-4">contact@mirinaelabs.com <Arrow diagonal /></a><span>{copy.contact.note}</span></div>
        </div>
      </section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
