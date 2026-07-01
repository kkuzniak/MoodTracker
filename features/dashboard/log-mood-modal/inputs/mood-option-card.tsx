import { OptionCard } from '@/shared/components/option-card';
import { MoodShape } from '../../mood-shape';
import { Mood } from '../../types';

type Props = {
  title: string;
  mood: Mood;
};

const MoodOptionCard = ({ title, mood }: Props) => {
  return (
    <OptionCard type="radio">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-preset-5 text-neutral-900">{title}</h3>
        <MoodShape type={mood} className="size-9.5" />
      </div>
    </OptionCard>
  );
};

export { MoodOptionCard };
