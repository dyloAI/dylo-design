import * as React from 'react';

/** Text field with a mono label and oxide focus ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label rendered above the field. */
  label?: React.ReactNode;
  /** Small mono helper text below the field. */
  hint?: React.ReactNode;
  disabled?: boolean;
}

export function Input(props: InputProps): JSX.Element;
