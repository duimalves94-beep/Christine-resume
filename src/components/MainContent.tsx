import { useState, type ReactNode } from "react";
import type { ResumeContent, SectionId } from "../data/resume";
import { IconExternal } from "./Icons";

type DetailContent = {
  title: string;
  meta?: string;
  image?: string;
  imageType?: "photo" | "logo";
  items: readonly string[];
  tags?: readonly string[];
};

function Section({
  id,
  title,
  detailLabel,
  onDetails,
  children,
}: {
  id: SectionId;
  title: string;
  detailLabel: string;
  onDetails: () => void;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="section__head">
        <h2 className="section__title">{title}</h2>
        <button type="button" className="detail-button" onClick={onDetails}>
          {detailLabel}
        </button>
      </div>
      {children}
    </section>
  );
}

function DetailModal({
  content,
  closeLabel,
  detailTitle,
  onClose,
}: {
  content: DetailContent;
  closeLabel: string;
  detailTitle: string;
  onClose: () => void;
}) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="detail-modal__head">
          {content.image && (
            <div
              className={`detail-modal__cover ${
                content.imageType === "logo" ? "detail-modal__cover--logo" : ""
              }`}
              style={{ backgroundImage: `url(${content.image})` }}
              aria-hidden
            />
          )}
          <div>
            <p className="eyebrow">{detailTitle}</p>
            <h3 id="detail-modal-title">{content.title}</h3>
            {content.meta && <p>{content.meta}</p>}
          </div>
          <button type="button" className="modal-close" onClick={onClose}>
            {closeLabel}
          </button>
        </div>
        <ul className="detail-modal__list">
          {content.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {content.tags && (
          <ul className="project-card__tech detail-modal__tags">
            {content.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

type MainContentProps = {
  content: ResumeContent;
  activeSection: SectionId;
};

export function MainContent({ content, activeSection }: MainContentProps) {
  const [detailContent, setDetailContent] = useState<DetailContent | null>(null);
  const {
    about,
    certifications,
    education,
    experience,
    labels,
    profile,
    projects,
    skillGroups,
    strengths,
    summaryCards,
  } = content;

  const getSectionDetail = (): DetailContent => {
    switch (activeSection) {
      case "profile":
        return {
          title: labels.profile,
          meta: labels.eyebrow,
          items: [
            about,
            ...summaryCards.map((card) => `${card.value} ${card.label}: ${card.description}`),
          ],
        };
      case "strengths":
        return {
          title: labels.strengths,
          items: strengths.map((strength) => `${strength.title}: ${strength.description}`),
          tags: strengths.flatMap((strength) => strength.keywords),
          image: strengths[0]?.image,
        };
      case "experience":
        return {
          title: labels.experience,
          items: experience.flatMap((job) => [
            `${job.role} · ${job.company} · ${job.period}`,
            ...job.highlights,
          ]),
          image: experience[0]?.image,
        };
      case "projects":
        return {
          title: labels.projects,
          items: projects.flatMap((project) => [
            `${project.name} · ${project.role} · ${project.period}`,
            project.description,
            ...project.highlights,
          ]),
          image: projects[0]?.image,
        };
      case "skills":
        return {
          title: labels.skills,
          items: skillGroups.map((group) => `${group.category}: ${group.items.join(", ")}`),
          tags: certifications,
        };
      case "education":
        return {
          title: labels.education,
          items: education.flatMap((edu) => [
            `${edu.degree} · ${edu.school} · ${edu.period}`,
            ...edu.details,
          ]),
          image: education[0]?.image,
          imageType: "logo",
        };
      case "contact":
        return {
          title: labels.contact,
          items: [`${labels.contactText} ${profile.email}`],
        };
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <Section
            id="profile"
            title={labels.profile}
            detailLabel={labels.detailButton}
            onDetails={() => setDetailContent(getSectionDetail())}
          >
        <div className="intro-panel">
          <p className="eyebrow">{labels.eyebrow}</p>
          <p className="prose prose--large">{about}</p>
          <ul className="metric-grid" aria-label={labels.metrics}>
            {summaryCards.map((card) => (
              <li key={card.label} className="metric-card">
                <strong>{card.value}</strong>
                <span>{card.label}</span>
                <p>{card.description}</p>
              </li>
            ))}
          </ul>
        </div>
          </Section>
        );

      case "strengths":
        return (
          <Section
            id="strengths"
            title={labels.strengths}
            detailLabel={labels.detailButton}
            onDetails={() => setDetailContent(getSectionDetail())}
          >
        <ul className="strength-grid">
          {strengths.map((strength) => (
            <li key={strength.title} className="strength-card">
              <div
                className="card-cover"
                style={{ backgroundImage: `url(${strength.image})` }}
                aria-hidden
              />
              <h3>{strength.title}</h3>
              <ul className="mini-tags">
                {strength.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
              <button
                type="button"
                className="card-detail-button"
                onClick={() =>
                  setDetailContent({
                    title: strength.title,
                    image: strength.image,
                    items: [strength.description],
                    tags: strength.keywords,
                  })
                }
              >
                {labels.detailButton}
              </button>
            </li>
          ))}
        </ul>
          </Section>
        );

      case "experience":
        return (
          <Section
            id="experience"
            title={labels.experience}
            detailLabel={labels.detailButton}
            onDetails={() => setDetailContent(getSectionDetail())}
          >
        <ul className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}-${job.period}`} className="timeline__item">
              <div
                className="card-cover card-cover--wide"
                style={{ backgroundImage: `url(${job.image})` }}
                aria-hidden
              />
              <div className="timeline__head">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">
                    {job.company}
                    {job.location && <span> · {job.location}</span>}
                  </p>
                </div>
                <time className="timeline__period">{job.period}</time>
              </div>
              <p className="timeline__focus">{job.focus}</p>
              <ul className="timeline__bullets">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <button
                type="button"
                className="card-detail-button"
                onClick={() =>
                  setDetailContent({
                    title: job.role,
                    meta: `${job.company} · ${job.location} · ${job.period}`,
                    image: job.image,
                    items: job.highlights,
                  })
                }
              >
                {labels.detailButton}
              </button>
            </li>
          ))}
        </ul>
          </Section>
        );

      case "projects":
        return (
          <Section
            id="projects"
            title={labels.projects}
            detailLabel={labels.detailButton}
            onDetails={() => setDetailContent(getSectionDetail())}
          >
        <ul className="project-grid">
          {projects.map((project) => (
            <li key={project.name} className="project-card">
              <div
                className="card-cover card-cover--wide"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden
              />
              <div className="project-card__head">
                <div>
                  <h3>{project.name}</h3>
                  <p className="project-card__meta">
                    {project.role} · {project.period}
                  </p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.name}
                  >
                    <IconExternal className="icon-sm" />
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              <ul className="project-card__bullets">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="project-card__tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <button
                type="button"
                className="card-detail-button"
                onClick={() =>
                  setDetailContent({
                    title: project.name,
                    meta: `${project.role} · ${project.period}`,
                    image: project.image,
                    items: [project.description, ...project.highlights],
                    tags: project.tech,
                  })
                }
              >
                {labels.detailButton}
              </button>
            </li>
          ))}
        </ul>
          </Section>
        );

      case "skills":
        return (
          <Section
            id="skills"
            title={labels.skills}
            detailLabel={labels.detailButton}
            onDetails={() => setDetailContent(getSectionDetail())}
          >
        <div className="skill-group-grid">
          {skillGroups.map((group) => (
            <article key={group.category} className="skill-group">
              <h3>{group.category}</h3>
              <ul className="skill-tags">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="certification-card">
          <span>{labels.certification}</span>
          <strong>{certifications.join(" · ")}</strong>
        </div>
          </Section>
        );

      case "education":
        return (
          <Section
            id="education"
            title={labels.education}
            detailLabel={labels.detailButton}
            onDetails={() => setDetailContent(getSectionDetail())}
          >
        <ul className="edu-list">
          {education.map((edu) => (
            <li key={edu.school} className="edu-list__item">
              <div
                className="edu-list__logo"
                style={{ backgroundImage: `url(${edu.image})` }}
                aria-label={`${edu.school} logo`}
                role="img"
              />
              <div>
                <h3>{edu.degree}</h3>
                <p>
                  {edu.school}
                  {edu.location && <span> · {edu.location}</span>}
                </p>
                <ul>
                  {edu.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
              <time>{edu.period}</time>
              <button
                type="button"
                className="card-detail-button"
                onClick={() =>
                  setDetailContent({
                    title: edu.school,
                    meta: `${edu.degree} · ${edu.period}`,
                    image: edu.image,
                    imageType: "logo",
                    items: edu.details,
                  })
                }
              >
                {labels.detailButton}
              </button>
            </li>
          ))}
        </ul>
          </Section>
        );

      case "contact":
        return (
          <Section
            id="contact"
            title={labels.contact}
            detailLabel={labels.detailButton}
            onDetails={() => setDetailContent(getSectionDetail())}
          >
        <p className="prose contact-block">
          {labels.contactText}{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.phone && (
            <>
              ，{labels.phone} <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </>
          )}
          。
        </p>
          </Section>
        );
    }
  };

  return (
    <main className="main">
      <div key={activeSection}>{renderSection()}</div>
      {detailContent && (
        <DetailModal
          content={detailContent}
          closeLabel={labels.close}
          detailTitle={labels.detailHighlights}
          onClose={() => setDetailContent(null)}
        />
      )}
    </main>
  );
}
