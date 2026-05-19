import { Message } from '@ds/index';
import { SectionWrapper, Subsection } from '../ui/SectionWrapper';

const now = new Date();

export default function MessageSection() {
  return (
    <SectionWrapper
      id="message"
      title="Message"
      description="Bolha de chat. author determina alinhamento, cor e semântica. Deve estar dentro de um MessageList ou MessageGroup."
    >
      <Subsection title="Authors" stack>
        <div className="flex flex-col gap-2 w-full max-w-md p-4 rounded-xl" style={{ backgroundColor: 'var(--ds-theme-surface-subdued)' }}>
          <Message author="received" timestamp={now} status="delivered">
            Olá! Como posso ajudar você hoje?
          </Message>
          <Message author="sent" timestamp={now} status="read">
            Gostaria de saber mais sobre o design system.
          </Message>
          <Message author="ai" timestamp={now}>
            Claro! O design system tem 11 componentes atualmente: Button, Badge, Input, Card, Avatar, Checkbox, NavItem, Message, Alert, Toast e Modal.
          </Message>
          <Message author="system">
            Conversa iniciada em {now.toLocaleDateString('pt-BR')}
          </Message>
        </div>
      </Subsection>

      <Subsection title="Status de entrega" stack>
        <div className="flex flex-col gap-1 w-full max-w-xs">
          <Message author="sent" status="sending">Enviando…</Message>
          <Message author="sent" status="sent">Enviado</Message>
          <Message author="sent" status="delivered">Entregue</Message>
          <Message author="sent" status="read">Lido</Message>
          <Message author="sent" status="failed">Falha no envio — toque para tentar novamente</Message>
        </div>
      </Subsection>

      <Subsection title="Density compact" stack>
        <div className="flex flex-col gap-1 w-full max-w-md p-3 rounded-xl" style={{ backgroundColor: 'var(--ds-theme-surface-subdued)' }}>
          <Message author="received" density="compact" timestamp={now}>Mensagem compacta recebida</Message>
          <Message author="sent" density="compact" timestamp={now}>Mensagem compacta enviada</Message>
          <Message author="ai" density="compact" timestamp={now}>Resposta compacta da IA</Message>
        </div>
      </Subsection>
    </SectionWrapper>
  );
}
