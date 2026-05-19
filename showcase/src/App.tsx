import { useState, useEffect } from 'react';
import Topbar from './ui/Topbar';
import Sidebar from './ui/Sidebar';
import { sections } from './sections';

type Theme = 'light' | 'dark';
type Density = 'compact' | 'cozy' | 'tv';

export default function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [density, setDensity] = useState<Density>('cozy');
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-density', density);
  }, [density]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-10% 0px -75% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen">
      <Topbar theme={theme} setTheme={setTheme} density={density} setDensity={setDensity} />
      <div className="flex max-w-[1400px] mx-auto">
        <Sidebar sections={sections} activeSection={activeSection} />
        <main className="flex-1 px-12 py-8 min-w-0">
          {sections.map(({ id, component: Section }) => (
            <Section key={id} />
          ))}
        </main>
      </div>
    </div>
  );
}
