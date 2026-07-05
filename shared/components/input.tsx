'use client';

import { ChangeEvent, useState } from 'react';
import { cn } from '@/utils/cn';
import { StyledElement } from '../types';

type Props = StyledElement & {
  id: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
};

const Input = ({ id, label, placeholder, type = 'text', className }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block mb-2 text-preset-6-regular text-neutral-900"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'w-full h-12.25 bg-neutral-0 rounded-[10px] px-4 border border-neutral-300 text-preset-6-regular text-neutral-600',
          'focus-visible:outline-none focus-visible:border-2 focus-visible:border-blue-600',
        )}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export { Input };
