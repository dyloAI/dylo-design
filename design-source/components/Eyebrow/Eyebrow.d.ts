import * as React from 'react';

/**
 * The mono section label with an oxide tick — sits above almost every headline.
 * The single most recognizable dylo device.
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "dark" for light surfaces (default), "light" for ink surfaces. */
  tone?: 'dark' | 'light';
  /** Show the leading oxide square. Default true. */
  tick?: boolean;
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
