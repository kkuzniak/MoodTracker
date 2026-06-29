import { COLOR_BY_MOOD } from '../../constants';
import { MoodEmoji } from '../../mood-emoji';
import type { Mood } from '../../types';

const EMOJI_SIZE = 30;

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

  const fill = COLOR_BY_MOOD[mood as Mood];

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
      {mood ? (
        <foreignObject
          x={x + (width - EMOJI_SIZE) / 2}
          y={y + 5}
          width={EMOJI_SIZE}
          height={EMOJI_SIZE}
        >
          <MoodEmoji mood={mood as Mood} className="size-full" />
        </foreignObject>
      ) : null}
    </g>
  );
};

export { CustomBar };
