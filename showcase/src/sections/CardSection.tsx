import { Card } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

function CardContent({ label }: { label: string }) {
  return (
    <div>
      <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--ds-theme-content-strong)' }}>
        {label}
      </p>
      <p className="text-xs" style={{ color: 'var(--ds-theme-content-muted)' }}>
        Conteúdo descritivo com algum texto de exemplo para preencher o espaço.
      </p>
    </div>
  );
}

export default function CardSection() {
  return (
    <SectionWrapper
      id="card"
      title="Card"
      description="Contêiner de agrupamento de conteúdo relacionado. Interativo exige as='button' ou as='a' — nunca div + onClick."
    >
      <Subsection title="Padding variants">
        {(['none', 'sm', 'md', 'lg'] as const).map(padding => (
          <div key={padding}>
            <p className="text-xs mb-2" style={{ color: 'var(--ds-theme-content-subtle)' }}>
              padding="{padding}"
            </p>
            <Card padding={padding} style={{ width: 200 }}>
              <CardContent label={`Card (${padding})`} />
            </Card>
          </div>
        ))}
      </Subsection>

      <Subsection title="Interativo">
        <div>
          <p className="text-xs mb-2" style={{ color: 'var(--ds-theme-content-subtle)' }}>
            as="button"
          </p>
          <Card as="button" interactive onClick={() => alert('Card button clicado!')} style={{ width: 200 }}>
            <CardContent label="Card Button" />
          </Card>
        </div>
        <div>
          <p className="text-xs mb-2" style={{ color: 'var(--ds-theme-content-subtle)' }}>
            as="a"
          </p>
          <Card as="a" interactive href="#card" style={{ width: 200 }}>
            <CardContent label="Card Link" />
          </Card>
        </div>
      </Subsection>
    </SectionWrapper>
  );
}
