import { ZzzIcon } from '@/shared/components/icons/zzz-icon';
import { cn } from '@/utils/cn';
import type { Nullable, SleepAmount, Trend } from '../types';
import { PatternWrapper } from './pattern-wrapper';
import { TrendIndicator } from './trend-indicator';

type Props = {
  amount: Nullable<SleepAmount>;
  trend: Nullable<Trend>;
};

const AverageSleep = ({ amount, trend }: Props) => {
  const title = amount ? `${amount} Hours` : 'Not enough data yet!';

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
      <PatternWrapper
        className={cn({
          'bg-blue-600 text-neutral-0': amount,
          'bg-blue-100 text-neutral-900': !amount,
        })}
      >
        <header className="flex flex-row items-center gap-x-4 mb-3">
          {amount ? <ZzzIcon className="opacity-70 size-5.5" /> : null}
          <p className="text-preset-4">{title}</p>
        </header>
        <TrendIndicator
          trend={trend}
          emptyText="Track 5 nights to view average sleep."
        />
      </PatternWrapper>
    </div>
  );
};

export { AverageSleep };
