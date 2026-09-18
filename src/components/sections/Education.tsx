import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { educationList } from '../../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag="05. ACADEMIC BACKGROUND"
          title="Education &"
          gradientText="Theoretical Foundations"
          subtitle="Formal academic studies in Computer Science Engineering and relevant technical coursework."
        />

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'var(--shadow-card)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.12)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.2rem'
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.05rem',
                        color: 'var(--accent-cyan-light)',
                        fontWeight: 500
                      }}
                    >
                      {edu.institution}
                    </div>
                  </div>
                </div>

                {/* Grade / CGPA Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: 'var(--accent-emerald-light)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <Award size={14} />
                  <span>{edu.grade}</span>
                </div>
              </div>

              {/* Meta: Period & Location */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  marginBottom: '1.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Coursework list */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.85rem'
                  }}
                >
                  <BookOpen size={14} color="var(--accent-cyan)" />
                  <span>Relevant Core Coursework:</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="badge"
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.78rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
