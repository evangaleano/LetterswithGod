import Image from "next/image";
import { AmazonCta } from "@/components/amazon-cta";
import { siteConfig } from "@/lib/site";

const practice = [
  { number: "01", title: "Pray", text: "Begin with honesty. Bring what is present in your heart before the Father." },
  { number: "02", title: "Be Still", text: "Release the rush. Make room for quiet, presence, and peace." },
  { number: "03", title: "Listen", text: "Notice what rises through Scripture, prayer, and the gentle work of the Spirit." },
  { number: "04", title: "Write", text: "Put the conversation on paper so you can return, remember, and respond." },
];

function CrossMark({ light = false }) {
  return <span className={`cross-mark${light ? " cross-mark-light" : ""}`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Letters With God home">
          <CrossMark />
          <span>Letters With God</span>
        </a>
        <AmazonCta
          href={siteConfig.amazonUrl}
          location="header"
          className="button button-small"
        />
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image
            src="/hero-landscape.jpg"
            alt="Sunrise breaking over quiet hills, with a cross on a distant ridge"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-wash" />
          <div className="hero-content page-shell">
            <p className="eyebrow">A guided prayer journal</p>
            <h1 id="hero-title">Make space<br />to hear Him.</h1>
            <p className="hero-tagline">Be Still. Listen. Surrender to the Father’s Guidance.</p>
            <AmazonCta href={siteConfig.amazonUrl} location="hero" />
          </div>
          <a href="#why" className="scroll-cue" aria-label="Continue to learn more">
            <span>Discover</span><span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="section section-intro" id="why" aria-labelledby="why-title">
          <div className="page-shell intro-grid">
            <div>
              <p className="eyebrow">Why Letters With God</p>
              <h2 id="why-title">Prayer was never meant to be one-sided.</h2>
            </div>
            <div className="intro-copy">
              <p className="lead">There are seasons of hardship when the words of God can feel hard to find. And many of us have yet to feel truly connected to Him at all.</p>
              <p>Letters With God offers a simple prayer practice to help you connect with, hear, and transcribe the voice of God, so you can come to know Him, and be known.</p>
              <div className="scripture-note">
                <CrossMark />
                <blockquote>“Be still, and know that I am God.”</blockquote>
                <cite>Psalm 46:10</cite>
              </div>
            </div>
          </div>
        </section>

        <section className="section journal-section" id="inside" aria-labelledby="inside-title">
          <div className="page-shell journal-grid">
            <div className="journal-image-wrap">
              <Image
                src="/journal-open-actual-pages.jpg"
                alt="An open Letters With God journal showing the guided prayer page on the left and a lined reflection page on the right"
                width={1456}
                height={1092}
                sizes="(max-width: 800px) 100vw, 52vw"
                className="journal-image"
              />
              <span className="image-caption">A quiet place for prayer, reflection, and response.</span>
            </div>
            <div className="journal-copy">
              <p className="eyebrow">Inside the journal</p>
              <h2 id="inside-title">Enough guidance to begin. Enough space to make it yours.</h2>
              <p>Thoughtful prompts lead you into prayer without prescribing what the conversation should be. The uncluttered pages invite you to notice, listen, and write with freedom.</p>
              <ul className="feature-list">
                <li>Guided prayer and reflection prompts</li>
                <li>Open writing space for honest conversation</li>
                <li>A repeatable practice for everyday faith</li>
              </ul>
              <AmazonCta href={siteConfig.amazonUrl} location="inside_journal" />
            </div>
          </div>
        </section>

        <section className="section practice-section" id="practice" aria-labelledby="practice-title">
          <div className="page-shell">
            <p className="eyebrow">How it works</p>
            <h2 id="practice-title">A gentle rhythm for meeting with God.</h2>
            <ol className="practice-grid">
              {practice.map((step) => (
                <li key={step.title} className="practice-card">
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section community-section" id="community" aria-labelledby="community-title">
          <div className="page-shell community-inner">
            <CrossMark light />
            <p className="eyebrow">#LettersWithGod</p>
            <h2 id="community-title">Every page holds a story<br />{" "}of faith in motion.</h2>
            <p>Share a glimpse of your journaling practice with <strong>#LettersWithGod</strong> and encourage someone else to make space for the Father’s voice.</p>
            <p className="community-note">Your story can stay as private as prayer, or become a light for another person.</p>
          </div>
        </section>

        <section className="section final-section" id="get-journal" aria-labelledby="final-title">
          <div className="page-shell final-inner">
            <p className="eyebrow">Keep returning</p>
            <h2 id="final-title">When the final page is filled,<br />{" "}begin another conversation.</h2>
            <p>Order your first journal, or place a fresh one beside the finished volumes that already hold your prayers.</p>
            <AmazonCta href={siteConfig.amazonUrl} location="final" />
            <span className="amazon-note">Available through Amazon</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a className="brand footer-brand" href="#top"><CrossMark /><span>Letters With God</span></a>
          <p>Be still. Listen. Write what matters.</p>
          <p className="copyright">© {new Date().getFullYear()} Letters With God</p>
        </div>
      </footer>
    </>
  );
}
