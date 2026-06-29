import { ZzzIcon } from '@/shared/components/icons/zzz-icon';
import type { SleepAmount, Trend } from '../types';
import { PatternWrapper } from './pattern-wrapper';
import { TrendIndicator } from './trend-indicator';

type Props = {
  amount: SleepAmount;
  trend: Trend;
};

const AverageSleep = ({ amount, trend }: Props) => {
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
      <PatternWrapper className=" bg-blue-600 text-neutral-0">
        <header className="flex flex-row items-center gap-x-4 mb-3">
          <ZzzIcon className="opacity-70 size-5.5" />
          <p className="text-preset-4">{amount} Hours</p>
        </header>
        <TrendIndicator trend={trend} />
      </PatternWrapper>
    </div>
  );
};

export { AverageSleep };
