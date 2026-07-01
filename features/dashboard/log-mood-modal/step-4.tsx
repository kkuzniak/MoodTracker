import { SleepAmountOptionCard } from './inputs/sleep-amount-option-card';

const Step4 = () => {
  return (
    <>
      <h2 className="text-preset-3-mobile md:text-preset-3">
        How many hours did you sleep last night?
      </h2>
      <div className="w-full flex flex-col gap-3">
        <SleepAmountOptionCard sleepAmount="9+" />
        <SleepAmountOptionCard sleepAmount="7-8" />
        <SleepAmountOptionCard sleepAmount="5-6" />
        <SleepAmountOptionCard sleepAmount="3-4" />
        <SleepAmountOptionCard sleepAmount="0-2" />
      </div>
    </>
  );
};

export { Step4 };
