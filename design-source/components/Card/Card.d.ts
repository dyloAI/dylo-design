import * as React from 'react';

/**
 * The signature foundry panel — ink-bordered paper (or ink) surface with a hard
 * block-shadow offset, like a stamped plate.
 *
 * @startingPoint section="Core" subtitle="Foundry panel with block shadow" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional mono eyebrow label above the title. */
  eyebrow?: React.ReactNode;
  /** Optional card title. */
  title?: React.ReactNode;
  /** "light" (paper) or "ink" (dark). Default "light". */
  tone?: 'light' | 'ink';
  /** Show the hard block-shadow. Default true. */
  elevated?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
