import React from 'react';

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  gradientText?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  gradientText,
  align = 'center'
}) => {
  return (
    <div
      className="section-header"
      style={{
        textAlign: align,
        marginLeft: align === 'center' ? 'auto' : '0',
        marginRight: align === 'center' ? 'auto' : '0'
      }}
    >
      <div className="section-tag">
        <span style={{ color: 'var(--accent-cyan)' }}>//</span> {tag}
      </div>
      <h2 className="section-title">
        {title}{' '}
        {gradientText && <span className="text-gradient-cyan">{gradientText}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
