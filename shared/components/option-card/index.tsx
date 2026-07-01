'use client';

import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { PropsWithChildren } from 'react';
import { StyledElement } from '@/shared/types';
import { cn } from '@/utils/cn';
import { CheckIndicator } from './check-indicator';
import { RadioIndicator } from './radio-indicator';

type Props = PropsWithChildren &
  StyledElement & {
    contentClassName?: string;
    type?: 'checkbox' | 'radio';
  };

const OptionCard = ({
  className,
  contentClassName,
  type = 'checkbox',
  children,
}: Props) => {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'w-full flex items-center gap-3 bg-neutral-0 px-5 py-2.5 border-2 border-blue-100 rounded-[10px] cursor-pointer',
        'data-[state=checked]:border-blue-600 data-[state=checked]:[&>div:first-child]:bg-blue-600 data-[state=checked]:[&>div:first-child]:border-transparent',
        className,
      )}
    >
      {type === 'checkbox' ? <CheckIndicator /> : <RadioIndicator />}
      <div className={cn('grow', contentClassName)}>{children}</div>
    </CheckboxPrimitive.Root>
  );
};

export { OptionCard };
