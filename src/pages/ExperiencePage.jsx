import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ExperiencePage() {
  const { experience } = portfolioData;

  return (
    <div className="page-wrapper section">
      <div className="container">
        <div className="section-tag">
          <Briefcase size={14} />
          <span>02. History & Work Experience</span>
        </div>

        <h2 className="section-heading">Professional Work Experience</h2>
        <p className="section-subheading">
          Proven career track record in building scalable data pipelines, financial risk analytics, and enterprise cloud features at Genpact & Amazon.
        </p>

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item card">
              <div className="timeline-header">
                <div>
                  <h3 className="item-role">{item.role}</h3>
                  <div className="item-company">
                    <span>{item.company}</span>
                    <span className="dot-separator">•</span>
                    <span className="badge">{item.type}</span>
                  </div>
                </div>

                <div className="item-meta">
                  <span className="meta-info">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                  <span className="meta-info">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>
              </div>

              <ul className="item-bullets">
                {item.highlights.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="item-skills">
                {item.skills.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
        }

        .timeline-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .item-role {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .item-company {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .dot-separator {
          color: var(--text-muted);
        }

        .item-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .meta-info {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.825rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .item-bullets {
          padding-left: 1.25rem;
          margin-bottom: 1.25rem;
          color: var(--text-secondary);
          font-size: 0.925rem;
        }

        .item-bullets li {
          margin-bottom: 0.4rem;
          line-height: 1.55;
        }

        .item-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
