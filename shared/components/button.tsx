'use client';

import { PropsWithChildren } from 'react';
import { StyledElement } from '../types';

type Props = StyledElement &
  PropsWithChildren<{
    disabled?: boolean;
    onClick?: () => void;
  }>;

const Button = ({ children, disabled, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={className}
    >
      {children}
    </button>
  );
};

export { Button, type Props };
