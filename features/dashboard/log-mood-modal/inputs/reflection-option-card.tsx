import { OptionCard } from '@/shared/components/option-card';
import { ReflectionTag } from '../../types';

type Props = {
  reflection: ReflectionTag;
};

const ReflectionOptionCard = ({ reflection }: Props) => {
  return (
    <OptionCard className="flex-1 grow-0 gap-2 px-3.25">
      <div className="flex items-center justify-between">
        <h3 className="text-preset-6-regular text-neutral-900 capitalize">
          {reflection}
        </h3>
      </div>
    </OptionCard>
  );
};

export { ReflectionOptionCard };
