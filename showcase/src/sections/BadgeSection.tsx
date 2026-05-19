import { Badge } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

const intents = ['neutral', 'success', 'warning', 'danger', 'info'] as const;

export default function BadgeSection() {
  return (
    <SectionWrapper
      id="badge"
      title="Badge"
      description="Indicador de status ou categoria. Apenas display — nunca interativo. Envolva em button se precisar de ação."
    >
      <Subsection title="Intents — size md">
        {intents.map(intent => (
          <Badge key={intent} intent={intent}>
            {intent}
          </Badge>
        ))}
      </Subsection>

      <Subsection title="Intents — size sm">
        {intents.map(intent => (
          <Badge key={intent} intent={intent} size="sm">
            {intent}
          </Badge>
        ))}
      </Subsection>

      <Subsection title="Em contexto">
        <div className="flex items-center gap-2">
          <span style={{ color: 'var(--ds-theme-content-default)' }}>Deploy</span>
          <Badge intent="success">Ativo</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: 'var(--ds-theme-content-default)' }}>Build</span>
          <Badge intent="warning">Pendente</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: 'var(--ds-theme-content-default)' }}>Serviço</span>
          <Badge intent="danger">Erro</Badge>
        </div>
      </Subsection>
    </SectionWrapper>
  );
}
