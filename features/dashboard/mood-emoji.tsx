import { StyledElement } from '@/shared/types';
import { EMOJI_BY_MOOD } from './constants';
import type { Mood } from './types';

type Props = StyledElement & {
  mood: Mood;
};

const MoodEmoji = ({ mood, className }: Props) => {
  const EmojiComponent = EMOJI_BY_MOOD[mood];

  return <EmojiComponent className={className} />;
};

export { MoodEmoji };
