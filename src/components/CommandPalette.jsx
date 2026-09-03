import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function CommandPalette({ isOpen, onClose, theme, toggleTheme }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Jaishriram PM CLI Command Console v1.0 [Type "help" or click quick commands below]' }
  ]);
  const logsEndRef = useRef(null);
  const navigate = useNavigate();

  // Auto-scroll log console
  useEffect(() => {
    if (isOpen && logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  // Lock body scroll when palette is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    setInput('');

    if (!cleanCmd) return;

    const newHistory = [...history, { type: 'user', text: `> ${cleanCmd}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • help       : Show command manual
  • bio / home : Navigate to Home & Bio page
  • experience : Navigate to Work History page (Genpact, Amazon)
  • education  : Navigate to Education & Research Publications page
  • skills     : Navigate to Tech Stack & Performance page
  • projects   : Navigate to Featured Projects & Simulator page
  • contact    : Navigate to Contact & Details page
  • theme      : Toggle Dark / Light visual mode
  • download   : Print / Export PDF Resume
  • clear      : Clear console output log`
        });
        break;

      case 'bio':
      case 'home':
        navigate('/');
        onClose();
        break;

      case 'experience':
        navigate('/experience');
        onClose();
        break;

      case 'education':
      case 'research':
        navigate('/education');
        onClose();
        break;

      case 'skills':
        navigate('/skills');
        onClose();
        break;

      case 'projects':
        navigate('/projects');
        onClose();
        break;

      case 'contact':
        navigate('/contact');
        onClose();
        break;

      case 'theme':
        toggleTheme();
        newHistory.push({ type: 'output', text: `Theme toggled to ${theme === 'dark' ? 'Light' : 'Dark'} mode.` });
        break;

      case 'download':
        window.print();
        onClose();
        break;

      case 'clear':
        setHistory([{ type: 'sys', text: 'Console cleared.' }]);
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cleanCmd}". Type "help" for available commands.`
        });
    }

    setHistory(newHistory);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickCommands = ['help', 'home', 'experience', 'education', 'skills', 'projects', 'contact', 'theme', 'clear'];

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette-card" onClick={(e) => e.stopPropagation()}>
        <div className="palette-header">
          <div className="palette-title-row">
            <Terminal size={18} />
            <span className="mono">CLI Command Console</span>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Command Quick Chips */}
        <div className="palette-quick-chips">
          <span className="chips-label mono"><Sparkles size={12} /> Quick:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="quick-chip-btn mono"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Command Output Logs */}
        <div className="palette-logs mono">
          {history.map((item, idx) => (
            <div key={idx} className={`log-entry ${item.type}`}>
              <pre>{item.text}</pre>
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={onSubmit} className="palette-input-form">
          <span className="prompt-symbol mono">&gt;</span>
          <input
            type="text"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command (e.g. help, experience, skills, projects, theme)..."
            className="palette-input mono"
          />
          <button type="submit" className="submit-cmd-btn" aria-label="Execute">
            <CornerDownLeft size={14} />
          </button>
        </form>

        <div className="palette-footer">
          <span className="shortcut-hint mono">Shortcuts: <strong>Ctrl + K</strong> toggle • <strong>Esc</strong> close</span>
        </div>
      </div>

      <style>{`
        .palette-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 300;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .palette-card {
          background: #09090b;
          border: 1px solid var(--border-hover);
          border-radius: 12px;
          max-width: 640px;
          width: 100%;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: #f4f4f5;
        }

        .palette-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.25rem;
          background: #121215;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .palette-title-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .palette-quick-chips {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1.25rem;
          background: #151518;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          overflow-x: auto;
        }

        .chips-label {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.725rem;
          color: #71717a;
          margin-right: 0.25rem;
        }

        .quick-chip-btn {
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #a1a1aa;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .quick-chip-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .palette-logs {
          padding: 1.25rem;
          max-height: 260px;
          min-height: 180px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 0.825rem;
          line-height: 1.5;
        }

        .log-entry pre {
          white-space: pre-wrap;
          font-family: inherit;
          margin: 0;
        }

        .log-entry.sys {
          color: #a1a1aa;
        }
        .log-entry.user {
          color: #ffffff;
          font-weight: 600;
        }
        .log-entry.output {
          color: #10b981;
        }
        .log-entry.error {
          color: #ef4444;
        }

        .palette-input-form {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.25rem;
          background: #18181b;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .prompt-symbol {
          color: #10b981;
          font-weight: 700;
          font-size: 1rem;
        }

        .palette-input {
          flex-grow: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 0.875rem;
        }

        .submit-cmd-btn {
          background: transparent;
          border: none;
          color: #71717a;
          cursor: pointer;
        }

        .palette-footer {
          padding: 0.5rem 1.25rem;
          background: #09090b;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .shortcut-hint {
          font-size: 0.75rem;
          color: #71717a;
        }
      `}</style>
    </div>
  );
}


