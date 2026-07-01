'use client';

import { ChangeEvent, useState } from 'react';
import { StyledElement } from '../types';

type Props = StyledElement & {
  placeholder?: string;
  resize?: 'none' | 'vertical' | 'horizontal';
  maxLength?: number;
  onChange?: (value: string) => void;
};

const TextArea = ({
  className,
  placeholder,
  resize = 'none',
  maxLength,
  onChange,
}: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }

    setValue(event.target.value);
  };

  return (
    <textarea
      className={className}
      placeholder={placeholder}
      style={{ resize }}
      value={value}
      onChange={handleChange}
      maxLength={maxLength}
    />
  );
};

export { type Props, TextArea };
