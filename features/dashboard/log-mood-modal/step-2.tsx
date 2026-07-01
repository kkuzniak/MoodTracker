import { ReflectionOptionCard } from './inputs/reflection-option-card';

const Step2 = () => {
  return (
    <>
      <header>
        <h2 className="text-preset-3-mobile mb-1.5 md:text-preset-3">
          How did you feel?
        </h2>
        <p className="text-preset-6 text-neutral-600">
          Select up to three tags:
        </p>
      </header>
      <div className="w-[98%] flex flex-wrap gap-x-4 gap-y-3">
        <ReflectionOptionCard reflection="joyful" />
        <ReflectionOptionCard reflection="down" />
        <ReflectionOptionCard reflection="anxious" />
        <ReflectionOptionCard reflection="calm" />
        <ReflectionOptionCard reflection="excited" />
        <ReflectionOptionCard reflection="frustrated" />
        <ReflectionOptionCard reflection="lonely" />
        <ReflectionOptionCard reflection="grateful" />
        <ReflectionOptionCard reflection="overwhelmed" />
        <ReflectionOptionCard reflection="motivated" />
        <ReflectionOptionCard reflection="irritable" />
        <ReflectionOptionCard reflection="peaceful" />
        <ReflectionOptionCard reflection="tired" />
        <ReflectionOptionCard reflection="hopeful" />
        <ReflectionOptionCard reflection="confident" />
        <ReflectionOptionCard reflection="stressed" />
        <ReflectionOptionCard reflection="content" />
        <ReflectionOptionCard reflection="disappointed" />
        <ReflectionOptionCard reflection="optimistic" />
        <ReflectionOptionCard reflection="restless" />
      </div>
    </>
  );
};

export { Step2 };
