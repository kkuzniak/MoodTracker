import { PropsWithChildren } from 'react';
import { Pattern } from '@/shared/components/shapes/pattern';
import { StyledElement } from '@/shared/types';
import { cn } from '@/utils/cn';

type Props = PropsWithChildren & StyledElement;

const PatternWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'w-full px-5 py-8 rounded-[20px] relative overflow-hidden',
        className,
      )}
    >
      {children}
      <Pattern className="h-full absolute top-0 right-0" />
    </div>
  );
};

export { PatternWrapper };
