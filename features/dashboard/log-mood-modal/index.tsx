'use client';

import { Dialog as DialogPrimitive } from 'radix-ui';
import { useState } from 'react';
import { BlueButton } from '@/shared/components/blue-button';
import { CloseIcon } from '@/shared/components/icons/close-icon';
import { cn } from '@/utils/cn';
import { Content } from './content';
import { ProgressBar } from './progres-bar';

const LogMoodModal = () => {
  const [step, setStep] = useState(1);

  return (
    <div
      className={cn(
        'fixed z-100 w-[calc(100vw-2.5rem)] outline-none left-1/2 top-17.5 -translate-x-1/2 flex flex-col gap-6 bg-[linear-gradient(to_bottom,#FAFAFF_73%,#E0E0FF_100%)] px-5 py-8 rounded-2xl text-neutral-900',
        'md:w-150 md:top-20 md:px-10 md:py-12 md:gap-8',
      )}
    >
      <DialogPrimitive.Close asChild>
        <div className="absolute top-3.75 right-3.75 size-7 flex items-center justify-center cursor-pointer">
          <CloseIcon className="size-1/2" />
        </div>
      </DialogPrimitive.Close>
      <h1 className="text-preset-2-mobile md:text-preset-2">Log your mood</h1>
      <ProgressBar progress={step} total={4} />
      <Content step={step} />
      <BlueButton className="text-preset-4" onClick={() => setStep(step + 1)}>
        Continue
      </BlueButton>
    </div>
  );
};

export { LogMoodModal };
