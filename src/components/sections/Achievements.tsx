import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { achievements } from '../../data/portfolioData';
import { Trophy, Award, ExternalLink, Calendar, Star } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section bg-grid" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag="04. RECOGNITION"
          title="Hackathons &"
          gradientText="Engineering Milestones"
          subtitle="Honors, hackathon achievements, and competitive programming milestones."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {achievements.map((item, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hoverable"
              style={{
                padding: '2rem',
                border: item.isFeatured
                  ? '1px solid rgba(16, 185, 129, 0.4)'
                  : '1px solid var(--border-subtle)',
                boxShadow: item.isFeatured
                  ? '0 16px 36px -12px rgba(0, 0, 0, 0.6), 0 0 25px -4px rgba(16, 185, 129, 0.2)'
                  : 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {item.isFeatured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    background: 'linear-gradient(135deg, #10B981, #06B6D4)',
                    color: '#04131D',
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    padding: '0.2rem 1.25rem',
                    borderRadius: '0 0 0 12px',
                    letterSpacing: '0.05em'
                  }}
                >
                  FEATURED
                </div>
              )}

              <div>
                {/* Header Icon + Date */}
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
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: item.isFeatured
                        ? 'rgba(16, 185, 129, 0.15)'
                        : 'rgba(255, 255, 255, 0.04)',
                      border: item.isFeatured
                        ? '1px solid rgba(16, 185, 129, 0.35)'
                        : '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.isFeatured ? 'var(--accent-emerald)' : 'var(--accent-cyan)'
                    }}
                  >
                    {item.isFeatured ? <Trophy size={20} /> : <Award size={20} />}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Badge Tag */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <span
                    className={`badge ${item.isFeatured ? 'badge-emerald' : 'badge-cyan'}`}
                    style={{ fontSize: '0.75rem' }}
                  >
                    <Star size={11} />
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem'
                  }}
                >
                  {item.title}
                </h3>

                {/* Organization */}
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: item.isFeatured ? 'var(--accent-emerald-light)' : 'var(--accent-cyan)',
                    marginBottom: '1rem'
                  }}
                >
                  {item.organization}
                </p>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Link if available */}
              {item.link && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: '0.78rem', width: 'fit-content' }}
                  >
                    <span>Event Details</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
