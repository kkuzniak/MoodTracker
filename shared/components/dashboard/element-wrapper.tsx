import { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  className?: string;
};

const ElementWrapper = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        'flex rounded-2xl bg-neutral-0 p-8 ring ring-blue-100',
        className,
      )}
    >
      {children}
    </div>
  );
};

export { ElementWrapper };
