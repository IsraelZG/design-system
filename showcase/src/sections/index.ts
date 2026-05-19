import type { ComponentType } from 'react';
import HomeSection from './HomeSection';
import ButtonSection from './ButtonSection';
import BadgeSection from './BadgeSection';
import InputSection from './InputSection';
import AvatarSection from './AvatarSection';
import CheckboxSection from './CheckboxSection';
import NavItemSection from './NavItemSection';
import CardSection from './CardSection';
import MessageSection from './MessageSection';
import AlertSection from './AlertSection';
import ToastSection from './ToastSection';
import ModalSection from './ModalSection';

export interface SectionDef {
  id: string;
  label: string;
  category: 'atom' | 'molecule' | 'organism' | 'overview';
  component: ComponentType;
}

export const sections: SectionDef[] = [
  // Overview
  { id: 'overview', label: 'Overview', category: 'overview', component: HomeSection },
  // Atoms
  { id: 'button',   label: 'Button',   category: 'atom',     component: ButtonSection   },
  { id: 'badge',    label: 'Badge',    category: 'atom',     component: BadgeSection    },
  { id: 'input',    label: 'Input',    category: 'atom',     component: InputSection    },
  { id: 'avatar',   label: 'Avatar',   category: 'atom',     component: AvatarSection   },
  { id: 'checkbox', label: 'Checkbox', category: 'atom',     component: CheckboxSection },
  { id: 'navitem',  label: 'NavItem',  category: 'atom',     component: NavItemSection  },
  // Molecules
  { id: 'card',     label: 'Card',     category: 'molecule', component: CardSection     },
  { id: 'message',  label: 'Message',  category: 'molecule', component: MessageSection  },
  { id: 'alert',    label: 'Alert',    category: 'molecule', component: AlertSection    },
  { id: 'toast',    label: 'Toast',    category: 'molecule', component: ToastSection    },
  // Organisms
  { id: 'modal',    label: 'Modal',    category: 'organism', component: ModalSection    },
];
