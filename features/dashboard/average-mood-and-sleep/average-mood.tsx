import { ArrowRightIcon } from '@/shared/components/icons/arrow-right-icon';
import { VerySad } from '@/shared/components/shapes/small-emoji-feelings/very-sad';
import { PatternWrapper } from './pattern-wrapper';

const AverageMood = () => {
  return (
    <div>
      <header className="mb-3">
        <p className="text-preset-5 text-neutral-900">
          Average Mood{' '}
          <span className="text-preset-7 text-neutral-600">
            (Last 5 check-ins)
          </span>
        </p>
      </header>
      <PatternWrapper className="bg-red-300 text-neutral-900 py-10.5">
        <header className="flex flex-row items-center gap-x-4 mb-3">
          <VerySad className="size-6" />
          <p className="text-preset-4">Very Sad</p>
        </header>
        <p className="opacity-70 text-preset-7 flex flex-row gap-x-2">
          <ArrowRightIcon />
          <span>Same as the previous 5 check-ins</span>
        </p>
      </PatternWrapper>
    </div>
  );
};

export { AverageMood };
