import { useState } from 'react';
import { Checkbox } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

export default function CheckboxSection() {
  const [checked, setChecked] = useState(false);
  const [items, setItems] = useState({ a: false, b: true, c: false });

  const allChecked = Object.values(items).every(Boolean);
  const someChecked = Object.values(items).some(Boolean) && !allChecked;

  const toggleAll = (v: boolean) => setItems({ a: v, b: v, c: v });
  const toggleItem = (k: keyof typeof items) => (v: boolean) =>
    setItems(prev => ({ ...prev, [k]: v }));

  return (
    <SectionWrapper
      id="checkbox"
      title="Checkbox"
      description="Seleção binária ou indeterminada. onChange simplificado: recebe boolean diretamente."
    >
      <Subsection title="Estados básicos" stack>
        <Checkbox checked={checked} onChange={setChecked}>
          Clique para alternar ({checked ? 'checked' : 'unchecked'})
        </Checkbox>
        <Checkbox checked onChange={() => {}} disabled>
          Checked + disabled
        </Checkbox>
        <Checkbox checked={false} onChange={() => {}} disabled>
          Unchecked + disabled
        </Checkbox>
      </Subsection>

      <Subsection title="Indeterminate — selecionar todos" stack>
        <div className="flex flex-col gap-2">
          <Checkbox
            indeterminate={someChecked}
            checked={allChecked}
            onChange={toggleAll}
          >
            Selecionar todos
          </Checkbox>
          <div className="ml-6 flex flex-col gap-2">
            {(['a', 'b', 'c'] as const).map(k => (
              <Checkbox key={k} checked={items[k]} onChange={toggleItem(k)}>
                Item {k.toUpperCase()}
              </Checkbox>
            ))}
          </div>
        </div>
      </Subsection>

      <Subsection title="Tamanhos">
        <Checkbox size="sm" checked={false} onChange={() => {}}>Small</Checkbox>
        <Checkbox size="md" checked={false} onChange={() => {}}>Medium (padrão)</Checkbox>
      </Subsection>
    </SectionWrapper>
  );
}
