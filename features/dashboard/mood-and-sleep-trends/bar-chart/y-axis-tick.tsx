import { ZzzIcon } from '@/shared/components/icons/zzz-icon';
import type { TickProps } from './types';

const SLEEP_LABEL: Record<number, string> = {
  1: '0-2 hours',
  2: '3-4 hours',
  3: '5-6 hours',
  4: '7-8 hours',
  5: '9+ hours',
};

export const Y_AXIS_WIDTH = 68;
const TICK_HEIGHT = 13;

const YAxisTick = ({ x = 0, y = 0, payload }: TickProps) => {
  const value = payload?.value ?? 0;
  const label = SLEEP_LABEL[value];

  if (!label) {
    return null;
  }

  const adjustedY = value === 5 ? -(TICK_HEIGHT / 2) : y - TICK_HEIGHT / 2;

  return (
    <foreignObject
      x={x - Y_AXIS_WIDTH}
      y={adjustedY}
      width={Y_AXIS_WIDTH}
      height={TICK_HEIGHT}
    >
      <div className="flex items-center gap-1.5 h-full text-neutral-600">
        <ZzzIcon className="size-2.5 shrink-0" />
        <span className="text-preset-9 text-neutral-600 text-nowrap">
          {label}
        </span>
      </div>
    </foreignObject>
  );
};

export { YAxisTick };
