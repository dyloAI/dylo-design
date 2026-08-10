import React from 'react';

/**
 * dylo Eyebrow — the mono section label with an oxide tick. Sits above almost
 * every headline. The single most recognizable brand device.
 */
export function Eyebrow({ tone = 'dark', tick = true, children, ...rest }) {
  const fg = tone === 'light' ? 'var(--dylo-bone)' : 'var(--dylo-concrete)';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 11,
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: fg,
      }}
      {...rest}
    >
      {tick && (
        <span style={{ width: 10, height: 10, background: 'var(--dylo-oxide)', flex: 'none', display: 'inline-block' }} />
      )}
      {children}
    </span>
  );
}
