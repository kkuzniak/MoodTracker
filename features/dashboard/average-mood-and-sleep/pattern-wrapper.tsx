import { PropsWithChildren } from 'react';
import { Pattern } from '@/shared/components/shapes/pattern';
import { StyledElement } from '@/shared/types';
import { cn } from '@/utils/cn';

type Props = PropsWithChildren &
  StyledElement & {
    style?: React.CSSProperties;
  };

const PatternWrapper = ({ children, className, style }: Props) => {
  return (
    <div
      className={cn(
        'h-37.5 w-full px-5 flex flex-col justify-center rounded-[20px] relative overflow-hidden',
        className,
      )}
      style={style}
    >
      {children}
      <Pattern className="h-full absolute top-0 right-0" />
    </div>
  );
};

export { PatternWrapper };
