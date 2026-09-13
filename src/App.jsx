import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ScrollToTop } from './components/ScrollToTop';
import { InteractiveEffects } from './components/InteractiveEffects';
import { AtmosphericBackground } from './components/AtmosphericBackground';

import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [focusMode, setFocusMode] = useState(() => {
    return localStorage.getItem('portfolio_focus_mode') === 'true';
  });
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    // Permanent Dark Mode
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');

    // Focus Mode
    document.documentElement.setAttribute('data-focus-mode', focusMode ? 'true' : 'false');
    localStorage.setItem('portfolio_focus_mode', focusMode ? 'true' : 'false');
  }, [focusMode]);

  // Global Keyboard Shortcuts ('/' or Ctrl+K or Cmd+K to toggle Palette)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      const target = e.target;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable);

      // Single forward slash '/' to open / toggle Command Palette
      if ((e.key === '/' || (!e.shiftKey && e.code === 'Slash')) && !isInput && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
        return;
      }

      // Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
        return;
      }

      // Escape closes palette
      if (e.key === 'Escape') {
        setPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const toggleFocusMode = () => {
    setFocusMode((prev) => !prev);
  };

  return (
    <div className="app">
      <AtmosphericBackground focusMode={focusMode} />
      <InteractiveEffects focusMode={focusMode} />
      <ScrollToTop />
      <Navbar
        focusMode={focusMode}
        toggleFocusMode={toggleFocusMode}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />

      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        focusMode={focusMode}
        toggleFocusMode={toggleFocusMode}
      />
    </div>
  );
}


