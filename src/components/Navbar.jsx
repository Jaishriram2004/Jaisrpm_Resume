import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Terminal, FileText, Menu, X } from 'lucide-react';

export function Navbar({ focusMode, toggleFocusMode, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education & Research', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left Side: JSR Logo + Nav Links neatly aligned right next to it */}
        <div className="navbar-left">
          <Link to="/" className="brand-logo" aria-label="Home">
            <span className="brand-initials">JSR</span>
          </Link>

          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Side: Quick Action Buttons */}
        <div className="nav-actions">
          {/* CLI Command Trigger */}
          <button
            onClick={onOpenPalette}
            className="btn btn-secondary btn-sm cli-btn"
            title="Quick Command Console (Press / or Ctrl + K)"
          >
            <Terminal size={14} className="cli-icon" />
            <span>Press</span>
            <kbd className="cli-kbd mono">/</kbd>
            <span>for Help</span>
          </button>

          <button
            onClick={toggleFocusMode}
            className="theme-toggle-btn"
            title="Toggle theme mode"
            aria-label="Toggle theme mode"
          >
            {focusMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button onClick={handlePrint} className="btn btn-secondary btn-sm print-btn">
            <FileText size={15} />
            <span>Resume PDF</span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="mobile-actions">
          <button
            onClick={onOpenPalette}
            className="theme-toggle-btn"
            title="CLI Console"
          >
            <Terminal size={18} />
          </button>
          <button
            onClick={toggleFocusMode}
            className="theme-toggle-btn"
            aria-label="Toggle theme mode"
          >
            {focusMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-actions">
            <button onClick={handlePrint} className="btn btn-primary w-full">
              <FileText size={16} />
              <span>Print / Save Resume</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 0;
          background: transparent;
          transition: all var(--transition-normal);
        }

        .navbar-scrolled {
          padding: 0.85rem 0;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: var(--shadow-sm);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--text-primary);
        }

        .brand-initials {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 42px;
          height: 32px;
          padding: 0 0.5rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 7px;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: -0.04em;
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }

        .brand-logo:hover .brand-initials {
          border-color: var(--badge-green-border);
          background: var(--bg-surface);
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          list-style: none;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          transition: color var(--transition-fast);
          position: relative;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--badge-green-text);
          border-radius: 2px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .cli-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.35rem 0.75rem;
          font-size: 0.8rem;
          border-radius: 8px;
          border-color: var(--border-color);
          background: var(--bg-surface);
          transition: all var(--transition-fast);
        }

        .cli-btn:hover {
          border-color: var(--badge-green-border);
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.12);
        }

        .cli-icon {
          color: var(--badge-green-text);
        }

        .cli-kbd {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-elevated);
          border: 1px solid var(--border-hover);
          border-radius: 4px;
          padding: 0.1rem 0.35rem;
          font-size: 0.75rem;
          line-height: 1;
          color: var(--badge-green-text);
          font-weight: 700;
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
        }

        .theme-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          border-color: var(--border-hover);
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 0.5rem;
        }

        .mobile-menu-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.25rem;
        }

        .mobile-drawer {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .mobile-nav-link.active {
          color: var(--badge-green-text);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 900px) {
          .desktop-nav,
          .nav-actions {
            display: none !important;
          }
          .mobile-actions {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}


