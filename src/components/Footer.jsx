import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with clean architecture & precision.
          </p>
        </div>

        <div className="footer-right no-print">
          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top">
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 2.5rem 0;
          border-top: 1px solid var(--border-color);
          background: var(--bg-surface);
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .scroll-top-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .scroll-top-btn:hover {
          color: var(--text-primary);
        }
      `}</style>
    </footer>
  );
}
