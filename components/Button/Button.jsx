import React from 'react';

/**
 * dylo Button — foundry-stamped action. Ink primary with a hard block-shadow
 * that "seats" on press. Secondary is bone with an ink border; ghost is bare.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const sizes = {
    sm: { padding: '7px 13px', fontSize: 13 },
    md: { padding: '11px 20px', fontSize: 15 },
    lg: { padding: '15px 28px', fontSize: 17 },
  };

  const palettes = {
    primary: {
      bg: 'var(--dylo-ink)', bgHover: 'var(--dylo-graphite)',
      fg: 'var(--dylo-bone)', border: 'var(--dylo-ink)',
    },
    secondary: {
      bg: 'var(--dylo-bone)', bgHover: 'var(--dylo-paper)',
      fg: 'var(--dylo-ink)', border: 'var(--dylo-ink)',
    },
    ghost: {
      bg: 'transparent', bgHover: 'rgba(27,23,20,0.06)',
      fg: 'var(--dylo-ink)', border: 'transparent',
    },
  };
  const p = palettes[variant] || palettes.primary;
  const hasShadow = variant !== 'ghost';

  const style = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    whiteSpace: 'nowrap',
    border: `1px solid ${p.border}`,
    borderRadius: 'var(--radius-sm)',
    background: disabled ? 'var(--dylo-concrete)' : (hover ? p.bgHover : p.bg),
    color: disabled ? 'var(--dylo-bone)' : p.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    boxShadow: hasShadow && !disabled ? (press ? '1px 1px 0 rgba(27,23,20,0.20)' : '4px 4px 0 rgba(27,23,20,0.18)') : 'none',
    transform: hasShadow && press && !disabled ? 'translate(3px,3px)' : 'translate(0,0)',
    transition: 'transform 120ms ease, box-shadow 120ms ease, background 120ms ease',
    ...sizes[size],
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}
