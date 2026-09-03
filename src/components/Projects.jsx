import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';


export function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const { projects } = portfolioData;

  const categories = ['All', 'Data Engineering', 'Software Development', 'AI & Deep Learning'];


  const getCategoryCount = (cat) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-tag">
          <FolderGit2 size={14} />
          <span>05. Selected Engineering Projects</span>
        </div>

        <div className="projects-header">
          <div>
            <h2 className="section-heading">Featured Systems & Projects</h2>
            <p className="section-subheading">
              Case studies and production pipelines built with focus on clean architecture, high throughput, and data performance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                <span>{cat}</span>
                <span className="filter-count mono">{getCategoryCount(cat)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-top">
                <span className="badge">{project.category}</span>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={17} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== '' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="Live Application"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-short-desc">{project.shortDescription}</p>

              {/* Metrics */}
              <div className="project-metrics-row">
                {project.metrics.slice(0, 3).map((m, i) => (
                  <span key={i} className="metric-chip">
                    {m}
                  </span>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="project-tech-row">
                {project.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Details Action */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="view-details-btn"
              >
                <span>View Full Case Study & Architecture</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>


      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .projects-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .filter-bar {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-count {
          font-size: 0.725rem;
          padding: 0.1rem 0.4rem;
          border-radius: 10px;
          background: var(--bg-elevated);
          color: var(--text-muted);
        }

        .filter-btn.active, .filter-btn:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        .filter-btn.active .filter-count {
          background: var(--bg-surface);
          color: var(--text-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .project-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .icon-link {
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .icon-link:hover {
          color: var(--text-primary);
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .project-short-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .project-metrics-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .metric-chip {
          font-size: 0.775rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .project-tech-row {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }

        .view-details-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-top: 0.85rem;
          border: none;
          border-top: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .view-details-btn:hover {
          color: var(--badge-green-text);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

