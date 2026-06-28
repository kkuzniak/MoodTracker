import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import { StarsIcon } from '@/shared/components/icons/stars-icon';

const ReflectionOfTheDay = () => {
  return (
    <ElementWrapper className="h-49.25 p-5">
      <header className="flex flex-row items-center gap-x-3 mb-4">
        <StarsIcon />
        <p className="text-preset-6 text-neutral-600">Reflection of the day</p>
      </header>
      <p className="text-preset-6 text-neutral-900">
        Woke up early and finally tackled a big project!
      </p>
      <p className="flex flex-row gap-x-3 text-preset-6-italic italic text-neutral-600 mt-auto">
        <span>#Grateful</span>
        <span>#Optimistic</span>
      </p>
    </ElementWrapper>
  );
};

export { ReflectionOfTheDay };
