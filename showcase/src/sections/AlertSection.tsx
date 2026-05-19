import { useState } from 'react';
import { Alert } from '@ds/index';
import { SectionWrapper } from '../ui/SectionWrapper';

const intents = ['info', 'success', 'warning', 'danger'] as const;

const intentMessages: Record<string, string> = {
  info: 'Sua sessão expira em 30 minutos. Salve seu trabalho antes.',
  success: 'Configurações salvas com sucesso.',
  warning: 'Atenção: esta ação não pode ser desfeita.',
  danger: 'Falha ao conectar com o servidor. Tente novamente.',
};

export default function AlertSection() {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [dismissible, setDismissible] = useState(true);

  const dismiss = (key: string) => setDismissed(d => new Set([...d, key]));
  const restore = () => setDismissed(new Set());

  return (
    <SectionWrapper
      id="alert"
      title="Alert"
      description="Notificação inline persistente. Nunca auto-descarta — use Toast para mensagens transitórias."
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--ds-theme-content-subtle)' }}>
          Intents
        </p>
        <div className="flex flex-col gap-3 max-w-lg">
          {intents.map(intent => (
            !dismissed.has(intent) && (
              <Alert key={intent} intent={intent} title={intent[0].toUpperCase() + intent.slice(1)}>
                {intentMessages[intent]}
              </Alert>
            )
          ))}
          {dismissed.size > 0 && dismissed.size === intents.length && (
            <button
              className="text-sm underline text-left"
              style={{ color: 'var(--ds-theme-content-muted)' }}
              onClick={restore}
            >
              Restaurar todos
            </button>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--ds-theme-content-subtle)' }}>
          Sem título
        </p>
        <div className="flex flex-col gap-3 max-w-lg">
          {intents.map(intent => (
            <Alert key={intent} intent={intent}>
              {intentMessages[intent]}
            </Alert>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--ds-theme-content-subtle)' }}>
          Dismissible (interativo)
        </p>
        <div className="max-w-lg">
          {dismissible ? (
            <Alert
              intent="info"
              title="Aviso descartável"
              dismissible
              onDismiss={() => setDismissible(false)}
            >
              Clique no × para descartar este alerta. Componentes dismissible chamam onDismiss e param de renderizar.
            </Alert>
          ) : (
            <button
              className="text-sm underline"
              style={{ color: 'var(--ds-theme-content-muted)' }}
              onClick={() => setDismissible(true)}
            >
              Restaurar alerta
            </button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
