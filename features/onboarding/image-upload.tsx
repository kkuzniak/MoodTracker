'use client';

import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';
import { Button } from '@/shared/components/button';
import { AvatarPlaceholder } from '@/shared/components/shapes/avatar-placeholder';
import { StyledElement } from '@/shared/types';
import { cn } from '@/utils/cn';

const ImageUpload = ({ className }: StyledElement) => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className={cn('flex gap-5', className)}>
      <div className="size-16 rounded-full overflow-hidden shrink-0">
        {preview ? (
          <Image
            src={preview}
            alt="Avatar preview"
            className="size-full object-cover"
          />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>
      <div>
        <p className="text-preset-6-regular text-neutral-900 mb-1.5">
          Upload Image
        </p>
        <p className="text-preset-7 text-neutral-600 mb-4">
          Max 250KB, PNG or JPEG
        </p>
        <Button
          onClick={() => inputRef.current?.click()}
          className="text-preset-6 text-neutral-900 rounded-lg border border-neutral-300 px-4 py-1.75"
        >
          Upload
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export { ImageUpload };
