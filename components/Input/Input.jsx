import React from 'react';

/**
 * dylo Input — text field with a mono label. Square, ink-bordered, oxide focus.
 */
export function Input({ label, hint, id, disabled = false, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'in-' + String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontFamily: 'var(--font-display)' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--dylo-concrete)',
        }}>{label}</label>
      )}
      <input
        id={inputId}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 15,
          color: 'var(--dylo-ink)',
          background: disabled ? 'var(--dylo-bone)' : 'var(--dylo-paper)',
          border: `1px solid ${focus ? 'var(--dylo-oxide)' : 'var(--dylo-ink)'}`,
          borderRadius: 'var(--radius-sm)',
          padding: '11px 13px',
          outline: 'none',
          boxShadow: focus ? '0 0 0 3px rgba(154,82,54,0.16)' : 'none',
          transition: 'border-color 120ms ease, box-shadow 120ms ease',
          opacity: disabled ? 0.6 : 1,
        }}
        {...rest}
      />
      {hint && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--dylo-concrete)', letterSpacing: '0.02em' }}>{hint}</span>
      )}
    </div>
  );
}
