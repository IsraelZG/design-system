import { Avatar } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
const initials = ['AB', 'CK', 'JS', 'MR', 'TW', 'XZ'];

export default function AvatarSection() {
  return (
    <SectionWrapper
      id="avatar"
      title="Avatar"
      description="Representação circular de usuário. Hierarquia de fallback: imagem → iniciais → ícone padrão."
    >
      <Subsection title="Tamanhos — com imagem">
        {sizes.map((size, i) => (
          <Avatar
            key={size}
            src={`https://i.pravatar.cc/96?img=${i + 1}`}
            alt={`Usuário ${i + 1}`}
            size={size}
          />
        ))}
      </Subsection>

      <Subsection title="Fallback — iniciais">
        {sizes.map((size, i) => (
          <Avatar key={size} fallback={initials[i]} size={size} />
        ))}
      </Subsection>

      <Subsection title="Fallback — ícone padrão">
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xl" />
      </Subsection>

      <Subsection title="Com ring">
        <Avatar src="https://i.pravatar.cc/96?img=5" alt="Com ring" size="md" ring />
        <Avatar src="https://i.pravatar.cc/96?img=6" alt="Com ring" size="lg" ring />
        <Avatar fallback="AB" size="md" ring />
        <Avatar fallback="CK" size="lg" ring />
      </Subsection>
    </SectionWrapper>
  );
}
