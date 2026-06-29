import { Happy } from '@/shared/components/shapes/small-emoji-feelings/happy';
import { Neutral } from '@/shared/components/shapes/small-emoji-feelings/neutral';
import { Sad } from '@/shared/components/shapes/small-emoji-feelings/sad';
import { VeryHappy } from '@/shared/components/shapes/small-emoji-feelings/very-happy';
import { VerySad } from '@/shared/components/shapes/small-emoji-feelings/very-sad';
import { StyledElement } from '@/shared/types';
import { Mood } from '../../types';

const EMOJI_SIZE = 30;

const MOOD_COLOR: Record<Mood, string> = {
  'very-sad': 'var(--color-red-300)',
  sad: 'var(--color-indigo-200)',
  neutral: 'var(--color-blue-300)',
  happy: 'var(--color-green-300)',
  'very-happy': 'var(--color-amber-300)',
};

const MOOD_EMOJI: Record<Mood, React.ComponentType<StyledElement>> = {
  'very-sad': VerySad,
  sad: Sad,
  neutral: Neutral,
  happy: Happy,
  'very-happy': VeryHappy,
};

type Props = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  mood?: string;
};

const CustomBar = ({ x = 0, y = 0, width = 0, height = 0, mood }: Props) => {
  if (height <= 0) {
    return null;
  }

  const fill = MOOD_COLOR[mood as Mood];
  const EmojiComponent = mood ? MOOD_EMOJI[mood as Mood] : null;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={width / 2}
        fill={fill}
      />
      {EmojiComponent ? (
        <foreignObject
          x={x + (width - EMOJI_SIZE) / 2}
          y={y + 5}
          width={EMOJI_SIZE}
          height={EMOJI_SIZE}
        >
          <EmojiComponent className="size-full" />
        </foreignObject>
      ) : null}
    </g>
  );
};

export { CustomBar };
