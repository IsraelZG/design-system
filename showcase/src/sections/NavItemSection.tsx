import { NavItem } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <path d="M3 7.5L9 2.25L15 7.5V15H12V10.5H6V15H3V7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <path d="M3 12L7 8L11 11L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 2v1.5M9 14.5V16M2 9h1.5M14.5 9H16M4.1 4.1l1.06 1.06M12.84 12.84l1.06 1.06M4.1 13.9l1.06-1.06M12.84 5.16l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 14.5c0-2.5 2.24-4.5 5-4.5s5 2 5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 5.5a2 2 0 0 1 0 4M16 14.5c0-2-1.5-3.5-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

function NavGroup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col gap-1 p-2 rounded-xl w-52"
      style={{ backgroundColor: 'var(--ds-theme-surface-subdued)' }}
    >
      {children}
    </div>
  );
}

function NavGroupDark({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col gap-1 p-2 rounded-xl w-52"
      style={{ backgroundColor: 'var(--ds-theme-surface-inverse)' }}
    >
      {children}
    </div>
  );
}

export default function NavItemSection() {
  return (
    <SectionWrapper
      id="navitem"
      title="NavItem"
      description="Item de navegação lateral. active é exclusivo por grupo — dois active simultâneos é bug."
    >
      <Subsection title="Default tone">
        <NavGroup>
          <NavItem as="button" icon={<HomeIcon />} active>Início</NavItem>
          <NavItem as="button" icon={<ChartIcon />}>Analytics</NavItem>
          <NavItem as="button" icon={<UsersIcon />}>Usuários</NavItem>
          <NavItem as="button" icon={<SettingsIcon />} disabled>Configurações</NavItem>
        </NavGroup>
      </Subsection>

      <Subsection title="Inverse tone">
        <NavGroupDark>
          <NavItem as="button" icon={<HomeIcon />} tone="inverse" active>Início</NavItem>
          <NavItem as="button" icon={<ChartIcon />} tone="inverse">Analytics</NavItem>
          <NavItem as="button" icon={<UsersIcon />} tone="inverse">Usuários</NavItem>
          <NavItem as="button" icon={<SettingsIcon />} tone="inverse" disabled>Configurações</NavItem>
        </NavGroupDark>
      </Subsection>

      <Subsection title="Collapsed (icon-only)">
        <NavGroup>
          <NavItem as="button" icon={<HomeIcon />} collapsed active aria-label="Início" />
          <NavItem as="button" icon={<ChartIcon />} collapsed aria-label="Analytics" />
          <NavItem as="button" icon={<UsersIcon />} collapsed aria-label="Usuários" />
          <NavItem as="button" icon={<SettingsIcon />} collapsed aria-label="Configurações" />
        </NavGroup>
        <NavGroupDark>
          <NavItem as="button" icon={<HomeIcon />} collapsed tone="inverse" active aria-label="Início" />
          <NavItem as="button" icon={<ChartIcon />} collapsed tone="inverse" aria-label="Analytics" />
        </NavGroupDark>
      </Subsection>

      <Subsection title="Como link (as='a')">
        <NavGroup>
          <NavItem as="a" href="#navitem" icon={<HomeIcon />} active>Início (link)</NavItem>
          <NavItem as="a" href="#navitem" icon={<ChartIcon />}>Analytics (link)</NavItem>
        </NavGroup>
      </Subsection>
    </SectionWrapper>
  );
}
