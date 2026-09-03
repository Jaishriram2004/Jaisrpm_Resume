import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Cpu, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [project]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge category-badge">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-description">{project.description}</p>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <Zap size={15} />
                <span>Performance & Impact Metrics</span>
              </h4>
              <div className="metrics-list">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-pill">
                    <CheckCircle size={14} className="metric-icon" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={15} />
              <span>Technology Architecture</span>
            </h4>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={16} />
              <span>Repository</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== '' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Live Application</span>
              <ExternalLink size={15} />
            </a>
          )}
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            <span>Close Case Study</span>
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-hover);
          border-radius: 14px;
          max-width: 620px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .category-badge {
          margin-bottom: 0.5rem;
        }

        .modal-title {
          font-size: 1.4rem;
          font-weight: 800;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 6px;
          transition: color var(--transition-fast);
        }

        .close-btn:hover {
          color: var(--text-primary);
        }

        .modal-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .modal-section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .metrics-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .metric-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.825rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          color: var(--text-primary);
        }

        .metric-icon {
          color: var(--badge-green-text);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--border-color);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          border-bottom-left-radius: 14px;
          border-bottom-right-radius: 14px;
        }
      `}</style>
    </div>
  );
}

