import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@ds/lib/utils';
/*
 * Tokens consumed: component.badge.*
 * Display-only atom — never interactive. Wrap in a button if action is needed.
 */
const badgeVariants = cva([
    'inline-flex items-center whitespace-nowrap select-none',
    'rounded-[var(--ds-component-badge-radius)]',
    'px-[var(--ds-component-badge-padding-x)]',
    'py-[var(--ds-component-badge-padding-y)]',
    'text-[length:var(--ds-component-badge-font-size)]',
    'font-[var(--ds-component-badge-font-weight)]',
    'leading-none',
], {
    variants: {
        intent: {
            neutral: 'bg-[var(--ds-component-badge-neutral-bg)] text-[color:var(--ds-component-badge-neutral-text)]',
            success: 'bg-[var(--ds-component-badge-success-bg)] text-[color:var(--ds-component-badge-success-text)]',
            warning: 'bg-[var(--ds-component-badge-warning-bg)] text-[color:var(--ds-component-badge-warning-text)]',
            danger: 'bg-[var(--ds-component-badge-danger-bg)]  text-[color:var(--ds-component-badge-danger-text)]',
            info: 'bg-[var(--ds-component-badge-info-bg)]    text-[color:var(--ds-component-badge-info-text)]',
        },
        size: {
            sm: 'text-[10px]',
            md: '',
        },
    },
    defaultVariants: {
        intent: 'neutral',
        size: 'md',
    },
});
const Badge = React.forwardRef(({ children, intent, size, className, ...props }, ref) => (_jsx("span", { ref: ref, className: cn(badgeVariants({ intent, size }), className), ...props, children: children })));
Badge.displayName = 'Badge';
export { Badge, badgeVariants };
//# sourceMappingURL=Badge.js.map