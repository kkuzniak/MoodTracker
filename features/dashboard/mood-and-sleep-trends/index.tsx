import { BarChart } from '@/features/dashboard/mood-and-sleep-trends/bar-chart';
import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';

const MoodAndSleepTrends = () => {
  return (
    <ElementWrapper className="w-full pr-6.5">
      <header className="mb-8">
        <p className="text-preset-3 text-neutral-900">Mood and Sleep Trends</p>
      </header>
      <BarChart />
    </ElementWrapper>
  );
};

export { MoodAndSleepTrends };
