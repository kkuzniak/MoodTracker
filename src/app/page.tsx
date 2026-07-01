import { format } from 'date-fns';
import { AverageMoodAndSleep } from '@/features/dashboard/average-mood-and-sleep';
import { FeelingStatus } from '@/features/dashboard/feeling-status';
import { LogMoodButton } from '@/features/dashboard/log-mood-button';
import { MoodAndSleepTrends } from '@/features/dashboard/mood-and-sleep-trends';
import { ReflectionOfTheDay } from '@/features/dashboard/reflection-of-the-day';
import { SleepAmount } from '@/features/dashboard/sleep-amount';
import type {
  Mood,
  ReflectionTag,
  SleepAmount as SleepAmountType,
  Trend,
} from '@/features/dashboard/types';
import { Navbar } from '@/shared/components/layout/navbar';

type TodaysData = {
  mood: Mood;
  sleepAmount: SleepAmountType;
  reflection: string;
  reflectionTags: ReflectionTag[];
};

const DATA = {
  name: 'Kacper',
  // today: {
  //   mood: 'very-happy' as Mood,
  //   sleepAmount: '2-3' as SleepAmountType,
  //   reflection: 'Woke up early and finally tackled a big project!',
  //   reflectionTags: ['grateful', 'optimistic'] as ReflectionTag[],
  // },
  today: null as TodaysData | null,
  averageMood: 'very-sad' as Mood,
  averageMoodTrend: 'decrease' as Trend,
  averageSleepAmount: '3-4' as SleepAmountType,
  averageSleepTrend: 'decrease' as Trend,
} as const;

export default function Home() {
  const today = new Date();
  const todayText = format(today, 'EEEE, MMMM do, yyyy');

  return (
    <div className="size-full mx-auto max-w-292.5">
      <div className="w-full px-4 md:px-8 lg:px-0">
        <Navbar />
        <main className="w-full flex flex-col items-center mt-12 lg:mt-16">
          <header className="flex flex-col items-center mb-12 lg:mb-16">
            <h2 className="text-preset-3-mobile mb-4 text-blue-600 md:text-preset-3 md:mb-2.5">
              Hello, {DATA.name}!
            </h2>
            <p className="text-preset-1-mobile md:text-preset-1 mb-4 text-neutral-900 text-center md:mb-2.5">
              How are you feeling today?
            </p>
            <p className="text-preset-6 text-neutral-600">{todayText}</p>
          </header>
          {DATA.today !== null ? (
            <div className="w-full flex flex-col gap-5 mb-8 lg:flex-row lg:gap-8 lg:justify-between">
              <FeelingStatus type={DATA.today.mood} />
              <div className="flex flex-col gap-y-5 w-full">
                <SleepAmount amount={DATA.today.sleepAmount} />
                <ReflectionOfTheDay
                  reflection={DATA.today.reflection}
                  tags={DATA.today.reflectionTags}
                />
              </div>
            </div>
          ) : (
            <LogMoodButton />
          )}
          <div className="w-full flex flex-col gap-8 mb-10 lg:flex-row lg:justify-between">
            <AverageMoodAndSleep
              mood={DATA.averageMood}
              moodTrend={DATA.averageMoodTrend}
              sleepAmount={DATA.averageSleepAmount}
              sleepTrend={DATA.averageSleepTrend}
            />
            <MoodAndSleepTrends />
          </div>
        </main>
      </div>
    </div>
  );
}
