import { COLOR_BY_MOOD, TITLE_BY_MOOD } from '../constants';
import { MoodEmoji } from '../mood-emoji';
import type { Mood, Trend } from '../types';
import { PatternWrapper } from './pattern-wrapper';
import { TrendIndicator } from './trend-indicator';

type Props = {
  mood: Mood;
  trend: Trend;
};

const AverageMood = ({ mood, trend }: Props) => {
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
      <PatternWrapper
        className="text-neutral-900"
        style={{ backgroundColor: COLOR_BY_MOOD[mood] }}
      >
        <header className="flex flex-row items-center gap-x-4 mb-3">
          <MoodEmoji mood={mood} className="size-6" />
          <p className="text-preset-4">{TITLE_BY_MOOD[mood]}</p>
        </header>
        <TrendIndicator trend={trend} />
      </PatternWrapper>
    </div>
  );
};

export { AverageMood };
