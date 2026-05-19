import { useState } from 'react';
import { Modal, Button } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

const sizes = ['sm', 'md', 'lg', 'fullscreen'] as const;
type ModalSize = typeof sizes[number];

export default function ModalSection() {
  const [open, setOpen] = useState<ModalSize | null>(null);
  const [dismissible, setDismissible] = useState<ModalSize | null>(null);

  return (
    <SectionWrapper
      id="modal"
      title="Modal"
      description="Dialog bloqueante com foco preso. Fecha por Esc, X ou overlay (quando dismissible=true)."
    >
      <Subsection title="Tamanhos">
        {sizes.map(size => (
          <Button key={size} variant="secondary" onClick={() => setOpen(size)}>
            Abrir {size}
          </Button>
        ))}
      </Subsection>

      <Subsection title="Não dismissible">
        <Button variant="ghost" onClick={() => setDismissible('md')}>
          Abrir modal não fechável por Esc/overlay
        </Button>
      </Subsection>

      {sizes.map(size => (
        <Modal
          key={size}
          open={open === size}
          onClose={() => setOpen(null)}
          size={size}
          title={`Modal ${size}`}
        >
          <p style={{ color: 'var(--ds-theme-content-default)' }}>
            Este modal tem tamanho <strong>{size}</strong>. Pressione Esc ou clique no overlay para fechar.
          </p>
          <p className="mt-2 text-sm" style={{ color: 'var(--ds-theme-content-muted)' }}>
            O foco é preso dentro do modal enquanto estiver aberto. Tab e Shift+Tab cicla apenas pelos elementos internos.
          </p>
          <div className="mt-6 flex gap-2 justify-end">
            <Button variant="ghost" onClick={() => setOpen(null)}>Cancelar</Button>
            <Button onClick={() => setOpen(null)}>Confirmar</Button>
          </div>
        </Modal>
      ))}

      <Modal
        open={dismissible === 'md'}
        onClose={() => setDismissible(null)}
        size="md"
        title="Modal não dismissible"
        dismissible={false}
      >
        <p style={{ color: 'var(--ds-theme-content-default)' }}>
          Este modal não fecha por Esc nem por clique no overlay. O usuário deve usar um dos botões abaixo.
        </p>
        <div className="mt-6 flex gap-2 justify-end">
          <Button variant="danger" onClick={() => setDismissible(null)}>Fechar</Button>
          <Button onClick={() => setDismissible(null)}>Confirmar</Button>
        </div>
      </Modal>
    </SectionWrapper>
  );
}
