import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import {
  Button as ButtonPrimitive,
  type Props as ButtonProps,
} from '@/shared/components/button';
import { cn } from '@/utils/cn';

type Props = Omit<ButtonProps, 'children'> & {
  icon: React.ReactNode;
  title: string;
};

const Button = ({ icon, title, onClick, className, disabled }: Props) => {
  return (
    <DropdownMenuPrimitive.Item asChild>
      <ButtonPrimitive
        className={cn(
          'flex items-center gap-x-2.5 text-preset-7 text-neutral-900',
          className,
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
        <span>{title}</span>
      </ButtonPrimitive>
    </DropdownMenuPrimitive.Item>
  );
};

export { Button };
