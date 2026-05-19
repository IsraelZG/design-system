type Theme = 'light' | 'dark';
type Density = 'compact' | 'cozy' | 'tv';

interface TopbarProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
  density: Density;
  setDensity: (d: Density) => void;
}

export default function Topbar({ theme, setTheme, density, setDensity }: TopbarProps) {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-8 h-14 border-b"
      style={{
        backgroundColor: 'var(--ds-theme-surface-glass-tint)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--ds-theme-border-subtle)',
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold" style={{ color: 'var(--ds-theme-content-strong)' }}>
          Design System
        </span>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: 'var(--ds-theme-intent-accent-subtle)',
            color: 'var(--ds-theme-intent-accent-on-subtle)',
          }}
        >
          Showcase
        </span>
      </div>

      <div className="flex items-center gap-4">
        <ToggleGroup
          label="Tema"
          options={[
            { value: 'light', label: '☀ Light' },
            { value: 'dark', label: '◐ Dark' },
          ]}
          value={theme}
          onChange={v => setTheme(v as Theme)}
        />
        <ToggleGroup
          label="Densidade"
          options={[
            { value: 'compact', label: 'Compact' },
            { value: 'cozy', label: 'Cozy' },
            { value: 'tv', label: 'TV' },
          ]}
          value={density}
          onChange={v => setDensity(v as Density)}
        />
      </div>
    </header>
  );
}

interface ToggleGroupProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}

function ToggleGroup({ label, options, value, onChange }: ToggleGroupProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs" style={{ color: 'var(--ds-theme-content-subtle)' }}>{label}</span>
      <div
        className="flex rounded-lg overflow-hidden border"
        style={{ borderColor: 'var(--ds-theme-border-default)' }}
      >
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className="px-3 py-1 text-xs transition-colors"
            style={{
              backgroundColor: value === opt.value ? 'var(--ds-theme-intent-primary-fill)' : 'transparent',
              color: value === opt.value ? 'var(--ds-theme-content-on-inverse)' : 'var(--ds-theme-content-muted)',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
