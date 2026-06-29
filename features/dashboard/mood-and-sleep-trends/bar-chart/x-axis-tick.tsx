import type { TickProps } from './types';

const TICK_WIDTH = 40;
const X_AXIS_HEIGHT = 32;

const XAxisTick = ({ x = 0, y = 0, payload }: TickProps) => {
  const date = new Date(payload?.value ?? 0);

  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = date.toLocaleDateString('en-US', { day: 'numeric' });

  return (
    <foreignObject
      x={x - TICK_WIDTH / 2}
      y={y}
      width={TICK_WIDTH}
      height={X_AXIS_HEIGHT}
    >
      <div className="flex flex-col items-center text-neutral-900 gap-1.5">
        <span className="text-preset-9 opacity-70">{month}</span>
        <span className="text-preset-8">{day}</span>
      </div>
    </foreignObject>
  );
};

export { XAxisTick };
