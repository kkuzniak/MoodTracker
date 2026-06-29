import { Happy } from '@/shared/components/shapes/feelings/happy';
import { Neutral } from '@/shared/components/shapes/feelings/neutral';
import { Sad } from '@/shared/components/shapes/feelings/sad';
import { VeryHappy } from '@/shared/components/shapes/feelings/very-happy';
import { VerySad } from '@/shared/components/shapes/feelings/very-sad';
import type { StyledElement } from '@/shared/types';
import type { Mood } from '../types';

type Props = {
  type: Mood;
};

const FeelingShape = ({ type }: Props) => {
  const MOOD_SHAPE: Record<Mood, React.ComponentType<StyledElement>> = {
    'very-happy': VeryHappy,
    happy: Happy,
    neutral: Neutral,
    sad: Sad,
    'very-sad': VerySad,
  };

  const ShapeComponent = MOOD_SHAPE[type];

  return (
    <div className="flex min-w-80 w-80 h-72.5 mt-4.5 relative overflow-hidden">
      <ShapeComponent className="absolute w-full h-auto top-0 left-0" />
    </div>
  );
};

export { FeelingShape };
