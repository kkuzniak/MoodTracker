import { MoodOptionCard } from './inputs/mood-option-card';

const Step1 = () => {
  return (
    <>
      <h2 className="text-preset-3-mobile md:text-preset-3">
        How was your mood today?
      </h2>
      <div className="w-full flex flex-col gap-3">
        <MoodOptionCard title="Very Happy" mood="very-happy" />
        <MoodOptionCard title="Happy" mood="happy" />
        <MoodOptionCard title="Neutral" mood="neutral" />
        <MoodOptionCard title="Sad" mood="sad" />
        <MoodOptionCard title="Very Sad" mood="very-sad" />
      </div>
    </>
  );
};

export { Step1 };
