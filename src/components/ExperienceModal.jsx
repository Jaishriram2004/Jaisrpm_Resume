import React, { useEffect } from 'react';
import { X, Briefcase, Zap, TrendingUp, CheckCircle2, ShieldCheck, MapPin, Calendar } from 'lucide-react';

export function ExperienceModal({ experienceItem, onClose }) {
  useEffect(() => {
    if (experienceItem) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [experienceItem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!experienceItem) return null;

  const milestones = experienceItem.majorMilestones || [];

  return (
    <div className="exp-modal-backdrop" onClick={onClose}>
      <div className="exp-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="exp-modal-header">
          <div className="exp-modal-header-text">
            <div className="exp-modal-badge-row">
              <span className="badge category-badge">
                <Briefcase size={13} />
                <span>Enterprise Track Record</span>
              </span>
              <span className="status-badge exp-status-badge">{experienceItem.type}</span>
            </div>
            <h2 className="exp-modal-title">{experienceItem.role}</h2>
            <div className="exp-modal-company-row">
              <span className="exp-company-name">{experienceItem.company}</span>
              <span className="dot-separator">•</span>
              <span className="exp-meta-item mono">
                <Calendar size={13} />
                {experienceItem.period}
              </span>
              <span className="dot-separator">•</span>
              <span className="exp-meta-item">
                <MapPin size={13} />
                {experienceItem.location}
              </span>
            </div>
          </div>
          <button className="exp-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="exp-modal-body">
          {/* Section Heading */}
          <div className="exp-section-header">
            <Zap size={16} className="exp-section-icon" />
            <h3 className="exp-section-title">Key Improvements & Major Milestones</h3>
          </div>

          {/* Milestones List */}
          <div className="exp-milestones-list">
            {milestones.map((m, idx) => (
              <div key={idx} className="card exp-milestone-card">
                <div className="milestone-card-top">
                  <div className="milestone-badge-group">
                    <span className="badge milestone-num mono">0{idx + 1}</span>
                    <span className="badge milestone-cat">{m.category}</span>
                  </div>
                  {m.impact && (
                    <span className="impact-pill mono">
                      <TrendingUp size={13} />
                      <span>{m.impact}</span>
                    </span>
                  )}
                </div>

                <h4 className="milestone-card-title">{m.title}</h4>
                <p className="milestone-card-desc">{m.description}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          {experienceItem.skills && experienceItem.skills.length > 0 && (
            <div className="exp-tech-section">
              <span className="exp-tech-label">Technologies & Frameworks:</span>
              <div className="exp-tech-tags">
                {experienceItem.skills.map((s) => (
                  <span key={s} className="badge exp-skill-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="exp-modal-footer">
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            <span>Close Milestone View</span>
          </button>
        </div>
      </div>

      <style>{`
        .exp-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: expFadeIn 0.2s ease-out;
        }

        .exp-modal-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-hover);
          border-radius: 16px;
          max-width: 680px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 25px rgba(16, 185, 129, 0.12);
          display: flex;
          flex-direction: column;
          position: relative;
          animation: expSlideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes expFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes expSlideUp {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .exp-modal-header {
          padding: 1.75rem 1.75rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .exp-modal-badge-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .exp-modal-badge-row .category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(16, 185, 129, 0.12);
          color: var(--badge-green-text);
          border: 1px solid var(--badge-green-border);
        }

        .exp-status-badge {
          font-size: 0.775rem;
          padding: 0.2rem 0.55rem;
        }

        .exp-modal-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 0.35rem;
        }

        .exp-modal-company-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }

        .exp-company-name {
          font-weight: 700;
          color: var(--text-primary);
        }

        .exp-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .exp-close-btn {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          cursor: pointer;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .exp-close-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
          background: var(--bg-surface);
          transform: scale(1.05);
        }

        .exp-modal-body {
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .exp-section-header {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.25rem;
        }

        .exp-section-icon {
          color: var(--badge-green-text);
        }

        .exp-section-title {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .exp-milestones-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exp-milestone-card {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .exp-milestone-card:hover {
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.4);
        }

        .milestone-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .milestone-badge-group {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .milestone-num {
          font-size: 0.75rem;
          font-weight: 800;
          color: #10b981;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .milestone-cat {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .impact-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
        }

        .milestone-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          line-height: 1.35;
        }

        .milestone-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .exp-tech-section {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .exp-tech-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .exp-skill-badge {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          font-size: 0.78rem;
          padding: 0.25rem 0.6rem;
        }

        .exp-modal-footer {
          padding: 1.25rem 1.75rem;
          border-top: 1px solid var(--border-color);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
      `}</style>
    </div>
  );
}
