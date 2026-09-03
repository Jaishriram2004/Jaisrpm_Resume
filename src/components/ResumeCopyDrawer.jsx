import React, { useState, useEffect } from 'react';
import { X, Copy, Check, FileText, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ResumeCopyDrawer({ isOpen, onClose }) {
  const [copiedFormat, setCopiedFormat] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [isOpen]);

  if (!isOpen) return null;

  const { personal, experience, education, skills, achievements, publications, projects } = portfolioData;

  const plainTextResume = `
${personal.name}
${personal.location} | ${personal.email} | ${personal.phone}
GitHub: ${personal.github} | LeetCode: ${personal.leetcode} | LinkedIn: ${personal.linkedin}

PROFESSIONAL SUMMARY
${personal.bio}

EXPERIENCE
${experience
  .map(
    (exp) => `
${exp.role} — ${exp.company} (${exp.location})
Period: ${exp.period} | Type: ${exp.type}
${exp.highlights.map((h) => `• ${h}`).join('\n')}
Skills: ${exp.skills.join(', ')}
`
  )
  .join('\n')}

EDUCATION
${education
  .map(
    (edu) => `
${edu.degree} — ${edu.institution}
Period: ${edu.period} | ${edu.grade}
${edu.details}
`
  )
  .join('\n')}

PUBLICATIONS & ACHIEVEMENTS
${publications.map((p) => `• ${p.title} (${p.date}) — ${p.publisher}`).join('\n')}
${achievements.map((a) => `• ${a.title} — ${a.organization}`).join('\n')}

PROJECTS
${projects
  .map(
    (p) => `
${p.title} (${p.category})
${p.description}
Key Metrics: ${p.metrics.join(' | ')}
Tools Used: ${p.tech.join(', ')}
`
  )
  .join('\n')}

TECHNICAL SKILLS
${skills.map((s) => `${s.category}: ${s.items.map((i) => i.name).join(', ')}`).join('\n')}
`.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopiedFormat('text');
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleDownloadFile = (ext) => {
    const filename = `Jaishriram_PM_Resume.${ext}`;
    const blob = new Blob([plainTextResume], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-card" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="header-title-row">
            <FileText size={18} />
            <h3 className="drawer-title">Plain Text & ATS Resume Export</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="drawer-body">
          <p className="drawer-sub">
            Copy clean formatted plain-text resume content directly into applicant tracking systems (ATS), email applications, or download as a text document.
          </p>

          <div className="copy-action-row">
            <button onClick={handleCopyText} className="btn btn-primary btn-sm">
              {copiedFormat === 'text' ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedFormat === 'text' ? 'Copied Plain Text!' : 'Copy Plain Text'}</span>
            </button>
            <button onClick={() => handleDownloadFile('txt')} className="btn btn-secondary btn-sm">
              <Download size={15} />
              <span>Download .txt</span>
            </button>
            <button onClick={() => handleDownloadFile('md')} className="btn btn-secondary btn-sm">
              <Download size={15} />
              <span>Download .md</span>
            </button>
          </div>

          <div className="resume-preview-box mono">
            <pre>{plainTextResume}</pre>
          </div>
        </div>

        <style>{`
          .drawer-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(6px);
            z-index: 250;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
          }

          .drawer-card {
            background: var(--bg-surface);
            border: 1px solid var(--border-hover);
            border-radius: 12px;
            max-width: 640px;
            width: 100%;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            box-shadow: var(--shadow-lg);
            overflow: hidden;
          }

          .drawer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
          }

          .header-title-row {
            display: flex;
            align-items: center;
            gap: 0.6rem;
          }

          .drawer-title {
            font-size: 1.15rem;
            font-weight: 700;
          }

          .drawer-body {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow-y: auto;
          }

          .drawer-sub {
            font-size: 0.9rem;
            color: var(--text-secondary);
          }

          .copy-action-row {
            display: flex;
            gap: 0.6rem;
            flex-wrap: wrap;
          }

          .resume-preview-box {
            background: var(--bg-input);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1rem;
            font-size: 0.775rem;
            line-height: 1.55;
            color: var(--text-primary);
            max-height: 340px;
            overflow-y: auto;
          }

          .resume-preview-box pre {
            margin: 0;
            white-space: pre-wrap;
          }

          @media (max-width: 480px) {
            .drawer-backdrop {
              padding: 0.75rem;
            }
            .drawer-header {
              padding: 1rem;
            }
            .drawer-body {
              padding: 1rem;
            }
            .drawer-title {
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
}


