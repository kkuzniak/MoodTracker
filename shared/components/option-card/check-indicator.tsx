import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { CheckIcon } from '@/shared/components/icons/check-icon';

const CheckIndicator = () => {
  return (
    <div className="size-4 shrink-0 rounded-sm bg-neutral-0 flex items-center justify-center border-[1.5px] border-blue-200">
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon className="w-2.25 h-auto" />
      </CheckboxPrimitive.Indicator>
    </div>
  );
};

export { CheckIndicator };
