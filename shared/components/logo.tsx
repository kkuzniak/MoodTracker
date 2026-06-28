import { LogoIcon } from '@/shared/components/icons/logo-icon';
import type { StyledElement } from '@/shared/types';
import { cn } from '@/utils/cn';

const Logo = ({ className }: StyledElement) => {
  return (
    <div className={cn('flex items-center gap-x-4', className)}>
      <LogoIcon />
      <p className="text-logo">Mood Tracker</p>
    </div>
  );
};

export { Logo };
