import React from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { QueryBenchmarks } from './QueryBenchmarks';

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
                    <div className="skill-info">
                      <span className="skill-name">
                        <CheckCircle2 size={14} className="skill-check-icon" />
                        {skill.name}
                      </span>
                      <span className="skill-percentage mono">{skill.level}%</span>
                    </div>

                    <div className="skill-meter-track">
                      <div
                        className="skill-meter-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Query & Data Performance Benchmarks */}
        <QueryBenchmarks />
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
        }

        .skill-category-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .skill-name {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-check-icon {
          color: var(--text-muted);
        }

        .skill-percentage {
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        .skill-meter-track {
          width: 100%;
          height: 5px;
          background: var(--bg-elevated);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-meter-fill {
          height: 100%;
          background: var(--text-primary);
          border-radius: 4px;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
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
