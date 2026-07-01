import { Checkbox as CheckboxPrimitive } from 'radix-ui';

const RadioIndicator = () => {
  return (
    <div className="size-5 shrink-0 rounded-full bg-neutral-0 flex items-center justify-center border-2 border-blue-200">
      <CheckboxPrimitive.Indicator className="size-2.5 bg-neutral-0 rounded-full" />
    </div>
  );
};

export { RadioIndicator };
