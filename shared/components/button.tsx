'use client';

import { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';
import { StyledElement } from '../types';

type Props = StyledElement &
  PropsWithChildren<{
    onClick: () => void;
    disabled?: boolean;
  }>;

const Button = ({ children, disabled, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={cn('cursor-pointer', className)}
    >
      {children}
    </button>
  );
};

export { Button, type Props };
