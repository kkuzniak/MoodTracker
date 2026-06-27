import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMergeConfig = {
  extend: {
    theme: {
      text: [
        (str: string) =>
          // Regex containing all theme's custom text classes to be merged with the default text classes
          /preset-1-mobile|preset-2-mobile|preset-3-mobile|preset-4-regular|preset-6-italic|preset-6-regular|preset-[1-9]/.test(
            str,
          ),
      ],
      color: [
        (str: string) =>
          // Regex containing all theme's custom color classes to be merged with the default color classes
          /neutral-0|neutral-200|neutral-300|neutral-600|neutral-900|blue-100|blue-200|blue-300|blue-600|blue-700|red-300|red-700|indigo-200|green-300|amber-300/.test(
            str,
          ),
      ],
    },
  },
};

const twMerge = extendTailwindMerge(twMergeConfig);

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn, twMergeConfig };
