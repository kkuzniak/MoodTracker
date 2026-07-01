import { Happy } from '@/shared/components/shapes/feelings/happy';
import { Neutral } from '@/shared/components/shapes/feelings/neutral';
import { Sad } from '@/shared/components/shapes/feelings/sad';
import { VeryHappy } from '@/shared/components/shapes/feelings/very-happy';
import { VerySad } from '@/shared/components/shapes/feelings/very-sad';
import { StyledElement } from '@/shared/types';
import type { Mood } from './types';

const MOOD_SHAPE: Record<Mood, React.ComponentType<StyledElement>> = {
  'very-happy': VeryHappy,
  happy: Happy,
  neutral: Neutral,
  sad: Sad,
  'very-sad': VerySad,
};

type Props = StyledElement & {
  type: Mood;
};

const MoodShape = ({ type, className }: Props) => {
  const ShapeComponent = MOOD_SHAPE[type];

  return <ShapeComponent className={className} />;
};

export { MoodShape };
