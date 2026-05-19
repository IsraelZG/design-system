import { useState } from 'react';
import { Toast, Button } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

const intents = ['info', 'success', 'warning', 'danger'] as const;
const placements = ['top-right', 'top-center', 'bottom-right', 'bottom-center'] as const;

type Intent = typeof intents[number];
type Placement = typeof placements[number];

interface ActiveToast {
  intent: Intent;
  placement: Placement;
  key: number;
}

export default function ToastSection() {
  const [toast, setToast] = useState<ActiveToast | null>(null);
  const [placement, setPlacement] = useState<Placement>('top-right');
  const [counter, setCounter] = useState(0);

  const show = (intent: Intent) => {
    setCounter(c => c + 1);
    setToast({ intent, placement, key: counter + 1 });
  };

  return (
    <SectionWrapper
      id="toast"
      title="Toast"
      description="Notificação transitória com auto-dismiss em 5s. Timer pausa ao hover/focus (WCAG 2.2.1)."
    >
      <Subsection title="Placement">
        <div className="flex flex-wrap gap-2">
          {placements.map(p => (
            <button
              key={p}
              onClick={() => setPlacement(p)}
              className="px-3 py-1.5 text-sm rounded-lg border transition-colors"
              style={{
                backgroundColor: placement === p ? 'var(--ds-theme-intent-accent-subtle)' : 'transparent',
                borderColor: placement === p ? 'var(--ds-theme-intent-accent-border)' : 'var(--ds-theme-border-default)',
                color: placement === p ? 'var(--ds-theme-intent-accent-on-subtle)' : 'var(--ds-theme-content-muted)',
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </Subsection>

      <Subsection title="Disparar toast (intent)">
        {intents.map(intent => (
          <Button key={intent} variant="secondary" size="sm" onClick={() => show(intent)}>
            Mostrar {intent}
          </Button>
        ))}
      </Subsection>

      <Subsection title="Duração infinita">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setCounter(c => c + 1);
            setToast({ intent: 'info', placement, key: counter + 1 });
          }}
        >
          Duração infinita (fechar manualmente)
        </Button>
      </Subsection>

      {toast && (
        <Toast
          key={toast.key}
          intent={toast.intent}
          placement={toast.placement}
          onDismiss={() => setToast(null)}
        >
          Notificação <strong>{toast.intent}</strong> — {toast.placement}
        </Toast>
      )}
    </SectionWrapper>
  );
}
