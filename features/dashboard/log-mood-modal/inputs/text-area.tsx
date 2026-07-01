import { useState } from 'react';
import { TextArea as TextAreaPrimitive } from '@/shared/components/text-area';
import { cn } from '@/utils/cn';

type Props = {
  maxLength?: number;
};

const TextArea = ({ maxLength }: Props) => {
  const [charsCount, setCharsCount] = useState(0);

  const handleChange = (value: string) => {
    setCharsCount(value.length);
  };

  return (
    <>
      <TextAreaPrimitive
        className={cn(
          'block w-full h-37.5 bg-neutral-0 border border-neutral-300 px-4 py-3 rounded-[10px] text-preset-6-regular text-neutral-900 mb-2',
          'placeholder:text-preset-6-italic placeholder:italic placeholder:text-neutral-600',
        )}
        placeholder="Today, I felt..."
        maxLength={maxLength}
        onChange={handleChange}
      />
      {maxLength ? (
        <div className="w-full flex justify-end">
          <p className="text-preset-8 text-neutral-600">
            {charsCount} / {maxLength}
          </p>
        </div>
      ) : null}
    </>
  );
};

export { TextArea };
