import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillCategories } from '../../data/portfolioData';
import { Code, Layers, Database, Cpu, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={20} color="var(--accent-cyan)" />;
      case 'Layers':
        return <Layers size={20} color="var(--accent-emerald)" />;
      case 'Database':
        return <Database size={20} color="#F59E0B" />;
      case 'Cpu':
        return <Cpu size={20} color="#8B5CF6" />;
      default:
        return <Code size={20} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" className="section bg-grid" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          tag="02. TECHNICAL SKILLS"
          title="Technical Arsenal &"
          gradientText="Core Competencies"
          subtitle="A structured overview of programming languages, web technologies, developer tooling, and foundational computer science disciplines."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hoverable"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3
                    }}
                  >
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Category Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  marginBottom: '1.5rem',
                  lineHeight: '1.5'
                }}
              >
                {category.description}
              </p>

              {/* Skill Tags Cloud */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: 'auto'
                }}
              >
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      color: 'var(--text-primary)',
                      fontSize: '0.825rem',
                      fontFamily: 'var(--font-mono)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                      e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <CheckCircle2 size={12} color="var(--accent-cyan)" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
