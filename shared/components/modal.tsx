'use client';

import { Dialog as DialogPrimitive } from 'radix-ui';
import { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

type Props = PropsWithChildren & {
  content: React.ReactNode;
  overlayClassName?: string;
};

const Modal = ({ children, content, overlayClassName }: Props) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        {overlayClassName ? (
          <DialogPrimitive.Overlay
            className={cn('fixed inset-0', overlayClassName)}
          />
        ) : null}
        <DialogPrimitive.Content>{content}</DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Modal };
