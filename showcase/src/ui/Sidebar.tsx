import type { SectionDef } from '../sections';

interface SidebarProps {
  sections: SectionDef[];
  activeSection: string;
}

const categoryLabel: Record<string, string> = {
  atom: 'Atoms',
  molecule: 'Molecules',
  organism: 'Organisms',
};

export default function Sidebar({ sections, activeSection }: SidebarProps) {
  const grouped = sections.reduce<Record<string, SectionDef[]>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav
      className="sticky top-14 h-[calc(100vh-3.5rem)] w-52 shrink-0 overflow-y-auto py-8 pr-4 border-r"
      style={{ borderColor: 'var(--ds-theme-border-subtle)' }}
    >
      {(['atom', 'molecule', 'organism'] as const).map(cat => {
        const items = grouped[cat];
        if (!items?.length) return null;
        return (
          <div key={cat} className="mb-6">
            <p
              className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--ds-theme-content-subtle)' }}
            >
              {categoryLabel[cat]}
            </p>
            {items.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-3 py-1.5 rounded-lg text-sm mb-0.5 transition-colors"
                  style={{
                    backgroundColor: isActive ? 'var(--ds-theme-intent-accent-subtle)' : 'transparent',
                    color: isActive ? 'var(--ds-theme-intent-accent-on-subtle)' : 'var(--ds-theme-content-muted)',
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        );
      })}
    </nav>
  );
}
