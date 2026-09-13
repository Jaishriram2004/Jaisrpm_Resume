import React from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { DataPipelineArchitecture } from './DataPipelineArchitecture';

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-tag">
          <Cpu size={14} />
          <span>03. Capabilities & Proficiency</span>
        </div>

        <h2 className="section-heading">Skills & Technical Stack</h2>
        <p className="section-subheading">
          Production-proven technologies, data frameworks, and developer toolchains.
        </p>

        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div key={idx} className="card skill-category-card">
              <h3 className="skill-category-title">{category.category}</h3>

              <div className="skill-items-list">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <CheckCircle2 size={15} className="skill-check-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* End-to-End Data & BI Architecture Visualizer */}
        <DataPipelineArchitecture />
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .skill-category-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.75rem;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .skill-category-card:hover {
          border-color: var(--border-hover);
        }

        .skill-category-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.85rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }

        .skill-item:hover {
          background: var(--bg-surface);
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .skill-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }

        .skill-item:hover .skill-name {
          color: #ffffff;
        }

        .skill-check-icon {
          color: var(--badge-green-text);
          flex-shrink: 0;
          transition: transform 0.22s ease;
        }

        .skill-item:hover .skill-check-icon {
          transform: scale(1.18);
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
