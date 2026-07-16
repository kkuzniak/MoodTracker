import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import type { Average, Mood, SleepAmount } from '../types';
import { AverageMood } from './average-mood';
import { AverageSleep } from './average-sleep';

type Props = {
  mood: Average<Mood>;
  sleepAmount: Average<SleepAmount>;
};

const AverageMoodAndSleep = ({ mood, sleepAmount }: Props) => {
  return (
    <ElementWrapper className="w-full flex-col gap-6 py-5 px-4 lg:p-6 lg:w-92.5 lg:shrink-0">
      <AverageMood mood={mood.value} trend={mood.trend} />
      <AverageSleep amount={sleepAmount.value} trend={sleepAmount.trend} />
    </ElementWrapper>
  );
};

export { AverageMoodAndSleep };
