import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  content: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
  alignOffset?: number;
};

const DropdownMenu = ({
  children,
  content,
  align = 'end',
  sideOffset = 8,
  side = 'bottom',
  alignOffset = 0,
}: Props) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {children}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          asChild
          align={align}
          sideOffset={sideOffset}
          side={side}
          alignOffset={alignOffset}
        >
          {content}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

export { DropdownMenu };
