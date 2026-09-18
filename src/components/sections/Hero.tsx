import React from 'react';
import { Sparkles, ArrowRight, Mail, CloudRain } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/Icons';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="section bg-grid"
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glows */}
      <div className="radial-glow-cyan" style={{ top: '-100px', left: '-150px' }}></div>
      <div className="radial-glow-violet" style={{ top: '200px', right: '-150px' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headline & CTAs */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '1.5rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span className="status-indicator"></span>
              <span style={{ color: 'var(--accent-emerald-light)' }}>
                {personalInfo.status}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem'
              }}
            >
              Hi, I'm{' '}
              <span className="text-gradient-cyan">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '1.25rem',
                lineHeight: 1.3
              }}
            >
              Computer Science Engineering Student &amp;{' '}
              <span style={{ color: 'var(--accent-cyan-light)' }}>Aspiring Software Developer</span>
            </h2>

            {/* Bio paragraph */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2rem'
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Quick Action CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              {/* Highlight WeatherGPT Button */}
              <a
                href="#projects"
                className="btn btn-primary"
                style={{ position: 'relative' }}
              >
                <CloudRain size={18} />
                <span>Explore WeatherGPT</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    background: 'rgba(0, 0, 0, 0.25)',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    marginLeft: '0.2rem'
                  }}
                >
                  SIH
                </span>
              </a>

              <a href="#about" className="btn btn-outline">
                <span>About Me</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" className="btn btn-outline">
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links Pill Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.775rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Connect //
              </span>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="badge"
                  style={{ textDecoration: 'none', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <GithubIcon size={13} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="badge"
                  style={{ textDecoration: 'none', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <LinkedinIcon size={13} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="badge"
                  style={{ textDecoration: 'none', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <LeetcodeIcon size={13} />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div>
            <div
              className="glass-panel"
              style={{
                background: 'rgba(7, 11, 18, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(6, 182, 212, 0.15)',
                overflow: 'hidden'
              }}
            >
              {/* Terminal Window Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.45rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }}></span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Sparkles size={12} color="var(--accent-cyan)" />
                  <span>developer_manifest.ts</span>
                </div>
                <div style={{ width: '40px' }}></div>
              </div>

              {/* Terminal Code Body */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  lineHeight: '1.7',
                  overflowX: 'auto'
                }}
              >
                <div>
                  <span style={{ color: '#818CF8' }}>const</span>{' '}
                  <span style={{ color: '#38BDF8' }}>developer</span> = &#123;
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>name:</span>{' '}
                  <span style={{ color: '#34D399' }}>"{personalInfo.name}"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>major:</span>{' '}
                  <span style={{ color: '#34D399' }}>"Computer Science &amp; Engineering"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>coreStrengths:</span> [
                  <div style={{ paddingLeft: '1.25rem', color: '#FCD34D' }}>
                    "Data Structures &amp; Algorithms",<br />
                    "Full-Stack Web Architectures",<br />
                    "Operating Systems &amp; Concurrency"
                  </div>
                  ],
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>flagshipProject:</span> &#123;
                  <div style={{ paddingLeft: '1.25rem' }}>
                    <span style={{ color: '#94A3B8' }}>name:</span>{' '}
                    <span style={{ color: '#67E8F9', fontWeight: 600 }}>"WeatherGPT"</span>,
                    <br />
                    <span style={{ color: '#94A3B8' }}>event:</span>{' '}
                    <span style={{ color: '#FCD34D' }}>"Smart India Hackathon (SIH)"</span>,
                    <br />
                    <span style={{ color: '#94A3B8' }}>domain:</span>{' '}
                    <span style={{ color: '#A78BFA' }}>"AI Climate Intelligence &amp; Alert Routing"</span>
                  </div>
                  &#125;,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>mindset:</span>{' '}
                  <span style={{ color: '#34D399' }}>"Continuous learner &amp; builder"</span>
                </div>
                <div>&#125;;</div>

                {/* Simulated execution prompt */}
                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px dashed rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-muted)',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ color: 'var(--accent-emerald)' }}>➜</span>
                  <span>ready_for_production:</span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>true</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
