import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import { StarsIcon } from '@/shared/components/icons/stars-icon';
import type { ReflectionTag } from './types';

type Props = {
  reflection: string;
  tags: ReflectionTag[];
};

const ReflectionOfTheDay = ({ reflection, tags }: Props) => {
  return (
    <ElementWrapper className="h-49.25 p-5 flex-col">
      <header className="flex flex-row items-center gap-x-3 mb-4">
        <StarsIcon />
        <p className="text-preset-6 text-neutral-600">Reflection of the day</p>
      </header>
      <p className="text-preset-6 text-neutral-900">{reflection}</p>
      <p className="flex flex-row gap-x-3 text-preset-6-italic italic text-neutral-600 mt-auto">
        {tags.map((tag: ReflectionTag) => (
          <span key={tag} className="capitalize">
            #{tag}
          </span>
        ))}
      </p>
    </ElementWrapper>
  );
};

export { ReflectionOfTheDay };
