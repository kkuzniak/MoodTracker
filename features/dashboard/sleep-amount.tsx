import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import { ZzzIcon } from '@/shared/components/icons/zzz-icon';

const SleepAmount = () => {
  return (
    <ElementWrapper className="flex items-start p-5">
      <header className="flex flex-row items-center gap-x-3 mb-4 text-neutral-600">
        <ZzzIcon />
        <p className="text-preset-6">Sleep</p>
      </header>
      <p className="text-preset-3 text-neutral-900">9+ hours</p>
    </ElementWrapper>
  );
};

export { SleepAmount };
