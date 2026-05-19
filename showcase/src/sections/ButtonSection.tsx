import { useState } from 'react';
import { Button } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

const variants = ['primary', 'secondary', 'ghost', 'danger'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export default function ButtonSection() {
  const [loading, setLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <SectionWrapper
      id="button"
      title="Button"
      description="Elemento de ação primária. Cada seção de produto deve ter no máximo um variant=primary."
    >
      {variants.map(variant => (
        <Subsection key={variant} title={variant}>
          {sizes.map(size => (
            <Button key={size} variant={variant} size={size}>
              {variant} {size}
            </Button>
          ))}
        </Subsection>
      ))}

      <Subsection title="States">
        <Button loading={loading} onClick={simulateLoading}>
          {loading ? 'Carregando…' : 'Simular loading (2s)'}
        </Button>
        <Button disabled>Primary disabled</Button>
        <Button variant="secondary" disabled>Secondary disabled</Button>
        <Button variant="ghost" disabled>Ghost disabled</Button>
      </Subsection>

      <Subsection title="Full Width" stack>
        <div className="w-full max-w-sm">
          <Button fullWidth>Full Width</Button>
        </div>
      </Subsection>
    </SectionWrapper>
  );
}
