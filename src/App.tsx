import { useState, type CSSProperties } from "react";
import { MainContent } from "./components/MainContent";
import type { Language, SectionId } from "./data/resume";
import { languageLabels, resumeContent } from "./data/resume";

export default function App() {
  const [language, setLanguage] = useState<Language>("zh");
  const [activeSection, setActiveSection] = useState<SectionId>("profile");
  const content = resumeContent[language];
  const { navItems, profile } = content;
  const midpoint = Math.ceil(navItems.length / 2);
  const leftItems = navItems.slice(0, midpoint);
  const rightItems = navItems.slice(midpoint);

  return (
    <div className="layout">
      <div className="top-language-switch" aria-label="Language switcher">
        {(["zh", "en"] as const).map((item) => (
          <button
            key={item}
            type="button"
            className={item === language ? "is-active" : ""}
            onClick={() => setLanguage(item)}
          >
            {languageLabels[item]}
          </button>
        ))}
      </div>

      <section className="hero-shell">
        <div className="hero-bg" aria-hidden />
        <div className="floating-orbs" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="hero-content">
          <p className="hero-kicker">{content.labels.eyebrow}</p>
          <h1>
            {language === "zh" ? "你好，我是" : "Hi, I am"}{" "}
            <span>{profile.name}</span>
          </h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-nav-grid" aria-label="Resume sections">
            <div className="hero-nav hero-nav--left">
              {leftItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === activeSection ? "is-active" : ""}
                  onClick={() => setActiveSection(item.id as SectionId)}
                  style={{ "--i": index } as CSSProperties}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hero-avatar-card">
              <div className="hero-avatar">
                {profile.avatar ? <img src={profile.avatar} alt={profile.name} /> : profile.name.charAt(0)}
              </div>
              <h2>
                {profile.name}
                <span>{profile.nameZh}</span>
              </h2>
              <p>{profile.location}</p>
            </div>

            <div className="hero-nav hero-nav--right">
              {rightItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === activeSection ? "is-active" : ""}
                  onClick={() => setActiveSection(item.id as SectionId)}
                  style={{ "--i": index } as CSSProperties}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MainContent content={content} activeSection={activeSection} />
    </div>
  );
}
