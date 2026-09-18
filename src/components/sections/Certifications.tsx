import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { certifications } from '../../data/portfolioData';
import { ShieldCheck, ExternalLink, Calendar, Key } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section bg-grid" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag="06. CREDENTIALS"
          title="Certifications &"
          gradientText="Continuous Learning"
          subtitle="Verified coursework, cloud credentials, and technical certifications."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
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
                {/* Header with Icon and Date */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <ShieldCheck size={22} />
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
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.18rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                    lineHeight: 1.3
                  }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--accent-cyan-light)',
                    fontWeight: 500,
                    marginBottom: '1rem'
                  }}
                >
                  {cert.issuer}
                </p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Key size={12} />
                    <span>{cert.credentialId}</span>
                  </div>
                )}

                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge" style={{ fontSize: '0.72rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              {cert.verifyUrl && (
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: '0.78rem' }}
                  >
                    <span>Verify Credential</span>
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
