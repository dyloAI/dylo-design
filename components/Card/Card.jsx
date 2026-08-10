import React from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow.jsx';

/**
 * dylo Card — the signature foundry panel: a paper/ink surface with a full
 * border and a hard block-shadow offset, like a stamped plate. Barely rounded.
 */
export function Card({ eyebrow, title, tone = 'light', elevated = true, children, ...rest }) {
  const dark = tone === 'ink';
  return (
    <div
      style={{
        background: dark ? 'var(--dylo-ink)' : 'var(--dylo-paper)',
        color: dark ? 'var(--dylo-bone)' : 'var(--dylo-ink)',
        border: dark ? '1px solid var(--dylo-ink)' : '1px solid var(--dylo-ink)',
        borderRadius: 'var(--radius-md)',
        boxShadow: elevated ? '6px 6px 0 rgba(27,23,20,0.12)' : 'none',
        padding: 'var(--space-6)',
        ...rest.style,
      }}
      {...rest}
    >
      {eyebrow && (
        <div style={{ marginBottom: 14 }}>
          <Eyebrow tone={dark ? 'light' : 'dark'}>{eyebrow}</Eyebrow>
        </div>
      )}
      {title && (
        <h3 style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          fontSize: 24,
          lineHeight: 1.1,
        }}>{title}</h3>
      )}
      {children && (
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.6,
          color: dark ? '#C7BEB1' : 'var(--dylo-graphite)',
          marginTop: title ? 12 : 0,
        }}>{children}</div>
      )}
    </div>
  );
}
