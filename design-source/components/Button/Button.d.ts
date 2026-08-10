import * as React from 'react';

/**
 * Foundry-stamped action button. Ink primary with a hard block-shadow that
 * seats on press; secondary is bone + ink border; ghost is bare.
 *
 * @startingPoint section="Core" subtitle="Primary / secondary / ghost action" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. Default "primary". */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Control size. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
