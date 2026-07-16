import { COLOR_BY_MOOD, TITLE_BY_MOOD } from '../constants';
import { MoodEmoji } from '../mood-emoji';
import type { Mood, Nullable, Trend } from '../types';
import { PatternWrapper } from './pattern-wrapper';
import { TrendIndicator } from './trend-indicator';

type Props = {
  mood: Nullable<Mood>;
  trend: Nullable<Trend>;
};

const AverageMood = ({ mood, trend }: Props) => {
  const backgroundColor = mood ? COLOR_BY_MOOD[mood] : 'var(--color-blue-100)';
  const title = mood ? TITLE_BY_MOOD[mood] : 'Keep tracking!';

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
      <PatternWrapper className="text-neutral-900" style={{ backgroundColor }}>
        <header className="flex flex-row items-center gap-x-4 mb-3">
          {mood ? <MoodEmoji mood={mood} className="size-6" /> : null}
          <p className="text-preset-4">{title}</p>
        </header>
        <TrendIndicator
          trend={trend}
          emptyText="Log 5 check-ins to see your average mood."
        />
      </PatternWrapper>
    </div>
  );
};

export { AverageMood };
