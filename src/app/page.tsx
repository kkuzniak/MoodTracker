import { AverageMoodAndSleep } from '@/features/dashboard/average-mood-and-sleep';
import { FeelingStatus } from '@/features/dashboard/feeling-status';
import { MoodAndSleepTrends } from '@/features/dashboard/mood-and-sleep-trends';
import { ReflectionOfTheDay } from '@/features/dashboard/reflection-of-the-day';
import { SleepAmount } from '@/features/dashboard/sleep-amount';
import { Navbar } from '@/shared/components/layout/navbar';

export default function Home() {
  return (
    <div className="size-full max-w-292.5 mx-auto">
      <Navbar />
      <main className="w-full flex flex-col items-center mt-12 lg:mt-16">
        <header className="flex flex-col items-center mb-12 lg:mb-16">
          <h2 className="text-preset-3-mobile mb-4 text-blue-600 md:text-preset-3 md:mb-2.5">
            Hello, Lisa!
          </h2>
          <p className="text-preset-1-mobile md:text-preset-1 mb-4 text-neutral-900 text-center md:mb-2.5">
            How are you feeling today?
          </p>
          <p className="text-preset-6 text-neutral-600">
            Wednesday, April 16th, 2025
          </p>
        </header>
        <div className="w-full flex flex-col gap-5 mb-8 lg:flex-row lg:gap-8 lg:justify-between">
          <FeelingStatus type="very-happy" />
          <div className="flex flex-col gap-y-5 w-full">
            <SleepAmount />
            <ReflectionOfTheDay />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 mb-10 lg:flex-row lg:gap-8 lg:justify-between">
          <AverageMoodAndSleep />
          {/* <MoodAndSleepTrends /> */}
        </div>
      </main>
    </div>
  );
}
