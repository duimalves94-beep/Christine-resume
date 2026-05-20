import type { ResumeContent, SectionId } from "../data/resume";
import { IconBlog, IconGithub, IconLinkedIn, IconMail } from "./Icons";

const linkIcons = {
  github: IconGithub,
  linkedin: IconLinkedIn,
  blog: IconBlog,
} as const;

type SidebarProps = {
  content: ResumeContent;
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
};

export function Sidebar({ content, activeSection, onSectionChange }: SidebarProps) {
  const { profile, navItems } = content;

  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <header className="sidebar__hero">
          <div className="avatar" aria-hidden>
            {profile.avatar ? (
              <img src={profile.avatar} alt="" />
            ) : (
              <span>{profile.name.charAt(0)}</span>
            )}
          </div>
          <h1 className="sidebar__name">
            {profile.name}
            {profile.nameZh && (
              <span className="sidebar__name-zh"> {profile.nameZh}</span>
            )}
          </h1>
          <p className="sidebar__title">{profile.title}</p>
          <p className="sidebar__tagline">{profile.tagline}</p>
          <p className="sidebar__location">{profile.location}</p>
        </header>

        <nav className="sidebar__nav" aria-label="页面导航">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={item.id === activeSection ? "is-active" : ""}
                  onClick={() => onSectionChange(item.id as SectionId)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="sidebar__footer">
          <a href={`mailto:${profile.email}`} className="contact-link">
            <IconMail className="icon-sm" />
            {profile.email}
          </a>
          <div className="social-links">
            {profile.links.map((link) => {
              const Icon = linkIcons[link.icon as keyof typeof linkIcons] ?? IconBlog;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Icon className="icon-sm" />
                </a>
              );
            })}
          </div>
        </footer>
      </div>
    </aside>
  );
}
