import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import type { Mood, SleepAmount, Trend } from '../types';
import { AverageMood } from './average-mood';
import { AverageSleep } from './average-sleep';

type Props = {
  mood: Mood;
  moodTrend: Trend;
  sleepAmount: SleepAmount;
  sleepTrend: Trend;
};

const AverageMoodAndSleep = ({
  mood,
  moodTrend,
  sleepAmount,
  sleepTrend,
}: Props) => {
  return (
    <ElementWrapper className="w-full flex-col gap-6 py-5 px-4 lg:p-6 lg:w-92.5 lg:shrink-0">
      <AverageMood mood={mood} trend={moodTrend} />
      <AverageSleep amount={sleepAmount} trend={sleepTrend} />
    </ElementWrapper>
  );
};

export { AverageMoodAndSleep };
