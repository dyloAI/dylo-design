import * as React from 'react';

/** A small status or technical chip in mono type. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "default" (bone+ink border), "solid" (ink), "accent" (oxide), "muted". */
  variant?: 'default' | 'solid' | 'accent' | 'muted';
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
