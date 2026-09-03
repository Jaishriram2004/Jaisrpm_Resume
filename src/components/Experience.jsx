import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Experience() {
  const [activeTab, setActiveTab] = useState('work');
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-tag">
          <Briefcase size={14} />
          <span>02. History & Track Record</span>
        </div>

        <div className="experience-header">
          <div>
            <h2 className="section-heading">Experience & Education</h2>
            <p className="section-subheading">
              Proven career progression in building scalable web software and developer tools.
            </p>
          </div>

          {/* Filter Tab Buttons */}
          <div className="tab-switch">
            <button
              onClick={() => setActiveTab('work')}
              className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            >
              <Briefcase size={15} />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            >
              <GraduationCap size={15} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        {activeTab === 'work' ? (
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
        ) : (
          <div className="timeline">
            {education.map((item, idx) => (
              <div key={idx} className="timeline-item card">
                <div className="timeline-header">
                  <div>
                    <h3 className="item-role">{item.degree}</h3>
                    <div className="item-company">{item.institution}</div>
                  </div>
                  <div className="item-meta">
                    <span className="meta-info">
                      <Calendar size={14} />
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="item-details">{item.details}</p>
                <div className="item-grade badge">{item.grade}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .experience-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .tab-switch {
          display: flex;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          padding: 0.25rem;
          border-radius: 10px;
          margin-bottom: 2rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          border-radius: 7px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tab-btn.active {
          background: var(--bg-elevated);
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
        }

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
          font-size: 1.2rem;
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
          line-height: 1.5;
        }

        .item-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .item-details {
          font-size: 0.925rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .item-grade {
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
}
