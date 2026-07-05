import { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';
import { StyledElement } from '../types';
import { Button } from './button';

type Props = StyledElement &
  PropsWithChildren<{
    onClick?: () => void;
    disabled?: boolean;
  }>;

const BlueButton = ({ onClick, disabled, children, className }: Props) => {
  const defaultClassName = cn(
    'py-4 bg-blue-600 text-preset-5 text-neutral-0 rounded-[10px] cursor-pointer text-center',
    className,
  );

  if (onClick) {
    return (
      <Button
        className={defaultClassName}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }

  return <div className={defaultClassName}>{children}</div>;
};

export { BlueButton };
