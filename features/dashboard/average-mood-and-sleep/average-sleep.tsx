import { ArrowRightUpIcon } from '@/shared/components/icons/arrow-right-up-icon';
import { ZzzIcon } from '@/shared/components/icons/zzz-icon';
import { PatternWrapper } from './pattern-wrapper';

const time = '5-6';

const AverageSleep = () => {
  return (
    <div>
      <header className="mb-3">
        <p className="text-preset-5 text-neutral-900">
          Average Sleep{' '}
          <span className="text-preset-7 text-neutral-600">
            (Last 5 check-ins)
          </span>
        </p>
      </header>
      <PatternWrapper className="bg-blue-600 text-neutral-0">
        <header className="flex flex-row items-center gap-x-4 mb-3">
          <ZzzIcon className="opacity-70 size-5.5" />
          <p className="text-preset-4">{time} Hours</p>
        </header>
        <p className="max-w-55.5 opacity-70 text-neutral-0 text-preset-7 flex flex-row gap-x-2">
          <ArrowRightUpIcon />
          <span>Decrease from the previous 5 check-ins</span>
        </p>
      </PatternWrapper>
    </div>
  );
};

export { AverageSleep };
