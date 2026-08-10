import React from 'react';

/**
 * dylo Badge — a small status or technical chip. Mono type, square-ish.
 */
export function Badge({ variant = 'default', children, ...rest }) {
  const variants = {
    default: { background: 'var(--dylo-bone)', color: 'var(--dylo-ink)', border: '1px solid var(--dylo-ink)' },
    solid:   { background: 'var(--dylo-ink)', color: 'var(--dylo-bone)', border: '1px solid var(--dylo-ink)' },
    accent:  { background: 'var(--dylo-oxide)', color: 'var(--dylo-paper)', border: '1px solid var(--dylo-oxide)' },
    muted:   { background: 'transparent', color: 'var(--dylo-concrete)', border: '1px solid var(--dylo-line)' },
  };
  const v = variants[variant] || variants.default;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '5px 9px',
        borderRadius: 'var(--radius-sm)',
        ...v,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
