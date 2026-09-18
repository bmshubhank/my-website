import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalInfo } from '../../data/portfolioData';
import { Cpu, Terminal, GitBranch, Lightbulb, Compass, Award } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Cpu size={22} color="var(--accent-cyan)" />,
      title: "Algorithmic Thinking",
      desc: "Strong foundation in data structures, time-space complexity optimization, and clean analytical problem-solving."
    },
    {
      icon: <Terminal size={22} color="var(--accent-emerald)" />,
      title: "Modern Engineering",
      desc: "Architecting modular, type-safe web applications and backend endpoints with clean code practices."
    },
    {
      icon: <Lightbulb size={22} color="#F59E0B" />,
      title: "Practical AI Applications",
      desc: "Bridging large language models and intelligent API pipelines with real-world domains, exemplified by WeatherGPT."
    },
    {
      icon: <GitBranch size={22} color="#8B5CF6" />,
      title: "Version Control & Systems",
      desc: "Proficient in Git workflows, Linux development environments, and understanding low-level OS/networking concepts."
    }
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag="01. ABOUT ME"
          title="Engineering Foundations &"
          gradientText="Problem-Solving Mindset"
          subtitle="A snapshot into my academic background, technical philosophy, and drive for software craftmanship."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Narrative */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--accent-cyan)'
              }}
            >
              <Compass size={16} />
              <span>WHO I AM</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}
            >
              CSE Student passionate about high-impact software
            </h3>

            {personalInfo.aboutText.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.7'
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Quick SIH Highlight Box */}
            <div
              style={{
                marginTop: '0.5rem',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(6, 182, 212, 0.06)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <Award size={24} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.875rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  Smart India Hackathon (SIH) Participant
                </span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', marginTop: '0.15rem' }}>
                  Engineered <strong>WeatherGPT</strong> to deliver climate risk intelligence for agricultural and disaster preparedness.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="glass-panel glass-panel-hoverable"
                style={{
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.25rem'
                  }}
                >
                  {pillar.icon}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}
                >
                  {pillar.title}
                </h4>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
