import { useState } from 'react';
import { Input } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1.5 5L8 9L14.5 5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function InputSection() {
  const [values, setValues] = useState({
    basic: '',
    leading: '',
    trailing: '',
    invalid: 'valor-incorreto',
    sm: '',
    md: '',
    lg: '',
  });

  const update = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues(v => ({ ...v, [key]: e.target.value }));

  return (
    <SectionWrapper
      id="input"
      title="Input"
      description="Campo de texto. Sempre associar a um label externo — nunca usar placeholder como substituto."
    >
      <Subsection title="Variações" stack>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Input value={values.basic} onChange={update('basic')} placeholder="Básico" />
          <Input
            value={values.leading}
            onChange={update('leading')}
            placeholder="Com ícone esquerdo"
            leadingIcon={<MailIcon />}
            type="email"
          />
          <Input
            value={values.trailing}
            onChange={update('trailing')}
            placeholder="Com ícone direito"
            trailingIcon={<SearchIcon />}
          />
          <Input
            value={values.invalid}
            onChange={update('invalid')}
            invalid
            placeholder="Campo inválido"
          />
          <Input value="não editável" onChange={() => {}} disabled />
          <Input value="somente leitura" onChange={() => {}} readOnly />
        </div>
      </Subsection>

      <Subsection title="Tamanhos" stack>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Input value={values.sm} onChange={update('sm')} size="sm" placeholder="Small" />
          <Input value={values.md} onChange={update('md')} size="md" placeholder="Medium (padrão)" />
          <Input value={values.lg} onChange={update('lg')} size="lg" placeholder="Large" />
        </div>
      </Subsection>
    </SectionWrapper>
  );
}
