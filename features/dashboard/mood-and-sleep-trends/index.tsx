import { MoodBarChart } from '@/features/dashboard/mood-and-sleep-trends/mood-bar-chart';
import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import { MOOD_AND_SLEEP_TRENDS_DATA } from '@/src/app/data';

const MoodAndSleepTrends = () => {
  const data = MOOD_AND_SLEEP_TRENDS_DATA;

  return (
    <ElementWrapper className="w-full pr-6.5 flex-col px-4 py-5 md:px-6 md:py-6 lg:py-8 lg:pl-8 lg:pr-6.5">
      <header className="mb-8">
        <p className="text-preset-3-mobile text-neutral-900 md:text-preset-3">
          Mood and Sleep Trends
        </p>
      </header>
      <MoodBarChart data={data} />
    </ElementWrapper>
  );
};

export { MoodAndSleepTrends };
