import { Happy } from '@/shared/components/shapes/feelings/happy';
import { Neutral } from '@/shared/components/shapes/feelings/neutral';
import { Sad } from '@/shared/components/shapes/feelings/sad';
import { VeryHappy } from '@/shared/components/shapes/feelings/very-happy';
import { VerySad } from '@/shared/components/shapes/feelings/very-sad';
import type { FeelingType } from '.';

type Props = {
  type: FeelingType;
};

const FeelingShape = ({ type }: Props) => {
  const Shape = {
    'very-happy': VeryHappy,
    happy: Happy,
    neutral: Neutral,
    sad: Sad,
    'very-sad': VerySad,
  };

  const ShapeComponent = Shape[type];

  return (
    <div className="flex min-w-80 w-80 h-72.5 mt-4.5 relative overflow-hidden">
      <ShapeComponent className="absolute w-full h-auto top-0 left-0" />
    </div>
  );
};

export { FeelingShape };
