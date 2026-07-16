import type { Mood, ReflectionTag } from '@/features/dashboard/types';

export type TickProps = {
  x?: number;
  y?: number;
  payload?: { value: string | number };
};

export type DataPoint = {
  date: number;
  value: number;
  mood: Mood | null;
  reflection: string | null;
  tags: ReflectionTag[] | null;
};
