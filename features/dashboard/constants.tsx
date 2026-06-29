import { Happy } from '@/shared/components/shapes/small-emoji-feelings/happy';
import { Neutral } from '@/shared/components/shapes/small-emoji-feelings/neutral';
import { Sad } from '@/shared/components/shapes/small-emoji-feelings/sad';
import { VeryHappy } from '@/shared/components/shapes/small-emoji-feelings/very-happy';
import { VerySad } from '@/shared/components/shapes/small-emoji-feelings/very-sad';
import { StyledElement } from '@/shared/types';
import { Mood } from './types';

export const EMOJI_BY_MOOD: Record<Mood, React.ComponentType<StyledElement>> = {
  'very-happy': VeryHappy,
  happy: Happy,
  neutral: Neutral,
  sad: Sad,
  'very-sad': VerySad,
};

export const COLOR_BY_MOOD: Record<Mood, string> = {
  'very-happy': 'var(--color-amber-300)',
  happy: 'var(--color-green-300)',
  neutral: 'var(--color-blue-300)',
  sad: 'var(--color-indigo-200)',
  'very-sad': 'var(--color-red-300)',
};

export const TITLE_BY_MOOD: Record<Mood, string> = {
  'very-happy': 'Very Happy',
  happy: 'Happy',
  neutral: 'Neutral',
  sad: 'Sad',
  'very-sad': 'Very Sad',
};
