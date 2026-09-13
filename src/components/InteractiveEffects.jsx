import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function InteractiveEffects({ focusMode = false }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef(null);
  const location = useLocation();

  // 1. Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // 2. Cursor-tracked Circular Ambient Glow & Card Spotlight (ZERO delay)
  useEffect(() => {
    const handlePointerMove = (e) => {
      // Instant cursor follow with ZERO delay
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 190}px, ${e.clientY - 190}px, 0)`;
      }

      // Event delegation for card-specific circular spotlight
      const card = e.target.closest(
        '.card, .stat-card, .principle-card, .project-card, .experience-item, .skill-group, .benchmark-card, .pipeline-terminal'
      );
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }

      // Button hover circle origin
      const btn = e.target.closest('.btn');
      if (btn) {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty('--btn-click-x', `${e.clientX - rect.left}px`);
        btn.style.setProperty('--btn-click-y', `${e.clientY - rect.top}px`);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  // 3. Scroll Reveal Observer for dynamic entrance animations
  useEffect(() => {
    // Select elements to reveal on scroll
    const targets = document.querySelectorAll(
      '.section, .card, .stat-card, .principle-card, .project-card, .experience-item, .hero-badge-wrapper, .hero-title, .hero-bio, .hero-stats-grid, .section-heading, .section-subheading'
    );

    targets.forEach((el) => {
      if (!el.classList.contains('reveal-item')) {
        el.classList.add('reveal-item');
        // Add stagger class if within a grid
        const parentGrid = el.closest('.hero-stats-grid, .principles-grid, .projects-grid, .skills-grid');
        if (parentGrid) {
          const childIndex = Array.from(parentGrid.children).indexOf(el);
          if (childIndex >= 0) {
            el.classList.add(`stagger-${(childIndex % 6) + 1}`);
          }
        }
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]);

  return (
    <>
      {/* 1. Top Scroll Progress Indicator */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Circular Glow following cursor (Normal mode only) */}
      {!focusMode && (
        <div
          ref={cursorRef}
          className="ambient-cursor-circle"
          aria-hidden="true"
        />
      )}
    </>
  );
}
