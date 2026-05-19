import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, description, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="py-10 border-b last:border-b-0"
      style={{ borderColor: 'var(--ds-theme-border-subtle)' }}
    >
      <h2
        className="text-2xl font-semibold mb-1"
        style={{ color: 'var(--ds-theme-content-strong)', fontFamily: 'var(--ds-font-family-sans)' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mb-8 text-sm" style={{ color: 'var(--ds-theme-content-muted)' }}>
          {description}
        </p>
      )}
      <div className="space-y-8">{children}</div>
    </section>
  );
}

interface SubsectionProps {
  title: string;
  children: ReactNode;
  stack?: boolean;
}

export function Subsection({ title, children, stack = false }: SubsectionProps) {
  return (
    <div>
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-3"
        style={{ color: 'var(--ds-theme-content-subtle)' }}
      >
        {title}
      </p>
      <div className={stack ? 'flex flex-col gap-3' : 'flex flex-wrap items-start gap-3'}>
        {children}
      </div>
    </div>
  );
}
