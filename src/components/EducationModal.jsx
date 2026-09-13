import React, { useEffect, useState } from 'react';
import { X, Trophy, Users, Award, ExternalLink, Calendar, GraduationCap, FileText } from 'lucide-react';

export function EducationModal({ educationItem, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (educationItem) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [educationItem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else if (onClose) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedImage]);

  if (!educationItem) return null;

  const highlights = educationItem.highlights || [];

  return (
    <>
      <div className="edu-modal-backdrop" onClick={onClose}>
        <div className="edu-modal-card" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="edu-modal-header">
            <div className="edu-modal-header-text">
              <div className="edu-modal-badge-row">
                <span className="badge category-badge">
                  <GraduationCap size={13} />
                  <span>Academic Profile & Highlights</span>
                </span>
                <span className="status-badge edu-status-badge">{educationItem.grade}</span>
              </div>
              <h2 className="edu-modal-title">{educationItem.degree}</h2>
              <div className="edu-modal-institution">
                <span>{educationItem.institution}</span>
                <span className="dot-separator">•</span>
                <span className="edu-modal-period mono">{educationItem.period}</span>
              </div>
            </div>
            <button className="edu-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="edu-modal-body">
            {/* Key Milestones & Roles */}
            <div className="edu-milestones-section">
              <h3 className="edu-section-title">
                <Trophy size={16} className="edu-title-icon" />
                <span>Academic Highlights & Leadership</span>
              </h3>

              <div className="edu-milestones-list">
                {highlights.map((h, idx) => {
                  const isAward = h.type === 'award';
                  const isLeadership = h.type === 'leadership';
                  const isCompetition = h.type === 'competition';

                  return (
                    <div key={idx} className={`edu-milestone-item card ${isAward ? 'highlight-award' : ''}`}>
                      <div className="milestone-top">
                        <div className="milestone-icon-wrapper">
                          {isAward && <Trophy size={18} className="milestone-icon award-icon" />}
                          {isCompetition && <Award size={18} className="milestone-icon comp-icon" />}
                          {isLeadership && <Users size={18} className="milestone-icon lead-icon" />}
                        </div>
                        <div className="milestone-content">
                          <div className="milestone-badge-row">
                            <span className="badge milestone-badge mono">
                              {isAward && 'Department Recognition'}
                              {isCompetition && 'National Level Win'}
                              {isLeadership && 'Leadership Role'}
                            </span>
                          </div>
                          <h4 className="milestone-title">{h.title}</h4>
                          <p className="milestone-desc">{h.description}</p>

                          {/* Click here link below the explanation */}
                          {h.certificateImage && (
                            <div className="cert-link-box">
                              <button
                                type="button"
                                className="cert-inline-btn"
                                onClick={() => setSelectedImage(h.certificateImage)}
                                title="Click to view certificate proof"
                              >
                                <FileText size={14} className="cert-btn-icon" />
                                <span>Click here to view certificate</span>
                                <ExternalLink size={13} className="cert-btn-arrow" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="edu-modal-footer">
            <button onClick={onClose} className="btn btn-secondary btn-sm">
              <span>Close Record</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Image Modal */}
      {selectedImage && (
        <div className="cert-lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="cert-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close certificate preview"
            >
              <X size={22} />
            </button>
            <img src={selectedImage} alt="Certificate of Appreciation" className="cert-lightbox-img" />
            <div className="cert-lightbox-footer">
              <a
                href={selectedImage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Open full-res in new tab</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .edu-modal-backdrop {
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
          animation: fadeIn 0.2s ease-out;
        }

        .edu-modal-card {
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
          animation: slideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .edu-modal-header {
          padding: 1.75rem 1.75rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .edu-modal-badge-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;
        }

        .edu-modal-badge-row .category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(16, 185, 129, 0.12);
          color: var(--badge-green-text);
          border: 1px solid var(--badge-green-border);
        }

        .edu-status-badge {
          font-size: 0.8rem;
          padding: 0.2rem 0.6rem;
        }

        .edu-modal-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 0.35rem;
        }

        .edu-modal-institution {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .edu-modal-period {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .edu-close-btn {
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

        .edu-close-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
          background: var(--bg-surface);
          transform: scale(1.05);
        }

        .edu-modal-body {
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .edu-section-title {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .edu-title-icon {
          color: var(--badge-green-text);
        }

        .edu-milestones-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .edu-milestone-item {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .edu-milestone-item.highlight-award {
          border-color: rgba(16, 185, 129, 0.4);
          background: linear-gradient(180deg, rgba(24, 24, 27, 0.9) 0%, rgba(18, 18, 21, 0.95) 100%);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.08);
        }

        .milestone-top {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .milestone-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .award-icon { color: #10b981; }
        .comp-icon { color: #06b6d4; }
        .lead-icon { color: #8b5cf6; }

        .milestone-content {
          flex: 1;
        }

        .milestone-badge-row {
          margin-bottom: 0.35rem;
        }

        .milestone-badge {
          font-size: 0.72rem;
          padding: 0.15rem 0.5rem;
        }

        .milestone-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
          line-height: 1.3;
        }

        .milestone-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Inline Click-here link styling */
        .cert-link-box {
          margin-top: 0.85rem;
        }

        .cert-inline-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--badge-green-text);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid var(--badge-green-border);
          padding: 0.4rem 0.85rem;
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: inherit;
        }

        .cert-inline-btn:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: rgba(16, 185, 129, 0.65);
          transform: translateY(-1.5px);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);
          color: #ffffff;
        }

        .cert-btn-icon {
          color: var(--badge-green-text);
        }

        .cert-btn-arrow {
          transition: transform 0.25s ease;
        }

        .cert-inline-btn:hover .cert-btn-arrow {
          transform: translate(2px, -2px);
        }

        .edu-modal-footer {
          padding: 1.25rem 1.75rem;
          border-top: 1px solid var(--border-color);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }

        /* Lightbox modal */
        .cert-lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease;
        }

        .cert-lightbox-container {
          position: relative;
          max-width: 880px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .cert-lightbox-close {
          position: absolute;
          top: -2.75rem;
          right: 0;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .cert-lightbox-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .cert-lightbox-img {
          width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .cert-lightbox-footer {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .edu-modal-header {
            padding: 1.25rem;
          }
          .edu-modal-body {
            padding: 1.25rem;
          }
          .milestone-top {
            flex-direction: column;
            gap: 0.75rem;
          }
          .milestone-icon-wrapper {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </>
  );
}
