import "./App.css";
import { useEffect } from "react";
import { siteCopy } from "./content/siteCopy";

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.name = "description";
    document.head.appendChild(tag);
  }

  tag.content = content;
}

export default function App() {
  // Set <title> + <meta name="description"> from siteCopy.meta
  useEffect(() => {
    document.title = siteCopy.meta.title;
    setMetaDescription(siteCopy.meta.description);
  }, []);

  return (
    <main className="app vault density-compact hero-panel">
      <header className="hero">
        <div className="heroMeta">
          <span className="heroPill">{siteCopy.hero.pill}</span>
          {" "}
          <span className="heroMetaText">{siteCopy.hero.kicker}</span>
        </div>

        <h1 className="heroTitle">{siteCopy.hero.headline}</h1>
        <p className="heroSub">{siteCopy.hero.subhead}</p>
        <p className="heroTrust">{siteCopy.hero.trust}</p>

        <div className="ctaRow">
          <a className="btnPrimary" href="#contact">
            {siteCopy.hero.ctaPrimary}
          </a>
          <a className="btnGhost" href="#deliverables">
            {siteCopy.hero.ctaSecondary}
          </a>
        </div>
      </header>

      <section className="section">
        <h2>{siteCopy.problem.title}</h2>
        {siteCopy.problem.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <ul className="bullets">
          {siteCopy.problem.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>{siteCopy.pilot.title}</h2>
        <p className="sectionLead">{siteCopy.pilot.oneLiner}</p>
        {siteCopy.pilot.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section id="deliverables" className="section">
        <h2>{siteCopy.deliverables.title}</h2>
        <ul className="bullets">
          {siteCopy.deliverables.items.map((item, i) => (
            <li key={i}>
              <strong>{item.title}:</strong> {item.desc}
            </li>
          ))}
        </ul>
        <p className="sectionFaint">{siteCopy.deliverables.close}</p>
      </section>

      <section className="section">
        <h2>{siteCopy.process.title}</h2>
        <ul className="bullets">
          {siteCopy.process.steps.map((s, i) => (
            <li key={i}>
              <strong>{s.title}:</strong> {s.desc}
            </li>
          ))}
        </ul>

        <p className="sectionLabel">{siteCopy.process.inputsTitle}</p>
        <ul className="bullets">
          {siteCopy.process.inputs.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>{siteCopy.who.title}</h2>
        {siteCopy.who.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className="section">
        <h2>{siteCopy.why.title}</h2>
        {siteCopy.why.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className="section">
        <h2>{siteCopy.faq.title}</h2>
        {siteCopy.faq.items.map((f, i) => (
          <details key={i} className="faqItem">
            <summary className="faqQ">{f.q}</summary>
            <p className="faqA">{f.a}</p>
          </details>
        ))}
      </section>

      <section id="contact" className="section">
        <h2>{siteCopy.contact.title}</h2>
        {siteCopy.contact.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="sectionFaint">
          Email: <strong>{siteCopy.contact.email}</strong>
        </p>
      </section>

      <footer className="footer">
        <p>{siteCopy.footer.left}</p>
        <p>{siteCopy.footer.middle}</p>
        <p>{siteCopy.footer.right}</p>
      </footer>
    </main>
  );
}


