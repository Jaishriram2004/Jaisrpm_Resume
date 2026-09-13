import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { EducationModal } from './EducationModal';
import { ExperienceModal } from './ExperienceModal';

export function Experience() {
  const [activeTab, setActiveTab] = useState('work');
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [selectedExp, setSelectedExp] = useState(null);
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
              <div
                key={item.id}
                className="timeline-item card exp-card-interactive"
                onClick={() => setSelectedExp(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedExp(item)}
              >
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
                    <div className="exp-arrow-badge" title="View Key Improvements & Milestones">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                <ul className="item-bullets">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                <div className="exp-card-bottom-row">
                  <div className="item-skills">
                    {item.skills.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {item.majorMilestones && (
                    <div className="exp-milestone-btn">
                      <Sparkles size={13} />
                      <span>Key Improvements & Milestones</span>
                      <ArrowUpRight size={13} className="btn-arrow" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="timeline">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="timeline-item card education-item-interactive"
                onClick={() => setSelectedEdu(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedEdu(item)}
              >
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
                    <div className="edu-arrow-badge" title="View detailed achievements & certificate">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                <p className="item-details">{item.details}</p>

                <div className="edu-card-footer">
                  <div className="item-grade badge">{item.grade}</div>
                  <div className="edu-view-proof-btn">
                    <Sparkles size={13} />
                    <span>View Key Highlights</span>
                    <ArrowUpRight size={13} className="hint-arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}        <EducationModal
          educationItem={selectedEdu}
          onClose={() => setSelectedEdu(null)}
        />

        <ExperienceModal
          experienceItem={selectedExp}
          onClose={() => setSelectedExp(null)}
        />
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
          border-radius: 8px;
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

        .education-item-interactive, .exp-card-interactive {
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.3s ease,
                      background 0.25s ease;
          position: relative;
        }

        .education-item-interactive:hover, .exp-card-interactive:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.45);
          background: linear-gradient(180deg, rgba(24, 24, 27, 0.95) 0%, rgba(18, 18, 21, 0.98) 100%);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(16, 185, 129, 0.15);
        }

        .edu-arrow-badge, .exp-arrow-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          margin-left: 0.75rem;
        }

        .education-item-interactive:hover .edu-arrow-badge,
        .exp-card-interactive:hover .exp-arrow-badge {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.5);
          color: #10b981;
          transform: translate(2px, -2px) scale(1.08);
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.35);
        }

        .edu-card-footer, .exp-card-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.5rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .edu-view-proof-btn, .exp-milestone-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--badge-green-text);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--badge-green-border);
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          transition: all 0.25s ease;
        }

        .education-item-interactive:hover .edu-view-proof-btn,
        .exp-card-interactive:hover .exp-milestone-btn {
          background: rgba(16, 185, 129, 0.18);
          border-color: rgba(16, 185, 129, 0.6);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
          color: #ffffff;
        }

        .hint-arrow, .btn-arrow {
          transition: transform 0.25s ease;
        }

        .education-item-interactive:hover .hint-arrow,
        .exp-card-interactive:hover .btn-arrow {
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
}
