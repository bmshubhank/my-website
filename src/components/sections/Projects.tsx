import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { projects } from '../../data/portfolioData';
import {
  CloudRain,
  ExternalLink,
  Award,
  Sparkles,
  Activity,
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export const Projects: React.FC = () => {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag="03. FEATURED WORK"
          title="Engineered Solutions &"
          gradientText="Featured Projects"
          subtitle="Highlighting WeatherGPT for the Smart India Hackathon along with scalable software and systems projects."
        />

        {/* ========================================================================= */}
        {/* FLAGSHIP SHOWCASE: WEATHERGPT                                            */}
        {/* ========================================================================= */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            marginBottom: '3rem',
            border: '1px solid rgba(6, 182, 212, 0.35)',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 35px -5px rgba(6, 182, 212, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle accent glow in the corner */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '240px',
              height: '240px',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}
          />

          {/* Hackathon Badge Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1.75rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  color: 'var(--accent-cyan)'
                }}
              >
                <CloudRain size={20} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  Flagship Hackathon Project
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.2
                  }}
                >
                  {featuredProject.title}
                </h3>
              </div>
            </div>

            {/* Smart India Hackathon Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: 'var(--accent-emerald-light)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                fontWeight: 600
              }}
            >
              <Award size={15} color="var(--accent-emerald)" />
              <span>{featuredProject.hackathonTag}</span>
            </div>
          </div>

          {/* Main Grid: Description + Live Intelligence Terminal Simulator */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left Info Column */}
            <div>
              <p
                style={{
                  color: 'var(--accent-cyan-light)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  marginBottom: '0.75rem'
                }}
              >
                {featuredProject.tagline}
              </p>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem'
                }}
              >
                {featuredProject.description}
              </p>

              {/* Key Technical Highlights */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.75rem'
                  }}
                >
                  Key Architectural Capabilities
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  {featuredProject.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--accent-cyan)',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div style={{ marginBottom: '2rem' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.75rem'
                  }}
                >
                  Technologies &amp; Libraries
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {featuredProject.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="badge badge-cyan">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink size={15} />
                  <span>Live Project Demo</span>
                </a>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <GithubIcon size={15} />
                  <span>Source Repository</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Simulator Column */}
            <div
              style={{
                borderRadius: '16px',
                background: 'rgba(7, 11, 18, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '0.75rem',
                  marginBottom: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={15} color="var(--accent-emerald)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    WeatherGPT Intelligence Telemetry
                  </span>
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                  ACTIVE SIH PIPELINE
                </span>
              </div>

              {/* Simulated User Query Prompt */}
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  marginBottom: '1rem'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.3rem'
                  }}
                >
                  USER NATURAL LANGUAGE INPUT:
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    fontStyle: 'italic'
                  }}
                >
                  "Analyze extreme rain probability and crop harvest conditions for Maharashtra over the next 48 hours."
                </div>
              </div>

              {/* Simulated AI Response Widget */}
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.05)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  marginBottom: '1.25rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    marginBottom: '0.6rem'
                  }}
                >
                  <Sparkles size={13} />
                  <span>SYNTHESIZED CLIMATE ADVISORY</span>
                </div>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-primary)',
                    lineHeight: '1.5',
                    marginBottom: '0.75rem'
                  }}
                >
                  <strong>Precipitation Anomaly Detected:</strong> Convective storm front approaching with 65-75mm localized rainfall.
                </p>

                {/* Weather Metrics Pills */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.6rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem'
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div style={{ color: 'var(--text-muted)' }}>Soil Saturation</div>
                    <div style={{ color: '#F59E0B', fontWeight: 600 }}>86% (High Runoff)</div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div style={{ color: 'var(--text-muted)' }}>Advisory Action</div>
                    <div style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>Postpone Spray</div>
                  </div>
                </div>
              </div>

              {/* Pipeline Workflow sequence */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                  }}
                >
                  Pipeline Stages:
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {featuredProject.architecture?.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.25rem 0.5rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '4px'
                      }}
                    >
                      <span style={{ color: 'var(--accent-cyan)' }}>✔</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECONDARY PROJECTS GRID (EDITABLE PLACEHOLDERS)                           */}
        {/* ========================================================================= */}
        <div style={{ marginTop: '3.5rem' }}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}
            >
              More Software &amp; Systems Projects
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Explore additional engineering prototypes, full-stack applications, and problem-solving implementations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel glass-panel-hoverable"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      <FolderGit2 size={20} />
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        style={{
                          color: 'var(--text-secondary)',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        <GithubIcon size={18} />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo Link"
                        style={{
                          color: 'var(--text-secondary)',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {project.title}
                  </h4>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--accent-cyan)',
                      marginBottom: '0.85rem'
                    }}
                  >
                    {project.tagline}
                  </p>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 1.25rem 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    {project.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.4rem'
                        }}
                      >
                        <span style={{ color: 'var(--accent-cyan)' }}>▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="badge" style={{ fontSize: '0.72rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
