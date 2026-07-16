import type { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';
import { Title } from './title';

type Props = PropsWithChildren<{
  title: string;
  isLoading?: boolean;
  contentClassName?: string;
}>;

const Section = ({ title, children, contentClassName, isLoading }: Props) => {
  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Title text={title} />
      <p className={cn('text-preset-9 text-neutral-900', contentClassName)}>
        {children}
      </p>
    </div>
  );
};

export { Section };
