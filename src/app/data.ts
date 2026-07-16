import { addDays, subDays } from 'date-fns';
import type { DataPoint } from '@/features/dashboard/mood-and-sleep-trends/mood-bar-chart/types';

export const HALF_MOOD_AND_SLEEP_TRENDS_DATA: DataPoint[] = [
  {
    date: new Date('2026-04-05').getTime(),
    value: 0,
    mood: null,
    reflection: null,
    tags: null,
  },
  {
    date: new Date('2026-04-06').getTime(),
    value: 0,
    mood: null,
    reflection: null,
    tags: null,
  },
  {
    date: new Date('2026-04-07').getTime(),
    value: 0,
    mood: null,
    reflection: null,
    tags: null,
  },
  {
    date: new Date('2026-04-08').getTime(),
    value: 0,
    mood: null,
    reflection: null,
    tags: null,
  },
  {
    date: new Date('2026-04-09').getTime(),
    value: 0,
    mood: null,
    reflection: null,
    tags: null,
  },
  {
    date: new Date('2026-04-10').getTime(),
    value: 0,
    mood: null,
    reflection: null,
    tags: null,
  },
  {
    date: new Date('2026-04-11').getTime(),
    value: 0,
    mood: null,
    reflection: null,
    tags: null,
  },
  {
    date: new Date('2026-04-12').getTime(),
    value: 4,
    mood: 'neutral',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-13').getTime(),
    value: 4,
    mood: 'happy',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-14').getTime(),
    value: 2,
    mood: 'very-sad',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-15').getTime(),
    value: 1,
    mood: 'very-happy',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
] as const;

export const MOOD_AND_SLEEP_TRENDS_DATA: DataPoint[] = [
  {
    date: new Date('2026-04-05').getTime(),
    value: 3,
    mood: 'sad',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-06').getTime(),
    value: 4,
    mood: 'happy',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-07').getTime(),
    value: 2,
    mood: 'very-sad',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-08').getTime(),
    value: 3,
    mood: 'neutral',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-09').getTime(),
    value: 4,
    mood: 'happy',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-10').getTime(),
    value: 5,
    mood: 'very-happy',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-11').getTime(),
    value: 2,
    mood: 'sad',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
  {
    date: new Date('2026-04-12').getTime(),
    value: 4,
    mood: 'neutral',
    reflection: 'A pretty average day, nothing major happened.',
    tags: ['calm', 'tired'],
  },
  {
    date: new Date('2026-04-13').getTime(),
    value: 4,
    mood: 'happy',
    reflection: 'Caught up with an old friend over coffee.',
    tags: ['content', 'grateful'],
  },
  {
    date: new Date('2026-04-14').getTime(),
    value: 2,
    mood: 'very-sad',
    reflection: "Rough night, couldn't stop worrying about work.",
    tags: ['anxious', 'tired'],
  },
  {
    date: new Date('2026-04-15').getTime(),
    value: 1,
    mood: 'very-happy',
    reflection: 'Slept well and woke up ready to tackle new challenges.',
    tags: ['joyful', 'excited', 'grateful'],
  },
] as const;

const getAllDates = () => {
  let day = subDays(new Date('2026-04-15T00:00:00'), 10);

  const dates = [];
  for (let i = 0; i < 11; i++) {
    dates.push(day.getTime());

    day = addDays(day, 1);
  }

  return dates;
};

const dates = getAllDates();

export const DATA_PLACEHOLDER = dates.map(date => ({
  date,
  value: 0,
  mood: null,
  reflection: null,
  tags: null,
}));
